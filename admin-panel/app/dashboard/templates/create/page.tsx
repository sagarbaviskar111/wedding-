'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

export default function CreateTemplatePage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'wedding',
        subcategory: '',
        thumbnailUrl: '',
        previewUrl: '',
        isPremium: false,
        price: '0',
        isActive: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await api.post('/templates', {
                ...formData,
                price: Number(formData.price)
            });
            router.push('/dashboard/templates');
            router.refresh();
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to create template. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Create New Template</h1>
                <p className="text-gray-600 mt-2">Fill out the form below to add a new template to the system.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md">
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Name */}
                        <div className="md:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Template Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 border"
                                placeholder="e.g. Royal Heritage Wedding"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description *
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                rows={3}
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 border"
                                placeholder="A brief description of this template"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category *
                            </label>
                            <select
                                name="category"
                                id="category"
                                required
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 border"
                            >
                                <option value="wedding">Wedding</option>
                                <option value="birthday">Birthday</option>
                                <option value="party">Party</option>
                                <option value="corporate">Corporate</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Subcategory */}
                        <div>
                            <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
                                Subcategory
                            </label>
                            <input
                                type="text"
                                name="subcategory"
                                id="subcategory"
                                value={formData.subcategory}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 border"
                                placeholder="e.g. Indian, Modern, Minimal"
                            />
                        </div>

                        {/* Thumbnail URL */}
                        <div className="md:col-span-2">
                            <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-700">
                                Thumbnail URL *
                            </label>
                            <input
                                type="url"
                                name="thumbnailUrl"
                                id="thumbnailUrl"
                                required
                                value={formData.thumbnailUrl}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 border"
                                placeholder="https://example.com/thumbnail.jpg"
                            />
                        </div>

                        {/* Preview URL */}
                        <div className="md:col-span-2">
                            <label htmlFor="previewUrl" className="block text-sm font-medium text-gray-700">
                                Preview Link
                            </label>
                            <input
                                type="url"
                                name="previewUrl"
                                id="previewUrl"
                                value={formData.previewUrl}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 border"
                                placeholder="https://example.com/preview"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price (₹)
                            </label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                min="0"
                                value={formData.price}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 border"
                            />
                        </div>

                        {/* Toggles */}
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="isPremium"
                                    id="isPremium"
                                    checked={formData.isPremium}
                                    onChange={handleChange}
                                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                />
                                <label htmlFor="isPremium" className="ml-2 block text-sm text-gray-900">
                                    Premium Template
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="isActive"
                                    id="isActive"
                                    checked={formData.isActive}
                                    onChange={handleChange}
                                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                />
                                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                                    Active (Visible to users)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 border-t border-gray-200 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="inline-flex justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating...' : 'Create Template'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
