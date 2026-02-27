"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Playfair_Display, Cinzel_Decorative, Rozha_One } from "next/font/google";
import { Star, MapPin, PartyPopper, Disc, Music, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "vanilla-tilt";

// Authentically "North Indian Royal" Fonts
const playfair = Playfair_Display({ subsets: ["latin"] });
const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["400", "700", "900"] });
const rozha = Rozha_One({ subsets: ["latin"], weight: ["400"] });

// Mock Data
const invitation = {
    groom: "Rohan",
    bride: "Ishita",
    date: "December 14, 2026",
    time: "7:00 PM Onwards",
    venue: "The Grand Hyatt Ballroom",
    city: "Mumbai",
};

const galleryImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1623838804048-c9ca9a3e2327?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea77db0054a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
];

export default function GoldenLuxeTemplate() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Scratch Card Logic
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isScratched, setIsScratched] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Fill gold overlay
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#bf953f");
        gradient.addColorStop(0.5, "#fcf6ba");
        gradient.addColorStop(1, "#b38728");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "source-over";
        ctx.font = "20px Serif";
        ctx.fillStyle = "#000";
        ctx.fillText("Scratch to Reveal", 50, 45);

        let isDrawing = false;

        const getPos = (e: MouseEvent | TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            let clientX, clientY;
            if ('touches' in e) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = (e as MouseEvent).clientX;
                clientY = (e as MouseEvent).clientY;
            }
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        const scratch = (x: number, y: number) => {
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fill();

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let transparentPixels = 0;
            for (let i = 3; i < imageData.data.length; i += 4) {
                if (imageData.data[i] === 0) transparentPixels++;
            }
            if (transparentPixels > (imageData.data.length / 4) * 0.4) {
                setIsScratched(true);
                canvas.style.opacity = '0';
            }
        };

        const startDrawing = () => { isDrawing = true; };
        const endDrawing = () => { isDrawing = false; };
        const draw = (e: MouseEvent | TouchEvent) => {
            if (!isDrawing) return;
            const pos = getPos(e);
            scratch(pos.x, pos.y);
        };

        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("touchstart", startDrawing);
        window.addEventListener("mouseup", endDrawing);
        window.addEventListener("touchend", endDrawing);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("touchmove", draw);

    }, []);

    // Spotlight effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Vanilla Tilt Init
    useEffect(() => {
        const elements = document.querySelectorAll(".tilt-card");
        Tilt.init(Array.from(elements) as HTMLElement[], {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    }, []);

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`min-h-screen bg-[#050505] text-[#d4af37] ${playfair.className} selection:bg-[#d4af37] selection:text-black overflow-x-hidden relative`}
        >

            {/* Varmala Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] origin-left z-50 shadow-[0_0_20px_#d4af37]"
                style={{ scaleX }}
            />
            {/* Hanging Varmala Flowers Decor on the progress bar could be added with pseudo elements if needed */}

            {/* Interactive Spotlight */}
            <div
                className="fixed inset-0 pointer-events-none z-30 opacity-15 mix-blend-screen"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.3), transparent 40%)`
                }}
            />


            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/g1/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-black/80 text-[#d4af37] rounded-full backdrop-blur-md shadow-2xl border-2 border-[#d4af37]/50 hover:bg-[#d4af37]/20 transition-all font-semibold">
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

            {/* Background Pattern */}
            <div className={`fixed inset-0 opacity-10 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]`} />

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b-4 border-[#d4af37]">

                {/* Massive Shimmering Names */}
                <div className="relative group perspective-[1000px] z-10 mb-12">
                    <p className={`${rozha.className} text-[#fcf6ba] text-lg tracking-[0.3em] uppercase mb-4`}>The Union Of</p>
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className={`${cinzel.className} text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#fcf6ba] via-[#bf953f] to-[#b38728] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] py-4`}
                    >
                        {invitation.groom} <span className="text-4xl md:text-6xl align-middle text-[#f3e5ab] font-serif italic mx-4">&</span> {invitation.bride}
                    </motion.h1>
                    {/* Linear Shimmer */}
                    <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none mix-blend-overlay"
                    />
                </div>

                {/* SCRATCH CARD REVEAL (Hero Feature) */}
                <div className="relative z-20 flex flex-col items-center">
                    <p className="text-[#bf953f] text-sm uppercase tracking-widest mb-4 animate-pulse">Unlock The Date</p>
                    <div className="relative w-72 h-36 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)] border-4 border-[#bf953f] cursor-crosshair transform hover:scale-105 transition-transform duration-300">
                        {/* Hidden Content */}
                        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center pointer-events-none">
                            <h2 className={`${cinzel.className} text-3xl font-bold text-[#fcf6ba] drop-shadow-md`}>{invitation.date}</h2>
                            <p className="text-[#d4af37] text-xs mt-2 uppercase tracking-widest">Live from {invitation.city}</p>
                        </div>
                        {/* Canvas */}
                        <canvas ref={canvasRef} width={288} height={144} className={`absolute inset-0 transition-opacity duration-700 ${isScratched ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
                    </div>
                </div>

            </section>

            {/* --- PRE-WEDDING GALLERY (Masonry + 3D Tilt + Film Grain) --- */}
            <section className="py-32 px-4 bg-[#0a0a0a] relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 relative">
                        <h2 className={`${cinzel.className} text-5xl text-[#fcf6ba] mb-4`}>Captured Moments</h2>
                        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {galleryImages.map((src, i) => (
                            <div
                                key={i}
                                className={`tilt-card relative group rounded-lg overflow-hidden border border-[#d4af37]/20 shadow-2xl ${i % 2 === 0 ? 'md:translate-y-12' : ''}`}
                            >
                                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />

                                <Image src={src} alt="Gallery" width={800} height={600} className="object-cover w-full h-[500px] transform group-hover:scale-110 transition-transform duration-700" />

                                {/* Film Grain Overlay */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                                {/* Gold Border Reveal */}
                                <div className="absolute inset-0 border-2 border-[#d4af37] scale-[0.95] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- LOCATION --- */}
            <section className="py-24 relative bg-black border-t border-[#d4af37]/20">
                <div className="max-w-2xl mx-auto bg-[#111] p-12 text-center relative overflow-hidden border border-[#d4af37]/40 shadow-[0_0_60px_rgba(212,175,55,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                    <MapPin className="mx-auto text-[#d4af37] mb-6 w-12 h-12" />
                    <h2 className={`${cinzel.className} text-4xl mb-4 text-[#fcf6ba]`}>{invitation.venue}</h2>
                    <p className="text-gray-400 text-xl font-light mb-8">{invitation.city}, India</p>

                    <button className="px-10 py-4 bg-gradient-to-b from-[#d4af37] to-[#b38728] text-black font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg transform hover:-translate-y-1">
                        View Map
                    </button>
                </div>
            </section>

        </div>
    );
}
