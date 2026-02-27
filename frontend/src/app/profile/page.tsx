'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Phone, Calendar, Package, CheckCircle, XCircle, ArrowLeft, Shield } from 'lucide-react';
import axios from 'axios';

interface PurchasedTemplate {
    id: string;
    name: string;
    category: string;
    purchaseDate: string;
    expiryDate: string;
    isActive: boolean;
    price: number;
}

export default function ProfilePage() {
    const { user, token, isLoading } = useAuth();
    const router = useRouter();
    const [createdInvitations, setCreatedInvitations] = useState<any[]>([]);

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    // Fetch user's created invitations from API
    useEffect(() => {
        const fetchInvitations = async () => {
            if (user && token) {
                try {
                    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
                    const { data } = await axios.get(`${API_URL}/api/invitations`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    if (data.success) {
                        setCreatedInvitations(data.data);
                    }
                } catch (error) {
                    console.error("Failed to fetch invitations:", error);
                }
            }
        };
        fetchInvitations();
    }, [user, token]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const getDaysRemaining = (expiryDate: string) => {
        const today = new Date();
        const expiry = new Date(expiryDate);
        const diffTime = expiry.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    const activeTemplates = createdInvitations.filter(t => !t.isPublished || t.isPublished); // For now all loaded API invitations will be under active templates
    const expiredTemplates: any[] = []; // purchasedTemplates.filter(t => !t.isActive);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-4"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">My Profile</h1>
                    <p className="text-white/80">Manage your account and view your purchased templates</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Profile Information Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl shadow-2xl p-6">
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                                <p className="text-sm text-gray-500 capitalize">{user.role}</p>
                            </div>

                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                                    <Mail className="w-5 h-5 text-purple-600 mt-0.5" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-gray-500 mb-1">Email Address</p>
                                        <p className="text-sm font-medium text-gray-800 truncate">{user.email}</p>
                                        <div className="flex items-center gap-1 mt-1">
                                            {user.isEmailVerified ? (
                                                <>
                                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                                    <span className="text-xs text-green-600">Verified</span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircle className="w-3 h-3 text-red-600" />
                                                    <span className="text-xs text-red-600">Not Verified</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                {user.phone && (
                                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                                        <Phone className="w-5 h-5 text-purple-600 mt-0.5" />
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 mb-1">Phone Number</p>
                                            <p className="text-sm font-medium text-gray-800">{user.phone}</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                {user.isPhoneVerified ? (
                                                    <>
                                                        <CheckCircle className="w-3 h-3 text-green-600" />
                                                        <span className="text-xs text-green-600">Verified</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <XCircle className="w-3 h-3 text-red-600" />
                                                        <span className="text-xs text-red-600">Not Verified</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Account Type */}
                                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                                    <Shield className="w-5 h-5 text-purple-600 mt-0.5" />
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-1">Account Type</p>
                                        <p className="text-sm font-medium text-gray-800 capitalize">{user.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Verification Actions */}
                            {(!user.isEmailVerified || !user.isPhoneVerified) && (
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h3 className="text-sm font-semibold text-gray-800 mb-3">Complete Your Profile</h3>
                                    <div className="space-y-2">
                                        {!user.isEmailVerified && (
                                            <Link
                                                href="/verify-email"
                                                className="block w-full py-2 px-4 bg-purple-600 text-white text-center rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                                            >
                                                Verify Email
                                            </Link>
                                        )}
                                        {!user.isPhoneVerified && user.phone && (
                                            <button className="w-full py-2 px-4 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 transition">
                                                Verify Phone
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Purchased Templates */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Active Templates */}
                        <div className="bg-white rounded-3xl shadow-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <Package className="w-6 h-6 text-purple-600" />
                                <h2 className="text-2xl font-bold text-gray-800">Active Templates</h2>
                                <span className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                    {activeTemplates.length}
                                </span>
                            </div>

                            {activeTemplates.length > 0 ? (
                                <div className="space-y-4">
                                    {activeTemplates.map((template) => {
                                        const daysRemaining = getDaysRemaining(template.expiryDate);
                                        const isExpiringSoon = daysRemaining <= 30;

                                        return (
                                            <div
                                                key={template._id}
                                                className="border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-shadow"
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-800">{template.eventDetails?.eventName || template.eventDetails?.eventType + " Invitation"}</h3>
                                                        <p className="text-sm text-gray-500">Template ID: {template.template}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-bold text-purple-600">Saved</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Calendar className="w-4 h-4 text-gray-400" />
                                                        <div>
                                                            <p className="text-xs text-gray-500">Created At</p>
                                                            <p className="font-medium text-gray-700">{formatDate(template.createdAt)}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700`}>
                                                        Active
                                                    </div>
                                                    <Link
                                                        href={`/create/${template.template}`}
                                                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:brightness-110 transition"
                                                    >
                                                        Edit Invitation
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500 mb-4">No active templates</p>
                                    <Link
                                        href="/#templates"
                                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:brightness-110 transition"
                                    >
                                        Browse Templates
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Expired Templates */}
                        {expiredTemplates.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-2xl p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <XCircle className="w-6 h-6 text-red-600" />
                                    <h2 className="text-2xl font-bold text-gray-800">Expired Templates</h2>
                                    <span className="ml-auto bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        {expiredTemplates.length}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {expiredTemplates.map((template) => (
                                        <div
                                            key={template.id}
                                            className="border border-gray-200 rounded-2xl p-4 opacity-75"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-800">{template.name}</h3>
                                                    <p className="text-sm text-gray-500">{template.category}</p>
                                                </div>
                                                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                                                    Expired
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between text-sm">
                                                <p className="text-gray-500">
                                                    Expired on {formatDate(template.expiryDate)}
                                                </p>
                                                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition">
                                                    Renew
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
