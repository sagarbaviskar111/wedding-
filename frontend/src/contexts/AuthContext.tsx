'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { User } from '@/lib/authService';
import * as authService from '@/lib/authService';
import toast from 'react-hot-toast';

interface AuthContextType {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, phone?: string) => Promise<void>;
    googleLogin: (googleId: string, email: string, name: string, avatar: string) => Promise<void>;
    logout: () => void;
    sendEmailOTP: () => Promise<void>;
    verifyEmailOTP: (otp: string) => Promise<void>;
    sendPhoneOTP: (phone: string) => Promise<void>;
    verifyPhoneOTP: (otp: string) => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    resetPassword: (token: string, password: string) => Promise<void>;
    updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for stored auth data
        const storedToken = Cookies.get('token');
        const storedUser = Cookies.get('user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await authService.login(email, password);
            if (response.success && response.token && response.user) {
                setToken(response.token);
                setUser(response.user);
                Cookies.set('token', response.token, { expires: 7 });
                Cookies.set('user', JSON.stringify(response.user), { expires: 7 });
                toast.success('Login successful!');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Login failed');
            throw error;
        }
    };

    const register = async (name: string, email: string, password: string, phone?: string) => {
        try {
            const response = await authService.register(name, email, password, phone);
            if (response.success && response.token && response.user) {
                setToken(response.token);
                setUser(response.user);
                Cookies.set('token', response.token, { expires: 7 });
                Cookies.set('user', JSON.stringify(response.user), { expires: 7 });
                toast.success(response.message || 'Registration successful!');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Registration failed');
            throw error;
        }
    };

    const googleLogin = async (googleId: string, email: string, name: string, avatar: string) => {
        try {
            const response = await authService.googleAuth(googleId, email, name, avatar);
            if (response.success && response.token && response.user) {
                setToken(response.token);
                setUser(response.user);
                Cookies.set('token', response.token, { expires: 7 });
                Cookies.set('user', JSON.stringify(response.user), { expires: 7 });
                toast.success('Login successful!');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Google login failed');
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        Cookies.remove('token');
        Cookies.remove('user');
        toast.success('Logged out successfully');
    };

    const sendEmailOTP = async () => {
        try {
            const response = await authService.sendEmailOTP();
            if (response.success) {
                toast.success(response.message || 'OTP sent to your email');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to send OTP');
            throw error;
        }
    };

    const verifyEmailOTP = async (otp: string) => {
        try {
            const response = await authService.verifyEmailOTP(otp);
            if (response.success && response.user) {
                setUser(response.user);
                Cookies.set('user', JSON.stringify(response.user), { expires: 7 });
                toast.success(response.message || 'Email verified successfully');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to verify OTP');
            throw error;
        }
    };

    const sendPhoneOTP = async (phone: string) => {
        try {
            const response = await authService.sendPhoneOTP(phone);
            if (response.success) {
                toast.success(response.message || 'OTP sent to your phone');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to send OTP');
            throw error;
        }
    };

    const verifyPhoneOTP = async (otp: string) => {
        try {
            const response = await authService.verifyPhoneOTP(otp);
            if (response.success && response.user) {
                setUser(response.user);
                Cookies.set('user', JSON.stringify(response.user), { expires: 7 });
                toast.success(response.message || 'Phone verified successfully');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to verify OTP');
            throw error;
        }
    };

    const forgotPassword = async (email: string) => {
        try {
            const response = await authService.forgotPassword(email);
            if (response.success) {
                toast.success(response.message || 'Password reset email sent');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to send reset email');
            throw error;
        }
    };

    const resetPassword = async (token: string, password: string) => {
        try {
            const response = await authService.resetPassword(token, password);
            if (response.success && response.token) {
                setToken(response.token);
                Cookies.set('token', response.token, { expires: 7 });
                toast.success(response.message || 'Password reset successful');
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to reset password');
            throw error;
        }
    };

    const updateUser = (updatedUser: User) => {
        setUser(updatedUser);
        Cookies.set('user', JSON.stringify(updatedUser), { expires: 7 });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isLoading,
                login,
                register,
                googleLogin,
                logout,
                sendEmailOTP,
                verifyEmailOTP,
                sendPhoneOTP,
                verifyPhoneOTP,
                forgotPassword,
                resetPassword,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
