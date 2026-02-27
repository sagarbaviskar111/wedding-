"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Great_Vibes, Cormorant_Garamond, Montserrat, Quicksand } from "next/font/google";
import { Flower2, Heart, Music, Clock, MapPin, Sparkles, Stars } from "lucide-react";
import { useState, useEffect } from "react";

// Fonts
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function FloralTemplate({ id }: { id: string }) {

    const invitation = {
        groom: "Arjun",
        bride: "Ananya",
        date: "April 20, 2026",
        day: "Sunday",
        ceremonyTime: "11:00 AM",
        receptionTime: "6:00 PM",
        venue: "Rose Garden Estate",
        address: "123 Blossom Lane, Heritage Valley, Udaipur",
        coverImage: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1920&auto=format&fit=crop",
        groomImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
        brideImg: "https://images.unsplash.com/photo-1525757530655-2595563a6234?auto=format&fit=crop&q=80&w=800",
    };

    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    // Floating Elements Configuration
    const floatingElements = Array.from({ length: 20 });

    // Mouse Trail State & Client Mounting
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className={`min-h-screen bg-[#fff5f7] text-[#5d4037] ${quicksand.className} relative overflow-hidden selection:bg-pink-200`}>

            {/* Custom Cute Cursor (visible on larger screens) */}
            <motion.div
                className="fixed w-6 h-6 border-2 border-pink-400 rounded-full pointer-events-none z-[100] hidden md:block"
                animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
                transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.1 }}
            >
                <div className="w-2 h-2 bg-pink-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
            </motion.div>

            {/* Background Texture & Gradient */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-50 opacity-80" />
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
            </div>

            {/* Floating Hearts & Flowers Animation */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {isMounted && floatingElements.map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "110vh", x: Math.random() * 100 + "%", opacity: 0, scale: 0 }}
                        animate={{
                            y: "-10vh",
                            x: `calc(${Math.random() * 100}% + ${Math.random() * 100 - 50}px)`,
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            delay: Math.random() * 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute text-pink-200"
                    >
                        {i % 2 === 0 ? <Heart fill="currentColor" size={Math.random() * 20 + 10} /> : <Flower2 size={Math.random() * 24 + 12} />}
                    </motion.div>
                ))}
            </div>

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-6 py-3 bg-white/70 text-pink-700 rounded-full backdrop-blur-md shadow-lg border-2 border-pink-100 hover:bg-pink-50 hover:scale-105 transition-all font-bold">
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

            {/* --- HERO SECTION: DREAMY LOVE --- */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Parallax Background Image */}
                <motion.div style={{ y: yHero, scale: scaleHero }} className="absolute inset-0 z-0">
                    <Image src={invitation.coverImage} fill alt="Background" className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fff5f7] via-transparent to-[#fff5f7]" />
                </motion.div>

                {/* Main Content */}
                <div className="relative z-10 w-full">

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-8 inline-block"
                    >
                        <Sparkles className="text-pink-400 w-12 h-12 mx-auto animate-pulse" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="bg-white/40 backdrop-blur-sm p-10 rounded-[4rem] border-4 border-white shadow-xl inline-block"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`${quicksand.className} text-pink-500 tracking-[0.2em] font-bold uppercase text-sm mb-4`}
                        >
                            The Wedding Of
                        </motion.p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                            {/* Bride Name */}
                            <motion.h1
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className={`${greatVibes.className} text-7xl md:text-9xl text-pink-600 drop-shadow-sm leading-tight hover:scale-110 transition-transform cursor-default relative group`}
                            >
                                {invitation.bride}
                                <span className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity text-pink-300"><Heart fill="currentColor" size={30} /></span>
                            </motion.h1>

                            {/* Cute Ampersand Animation */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-3xl font-serif italic shadow-inner border border-pink-200"
                            >
                                &
                            </motion.div>

                            {/* Groom Name */}
                            <motion.h1
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className={`${greatVibes.className} text-7xl md:text-9xl text-pink-600 drop-shadow-sm leading-tight hover:scale-110 transition-transform cursor-default relative group`}
                            >
                                {invitation.groom}
                                <span className="absolute -top-4 -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-pink-300"><Heart fill="currentColor" size={30} /></span>
                            </motion.h1>
                        </div>
                    </motion.div>

                    {/* Bouncing Date */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, type: "spring", bounce: 0.6 }}
                        className="mt-12 flex justify-center items-center gap-2"
                    >
                        <Heart className="text-pink-400 animate-bounce" fill="currentColor" size={24} />
                        <span className={`${cormorant.className} text-3xl md:text-4xl font-bold text-[#8d6e63] border-b-2 border-pink-300 pb-1`}>
                            {invitation.date}
                        </span>
                        <Heart className="text-pink-400 animate-bounce" fill="currentColor" size={24} style={{ animationDelay: "0.2s" }} />
                    </motion.div>
                </div>
            </section>

            {/* --- SWINGING PHOTO LOCKETS --- */}
            <section className="py-32 px-6 relative">
                {/* String for hanging photos */}
                <div className="absolute top-0 left-0 w-full h-32 flex justify-center gap-48 pointer-events-none z-10 opacity-40">
                    <div className="w-[2px] h-full bg-pink-300" />
                    <div className="w-[2px] h-full bg-pink-300" />
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-32 items-center relative z-20">

                    {/* Bride Locket */}
                    <motion.div
                        initial={{ rotate: -5 }}
                        whileInView={{ rotate: 5 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="origin-top"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-white p-3 rounded-full shadow-2xl border-4 border-pink-200">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image src={invitation.brideImg} fill alt="Bride" className="object-cover transition-transform hover:scale-110 duration-700" />
                            </div>
                            {/* Cute Ribbon Knob */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-pink-300 border-2 border-white" />
                        </div>
                        <h3 className={`${greatVibes.className} text-5xl text-pink-600 mt-8 text-center rotate-[-5deg]`}>She said Yes!</h3>
                    </motion.div>

                    {/* Groom Locket */}
                    <motion.div
                        initial={{ rotate: 5 }}
                        whileInView={{ rotate: -5 }}
                        transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="origin-top mt-12 md:mt-0"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-white p-3 rounded-full shadow-2xl border-4 border-pink-200">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image src={invitation.groomImg} fill alt="Groom" className="object-cover transition-transform hover:scale-110 duration-700" />
                            </div>
                            {/* Cute Ribbon Knob */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-pink-300 border-2 border-white" />
                        </div>
                        <h3 className={`${greatVibes.className} text-5xl text-pink-600 mt-8 text-center rotate-[5deg]`}>He asked!</h3>
                    </motion.div>
                </div>
            </section>

            {/* --- CUTE TIMELINE --- */}
            <section className="py-24 bg-white/50 backdrop-blur-sm rounded-[3rem] mx-4 md:mx-12 shadow-sm border border-pink-100 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2 border-pink-100">
                    <Stars className="inline-block text-yellow-400 mr-2" />
                    <span className="font-bold text-pink-500 uppercase tracking-widest text-sm">Our Day</span>
                </div>

                <div className="max-w-3xl mx-auto px-6 mt-8">
                    {/* Dashed Path Line */}
                    <div className="absolute left-6 md:left-1/2 top-24 bottom-24 w-[2px] bg-pink-200 border-l-2 border-dashed border-pink-300" />

                    {/* Event 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center relative mb-16">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="md:w-1/2 w-full md:text-right md:pr-12 pl-12 relative"
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-pink-200">
                                <h3 className="text-2xl text-pink-600 font-bold mb-1 font-serif">The Ceremony</h3>
                                <p className="text-gray-500 text-sm mb-2">Exchange of Vows</p>
                                <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 px-3 py-1 rounded-full text-xs font-bold">
                                    <Clock size={12} /> {invitation.ceremonyTime}
                                </div>
                            </div>
                        </motion.div>

                        {/* Icon */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-pink-400 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg z-10 animate-bounce-slow">
                            <Heart size={20} fill="currentColor" />
                        </div>

                        <div className="md:w-1/2 hidden md:block" />
                    </div>

                    {/* Event 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center relative">
                        <div className="md:w-1/2 hidden md:block" />

                        {/* Icon */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-purple-400 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg z-10 animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
                            <Music size={20} />
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="md:w-1/2 w-full md:pl-12 pl-12 relative"
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-purple-200">
                                <h3 className="text-2xl text-purple-600 font-bold mb-1 font-serif">The Celebration</h3>
                                <p className="text-gray-500 text-sm mb-2">Dinner, Dancing & Cake</p>
                                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-500 px-3 py-1 rounded-full text-xs font-bold">
                                    <Clock size={12} /> {invitation.receptionTime}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* --- POP-UP VENUE CARD --- */}
            <section className="py-24 px-6 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                    className="relative bg-white p-8 md:p-12 max-w-lg w-full rounded-[3rem] shadow-[0_10px_40px_rgba(236,72,153,0.2)] border-4 border-pink-100 text-center"
                >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white animate-pulse">
                        <MapPin size={32} />
                    </div>

                    <h2 className={`${greatVibes.className} text-5xl text-pink-600 mt-8 mb-4`}>Where to go?</h2>
                    <p className="text-xl font-bold text-gray-700 mb-2">{invitation.venue}</p>
                    <p className="text-gray-500 mb-8 px-8">{invitation.address}</p>

                    <button className="w-full py-4 bg-pink-500 text-white rounded-2xl font-bold tracking-widest shadow-lg hover:bg-pink-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                        GET DIRECTIONS <MapPin size={18} />
                    </button>
                </motion.div>
            </section>

            {/* --- CUTE FOOTER --- */}
            <footer className="py-16 text-center relative overflow-hidden">
                <h2 className={`${greatVibes.className} text-6xl text-pink-300`}>Thank You!</h2>
                <p className="text-pink-400 font-bold mt-4">With love, {invitation.groom} & {invitation.bride}</p>

                {/* Footer Walking Animation (CSS) */}
                <div className="mt-8 flex justify-center gap-4 text-pink-200">
                    <Heart size={20} className="animate-bounce" style={{ animationDelay: "0s" }} />
                    <Heart size={20} className="animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <Heart size={20} className="animate-bounce" style={{ animationDelay: "0.4s" }} />
                </div>
            </footer>

        </div>
    );
}
