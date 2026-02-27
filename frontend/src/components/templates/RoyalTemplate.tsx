"use client";

import { Playfair_Display, Great_Vibes, Cinzel, Montserrat } from "next/font/google";
import { MapPin, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import coverImg from "./Image/royal-cover.jpg";
import groomImg from "./Image/groom.jpg";
import brideImg from "./Image/bride.jpg";
import haldiImg from "./Image/haldi.jpg";
import pherasImg from "./Image/pheras.jpg";
import blackScalesImg from "./Image/black-scales.png";
import ganeshaImg from "./Image/ganesha.png";
import weddingRingsImg from "./Image/wedding-rings.png";
import sacredFireImg from "./Image/sacred-fire.png";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RoyalTemplate({ id, formData }: { id: string, formData?: any }) {

    const parsedDate = formData?.date ? new Date(formData.date) : null;
    const invitation = {
        groom: formData?.groomName || "Aditya Singh",
        bride: formData?.brideName || "Priya Sharma",
        date: parsedDate ? parsedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "December 14, 2025",
        day: parsedDate ? parsedDate.toLocaleDateString('en-US', { weekday: 'long' }) : "Sunday",
        ceremonyTime: "10:00 AM",
        receptionTime: "7:00 PM",
        venue: formData?.venue || "The Oberoi Udaivilas, Udaipur",
        address: formData?.venue ? "" : "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Udaipur, Rajasthan",
        story: "Two souls, one heart. A destiny written in the stars.",
        coverImage: formData?.image || coverImg, // Palace/Royal
        groomImg: formData?.groomImage || groomImg,
        brideImg: formData?.brideImage || brideImg,
    };

    return (
        <div className="min-h-screen bg-[#fffcf5] text-amber-900 overflow-x-hidden selection:bg-rose-200">

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50 mix-blend-difference">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-white/90 text-amber-900 rounded-full backdrop-blur-md shadow-2xl border border-amber-200 hover:bg-amber-50 transition-all font-serif">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </Link>
            </div>

            {/* Create Your Own Invitation Button - hide in preview mode if formData is passed */}
            {!formData && (
                <div className="fixed top-6 right-6 z-50">
                    <Link
                        href="/#templates"
                        className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-full backdrop-blur-md shadow-2xl hover:brightness-110 transition-all font-semibold"
                    >
                        Create Your Own Invitation
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            )}

            {/* --- HERO SECTION: ILLUMINATED PALACE --- */}
            <section className="relative min-h-[110vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={typeof invitation.coverImage === 'string' ? invitation.coverImage : invitation.coverImage.src}
                        alt="Royal Palace"
                        className="object-cover w-full h-full absolute inset-0 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-amber-950/80" />
                    {/* Decorative Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${blackScalesImg.src})` }} />
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-4xl mx-auto pt-20">

                    {/* Mangal Sutra / Om / Ganesh Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <Image src={ganeshaImg} width={80} height={80} alt="Ganesha" className="mx-auto drop-shadow-md hover:scale-110 transition-transform duration-500" />
                        <h2 className="text-amber-200 text-xl font-bold mt-4 tracking-widest uppercase font-serif drop-shadow-md">|| Shree Ganeshay Namah ||</h2>
                    </motion.div>

                    {/* Royal Couple Name Reveal */}
                    <div className="relative z-20 my-10 perspective-[1000px]">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="inline-block relative"
                        >
                            {/* Decorative Glow Behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/10 blur-[60px] rounded-full pointer-events-none" />

                            {/* GROOM NAME */}
                            <motion.div
                                initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
                                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, ease: "circOut" }}
                            >
                                <h1 className={`${greatVibes.className} text-7xl md:text-9xl lg:text-[10rem] text-[#FFF8E7] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-tight tracking-wide z-10 relative`}>
                                    {invitation.groom}
                                </h1>
                            </motion.div>

                            {/* 'Weds' Ornamental Divider */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 100 }}
                                className="flex items-center justify-center gap-6 my-4 relative"
                            >
                                <div className="h-[2px] w-20 md:w-32 bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_8px_rgba(251,191,36,0.8)]" />

                                <div className="relative w-16 h-16 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border border-amber-200/30 border-dashed rounded-full"
                                    />
                                    <span className={`${playfair.className} text-4xl italic text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1`}>&</span>
                                </div>

                                <div className="h-[2px] w-20 md:w-32 bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                            </motion.div>

                            {/* BRIDE NAME */}
                            <motion.div
                                initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
                                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
                            >
                                <h1 className={`${greatVibes.className} text-7xl md:text-9xl lg:text-[10rem] text-[#FFF8E7] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-tight tracking-wide z-10 relative`}>
                                    {invitation.bride}
                                </h1>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Royal Scroll Date */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16 mx-auto max-w-lg relative"
                    >
                        {/* Scroll SVG Graphic Placeholder */}
                        {/* Shahi Scroll 3D Effect */}
                        <div className="relative group perspective-[1000px]" style={{ perspective: "1000px" }}>

                            {/* Top Golden Rod */}
                            <div className="relative z-20 h-12 w-full bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-700 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.4)] flex items-center justify-between px-2">
                                {/* Left Knob */}
                                <div className="w-8 h-14 bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 rounded-full border-2 border-yellow-300 shadow-lg" />
                                {/* Decorative Body of Rod */}
                                <div className="absolute inset-x-10 h-full flex flex-col justify-center gap-[2px] opacity-30">
                                    <div className="w-full h-[1px] bg-amber-900" />
                                    <div className="w-full h-[1px] bg-amber-900" />
                                </div>
                                {/* Right Knob */}
                                <div className="w-8 h-14 bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 rounded-full border-2 border-yellow-300 shadow-lg" />
                            </div>

                            {/* Scroll Paper Body */}
                            <div className="relative z-10 mx-6 -mt-6 bg-[#fffdf5] pt-16 pb-16 px-8 shadow-2xl border-x-[1px] border-amber-900/20"
                                style={{
                                    backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")`,
                                    transformStyle: 'preserve-3d',
                                    transform: 'rotateX(10deg) translateZ(-10px)',
                                    transformOrigin: 'top center'
                                }}
                            >
                                {/* Inner Shadows for Roll Effect (Top & Bottom) */}
                                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                                {/* Content */}
                                <div className="text-center relative">
                                    {/* Ornamental Divider */}
                                    <div className="flex justify-center items-center gap-2 mb-6 opacity-60">
                                        <div className="h-[1px] w-12 bg-amber-800" />
                                        <div className="w-2 h-2 rotate-45 border border-amber-800" />
                                        <div className="h-[1px] w-12 bg-amber-800" />
                                    </div>

                                    <p className={`${cinzel.className} text-xl tracking-[0.3em] font-bold text-amber-900 mb-3 drop-shadow-sm`}>{invitation.day}</p>

                                    <h3 className={`${playfair.className} text-5xl md:text-6xl font-bold text-red-900 mb-3 drop-shadow-md scale-105 transform`}>
                                        {invitation.date}
                                    </h3>

                                    <div className="mt-6 flex flex-col items-center gap-1">
                                        <p className={`${montserrat.className} text-sm tracking-widest uppercase text-amber-800 font-semibold`}>
                                            {invitation.venue.split(',')[0]}
                                        </p>
                                        <p className="text-xs text-amber-700/80 italic">Udaipur, Rajasthan</p>
                                    </div>

                                    {/* Ornamental Divider Bottom */}
                                    <div className="flex justify-center items-center gap-2 mt-8 opacity-60">
                                        <div className="h-[1px] w-12 bg-amber-800" />
                                        <div className="w-2 h-2 rotate-45 border border-amber-800" />
                                        <div className="h-[1px] w-12 bg-amber-800" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Golden Rod */}
                            <div className="relative z-20 -mt-6 h-12 w-full bg-gradient-to-b from-amber-700 via-yellow-500 to-amber-300 rounded-full shadow-[0_-5px_15px_rgba(0,0,0,0.4)] flex items-center justify-between px-2">
                                {/* Left Knob */}
                                <div className="w-8 h-14 bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 rounded-full border-2 border-yellow-300 shadow-lg" />
                                {/* Decorative Body of Rod */}
                                <div className="absolute inset-x-10 h-full flex flex-col justify-center gap-[2px] opacity-30">
                                    <div className="w-full h-[1px] bg-amber-900" />
                                    <div className="w-full h-[1px] bg-amber-900" />
                                </div>
                                {/* Right Knob */}
                                <div className="w-8 h-14 bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 rounded-full border-2 border-yellow-300 shadow-lg" />
                            </div>

                            {/* Hanging Tassel */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-wiggle origin-top">
                                <div className="w-[2px] h-10 bg-red-700" />
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-red-900 shadow-md border border-red-400 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber-100/70 flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest">Scroll to Attend</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-amber-200 to-transparent" />
                </div>
            </section>

            {/* --- COUPLE & ELEPHANTS SECTION --- */}
            <section className="py-32 px-6 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50 to-[#fffcf5]">
                <div className="absolute top-0 left-0 w-32 md:w-64 opacity-10 pointer-events-none">
                    {/* Decorative Floral Pattern */}
                    <Image src="https://www.svgrepo.com/show/530598/flower.svg" width={200} height={200} alt="decor" className="rotate-45" />
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16 items-center text-center">

                        {/* Groom with Elephant Theme */}
                        <div className="order-2 lg:order-1 space-y-6 group">
                            <div className="relative w-64 h-80 mx-auto rounded-[50px_50px_0_0] border-4 border-amber-200 overflow-hidden shadow-2xl rotate-3 transition-transform group-hover:rotate-0 duration-500">
                                <img src={typeof invitation.groomImg === 'string' ? invitation.groomImg : invitation.groomImg.src} alt="Groom" className="object-cover w-full h-full absolute inset-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-0 w-full text-white font-serif text-2xl">{invitation.groom}</div>
                            </div>
                            <div className="text-amber-800">
                                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                                    {/* Horse/Elephant Icon Placeholder */}
                                    <span className="text-3xl">🐘</span>
                                </div>
                                <h3 className={`${cinzel.className} text-xl font-bold mb-2`}>The Royal Baraat</h3>
                                <p className="text-sm text-gray-600 px-6">Arriving with horses, elephants, and a grand procession of joy.</p>
                            </div>
                        </div>

                        {/* Center Motif (Agni / Mandap) */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="w-24 h-24 mx-auto text-red-600 animate-pulse">
                                <Flame size={96} strokeWidth={1} />
                            </div>
                            <h2 className={`${playfair.className} text-4xl md:text-6xl font-bold text-amber-900 leading-tight`}>
                                Subh <span className="text-red-700 italic">Vivah</span>
                            </h2>
                            <p className={`${greatVibes.className} text-3xl text-amber-700/80`}>
                                "In the presence of Agni and our loved ones..."
                            </p>
                            <div className="flex justify-center gap-4">
                                <Image src={weddingRingsImg} width={40} height={40} alt="rings" className="opacity-60" />
                                <Image src={sacredFireImg} width={40} height={40} alt="fire" className="opacity-60" />
                            </div>
                        </div>

                        {/* Bride with Doli Theme */}
                        <div className="order-3 space-y-6 group">
                            <div className="relative w-64 h-80 mx-auto rounded-[50px_50px_0_0] border-4 border-amber-200 overflow-hidden shadow-2xl -rotate-3 transition-transform group-hover:rotate-0 duration-500">
                                <img src={typeof invitation.brideImg === 'string' ? invitation.brideImg : invitation.brideImg.src} alt="Bride" className="object-cover w-full h-full absolute inset-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-0 w-full text-white font-serif text-2xl">{invitation.bride}</div>
                            </div>
                            <div className="text-amber-800">
                                <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center text-rose-700">
                                    <span className="text-3xl">💃</span>
                                </div>
                                <h3 className={`${cinzel.className} text-xl font-bold mb-2`}>Her Entry</h3>
                                <p className="text-sm text-gray-600 px-6">Walking quietly towards her forever, under the canopy of flowers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MANDAP & EVENTS RITUALS --- */}
            <section className="py-24 bg-[#fff0e6] relative overflow-hidden">
                {/* Mandap Silhouette Background */}
                <div className="absolute bottom-0 left-0 w-full h-64 opacity-10 bg-[url('https://cdn-icons-png.flaticon.com/512/2857/2857811.png')] bg-contain bg-bottom bg-no-repeat pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <h2 className={`${cinzel.className} text-center text-3xl md:text-5xl font-bold text-amber-900 mb-20`}>Wedding Ceremonies</h2>

                    {/* Timeline Items */}
                    <div className="space-y-24">
                        {/* Event 1: Haldi */}
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 text-center md:text-right space-y-4">
                                <h3 className={`${playfair.className} text-4xl text-yellow-600`}>Haldi Ceremony</h3>
                                <p className={`${cinzel.className} text-sm tracking-widest text-gray-500`}>10:00 AM • The Courtyard</p>
                                <p className="text-gray-700 font-serif leading-relaxed">
                                    A splash of yellow, a glow of love. Join us as we apply the sacred turmeric paste to bless the couple.
                                </p>
                            </div>
                            <div className="w-48 h-48 rounded-full border-4 border-yellow-200 p-2 shadow-xl bg-white rotate-12 hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <Image src={haldiImg} fill alt="Haldi" className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Event 2: Wedding */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <h3 className={`${playfair.className} text-4xl text-red-700`}>The Royal Wedding</h3>
                                <p className={`${cinzel.className} text-sm tracking-widest text-gray-500`}>07:00 PM • The Grand Lawn</p>
                                <p className="text-gray-700 font-serif leading-relaxed">
                                    The sacred fire bears witness as we take the seven vows of eternity.
                                </p>
                                <div className="flex gap-4 pt-2 md:justify-start justify-center">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-800 bg-red-100 px-3 py-1 rounded-full border border-red-200">
                                        <Flame size={12} /> Pheras
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                                        Mangalsutra
                                    </div>
                                </div>
                            </div>
                            <div className="w-48 h-48 rounded-full border-4 border-red-200 p-2 shadow-xl bg-white -rotate-6 hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <Image src={pherasImg} fill alt="Wedding" className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- MAP & ADDRESS (GRAND ROYAL ARCH) --- */}
            <section className="py-24 px-4 relative overflow-hidden flex items-center justify-center">
                {/* Background Texture */}
                <div className="absolute inset-0 bg-[#1a0505] opacity-95">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${blackScalesImg.src})` }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-full max-w-3xl"
                >
                    {/* Royal Border Container */}
                    <div className="relative p-[2px] bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-800 rounded-[2rem] shadow-[0_0_50px_rgba(251,191,36,0.3)]">
                        <div className="bg-[#2c0b0e] rounded-[calc(2rem-2px)] p-8 md:p-14 text-center relative overflow-hidden border border-amber-900/50">

                            {/* Decorative Corners (Inner Gold) */}
                            <div className="absolute top-6 left-6 w-24 h-24 border-t-[3px] border-l-[3px] border-amber-400/60 rounded-tl-3xl" />
                            <div className="absolute top-6 right-6 w-24 h-24 border-t-[3px] border-r-[3px] border-amber-400/60 rounded-tr-3xl" />
                            <div className="absolute bottom-6 left-6 w-24 h-24 border-b-[3px] border-l-[3px] border-amber-400/60 rounded-bl-3xl" />
                            <div className="absolute bottom-6 right-6 w-24 h-24 border-b-[3px] border-r-[3px] border-amber-400/60 rounded-br-3xl" />

                            {/* Content */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-amber-900 to-black border border-amber-500/50 shadow-lg mb-6 group">
                                    <MapPin className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                                </div>

                                <h2 className={`${cinzel.className} text-xl md:text-2xl text-amber-200 tracking-[0.3em] uppercase mb-2`}>The Royal Venue</h2>

                                <div className="flex items-center justify-center gap-4 my-6 opacity-80">
                                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-400" />
                                    <div className="rotate-45 w-2 h-2 bg-amber-400" />
                                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-400" />
                                </div>

                                <h3 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 font-bold mb-6 drop-shadow-sm leading-tight`}>
                                    {invitation.venue}
                                </h3>

                                <p className={`${montserrat.className} text-amber-200/70 text-sm md:text-base max-w-md mx-auto leading-relaxed tracking-wide mb-10`}>
                                    {invitation.address}
                                </p>

                                <Link href="https://maps.google.com" target="_blank">
                                    <button className="relative px-10 py-3 bg-transparent text-amber-300 font-serif tracking-widest uppercase text-sm border border-amber-400/30 hover:bg-amber-900/30 transition-all duration-300 group overflow-hidden">
                                        <span className="relative z-10">Get Directions</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-amber-950 text-amber-200 py-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]" />
                <div className="relative z-10 max-w-2xl mx-auto px-6 space-y-6">
                    <h2 className={`${greatVibes.className} text-5xl`}>Thank You</h2>
                    <p className="font-serif italic text-amber-200/60">We eagerly await the joy of your presence.</p>
                    <div className="w-12 h-[1px] bg-amber-500/50 mx-auto" />
                    <p className="text-xs tracking-[0.3em] uppercase opacity-50">With Love: {invitation.groom} & {invitation.bride} Families</p>
                </div>
            </footer>
        </div>
    )
}
