'use client';

import { useParams } from 'next/navigation';
import { TEMPLATES, getTemplateById } from '@/constants/templates';
import RoyalTemplate from '@/components/templates/RoyalTemplate';
import ModernTemplate from '@/components/templates/ModernTemplate';
import FloralTemplate from '@/components/templates/FloralTemplate';
import GoldenLuxeTemplate from '@/components/templates/GoldenLuxeTemplate';
import PaithaniTemplate from '@/components/templates/PaithaniTemplate';
import PunjabiDholTemplate from '@/components/templates/PunjabiDholTemplate';
import RoyalRajwadaTemplate from '@/components/templates/RoyalRajwadaTemplate';
import GujaratiGarbaTemplate from '@/components/templates/GujaratiGarbaTemplate';
import TempleVowsTemplate from '@/components/templates/TempleVowsTemplate';
import LoveStoryMotionTemplate from '@/components/templates/LoveStoryMotionTemplate';

export default function TemplateDemoPage() {
    const { id } = useParams();
    const templateId = (Array.isArray(id) ? id[0] : id) || 'w1';
    const template = getTemplateById(templateId);

    // Dynamic rendering based on template type or ID
    switch (template.type) {
        case 'Royal':
            // w1 uses RoyalTemplate, w6 uses RoyalRajwadaTemplate
            if (templateId === 'w6') {
                return <RoyalRajwadaTemplate id={templateId} />;
            }
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
        case 'Gujarati':
            return <GujaratiGarbaTemplate id={templateId} />;
        case 'South Indian':
            return <TempleVowsTemplate id={templateId} />;
        case 'Western':
            return <LoveStoryMotionTemplate id={templateId} />;
        default:
            return <RoyalTemplate id={templateId} />;
    }
}
