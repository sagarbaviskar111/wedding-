"use client";

import { Playfair_Display, Cinzel, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import { MapPin, Crown, Star, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RoyalRajwadaTemplate({ id }: { id: string }) {

    // Default data for Royal Rajwada Theme
    const invitation = {
        groom: "Maharaj Vikram Singh",
        bride: "Rajkumari Ananya",
        date: "February 28, 2026",
        day: "Saturday",
        ceremonyTime: "11:00 AM",
        receptionTime: "7:30 PM",
        venue: "City Palace, Udaipur",
        address: "Pichola Lake, Old City, Udaipur, Rajasthan 313001",
        story: "A royal union blessed by the gods, celebrated in the grandeur of Rajputana heritage.",
        coverImage: "https://images.unsplash.com/photo-1510076857177-be9caa1c5307?auto=format&fit=crop&q=80&w=1600",
        groomImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        brideImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-950 via-red-950 to-purple-950 text-amber-100 overflow-x-hidden selection:bg-amber-500">

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-black/60 text-amber-300 rounded-full backdrop-blur-md shadow-2xl border-2 border-amber-500/30 hover:bg-amber-900/40 transition-all font-bold">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </Link>
            </div>

            {/* --- HERO SECTION: MAJESTIC PALACE --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background with Palace */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={invitation.coverImage}
                        alt="Royal Palace"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/50 to-amber-950/90" />

                    {/* Animated Golden Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 0 }}
                                animate={{
                                    y: window.innerHeight + 100,
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                }}
                                className="absolute w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                            />
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto">

                    {/* Royal Crown Animation */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Crown className="w-24 h-24 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] mx-auto" strokeWidth={1.5} />
                            </motion.div>
                            {/* Glow Effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="absolute inset-0 bg-amber-400/30 blur-2xl rounded-full"
                            />
                        </div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`${cinzel.className} text-amber-300 text-xl md:text-2xl font-bold mt-6 tracking-[0.5em] uppercase drop-shadow-lg`}
                        >
                            Royal Wedding Invitation
                        </motion.h2>
                    </motion.div>

                    {/* Ornamental Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                        <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                    </motion.div>

                    {/* Couple Names - Royal Style */}
                    <div className="relative z-20 my-12">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            {/* Decorative Frame */}
                            <div className="relative inline-block">
                                {/* Corner Ornaments */}
                                <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-amber-400/60 rounded-tl-3xl" />
                                <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-amber-400/60 rounded-tr-3xl" />
                                <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-amber-400/60 rounded-bl-3xl" />
                                <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-amber-400/60 rounded-br-3xl" />

                                <div className="px-16 py-8">
                                    {/* GROOM NAME */}
                                    <motion.div
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1, ease: "backOut" }}
                                    >
                                        <h1 className={`${greatVibes.className} text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 drop-shadow-[0_0_30px_rgba(251,191,36,0.9)] leading-tight`}>
                                            {invitation.groom}
                                        </h1>
                                    </motion.div>

                                    {/* Decorative Divider */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.6, duration: 0.8 }}
                                        className="flex items-center justify-center gap-4 my-6"
                                    >
                                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Heart className="w-10 h-10 text-red-500 fill-red-500" />
                                        </motion.div>
                                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                                    </motion.div>

                                    {/* BRIDE NAME */}
                                    <motion.div
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
                                    >
                                        <h1 className={`${greatVibes.className} text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 drop-shadow-[0_0_30px_rgba(251,113,133,0.9)] leading-tight`}>
                                            {invitation.bride}
                                        </h1>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Royal Story */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className={`${cormorant.className} text-2xl md:text-3xl text-amber-200 italic max-w-3xl mx-auto leading-relaxed mb-12`}
                    >
                        "{invitation.story}"
                    </motion.p>

                    {/* Date Card - Royal Scroll */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="mt-16 mx-auto max-w-2xl"
                    >
                        <div className="relative bg-gradient-to-br from-amber-900/80 via-red-900/80 to-purple-900/80 backdrop-blur-md border-2 border-amber-500/50 rounded-3xl p-10 md:p-14 shadow-2xl">
                            {/* Corner Decorations */}
                            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-400 rounded-tl-2xl" />
                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-400 rounded-tr-2xl" />
                            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-400 rounded-bl-2xl" />
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-400 rounded-br-2xl" />

                            <div className="text-center space-y-4 relative z-10">
                                <p className={`${cinzel.className} text-lg font-semibold text-amber-300 tracking-[0.3em] uppercase`}>
                                    {invitation.day}
                                </p>
                                <h3 className={`${playfair.className} text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300`}>
                                    {invitation.date}
                                </h3>
                                <div className="flex items-center justify-center gap-6 pt-4">
                                    <div className="text-center">
                                        <p className="text-sm text-amber-400 uppercase tracking-wider mb-1">Ceremony</p>
                                        <p className={`${cormorant.className} text-2xl font-bold text-white`}>{invitation.ceremonyTime}</p>
                                    </div>
                                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
                                    <div className="text-center">
                                        <p className="text-sm text-amber-400 uppercase tracking-wider mb-1">Reception</p>
                                        <p className={`${cormorant.className} text-2xl font-bold text-white`}>{invitation.receptionTime}</p>
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
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-300/70 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest font-bold">Scroll to Explore</span>
                    <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- COUPLE SECTION WITH ROYAL PORTRAITS --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-amber-900/30 to-purple-900/30 backdrop-blur-sm">
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${cinzel.className} text-center text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-20 tracking-wider font-bold`}
                    >
                        The Royal Couple
                    </motion.h2>

                    <div className="grid lg:grid-cols-3 gap-16 items-center">
                        {/* Groom Portrait */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-6 group"
                        >
                            <div className="relative w-80 h-96 mx-auto">
                                {/* Ornate Frame */}
                                <div className="absolute -inset-6 bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" />
                                <div className="absolute -inset-3 bg-gradient-to-br from-amber-900 to-red-900 rounded-[3.5rem] rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-amber-300 shadow-2xl">
                                    <Image src={invitation.groomImg} fill alt="Groom" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <Crown className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                                        <h3 className={`${playfair.className} text-3xl font-bold`}>{invitation.groom.split(' ').slice(-2).join(' ')}</h3>
                                        <p className="text-sm text-amber-300">The Groom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">🤴</div>
                                <h4 className={`${cinzel.className} text-2xl font-bold text-amber-300`}>Maharaj</h4>
                                <p className="text-amber-200/80 max-w-xs mx-auto">Heir to the royal throne, carrying forward the legacy of valor and honor.</p>
                            </div>
                        </motion.div>

                        {/* Center - Royal Emblem */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center space-y-8"
                        >
                            {/* Animated Royal Emblem */}
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 30,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="w-32 h-32 mx-auto border-4 border-amber-400/30 border-dashed rounded-full"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Crown className="w-16 h-16 text-amber-400 fill-amber-400/20" strokeWidth={1.5} />
                                </motion.div>
                            </div>
                            <h3 className={`${playfair.className} text-4xl md:text-5xl font-bold text-amber-300`}>
                                Royal <span className="text-red-400 italic">Union</span>
                            </h3>
                            <p className={`${cormorant.className} text-2xl text-amber-200/80 italic max-w-md mx-auto`}>
                                "Blessed by the gods, witnessed by the stars, united in eternal love."
                            </p>
                            <div className="flex justify-center gap-4">
                                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                                <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-bounce" />
                                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                            </div>
                        </motion.div>

                        {/* Bride Portrait */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-6 group"
                        >
                            <div className="relative w-80 h-96 mx-auto">
                                {/* Ornate Frame */}
                                <div className="absolute -inset-6 bg-gradient-to-br from-pink-500 via-rose-600 to-red-700 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" />
                                <div className="absolute -inset-3 bg-gradient-to-br from-purple-900 to-pink-900 rounded-[3.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-pink-300 shadow-2xl">
                                    <Image src={invitation.brideImg} fill alt="Bride" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <Crown className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                                        <h3 className={`${playfair.className} text-3xl font-bold`}>{invitation.bride}</h3>
                                        <p className="text-sm text-pink-300">The Bride</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">👸</div>
                                <h4 className={`${cinzel.className} text-2xl font-bold text-pink-300`}>Rajkumari</h4>
                                <p className="text-amber-200/80 max-w-xs mx-auto">Princess of grace and beauty, embodying the elegance of royal heritage.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- EVENTS TIMELINE --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-red-950/50 to-purple-950/50">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${cinzel.className} text-center text-4xl md:text-6xl text-amber-300 mb-20 tracking-wider font-bold`}
                    >
                        Royal Ceremonies
                    </motion.h2>

                    <div className="space-y-16">
                        {/* Mehendi */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-amber-900/40 to-transparent backdrop-blur-sm border-l-4 border-amber-500 rounded-r-3xl p-8 hover:from-amber-900/60 transition-all duration-300"
                        >
                            <div className="text-7xl">🎨</div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className={`${playfair.className} text-3xl md:text-4xl text-amber-300 mb-2`}>Mehendi Rasam</h3>
                                <p className={`${cinzel.className} text-sm text-amber-400/80 tracking-widest mb-3`}>February 27, 2026 • 5:00 PM</p>
                                <p className="text-amber-200/80 leading-relaxed">The royal courtyard adorned with marigolds as henna artists create intricate designs, celebrating the bride's journey.</p>
                            </div>
                        </motion.div>

                        {/* Sangeet */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse items-center gap-8 bg-gradient-to-l from-purple-900/40 to-transparent backdrop-blur-sm border-r-4 border-purple-500 rounded-l-3xl p-8 hover:from-purple-900/60 transition-all duration-300"
                        >
                            <div className="text-7xl">🎵</div>
                            <div className="flex-1 text-center md:text-right">
                                <h3 className={`${playfair.className} text-3xl md:text-4xl text-purple-300 mb-2`}>Sangeet Sandhya</h3>
                                <p className={`${cinzel.className} text-sm text-purple-400/80 tracking-widest mb-3`}>February 27, 2026 • 8:00 PM</p>
                                <p className="text-amber-200/80 leading-relaxed">An evening of royal performances, classical music, and dance as both families celebrate in grand style.</p>
                            </div>
                        </motion.div>

                        {/* Wedding */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-red-900/40 to-transparent backdrop-blur-sm border-l-4 border-red-500 rounded-r-3xl p-8 hover:from-red-900/60 transition-all duration-300"
                        >
                            <div className="text-7xl">💒</div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className={`${playfair.className} text-3xl md:text-4xl text-red-300 mb-2`}>Royal Wedding</h3>
                                <p className={`${cinzel.className} text-sm text-red-400/80 tracking-widest mb-3`}>February 28, 2026 • 11:00 AM</p>
                                <p className="text-amber-200/80 leading-relaxed">The sacred union under the royal mandap, blessed by priests and witnessed by the divine presence.</p>
                            </div>
                        </motion.div>

                        {/* Reception */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse items-center gap-8 bg-gradient-to-l from-amber-900/40 to-transparent backdrop-blur-sm border-r-4 border-amber-500 rounded-l-3xl p-8 hover:from-amber-900/60 transition-all duration-300"
                        >
                            <div className="text-7xl">🎊</div>
                            <div className="flex-1 text-center md:text-right">
                                <h3 className={`${playfair.className} text-3xl md:text-4xl text-amber-300 mb-2`}>Grand Reception</h3>
                                <p className={`${cinzel.className} text-sm text-amber-400/80 tracking-widest mb-3`}>February 28, 2026 • 7:30 PM</p>
                                <p className="text-amber-200/80 leading-relaxed">A magnificent celebration with royal feast, music, and dance in the palace's grand hall.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- VENUE SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-black/80 to-purple-950/80">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <div className="relative bg-gradient-to-br from-amber-900/60 to-red-900/60 backdrop-blur-md border-2 border-amber-500/50 rounded-[3rem] p-12 md:p-16 shadow-2xl">
                        {/* Ornate Corners */}
                        <div className="absolute top-6 left-6 w-20 h-20 border-t-4 border-l-4 border-amber-400 rounded-tl-3xl" />
                        <div className="absolute top-6 right-6 w-20 h-20 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl" />
                        <div className="absolute bottom-6 left-6 w-20 h-20 border-b-4 border-l-4 border-amber-400 rounded-bl-3xl" />
                        <div className="absolute bottom-6 right-6 w-20 h-20 border-b-4 border-r-4 border-amber-400 rounded-br-3xl" />

                        <div className="text-center relative z-10">
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
                                <MapPin className="w-16 h-16 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
                            </motion.div>

                            <h2 className={`${cinzel.className} text-2xl text-amber-300 tracking-[0.5em] uppercase mb-4`}>
                                The Royal Venue
                            </h2>

                            <div className="flex items-center justify-center gap-4 my-6">
                                <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400" />
                                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                                <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400" />
                            </div>

                            <h3 className={`${playfair.className} text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 mb-6 leading-tight`}>
                                {invitation.venue}
                            </h3>

                            <p className={`${cormorant.className} text-amber-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed`}>
                                {invitation.address}
                            </p>

                            <Link href="https://maps.google.com" target="_blank">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 text-lg border-2 border-amber-400"
                                >
                                    Get Directions 📍
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-gradient-to-br from-black via-amber-950 to-purple-950 text-amber-200 py-16 text-center relative overflow-hidden border-t-2 border-amber-500/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />

                {/* Floating Crowns */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-10 left-20 opacity-20"
                >
                    <Crown className="w-16 h-16 text-amber-400" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-20 right-20 opacity-20"
                >
                    <Crown className="w-16 h-16 text-amber-400" />
                </motion.div>

                <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <Crown className="w-20 h-20 mx-auto text-amber-400 mb-4" />
                    </motion.div>

                    <h2 className={`${greatVibes.className} text-6xl md:text-7xl text-amber-300 mb-4`}>
                        Thank You
                    </h2>

                    <p className={`${cormorant.className} text-2xl text-amber-200/80 italic`}>
                        Your presence will make our royal celebration complete
                    </p>

                    <div className="flex justify-center gap-4 text-4xl">
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>✨</motion.span>
                        <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>👑</motion.span>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>✨</motion.span>
                    </div>

                    <div className="h-px w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-8" />

                    <p className="text-sm text-amber-300/60 uppercase tracking-[0.4em]">
                        With Royal Blessings<br />
                        The Royal Families
                    </p>
                </div>
            </footer>
        </div>
    );
}
