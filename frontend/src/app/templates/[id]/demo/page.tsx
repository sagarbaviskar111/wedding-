'use client';

import { useParams } from 'next/navigation';
import { TEMPLATES, getTemplateById } from '@/constants/templates';
import RoyalTemplate from '@/components/templates/RoyalTemplate';
import ModernTemplate from '@/components/templates/ModernTemplate';
import FloralTemplate from '@/components/templates/FloralTemplate';
import GoldenLuxeTemplate from '@/components/templates/GoldenLuxeTemplate';
import PaithaniTemplate from '@/components/templates/PaithaniTemplate';
import PunjabiDholTemplate from '@/components/templates/PunjabiDholTemplate';

export default function TemplateDemoPage() {
    const { id } = useParams();
    const templateId = (Array.isArray(id) ? id[0] : id) || 'w1';
    const template = getTemplateById(templateId);

    // Dynamic rendering based on template type or ID
    switch (template.type) {
        case 'Royal':
            return <RoyalTemplate id={templateId} />;
        case 'Modern':
            return <ModernTemplate id={templateId} />;
        case 'Floral':
            return <FloralTemplate id={templateId} />;
        case 'Golden':
            return <GoldenLuxeTemplate />;
        case 'Marathi':
            return <PaithaniTemplate />;
        case 'Punjabi':
            return <PunjabiDholTemplate id={templateId} />;
        default:
            return <RoyalTemplate id={templateId} />;
    }
}
