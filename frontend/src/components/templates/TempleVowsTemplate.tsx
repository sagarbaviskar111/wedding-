"use client";

import { Playfair_Display, Cinzel, Cormorant_Garamond, Lora } from "next/font/google";
import { MapPin, Sparkles, Heart, Flower2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"] });
const lora = Lora({ subsets: ["latin"] });

export default function TempleVowsTemplate({ id }: { id: string }) {

    // Default data for Temple Vows Theme
    const invitation = {
        groom: "Arjun Kumar",
        bride: "Meera Iyer",
        date: "December 20, 2026",
        day: "Sunday",
        ceremonyTime: "9:00 AM",
        receptionTime: "6:00 PM",
        venue: "Sri Ranganathaswamy Temple",
        address: "Srirangam, Tiruchirappalli, Tamil Nadu 620006",
        story: "In the sacred presence of the divine, two souls unite in eternal devotion.",
        coverImage: "https://images.unsplash.com/photo-1605367673523-a12d1b953456?auto=format&fit=crop&q=80&w=1600",
        groomImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        brideImg: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-900 overflow-x-hidden selection:bg-orange-200">

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-white/90 text-orange-700 rounded-full backdrop-blur-md shadow-2xl border-2 border-orange-300 hover:bg-orange-50 transition-all font-semibold">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </Link>
            </div>

            {/* --- HERO SECTION: DIVINE TEMPLE --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background with Temple */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={invitation.coverImage}
                        alt="Sacred Temple"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-red-900/60 to-amber-900/80" />

                    {/* Floating Lotus Petals */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(25)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    y: -100,
                                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                    opacity: 0,
                                    rotate: 0
                                }}
                                animate={{
                                    y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 100,
                                    opacity: [0, 0.8, 0],
                                    rotate: 360,
                                    x: `+=${Math.random() * 100 - 50}`
                                }}
                                transition={{
                                    duration: Math.random() * 15 + 15,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                    ease: "linear"
                                }}
                                className="absolute"
                            >
                                <Flower2 className="w-6 h-6 text-orange-300/60" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Divine Light Rays */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-200/50 to-transparent"
                            style={{ transform: 'translateX(-50%) rotate(-15deg)', transformOrigin: 'top' }}
                        />
                        <motion.div
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-200/50 to-transparent"
                            style={{ transform: 'translateX(-50%) rotate(15deg)', transformOrigin: 'top' }}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto">

                    {/* Om Symbol */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 60 }}
                        className="mb-8"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-9xl filter drop-shadow-[0_0_30px_rgba(251,191,36,0.8)]"
                        >
                            🕉️
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`${cinzel.className} text-amber-200 text-xl md:text-2xl font-bold mt-6 tracking-[0.5em] uppercase drop-shadow-lg`}
                        >
                            || ॐ श्री गणेशाय नमः ||
                        </motion.h2>
                    </motion.div>

                    {/* Sacred Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                        <Flower2 className="w-8 h-8 text-amber-300" />
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                    </motion.div>

                    {/* Couple Names - Divine Style */}
                    <div className="relative z-20 my-12">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            {/* GROOM NAME */}
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "backOut" }}
                            >
                                <h1 className={`${playfair.className} text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 drop-shadow-[0_0_40px_rgba(251,191,36,0.9)] leading-tight`}>
                                    {invitation.groom}
                                </h1>
                            </motion.div>

                            {/* Sacred Symbol Divider */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex items-center justify-center gap-6 my-8"
                            >
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="w-16 h-16 border-2 border-amber-300/50 border-dashed rounded-full flex items-center justify-center"
                                >
                                    <Heart className="w-8 h-8 text-red-400 fill-red-400" />
                                </motion.div>
                            </motion.div>

                            {/* BRIDE NAME */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: "backOut" }}
                            >
                                <h1 className={`${playfair.className} text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-pink-200 to-red-200 drop-shadow-[0_0_40px_rgba(239,68,68,0.9)] leading-tight`}>
                                    {invitation.bride}
                                </h1>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Divine Blessing */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className={`${cormorant.className} text-2xl md:text-4xl text-amber-100 italic max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg`}
                    >
                        "{invitation.story}"
                    </motion.p>

                    {/* Date Card - Temple Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="mt-16 mx-auto max-w-2xl"
                    >
                        <div className="relative bg-gradient-to-br from-amber-800/60 to-red-900/60 backdrop-blur-md border-2 border-amber-400/50 rounded-3xl p-10 md:p-14 shadow-2xl">
                            {/* Decorative Corners */}
                            <div className="absolute top-4 left-4 w-16 h-16">
                                <Flower2 className="w-full h-full text-amber-400/40" />
                            </div>
                            <div className="absolute top-4 right-4 w-16 h-16">
                                <Flower2 className="w-full h-full text-amber-400/40 transform scale-x-[-1]" />
                            </div>
                            <div className="absolute bottom-4 left-4 w-16 h-16">
                                <Flower2 className="w-full h-full text-amber-400/40 transform scale-y-[-1]" />
                            </div>
                            <div className="absolute bottom-4 right-4 w-16 h-16">
                                <Flower2 className="w-full h-full text-amber-400/40 transform scale-[-1]" />
                            </div>

                            <div className="text-center space-y-4 relative z-10">
                                <p className={`${cinzel.className} text-lg font-semibold text-amber-200 tracking-[0.3em] uppercase`}>
                                    {invitation.day}
                                </p>
                                <h3 className={`${playfair.className} text-5xl md:text-6xl font-bold text-white drop-shadow-lg`}>
                                    {invitation.date}
                                </h3>
                                <div className="flex items-center justify-center gap-6 pt-4">
                                    <div className="text-center">
                                        <p className="text-sm text-amber-300 uppercase tracking-wider mb-1">Temple Ceremony</p>
                                        <p className={`${lora.className} text-2xl font-bold text-white`}>{invitation.ceremonyTime}</p>
                                    </div>
                                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-300 to-transparent" />
                                    <div className="text-center">
                                        <p className="text-sm text-amber-300 uppercase tracking-wider mb-1">Reception</p>
                                        <p className={`${lora.className} text-2xl font-bold text-white`}>{invitation.receptionTime}</p>
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
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-200/70 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest font-semibold">Scroll to Continue</span>
                    <div className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-amber-300 rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- COUPLE SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-orange-100 to-red-100">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${cinzel.className} text-center text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-700 mb-20 tracking-wider font-bold`}
                    >
                        The Sacred Union
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
                                <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-amber-600 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                                    <Image src={invitation.groomImg} fill alt="Groom" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <h3 className={`${playfair.className} text-3xl font-bold`}>{invitation.groom}</h3>
                                        <p className="text-sm text-orange-200">The Groom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">🙏</div>
                                <h4 className={`${cinzel.className} text-2xl font-bold text-orange-700`}>Devoted Soul</h4>
                                <p className="text-gray-600 max-w-xs mx-auto">Seeking divine blessings for eternal love.</p>
                            </div>
                        </motion.div>

                        {/* Center - Temple Bell */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center space-y-8"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-9xl filter drop-shadow-2xl"
                            >
                                🔔
                            </motion.div>
                            <h3 className={`${playfair.className} text-4xl md:text-5xl text-orange-700 italic`}>
                                Divine Blessings
                            </h3>
                            <p className={`${lora.className} text-xl text-gray-700 max-w-md mx-auto leading-relaxed`}>
                                In the sacred temple, blessed by the gods, two hearts become one in eternal devotion.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
                                <Flower2 className="w-8 h-8 text-red-500 animate-bounce" />
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
                                <div className="absolute -inset-4 bg-gradient-to-br from-red-400 to-pink-600 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                                    <Image src={invitation.brideImg} fill alt="Bride" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <h3 className={`${playfair.className} text-3xl font-bold`}>{invitation.bride}</h3>
                                        <p className="text-sm text-pink-200">The Bride</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">🙏</div>
                                <h4 className={`${cinzel.className} text-2xl font-bold text-red-700`}>Pure Heart</h4>
                                <p className="text-gray-600 max-w-xs mx-auto">Embracing sacred vows with grace.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- RITUALS SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-amber-900 to-red-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${cinzel.className} text-center text-4xl md:text-6xl text-amber-200 mb-20 tracking-wider font-bold drop-shadow-lg`}
                    >
                        Sacred Rituals
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { emoji: "🪔", title: "Ganesh Puja", time: "December 19 • 6:00 PM", desc: "Invoking Lord Ganesha's blessings for a blessed beginning." },
                            { emoji: "💐", title: "Garland Exchange", time: "December 20 • 9:30 AM", desc: "The sacred exchange of flower garlands symbolizing acceptance." },
                            { emoji: "🔥", title: "Saptapadi", time: "December 20 • 10:00 AM", desc: "Seven sacred steps around the holy fire, binding souls forever." },
                            { emoji: "🎊", title: "Blessings & Feast", time: "December 20 • 6:00 PM", desc: "Celebrating with family, friends, and divine blessings." },
                        ].map((ritual, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/10 backdrop-blur-md border-2 border-amber-400/30 rounded-3xl p-8 hover:border-amber-400 transition-all duration-300"
                            >
                                <div className="text-6xl mb-4">{ritual.emoji}</div>
                                <h3 className={`${cinzel.className} text-3xl text-amber-200 mb-2 font-bold`}>{ritual.title}</h3>
                                <p className="text-orange-300 text-sm mb-4">{ritual.time}</p>
                                <p className="text-white/90 leading-relaxed">{ritual.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VENUE SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-orange-50 to-amber-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-orange-600 to-red-700 p-1 rounded-[3rem] shadow-2xl">
                        <div className="bg-white rounded-[calc(3rem-4px)] p-12 md:p-16 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="inline-block mb-6"
                                >
                                    <MapPin className="w-16 h-16 text-orange-600" />
                                </motion.div>

                                <h2 className={`${cinzel.className} text-2xl text-orange-700 tracking-wider uppercase mb-4 font-bold`}>
                                    Sacred Venue
                                </h2>

                                <div className="flex items-center justify-center gap-4 my-6">
                                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-400" />
                                    <Flower2 className="w-6 h-6 text-orange-500" />
                                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-400" />
                                </div>

                                <h3 className={`${playfair.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-6 leading-tight`}>
                                    {invitation.venue}
                                </h3>

                                <p className={`${lora.className} text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed`}>
                                    {invitation.address}
                                </p>

                                <Link href="https://maps.google.com" target="_blank">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
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
            <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-amber-100 py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />

                <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="text-8xl mb-4"
                    >
                        🕉️
                    </motion.div>

                    <h2 className={`${playfair.className} text-5xl md:text-6xl text-amber-200 mb-4 italic`}>
                        With Gratitude
                    </h2>

                    <p className={`${cormorant.className} text-2xl text-amber-200/90 italic`}>
                        Your presence will sanctify our sacred union
                    </p>

                    <div className="flex justify-center gap-4 text-4xl">
                        <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>🪔</motion.span>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>🙏</motion.span>
                        <motion.span animate={{ rotate: [360, 0] }} transition={{ duration: 3, repeat: Infinity }}>🪔</motion.span>
                    </div>

                    <div className="h-px w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-8" />

                    <p className="text-sm text-amber-300/60 uppercase tracking-[0.4em]">
                        || ॐ शांति शांति शांतिः ||<br />
                        Kumar & Iyer Families
                    </p>
                </div>
            </footer>
        </div>
    );
}
