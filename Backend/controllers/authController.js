const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const { sendOTPEmail, sendPasswordResetEmail } = require('../utils/emailService');
const { sendOTPSMS } = require('../utils/smsService');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// @desc    Register user with email/password
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email'
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
            phone,
            authProvider: 'local'
        });

        // Generate and send email OTP (use dummy OTP in development)
        const emailOtp = process.env.NODE_ENV === 'development' ? '123456' : user.generateOTP();
        user.emailOtp = emailOtp;
        user.emailOtpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();

        // Send OTP email (skip in development if email not configured)
        if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
            await sendOTPEmail(email, emailOtp, name);
        } else {
            console.log(`[DEV] Email OTP for ${email}: ${emailOtp}`);
        }

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'Registration successful. Please verify your email.',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isEmailVerified: user.isEmailVerified,
                isPhoneVerified: user.isPhoneVerified
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Send email OTP
// @route   POST /api/auth/send-email-otp
// @access  Private
exports.sendEmailOTP = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if (user.isEmailVerified) {
            return res.status(400).json({
                success: false,
                message: 'Email already verified'
            });
        }

        // Generate OTP (use dummy OTP in development)
        const otp = process.env.NODE_ENV === 'development' ? '123456' : user.generateOTP();
        user.emailOtp = otp;
        user.emailOtpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();

        // Send OTP email (skip in development if email not configured)
        if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
            await sendOTPEmail(user.email, otp, user.name);
        } else {
            console.log(`[DEV] Email OTP for ${user.email}: ${otp}`);
        }

        res.status(200).json({
            success: true,
            message: 'OTP sent to your email'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Verify email OTP
// @route   POST /api/auth/verify-email-otp
// @access  Private
exports.verifyEmailOTP = async (req, res) => {
    try {
        const { otp } = req.body;

        const user = await User.findById(req.user.id).select('+emailOtp +emailOtpExpiry');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if (user.isEmailVerified) {
            return res.status(400).json({
                success: false,
                message: 'Email already verified'
            });
        }

        // Check if OTP is valid
        if (!user.emailOtp || user.emailOtp !== otp) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            });
        }

        // Check if OTP is expired
        if (user.emailOtpExpiry < Date.now()) {
            return res.status(400).json({
                success: false,
                message: 'OTP has expired. Please request a new one.'
            });
        }

        // Verify email
        user.isEmailVerified = true;
        user.emailOtp = undefined;
        user.emailOtpExpiry = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Email verified successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isEmailVerified: user.isEmailVerified,
                isPhoneVerified: user.isPhoneVerified
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Send phone OTP
// @route   POST /api/auth/send-phone-otp
// @access  Private
exports.sendPhoneOTP = async (req, res) => {
    try {
        const { phone } = req.body;

        if (!phone) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a phone number'
            });
        }

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Update phone number
        user.phone = phone;

        // Generate OTP (use dummy OTP in development)
        const otp = process.env.NODE_ENV === 'development' ? '123456' : user.generateOTP();
        user.phoneOtp = otp;
        user.phoneOtpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();

        // Log OTP in development
        if (process.env.NODE_ENV === 'development') {
            console.log(`[DEV] Phone OTP for ${phone}: ${otp}`);
        }

        // Send OTP SMS
        const result = await sendOTPSMS(phone, otp);

        if (!result.success) {
            return res.status(500).json({
                success: false,
                message: 'Failed to send OTP. Please try again.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'OTP sent to your phone'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Verify phone OTP
// @route   POST /api/auth/verify-phone-otp
// @access  Private
exports.verifyPhoneOTP = async (req, res) => {
    try {
        const { otp } = req.body;

        const user = await User.findById(req.user.id).select('+phoneOtp +phoneOtpExpiry');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if (user.isPhoneVerified) {
            return res.status(400).json({
                success: false,
                message: 'Phone already verified'
            });
        }

        // Check if OTP is valid
        if (!user.phoneOtp || user.phoneOtp !== otp) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            });
        }

        // Check if OTP is expired
        if (user.phoneOtpExpiry < Date.now()) {
            return res.status(400).json({
                success: false,
                message: 'OTP has expired. Please request a new one.'
            });
        }

        // Verify phone
        user.isPhoneVerified = true;
        user.phoneOtp = undefined;
        user.phoneOtpExpiry = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Phone verified successfully',
            user: {
                id: user._id,
                name: user.name,
                phone: user.phone,
                isEmailVerified: user.isEmailVerified,
                isPhoneVerified: user.isPhoneVerified
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email & password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password'
            });
        }

        // Check for user
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check if user registered with Google
        if (user.authProvider === 'google') {
            return res.status(401).json({
                success: false,
                message: 'Please login with Google'
            });
        }

        // Check if user is active
        if (!user.isActive) {
            return res.status(401).json({
                success: false,
                message: 'Your account has been deactivated'
            });
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                avatar: user.avatar,
                isEmailVerified: user.isEmailVerified,
                isPhoneVerified: user.isPhoneVerified
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Google OAuth callback
// @route   POST /api/auth/google
// @access  Public
exports.googleAuth = async (req, res) => {
    try {
        const { googleId, email, name, avatar } = req.body;

        if (!googleId || !email) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Google authentication data'
            });
        }

        // Check if user exists with this Google ID
        let user = await User.findOne({ googleId });

        if (!user) {
            // Check if user exists with this email
            user = await User.findOne({ email });

            if (user) {
                // Link Google account to existing user
                user.googleId = googleId;
                user.avatar = avatar;
                user.authProvider = 'google';
                user.isEmailVerified = true; // Google emails are verified
                await user.save();
            } else {
                // Create new user
                user = await User.create({
                    name,
                    email,
                    googleId,
                    avatar,
                    authProvider: 'google',
                    isEmailVerified: true
                });
            }
        }

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                avatar: user.avatar,
                isEmailVerified: user.isEmailVerified,
                isPhoneVerified: user.isPhoneVerified
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
// @access  Public
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'No user found with this email'
            });
        }

        if (user.authProvider === 'google') {
            return res.status(400).json({
                success: false,
                message: 'Google users cannot reset password. Please login with Google.'
            });
        }

        // Generate reset token
        const resetToken = user.generateResetToken();
        await user.save();

        // Send reset email
        await sendPasswordResetEmail(user.email, resetToken, user.name);

        res.status(200).json({
            success: true,
            message: 'Password reset email sent'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Reset password
// @route   POST /api/auth/reset-password/:token
// @access  Public
exports.resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const resetToken = req.params.token;

        // Hash the token
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // Find user with valid token
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpiry: { $gt: Date.now() }
        }).select('+resetPasswordToken +resetPasswordExpiry');

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired reset token'
            });
        }

        // Set new password
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiry = undefined;
        await user.save();

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: 'Password reset successful',
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
