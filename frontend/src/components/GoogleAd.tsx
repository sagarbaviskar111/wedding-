"use client";

import { useEffect } from 'react';

interface GoogleAdProps {
    adSlot: string;
    adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
    fullWidthResponsive?: boolean;
    className?: string;
}

export default function GoogleAd({
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    className = ''
}: GoogleAdProps) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className={`ad-container ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense ID
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
}

// Different ad sizes for different placements
export function HeaderAd() {
    return (
        <div className="my-8 flex justify-center">
            <GoogleAd
                adSlot="1234567890" // Replace with actual slot ID
                adFormat="horizontal"
                className="max-w-7xl w-full"
            />
        </div>
    );
}

export function SidebarAd() {
    return (
        <div className="sticky top-24">
            <GoogleAd
                adSlot="0987654321" // Replace with actual slot ID
                adFormat="vertical"
                className="w-full"
            />
        </div>
    );
}

export function InFeedAd() {
    return (
        <div className="my-6">
            <GoogleAd
                adSlot="1122334455" // Replace with actual slot ID
                adFormat="fluid"
                className="w-full"
            />
        </div>
    );
}

export function FooterAd() {
    return (
        <div className="my-8 flex justify-center">
            <GoogleAd
                adSlot="5544332211" // Replace with actual slot ID
                adFormat="auto"
                className="max-w-7xl w-full"
            />
        </div>
    );
}
