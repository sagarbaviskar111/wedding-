"use client";

import { Playfair_Display, Montserrat, Dancing_Script, Poppins } from "next/font/google";
import { MapPin, Play, Heart, Camera, Film, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const dancingScript = Dancing_Script({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function LoveStoryMotionTemplate({ id }: { id: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Default data for Love Story Motion Theme
    const invitation = {
        groom: "Alex Johnson",
        bride: "Emma Williams",
        date: "June 14, 2026",
        day: "Sunday",
        ceremonyTime: "4:00 PM",
        receptionTime: "7:00 PM",
        venue: "Sunset Beach Resort",
        address: "1234 Ocean Drive, Malibu, California 90265",
        story: "A love story written in the stars, captured in every moment.",
        coverImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1600",
        groomImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        brideImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        timeline: [
            { year: "2020", title: "First Meet", desc: "Our eyes met across a crowded coffee shop...", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
            { year: "2021", title: "First Date", desc: "A magical evening under the stars.", image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&q=80&w=800" },
            { year: "2023", title: "The Proposal", desc: "On a beach at sunset, he asked the question...", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
            { year: "2026", title: "Forever Begins", desc: "And they lived happily ever after.", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=800" },
        ]
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-pink-500">

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full backdrop-blur-md shadow-2xl border border-white/20 hover:bg-white/20 transition-all font-semibold">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </Link>
            </div>

            {/* Create Your Own Invitation Button */}
            <div className="fixed top-6 right-6 z-50">
                <Link
                    href="/#templates"
                    className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-full backdrop-blur-md shadow-2xl hover:brightness-110 transition-all font-semibold"
                >
                    Create Your Own Invitation
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>

            {/* --- HERO SECTION: CINEMATIC INTRO --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Video-style Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={invitation.coverImage}
                        alt="Love Story"
                        fill
                        className="object-cover scale-110 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

                    {/* Film Grain Effect */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                    {/* Floating Hearts */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                    opacity: 0,
                                    scale: 0
                                }}
                                animate={{
                                    y: -100,
                                    opacity: [0, 0.6, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: "linear"
                                }}
                                className="absolute"
                            >
                                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto">

                    {/* Film Clapperboard Animation */}
                    <motion.div
                        initial={{ y: -100, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="mb-12"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Film className="w-24 h-24 text-pink-400 drop-shadow-[0_0_30px_rgba(244,114,182,0.8)] mx-auto" strokeWidth={1.5} />
                        </motion.div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mt-6 flex items-center justify-center gap-2"
                        >
                            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
                            <Play className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
                            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
                        </motion.div>
                    </motion.div>

                    {/* Cinematic Title */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.5 }}
                    >
                        <h2 className={`${montserrat.className} text-sm md:text-base text-gray-400 tracking-[0.5em] uppercase mb-6 font-light`}>
                            A Love Story Presents
                        </h2>
                    </motion.div>

                    {/* Couple Names - Movie Title Style */}
                    <div className="relative z-20 my-12">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                        >
                            <motion.h1
                                className={`${playfair.className} text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 drop-shadow-[0_0_50px_rgba(244,114,182,1)] leading-tight mb-4`}
                            >
                                {invitation.groom}
                            </motion.h1>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="flex items-center justify-center gap-6 my-8"
                            >
                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
                                </motion.div>
                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
                            </motion.div>

                            <motion.h1
                                className={`${playfair.className} text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-purple-200 drop-shadow-[0_0_50px_rgba(168,85,247,1)] leading-tight`}
                            >
                                {invitation.bride}
                            </motion.h1>
                        </motion.div>
                    </div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className={`${dancingScript.className} text-3xl md:text-5xl text-gray-300 italic mb-12`}
                    >
                        {invitation.story}
                    </motion.p>

                    {/* Date Reveal - Cinematic */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                        className="mt-16"
                    >
                        <div className="relative inline-block">
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(244,114,182,0.5)",
                                        "0 0 40px rgba(244,114,182,0.8)",
                                        "0 0 20px rgba(244,114,182,0.5)",
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="bg-gradient-to-r from-pink-600 to-purple-600 p-1 rounded-2xl"
                            >
                                <div className="bg-black/80 backdrop-blur-md rounded-2xl px-12 py-8">
                                    <p className={`${montserrat.className} text-sm text-pink-400 tracking-[0.3em] uppercase mb-2`}>
                                        Save The Date
                                    </p>
                                    <h3 className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-4`}>
                                        {invitation.date}
                                    </h3>
                                    <div className="flex items-center justify-center gap-8">
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ceremony</p>
                                            <p className={`${poppins.className} text-xl font-semibold text-pink-300`}>{invitation.ceremonyTime}</p>
                                        </div>
                                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-pink-400 to-transparent" />
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Reception</p>
                                            <p className={`${poppins.className} text-xl font-semibold text-purple-300`}>{invitation.receptionTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator with Play Button */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
                >
                    <Play className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest font-semibold">Watch Our Story</span>
                </motion.div>
            </section>

            {/* --- LOVE TIMELINE SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${playfair.className} text-center text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-20 font-bold`}
                    >
                        Our Love Story
                    </motion.h2>

                    <div className="space-y-32">
                        {invitation.timeline.map((chapter, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                            >
                                {/* Image */}
                                <div className="flex-1 relative group">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
                                    >
                                        <Image
                                            src={chapter.image}
                                            alt={chapter.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                                        {/* Film Frame Effect */}
                                        <div className="absolute inset-0 border-8 border-black/50 pointer-events-none" />
                                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                                        {/* Play Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-20 h-20 rounded-full bg-pink-500/80 backdrop-blur-sm flex items-center justify-center">
                                                <Play className="w-10 h-10 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="inline-block mb-4"
                                    >
                                        <div className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full">
                                            <span className={`${montserrat.className} text-white font-bold text-lg`}>{chapter.year}</span>
                                        </div>
                                    </motion.div>
                                    <h3 className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-4`}>
                                        {chapter.title}
                                    </h3>
                                    <p className={`${poppins.className} text-xl text-gray-400 leading-relaxed max-w-md ${i % 2 === 0 ? '' : 'md:ml-auto'}`}>
                                        {chapter.desc}
                                    </p>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className={`h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 mt-6 ${i % 2 === 0 ? '' : 'md:ml-auto'}`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VENUE SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-b from-black to-gray-900">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-pink-600 to-purple-600 p-1 rounded-[3rem] shadow-2xl">
                        <div className="bg-gray-900/95 backdrop-blur-md rounded-[calc(3rem-4px)] p-12 md:p-16 text-center relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                <Camera className="absolute top-10 left-10 w-20 h-20 text-pink-400 animate-pulse" />
                                <Film className="absolute bottom-10 right-10 w-20 h-20 text-purple-400 animate-pulse" />
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="inline-block mb-6"
                                >
                                    <MapPin className="w-16 h-16 text-pink-400" />
                                </motion.div>

                                <h2 className={`${montserrat.className} text-xl text-pink-400 tracking-[0.3em] uppercase mb-4 font-semibold`}>
                                    The Grand Finale
                                </h2>

                                <div className="flex items-center justify-center gap-4 my-6">
                                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-400" />
                                    <Sparkles className="w-6 h-6 text-pink-400" />
                                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-400" />
                                </div>

                                <h3 className={`${playfair.className} text-5xl md:text-6xl font-bold text-white mb-6 leading-tight`}>
                                    {invitation.venue}
                                </h3>

                                <p className={`${poppins.className} text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed`}>
                                    {invitation.address}
                                </p>

                                <Link href="https://maps.google.com" target="_blank">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-pink-500/50 transition-all duration-300 text-lg"
                                    >
                                        Get Directions 📍
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- FOOTER / END CREDITS --- */}
            <footer className="bg-black text-gray-400 py-20 text-center relative overflow-hidden border-t border-gray-800">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5" />

                <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <Film className="w-20 h-20 mx-auto text-pink-400 mb-6" />
                    </motion.div>

                    <h2 className={`${playfair.className} text-5xl md:text-6xl text-white mb-4 italic`}>
                        The End... <span className="text-pink-400">Or Just The Beginning?</span>
                    </h2>

                    <p className={`${poppins.className} text-xl text-gray-400`}>
                        Thank you for being part of our story
                    </p>

                    <div className="flex justify-center gap-4 text-4xl">
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>🎬</motion.span>
                        <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>❤️</motion.span>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>🎬</motion.span>
                    </div>

                    <div className="h-px w-48 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto my-8" />

                    <p className="text-sm text-gray-600 uppercase tracking-[0.4em]">
                        Directed by Love<br />
                        Produced by Destiny<br />
                        Starring: {invitation.groom} & {invitation.bride}
                    </p>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes slow-zoom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                .animate-slow-zoom {
                    animation: slow-zoom 20s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
