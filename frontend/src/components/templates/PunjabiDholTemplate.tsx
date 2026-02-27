"use client";

import { Playfair_Display, Poppins, Bebas_Neue, Dancing_Script } from "next/font/google";
import { MapPin, Music, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const dancingScript = Dancing_Script({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function PunjabiDholTemplate({ id }: { id: string }) {

    // Default data for Punjabi Dhol Theme
    const invitation = {
        groom: "Rajveer Singh",
        bride: "Simran Kaur",
        date: "March 25, 2026",
        day: "Wednesday",
        ceremonyTime: "11:00 AM",
        receptionTime: "8:00 PM",
        venue: "The Grand Haveli, Amritsar",
        address: "GT Road, Near Golden Temple, Amritsar, Punjab 143001",
        story: "Balle Balle! Two hearts unite in a celebration of love, laughter, and dhol beats!",
        coverImage: "https://images.unsplash.com/photo-1587271407850-8d438913d2cd?auto=format&fit=crop&q=80&w=1600",
        groomImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        brideImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 text-amber-900 overflow-x-hidden selection:bg-orange-200">

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

            {/* --- HERO SECTION: DHOL BEATS --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={invitation.coverImage}
                        alt="Punjabi Wedding"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 via-transparent to-green-900/80" />

                    {/* Animated Circles (Dhol Beats Visualization) */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-500/20 blur-3xl"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto">

                    {/* Dhol Icon Animation */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            {/* 3D Dhol */}
                            <motion.div
                                animate={{
                                    rotateY: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-9xl filter drop-shadow-2xl"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                🥁
                            </motion.div>
                            {/* Beat Waves */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.8, 0, 0.8],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                                className="absolute inset-0 border-4 border-orange-400 rounded-full"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.8, 1],
                                    opacity: [0.6, 0, 0.6],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: 0.3
                                }}
                                className="absolute inset-0 border-4 border-yellow-400 rounded-full"
                            />
                        </div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-white text-2xl md:text-3xl font-bold mt-6 tracking-widest uppercase drop-shadow-lg"
                        >
                            ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ • ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ
                        </motion.h2>
                    </motion.div>

                    {/* Couple Names with Bhangra Energy */}
                    <div className="relative z-20 my-12">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* GROOM NAME */}
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "backOut" }}
                            >
                                <h1 className={`${bebasNeue.className} text-7xl md:text-9xl lg:text-[12rem] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.8)] leading-none tracking-wider animate-pulse`}>
                                    {invitation.groom}
                                </h1>
                            </motion.div>

                            {/* Decorative Divider with Music Notes */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                                className="flex items-center justify-center gap-6 my-6"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    <Music className="w-12 h-12 text-yellow-300 drop-shadow-lg" />
                                </motion.div>
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
                                    <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
                                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
                                </div>
                                <motion.div
                                    animate={{ rotate: [360, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    <Music className="w-12 h-12 text-yellow-300 drop-shadow-lg" />
                                </motion.div>
                            </motion.div>

                            {/* BRIDE NAME */}
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
                            >
                                <h1 className={`${bebasNeue.className} text-7xl md:text-9xl lg:text-[12rem] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-300 to-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,0.8)] leading-none tracking-wider animate-pulse`}>
                                    {invitation.bride}
                                </h1>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Balle Balle Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-8"
                    >
                        <h3 className={`${dancingScript.className} text-4xl md:text-6xl text-white drop-shadow-lg mb-4`}>
                            {invitation.story}
                        </h3>
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                            className={`${bebasNeue.className} text-6xl md:text-8xl text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.9)] tracking-widest`}
                        >
                            BALLE BALLE!
                        </motion.div>
                    </motion.div>

                    {/* Date Card with Punjabi Flair */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mt-16 mx-auto max-w-2xl"
                    >
                        <div className="relative bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500 p-1 rounded-3xl shadow-2xl">
                            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden">
                                {/* Decorative Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div className="text-8xl">🌻</div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                                    <div className="text-8xl">🌾</div>
                                </div>

                                <div className="relative z-10 text-center space-y-4">
                                    <p className={`${poppins.className} text-lg font-semibold text-orange-600 tracking-widest uppercase`}>
                                        {invitation.day}
                                    </p>
                                    <h3 className={`${bebasNeue.className} text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 tracking-wider`}>
                                        {invitation.date}
                                    </h3>
                                    <div className="flex items-center justify-center gap-4 pt-4">
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500 uppercase tracking-wider">Ceremony</p>
                                            <p className={`${poppins.className} text-2xl font-bold text-orange-600`}>{invitation.ceremonyTime}</p>
                                        </div>
                                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-orange-400 to-transparent" />
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500 uppercase tracking-wider">Reception</p>
                                            <p className={`${poppins.className} text-2xl font-bold text-green-600`}>{invitation.receptionTime}</p>
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

            {/* --- COUPLE SECTION WITH BHANGRA/GIDDHA --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-yellow-100 via-orange-100 to-green-100">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 text-6xl opacity-20 animate-spin-slow">🌻</div>
                <div className="absolute top-20 right-20 text-6xl opacity-20 animate-bounce">🎺</div>
                <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-pulse">🥁</div>

                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${bebasNeue.className} text-center text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 mb-20 tracking-wider`}
                    >
                        The Happy Couple
                    </motion.h2>

                    <div className="grid lg:grid-cols-3 gap-16 items-center">
                        {/* Groom - Bhangra Pose */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-6 group"
                        >
                            <div className="relative w-72 h-96 mx-auto">
                                {/* Decorative Border */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-[3rem] rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                                    <Image src={invitation.groomImg} fill alt="Groom" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <h3 className={`${bebasNeue.className} text-4xl tracking-wider`}>{invitation.groom}</h3>
                                        <p className="text-sm text-orange-200">The Groom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">🕺</div>
                                <h4 className={`${poppins.className} text-2xl font-bold text-orange-600`}>Bhangra King</h4>
                                <p className="text-gray-600 max-w-xs mx-auto">Ready to dance his way into forever!</p>
                            </div>
                        </motion.div>

                        {/* Center - Dhol & Hearts */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center space-y-8"
                        >
                            {/* Animated Dhol */}
                            <motion.div
                                animate={{
                                    rotateZ: [-5, 5, -5],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-9xl filter drop-shadow-2xl"
                            >
                                🥁
                            </motion.div>
                            <h3 className={`${dancingScript.className} text-5xl text-orange-600`}>
                                United by Love
                            </h3>
                            <p className={`${poppins.className} text-xl text-gray-700 max-w-md mx-auto leading-relaxed`}>
                                Two souls dancing to the rhythm of eternal love, blessed by the beats of the dhol!
                            </p>
                            <div className="flex justify-center gap-4">
                                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                                <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-bounce" />
                                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                            </div>
                        </motion.div>

                        {/* Bride - Giddha Pose */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-6 group"
                        >
                            <div className="relative w-72 h-96 mx-auto">
                                {/* Decorative Border */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-green-400 to-yellow-400 rounded-[3rem] -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                                    <Image src={invitation.brideImg} fill alt="Bride" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent" />
                                    <div className="absolute bottom-6 left-0 w-full text-white">
                                        <h3 className={`${bebasNeue.className} text-4xl tracking-wider`}>{invitation.bride}</h3>
                                        <p className="text-sm text-green-200">The Bride</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">💃</div>
                                <h4 className={`${poppins.className} text-2xl font-bold text-green-600`}>Giddha Queen</h4>
                                <p className="text-gray-600 max-w-xs mx-auto">Twirling into a new chapter of life!</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- EVENTS SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-orange-900 via-red-900 to-green-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${bebasNeue.className} text-center text-5xl md:text-7xl text-yellow-300 mb-20 tracking-wider drop-shadow-lg`}
                    >
                        Wedding Celebrations
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mehendi */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md border-2 border-yellow-400/30 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300 group"
                        >
                            <div className="text-6xl mb-4">🎨</div>
                            <h3 className={`${bebasNeue.className} text-4xl text-yellow-300 mb-2 tracking-wider`}>Mehendi Ceremony</h3>
                            <p className="text-orange-200 text-sm mb-4">March 24, 2026 • 4:00 PM</p>
                            <p className="text-white/80 leading-relaxed">
                                Intricate henna designs, colorful decorations, and joyful songs fill the air as we celebrate with mehendi!
                            </p>
                        </motion.div>

                        {/* Sangeet */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/10 backdrop-blur-md border-2 border-orange-400/30 rounded-3xl p-8 hover:border-orange-400 transition-all duration-300 group"
                        >
                            <div className="text-6xl mb-4">🎵</div>
                            <h3 className={`${bebasNeue.className} text-4xl text-orange-300 mb-2 tracking-wider`}>Sangeet Night</h3>
                            <p className="text-orange-200 text-sm mb-4">March 24, 2026 • 8:00 PM</p>
                            <p className="text-white/80 leading-relaxed">
                                Dance, music, and dhol beats! Join us for an unforgettable night of Punjabi celebration!
                            </p>
                        </motion.div>

                        {/* Wedding Ceremony */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-md border-2 border-red-400/30 rounded-3xl p-8 hover:border-red-400 transition-all duration-300 group"
                        >
                            <div className="text-6xl mb-4">💒</div>
                            <h3 className={`${bebasNeue.className} text-4xl text-red-300 mb-2 tracking-wider`}>Anand Karaj</h3>
                            <p className="text-orange-200 text-sm mb-4">March 25, 2026 • 11:00 AM</p>
                            <p className="text-white/80 leading-relaxed">
                                The sacred union blessed in the presence of Guru Granth Sahib Ji. Join us for this holy ceremony.
                            </p>
                        </motion.div>

                        {/* Reception */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/10 backdrop-blur-md border-2 border-green-400/30 rounded-3xl p-8 hover:border-green-400 transition-all duration-300 group"
                        >
                            <div className="text-6xl mb-4">🎉</div>
                            <h3 className={`${bebasNeue.className} text-4xl text-green-300 mb-2 tracking-wider`}>Grand Reception</h3>
                            <p className="text-orange-200 text-sm mb-4">March 25, 2026 • 8:00 PM</p>
                            <p className="text-white/80 leading-relaxed">
                                Celebrate with us! Dinner, dancing, and endless dhol beats await you at the grand reception!
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- VENUE SECTION --- */}
            <section className="py-24 px-6 relative bg-gradient-to-br from-yellow-50 to-orange-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500 p-1 rounded-[3rem] shadow-2xl">
                        <div className="bg-white rounded-[calc(3rem-4px)] p-12 md:p-16 text-center relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                                <div className="text-[20rem] absolute -top-20 -left-20">🌻</div>
                                <div className="text-[20rem] absolute -bottom-20 -right-20">🥁</div>
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="inline-block mb-6"
                                >
                                    <MapPin className="w-16 h-16 text-orange-600" />
                                </motion.div>

                                <h2 className={`${bebasNeue.className} text-3xl text-orange-600 tracking-[0.3em] uppercase mb-4`}>
                                    Join Us At
                                </h2>

                                <div className="flex items-center justify-center gap-4 my-6">
                                    <div className="h-1 w-16 bg-gradient-to-r from-transparent to-orange-400 rounded-full" />
                                    <Sparkles className="w-6 h-6 text-yellow-500" />
                                    <div className="h-1 w-16 bg-gradient-to-l from-transparent to-orange-400 rounded-full" />
                                </div>

                                <h3 className={`${playfair.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 mb-6 leading-tight`}>
                                    {invitation.venue}
                                </h3>

                                <p className={`${poppins.className} text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed`}>
                                    {invitation.address}
                                </p>

                                <Link href="https://maps.google.com" target="_blank">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
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
            <footer className="bg-gradient-to-br from-orange-900 via-red-900 to-green-900 text-yellow-100 py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />

                {/* Floating Emojis */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 left-20 text-6xl opacity-30"
                >
                    🥁
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-20 right-20 text-6xl opacity-30"
                >
                    🌻
                </motion.div>

                <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <h2 className={`${bebasNeue.className} text-6xl md:text-8xl text-yellow-300 tracking-wider mb-4`}>
                            BALLE BALLE!
                        </h2>
                    </motion.div>

                    <h3 className={`${dancingScript.className} text-4xl md:text-5xl text-white`}>
                        Thank You!
                    </h3>

                    <p className={`${poppins.className} text-orange-200 text-lg`}>
                        We can't wait to celebrate with you!
                    </p>

                    <div className="flex justify-center gap-3 text-4xl">
                        <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1, repeat: Infinity }}>🎵</motion.span>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>❤️</motion.span>
                        <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>🎵</motion.span>
                    </div>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto my-6" />

                    <p className="text-sm text-orange-200/60 uppercase tracking-[0.3em]">
                        With Love & Blessings<br />
                        Singh & Kaur Families
                    </p>
                </div>
            </footer>

            {/* Custom Animations */}
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
