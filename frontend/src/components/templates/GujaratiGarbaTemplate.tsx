"use client";

import { Playfair_Display, Poppins, Satisfy, Mukta } from "next/font/google";
import { MapPin, Music, Sparkles, Heart, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const mukta = Mukta({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function GujaratiGarbaTemplate({ id }: { id: string }) {

    // Default data for Gujarati Garba Theme
    const invitation = {
        groom: "Dhruv Patel",
        bride: "Diya Shah",
        date: "October 15, 2026",
        day: "Thursday",
        ceremonyTime: "10:00 AM",
        garbaTime: "8:00 PM",
        venue: "Swaminarayan Temple, Ahmedabad",
        address: "Shahibaug, Ahmedabad, Gujarat 380004",
        story: "Two hearts dancing to the rhythm of love, united in the vibrant celebration of Garba!",
        coverImage: "https://images.unsplash.com/photo-1545959755-f269d0335e49?auto=format&fit=crop&q=80&w=1600",
        groomImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
        brideImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 text-gray-900 overflow-x-hidden selection:bg-orange-300">

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-white/90 text-orange-600 rounded-full backdrop-blur-md shadow-2xl border-2 border-orange-300 hover:bg-orange-50 transition-all font-bold">
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

            {/* --- HERO SECTION: GARBA CELEBRATION --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background with Garba Dancers */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={invitation.coverImage}
                        alt="Garba Celebration"
                        fill
                        className="object-cover brightness-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-600/70 via-red-500/50 to-pink-600/70" />

                    {/* Animated Dandiya Sticks Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ rotate: 0, scale: 0 }}
                                animate={{
                                    rotate: 360,
                                    scale: [0, 1, 0],
                                    x: [0, Math.random() * 200 - 100],
                                    y: [0, Math.random() * 200 - 100],
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                }}
                                className="absolute"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            >
                                <div className="w-20 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Circular Garba Pattern */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-4 border-orange-400/30 border-dashed rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-4 border-red-400/20 border-dashed rounded-full"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto">

                    {/* Garba Pot (Kalash) Animation */}
                    <motion.div
                        initial={{ scale: 0, y: -100 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="mb-8"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-9xl filter drop-shadow-2xl"
                        >
                            🪔
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`${mukta.className} text-white text-2xl md:text-3xl font-bold mt-6 tracking-wider uppercase drop-shadow-lg`}
                        >
                            || શ્રી ગણેશાય નમઃ ||
                        </motion.h2>
                    </motion.div>

                    {/* Couple Names with Garba Energy */}
                    <div className="relative z-20 my-12">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            {/* GROOM NAME */}
                            <motion.div
                                initial={{ x: -100, opacity: 0, rotate: -10 }}
                                animate={{ x: 0, opacity: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: "backOut" }}
                            >
                                <h1 className={`${satisfy.className} text-7xl md:text-9xl lg:text-[10rem] text-white drop-shadow-[0_0_40px_rgba(251,146,60,1)] leading-none`}>
                                    {invitation.groom}
                                </h1>
                            </motion.div>

                            {/* Dandiya Sticks Divider */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex items-center justify-center gap-6 my-8"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="relative"
                                >
                                    <div className="w-24 h-3 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 rounded-full shadow-lg" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-white" />
                                </motion.div>
                                <Heart className="w-12 h-12 text-pink-300 fill-pink-300 animate-pulse" />
                                <motion.div
                                    animate={{ rotate: [360, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="relative"
                                >
                                    <div className="w-24 h-3 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 rounded-full shadow-lg" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-white" />
                                </motion.div>
                            </motion.div>

                            {/* BRIDE NAME */}
                            <motion.div
                                initial={{ x: 100, opacity: 0, rotate: 10 }}
                                animate={{ x: 0, opacity: 1, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
                            >
                                <h1 className={`${satisfy.className} text-7xl md:text-9xl lg:text-[10rem] text-white drop-shadow-[0_0_40px_rgba(236,72,153,1)] leading-none`}>
                                    {invitation.bride}
                                </h1>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Garba Celebration Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-8"
                    >
                        <h3 className={`${satisfy.className} text-4xl md:text-5xl text-white drop-shadow-lg mb-4`}>
                            {invitation.story}
                        </h3>
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className={`${mukta.className} text-5xl md:text-7xl text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,1)] tracking-wider font-bold`}
                        >
                            આવજો ગરબામાં!
                        </motion.div>
                        <p className="text-white/90 text-xl mt-2">(Come Join the Garba!)</p>
                    </motion.div>

                    {/* Date Card with Gujarati Flair */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="mt-16 mx-auto max-w-2xl"
                    >
                        <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-1 rounded-3xl shadow-2xl">
                            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden">
                                {/* Decorative Rangoli Pattern */}
                                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Circle className="w-full h-full text-orange-600" />
                                    </motion.div>
                                </div>

                                <div className="relative z-10 text-center space-y-4">
                                    <p className={`${mukta.className} text-lg font-semibold text-orange-600 tracking-widest uppercase`}>
                                        {invitation.day}
                                    </p>
                                    <h3 className={`${playfair.className} text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600`}>
                                        {invitation.date}
                                    </h3>
                                    <div className="flex items-center justify-center gap-6 pt-4">
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500 uppercase tracking-wider">Wedding</p>
                                            <p className={`${poppins.className} text-2xl font-bold text-orange-600`}>{invitation.ceremonyTime}</p>
                                        </div>
                                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-orange-400 to-transparent" />
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500 uppercase tracking-wider">Garba Night</p>
                                            <p className={`${poppins.className} text-2xl font-bold text-pink-600`}>{invitation.garbaTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center gap-2"
                >
                    <span className="text-sm uppercase tracking-widest font-bold">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- COUPLE SECTION WITH GARBA DANCERS --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-orange-100 via-red-100 to-pink-100">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 text-6xl opacity-20 animate-spin-slow">🪔</div>
                <div className="absolute top-20 right-20 text-6xl opacity-20 animate-bounce">🎵</div>
                <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-pulse">💃</div>

                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${mukta.className} text-center text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-20 tracking-wider font-bold`}
                    >
                        The Garba Couple
                    </motion.h2>

                    <div className="grid lg:grid-cols-3 gap-16 items-center">
                        {/* Groom */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-6 group"
                        >
                            <div className="relative w-72 h-96 mx-auto">
                                <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-[3rem] rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                                    <Image src={invitation.groomImg} fill alt="Groom" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <h3 className={`${playfair.className} text-3xl font-bold`}>{invitation.groom}</h3>
                                        <p className="text-sm text-orange-200">The Groom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">🕺</div>
                                <h4 className={`${mukta.className} text-2xl font-bold text-orange-600`}>Garba King</h4>
                                <p className="text-gray-600 max-w-xs mx-auto">Ready to dance the night away!</p>
                            </div>
                        </motion.div>

                        {/* Center - Dandiya */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center space-y-8"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="text-9xl filter drop-shadow-2xl"
                            >
                                💃
                            </motion.div>
                            <h3 className={`${satisfy.className} text-5xl text-orange-600`}>
                                United in Dance
                            </h3>
                            <p className={`${poppins.className} text-xl text-gray-700 max-w-md mx-auto leading-relaxed`}>
                                Two souls twirling in perfect harmony, celebrating love with every Garba step!
                            </p>
                            <div className="flex justify-center gap-4">
                                <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
                                <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-bounce" />
                                <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
                            </div>
                        </motion.div>

                        {/* Bride */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-6 group"
                        >
                            <div className="relative w-72 h-96 mx-auto">
                                <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 to-red-400 rounded-[3rem] -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                                    <Image src={invitation.brideImg} fill alt="Bride" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <h3 className={`${playfair.className} text-3xl font-bold`}>{invitation.bride}</h3>
                                        <p className="text-sm text-pink-200">The Bride</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">💃</div>
                                <h4 className={`${mukta.className} text-2xl font-bold text-pink-600`}>Garba Queen</h4>
                                <p className="text-gray-600 max-w-xs mx-auto">Twirling into forever!</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- EVENTS SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${mukta.className} text-center text-5xl md:text-7xl text-white mb-20 tracking-wider drop-shadow-lg font-bold`}
                    >
                        Celebration Events
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { emoji: "🎨", title: "Mehendi", time: "October 14 • 4:00 PM", desc: "Colorful henna designs and joyful celebrations!" },
                            { emoji: "💃", title: "Garba Night", time: "October 14 • 8:00 PM", desc: "Dance to traditional Garba beats all night long!" },
                            { emoji: "💒", title: "Wedding Ceremony", time: "October 15 • 10:00 AM", desc: "Sacred vows in the presence of family and gods." },
                            { emoji: "🎊", title: "Reception", time: "October 15 • 7:00 PM", desc: "Grand celebration with dinner and dance!" },
                        ].map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 hover:border-white transition-all duration-300"
                            >
                                <div className="text-6xl mb-4">{event.emoji}</div>
                                <h3 className={`${mukta.className} text-3xl text-white mb-2 font-bold`}>{event.title}</h3>
                                <p className="text-orange-200 text-sm mb-4">{event.time}</p>
                                <p className="text-white/90 leading-relaxed">{event.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VENUE SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-orange-50 to-pink-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-1 rounded-[3rem] shadow-2xl">
                        <div className="bg-white rounded-[calc(3rem-4px)] p-12 md:p-16 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="inline-block mb-6"
                                >
                                    <MapPin className="w-16 h-16 text-orange-600" />
                                </motion.div>

                                <h2 className={`${mukta.className} text-3xl text-orange-600 tracking-wider uppercase mb-4 font-bold`}>
                                    Join Us At
                                </h2>

                                <h3 className={`${playfair.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mb-6 leading-tight`}>
                                    {invitation.venue}
                                </h3>

                                <p className={`${poppins.className} text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed`}>
                                    {invitation.address}
                                </p>

                                <Link href="https://maps.google.com" target="_blank">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                                    >
                                        Get Directions 📍
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20" />

                <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="text-8xl mb-4"
                    >
                        🪔
                    </motion.div>

                    <h2 className={`${satisfy.className} text-6xl md:text-7xl text-yellow-300 mb-4`}>
                        Thank You!
                    </h2>

                    <p className={`${mukta.className} text-2xl text-white/90`}>
                        આવજો અને આશીર્વાદ આપજો!
                    </p>
                    <p className="text-white/80">(Come and bless us!)</p>

                    <div className="flex justify-center gap-3 text-4xl">
                        <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1, repeat: Infinity }}>💃</motion.span>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>❤️</motion.span>
                        <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>🕺</motion.span>
                    </div>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-6" />

                    <p className="text-sm text-white/60 uppercase tracking-[0.3em]">
                        With Love & Blessings<br />
                        Patel & Shah Families
                    </p>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
}
