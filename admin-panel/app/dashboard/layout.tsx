'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <div className="flex h-screen bg-gray-50">
                <div className="w-64 flex-shrink-0">
                    <Sidebar />
                </div>
                <div className="flex-1 overflow-auto">
                    <div className="p-8">
                        {children}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
