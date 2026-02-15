import { MetadataRoute } from 'next';
import { TEMPLATES } from '@/constants/templates';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sagarbhai.com'; // Replace with your actual domain

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
    ];

    // Template pages
    const templatePages = Object.keys(TEMPLATES).flatMap((templateId) => [
        {
            url: `${baseUrl}/templates/${templateId}/preview`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/templates/${templateId}/demo`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
    ]);

    return [...staticPages, ...templatePages];
}
