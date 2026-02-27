'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
    HomeIcon,
    UsersIcon,
    DocumentTextIcon,
    ChartBarIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function Sidebar() {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
        { name: 'Users', href: '/dashboard/users', icon: UsersIcon },
        { name: 'Templates', href: '/dashboard/templates', icon: DocumentTextIcon },
        { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
    ];

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-purple-900 to-purple-800 text-white">
            <div className="p-6">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                <p className="text-purple-200 text-sm mt-1">Wedding Invitations</p>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-4 py-3 rounded-lg transition-all ${isActive
                                    ? 'bg-white text-purple-900 shadow-lg'
                                    : 'text-purple-100 hover:bg-purple-700'
                                }`}
                        >
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-purple-700">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                        <span className="text-lg font-semibold">{user?.name?.charAt(0)}</span>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-purple-300">{user?.email}</p>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
                >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                    Logout
                </button>
            </div>
        </div>
    );
}
