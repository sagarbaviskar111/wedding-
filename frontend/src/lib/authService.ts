import api from './api';

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    phone?: string;
    avatar?: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
}

export interface AuthResponse {
    success: boolean;
    token?: string;
    user?: User;
    message?: string;
}

// Register with email/password
export const register = async (name: string, email: string, password: string, phone?: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', { name, email, password, phone });
    return response.data;
};

// Login with email/password
export const login = async (email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
};

// Google OAuth
export const googleAuth = async (googleId: string, email: string, name: string, avatar: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/google', { googleId, email, name, avatar });
    return response.data;
};

// Send email OTP
export const sendEmailOTP = async (): Promise<AuthResponse> => {
    const response = await api.post('/auth/send-email-otp');
    return response.data;
};

// Verify email OTP
export const verifyEmailOTP = async (otp: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/verify-email-otp', { otp });
    return response.data;
};

// Send phone OTP
export const sendPhoneOTP = async (phone: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/send-phone-otp', { phone });
    return response.data;
};

// Verify phone OTP
export const verifyPhoneOTP = async (otp: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/verify-phone-otp', { otp });
    return response.data;
};

// Forgot password
export const forgotPassword = async (email: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
};

// Reset password
export const resetPassword = async (token: string, password: string): Promise<AuthResponse> => {
    const response = await api.post(`/auth/reset-password/${token}`, { password });
    return response.data;
};

// Get current user
export const getMe = async (): Promise<AuthResponse> => {
    const response = await api.get('/auth/me');
    return response.data;
};
