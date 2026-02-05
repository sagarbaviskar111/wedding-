"use client";

import { useEffect, useState } from "react";
import { Music, Heart, Sparkles, PartyPopper, Star, Gift } from "lucide-react";

export const FestiveBackground = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Rich Golden/Red Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-red-950 to-purple-950 opacity-90" />

            {/* Static Gradient Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
                <div
                    className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] rounded-full bg-orange-500 blur-[150px] opacity-30"
                />
                <div
                    className="absolute top-1/2 left-1/2 w-[80%] h-[80%] rounded-full bg-rose-600 blur-[150px] opacity-30"
                />
            </div>

            {/* Static Floating Icons (No Animation) */}
            <div className="absolute top-1/4 left-1/4 text-yellow-500/20"><Music size={40} /></div>
            <div className="absolute top-3/4 left-1/3 text-yellow-500/20"><Heart size={30} /></div>
            <div className="absolute top-1/2 right-1/4 text-yellow-500/20"><Sparkles size={45} /></div>
            <div className="absolute bottom-10 left-10 text-yellow-500/20"><PartyPopper size={35} /></div>
            <div className="absolute top-10 right-10 text-yellow-500/20"><Star size={25} /></div>
            <div className="absolute bottom-1/3 right-10 text-yellow-500/20"><Gift size={40} /></div>

        </div>
    );
};
