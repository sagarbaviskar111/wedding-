"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display, Lato, Bodoni_Moda } from "next/font/google";
import { Calendar, MapPin, Clock } from "lucide-react";

// Modern Fonts
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function ModernTemplate({ id }: { id: string }) {

    // Default data for Modern Theme
    const invitation = {
        groom: "Rohan",
        bride: "Sanya",
        date: "24.12.2025",
        time: "4:00 PM",
        venue: "The White Barn, California",
        coverImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1920", // Clean white wedding
        img1: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800",
        img2: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&q=80&w=800"
    };

    return (
        <div className={`min-h-screen bg-white text-gray-900 ${lato.className}`}>

            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/${id}/preview`} className="group flex items-center gap-2 px-6 py-3 bg-white text-black border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all font-medium">
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

            {/* Header / Hero */}
            <section className="h-screen relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={invitation.coverImage} fill alt="Modern Wedding" className="object-cover opacity-90" priority />
                    <div className="absolute inset-0 bg-white/40" />
                </div>

                <div className="relative z-10 text-center p-12 bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl max-w-2xl w-full">
                    <p className="uppercase tracking-[0.3em] text-gray-500 mb-6 text-sm">Save The Date</p>
                    <h1 className={`${bodoni.className} text-7xl md:text-8xl mb-4`}>
                        {invitation.groom} <span className="text-gray-400">&</span> {invitation.bride}
                    </h1>
                    <div className="w-16 h-[2px] bg-black mx-auto my-8" />
                    <p className="text-2xl font-light">{invitation.date}</p>
                    <p className="mt-2 text-gray-600 uppercase tracking-widest text-xs">{invitation.venue}</p>
                </div>
            </section>

            {/* Minamilist Details Grid */}
            <section className="py-32 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] bg-gray-100"
                    >
                        <Image src={invitation.img1} fill alt="Couple" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4 border-l-4 border-black pl-8">
                            <h3 className={`${bodoni.className} text-4xl`}>The Ceremony</h3>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Clock size={18} />
                                <p>starts at 4:30 PM</p>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-light">
                                We invite you to be with us as we celebrate our new life together.
                                The ceremony will be held in the garden, followed by cocktails and dinner.
                            </p>
                        </div>

                        <div className="space-y-4 border-l-4 border-gray-300 pl-8">
                            <h3 className={`${bodoni.className} text-4xl text-gray-700`}>Reception</h3>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Clock size={18} />
                                <p>Dinner at 7:00 PM</p>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Join us for an evening of dancing and celebration under the stars.
                            </p>
                        </div>

                        <button className="px-10 py-4 bg-black text-white uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
                            RSVP Now
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-gray-50 text-center">
                <h2 className={`${bodoni.className} text-4xl mb-4`}>R & S</h2>
                <p className="text-gray-400 text-sm tracking-widest">EST. 2025</p>
            </footer>

        </div>
    );
}
