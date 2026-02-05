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

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RoyalTemplate({ id }: { id: string }) {

    // Default data for Royal Theme
    const invitation = {
        groom: "Aditya Singh",
        bride: "Priya Sharma",
        date: "December 14, 2025",
        day: "Sunday",
        ceremonyTime: "10:00 AM",
        receptionTime: "7:00 PM",
        venue: "The Oberoi Udaivilas, Udaipur",
        address: "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Udaipur, Rajasthan",
        story: "Two souls, one heart. A destiny written in the stars.",
        coverImage: coverImg, // Palace/Royal
        groomImg: groomImg,
        brideImg: brideImg,
    };

    return (
        <div className="min-h-screen bg-[#fffcf5] text-amber-900 overflow-x-hidden selection:bg-rose-200">

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50 mix-blend-difference">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-white/90 text-amber-900 rounded-full backdrop-blur-md shadow-2xl border border-amber-200 hover:bg-amber-50 transition-all font-serif">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </Link>
            </div>

            {/* --- HERO SECTION: ILLUMINATED PALACE --- */}
            <section className="relative min-h-[110vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={invitation.coverImage}
                        alt="Royal Palace"
                        fill
                        className="object-cover animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-amber-950/80" />
                    {/* Decorative Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]" />
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
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Deepak_oil_lamp.svg/1200px-Deepak_oil_lamp.svg.png" width={60} height={60} alt="Deepak" className="mx-auto drop-shadow-[0_0_15px_rgba(255,200,0,0.8)] filter brightness-150" />
                        <h2 className="text-amber-200 text-xl font-bold mt-4 tracking-widest uppercase font-serif drop-shadow-md">|| Shree Ganeshay Namah ||</h2>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-amber-200/30 shadow-2xl inline-block"
                    >
                        <h1 className={`${greatVibes.className} text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 drop-shadow-sm`}>
                            {invitation.groom}
                        </h1>
                        <div className="flex items-center justify-center gap-6 my-2 text-white/80">
                            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                            <span className={`${playfair.className} text-4xl italic text-amber-200`}>weds</span>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                        </div>
                        <h1 className={`${greatVibes.className} text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 drop-shadow-sm`}>
                            {invitation.bride}
                        </h1>
                    </motion.div>

                    {/* Royal Scroll Date */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16 mx-auto max-w-lg relative"
                    >
                        {/* Scroll SVG Graphic Placeholder */}
                        <div className="relative py-8 px-12 bg-[#fffdf5] text-amber-900 rounded-sm shadow-[0_0_40px_rgba(251,191,36,0.2)] border-y-8 border-amber-700/80">
                            {/* Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-900" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-900" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-900" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-900" />

                            <p className={`${cinzel.className} text-xl tracking-[0.2em] font-bold text-amber-800 mb-2`}>{invitation.day}</p>
                            <h3 className={`${playfair.className} text-4xl md:text-5xl font-bold text-red-900 mb-2`}>{invitation.date}</h3>
                            <p className={`${montserrat.className} text-sm tracking-widest uppercase text-amber-700`}>Udaipur, Rajasthan</p>
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
                                <Image src={invitation.groomImg} fill alt="Groom" className="object-cover" />
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
                                <Image src="https://www.svgrepo.com/show/53299/wedding-rings.svg" width={40} height={40} alt="rings" className="opacity-60" />
                                <Image src="https://www.svgrepo.com/show/396657/fire.svg" width={40} height={40} alt="fire" className="opacity-60" />
                            </div>
                        </div>

                        {/* Bride with Doli Theme */}
                        <div className="order-3 space-y-6 group">
                            <div className="relative w-64 h-80 mx-auto rounded-[50px_50px_0_0] border-4 border-amber-200 overflow-hidden shadow-2xl -rotate-3 transition-transform group-hover:rotate-0 duration-500">
                                <Image src={invitation.brideImg} fill alt="Bride" className="object-cover" />
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


            {/* --- MAP & ADDRESS (ROYAL CARD STYLE) --- */}
            <section className="py-20 px-6 bg-cover bg-center relative" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}>
                <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 md:p-12 border border-amber-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)] text-center relative">
                    {/* Decorative Corner Borders */}
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-amber-400" />
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-400" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-amber-400" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-amber-400" />

                    <MapPin className="mx-auto w-10 h-10 text-red-700 mb-6" />
                    <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-4`}>The Royal Venue</h2>
                    <p className="text-xl text-gray-600 font-serif italic mb-8">{invitation.venue}</p>
                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">{invitation.address}</p>

                    <button className="px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-serif tracking-widest hover:scale-105 transition-transform shadow-xl">
                        VIEW MAP
                    </button>
                </div>
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
