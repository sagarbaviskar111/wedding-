"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Great_Vibes, Raleway, Playfair_Display } from "next/font/google";
import { Flower2, Heart, Music, Calendar } from "lucide-react";

// Fonts
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["300", "400", "500"] });
const playfair = Playfair_Display({ subsets: ["latin"] });


export default function FloralTemplate({ id }: { id: string }) {

    const invitation = {
        groom: "Arjun",
        bride: "Ananya",
        date: "April 20, 2026",
        time: "11:00 AM",
        venue: "Rose Garden Estate",
        coverImage: "https://images.unsplash.com/photo-1522673607200-1645062cd95f?auto=format&fit=crop&q=80&w=1920",
        groomImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
        brideImg: "https://images.unsplash.com/photo-1525757530655-2595563a6234?auto=format&fit=crop&q=80&w=800", // Soft bride portrait
    };

    return (
        <div className={`min-h-screen bg-pink-50 text-gray-800 ${raleway.className} relative overflow-hidden`}>

            {/* Floating Petals Overlay (CSS Animation would be better but using simple div for now) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-10 left-10 text-pink-200 animate-spin-slow"><Flower2 size={60} /></div>
                <div className="absolute bottom-20 right-10 text-pink-200 animate-bounce-slow"><Flower2 size={80} /></div>
            </div>

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-white/80 text-pink-900 rounded-full backdrop-blur-md shadow-lg border border-pink-100 hover:bg-pink-100 transition-all font-serif">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </Link>
            </div>

            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center text-center p-6 relative">
                {/* Floral Border Frame */}
                <div className="absolute inset-4 md:inset-10 border-[1px] border-pink-300 rounded-[50px] z-10 pointer-events-none" />
                <div className="absolute inset-6 md:inset-12 border-[1px] border-pink-300 rounded-[40px] z-10 pointer-events-none opacity-50" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <p className="text-pink-600 tracking-[0.4em] uppercase text-sm font-medium mb-6">We're getting married</p>

                    <h1 className={`${greatVibes.className} text-7xl md:text-9xl text-pink-800 drop-shadow-sm`}>
                        {invitation.bride}
                    </h1>
                    <span className={`${playfair.className} text-4xl text-pink-400 my-4 block`}>&</span>
                    <h1 className={`${greatVibes.className} text-7xl md:text-9xl text-pink-800 drop-shadow-sm`}>
                        {invitation.groom}
                    </h1>

                    <div className="mt-12 inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-pink-100">
                        <div className="flex items-center gap-4 text-pink-900 font-medium tracking-widest uppercase text-sm">
                            <span>{invitation.date}</span>
                            <span>•</span>
                            <span>{invitation.venue}</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Couple Photo Section with Watercolor effect */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <div className="relative w-64 h-80 rounded-[50%_50%_0_0] overflow-hidden border-4 border-white shadow-xl rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                        <Image src={invitation.brideImg} fill alt="Bride" className="object-cover" />
                    </div>
                    <div className="text-pink-300"><Heart size={40} fill="currentColor" /></div>
                    <div className="relative w-64 h-80 rounded-[50%_50%_0_0] overflow-hidden border-4 border-white shadow-xl rotate-[4deg] hover:rotate-0 transition-transform duration-500">
                        <Image src={invitation.groomImg} fill alt="Groom" className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Simple footer */}
            <footer className="py-12 text-center text-pink-900/50">
                <p className="text-sm tracking-widest uppercase">Can't wait to see you!</p>
            </footer>

        </div>
    );
}
