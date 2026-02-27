'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { UsersIcon, DocumentTextIcon, EyeIcon, ShareIcon } from '@heroicons/react/24/outline';

interface Stats {
    totalUsers: number;
    activeUsers: number;
    totalTemplates: number;
    activeTemplates: number;
}

export default function DashboardPage() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [userStats, templateStats] = await Promise.all([
                api.get('/users/stats'),
                api.get('/templates/stats')
            ]);

            setStats({
                totalUsers: userStats.data.stats.totalUsers,
                activeUsers: userStats.data.stats.activeUsers,
                totalTemplates: templateStats.data.stats.totalTemplates,
                activeTemplates: templateStats.data.stats.activeTemplates,
            });
        } catch (error) {
            console.error('Failed to fetch stats:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const statCards = [
        {
            name: 'Total Users',
            value: stats?.totalUsers || 0,
            icon: UsersIcon,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50',
        },
        {
            name: 'Active Users',
            value: stats?.activeUsers || 0,
            icon: EyeIcon,
            color: 'bg-green-500',
            bgColor: 'bg-green-50',
        },
        {
            name: 'Total Templates',
            value: stats?.totalTemplates || 0,
            icon: DocumentTextIcon,
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50',
        },
        {
            name: 'Active Templates',
            value: stats?.activeTemplates || 0,
            icon: ShareIcon,
            color: 'bg-pink-500',
            bgColor: 'bg-pink-50',
        },
    ];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome to your admin panel</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((card) => (
                    <div
                        key={card.name}
                        className={`${card.bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{card.name}</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                            </div>
                            <div className={`${card.color} p-3 rounded-lg`}>
                                <card.icon className="h-8 w-8 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <a
                            href="/dashboard/users"
                            className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition"
                        >
                            <h3 className="font-semibold text-purple-900">Manage Users</h3>
                            <p className="text-sm text-purple-700">View, edit, and delete users</p>
                        </a>
                        <a
                            href="/dashboard/templates"
                            className="block p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition"
                        >
                            <h3 className="font-semibold text-pink-900">Manage Templates</h3>
                            <p className="text-sm text-pink-700">Add, edit, and organize templates</p>
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">System Status</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Database</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                Connected
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">API Server</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                Running
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Last Backup</span>
                            <span className="text-gray-900 text-sm">Never</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
