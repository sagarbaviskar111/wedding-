const express = require('express');
const router = express.Router();
const {
    register,
    login,
    googleAuth,
    sendEmailOTP,
    verifyEmailOTP,
    sendPhoneOTP,
    verifyPhoneOTP,
    forgotPassword,
    resetPassword,
    getMe
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleAuth);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

// Protected routes
router.get('/me', protect, getMe);
router.post('/send-email-otp', protect, sendEmailOTP);
router.post('/verify-email-otp', protect, verifyEmailOTP);
router.post('/send-phone-otp', protect, sendPhoneOTP);
router.post('/verify-phone-otp', protect, verifyPhoneOTP);

module.exports = router;
