const twilio = require('twilio');

// Initialize Twilio client
const getTwilioClient = () => {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
        console.warn('Twilio credentials not configured. SMS functionality will be disabled.');
        return null;
    }
    return twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
};

// Send OTP via SMS
exports.sendOTPSMS = async (phone, otp) => {
    try {
        const client = getTwilioClient();

        if (!client) {
            console.log('SMS service not configured. OTP:', otp);
            return { success: true, message: 'SMS service not configured (development mode)' };
        }

        const message = await client.messages.create({
            body: `Your Wedding Invitations verification code is: ${otp}. Valid for 10 minutes.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone
        });

        return { success: true, messageSid: message.sid };
    } catch (error) {
        console.error('SMS sending error:', error);
        // In development, log the OTP instead of failing
        if (process.env.NODE_ENV === 'development') {
            console.log('Development mode - OTP for', phone, ':', otp);
            return { success: true, message: 'Development mode - check console for OTP' };
        }
        return { success: false, error: error.message };
    }
};
