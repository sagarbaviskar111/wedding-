"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mukta, Tiro_Devanagari_Marathi, Rozha_One } from "next/font/google";
import { MapPin, Gift, Bell, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Fonts
const mukta = Mukta({ subsets: ["latin", "devanagari"], weight: ["400", "700"] });
const tiro = Tiro_Devanagari_Marathi({ subsets: ["latin", "devanagari"], weight: ["400"] });
const rozha = Rozha_One({ subsets: ["latin"], weight: ["400"] });

// Mock Invite Data
const inviteData = {
    groom: "Aditya",
    bride: "Priya",
    date: "January 24, 2027",
    muhurta: "12:35 PM",
    venue: "Siddhi Banquets, Pune",
};

// --- SILK SAREE FABRIC COMPONENT (Three.js) ---
const SilkFabric = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { mouse, viewport } = useThree();

    // Fabric Color: Peacock Blue/Magenta Mix
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor1: { value: new THREE.Color("#006064") }, // Peacock Blue
        uColor2: { value: new THREE.Color("#880e4f") }, // Magenta
    }), []);

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            // @ts-ignore
            meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
            // @ts-ignore
            meshRef.current.material.uniforms.uMouse.value.lerp(mouse, 0.1);
        }
    });

    // Simple Wave Shader
    const vertexShader = `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
            vUv = uv;
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            
            // Mouse interaction wave
            float dist = distance(uv, uMouse * 0.5 + 0.5);
            float mouseWave = sin(dist * 10.0 - uTime * 2.0) * 0.1 * exp(-dist * 3.0);
            
            // General flowing fabric wave
            float elevation = sin(modelPosition.x * 2.0 + uTime * 0.5) * 0.1 
                            + sin(modelPosition.y * 1.5 + uTime * 0.3) * 0.1;

            modelPosition.z += elevation + mouseWave;
            vElevation = elevation;

            gl_Position = projectionMatrix * viewMatrix * modelPosition;
        }
    `;

    const fragmentShader = `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying float vElevation;

        void main() {
            // Color mix based on elevation (sheen effect)
            float mixStrength = (vElevation + 0.2) * 2.0;
            vec3 color = mix(uColor1, uColor2, mixStrength);
            
            // Add silk shine
            float shine = max(0.0, vElevation * 5.0); // Simple specular highlight approximation
            gl_FragColor = vec4(color + shine * 0.2, 1.0);
        }
    `;

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 6, 0, 0]}>
            <planeGeometry args={[viewport.width * 1.5, viewport.height * 1.5, 64, 64]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};


export default function PaithaniTemplate() {
    const { scrollYProgress } = useScroll();
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const peacockScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
    const peacockRotate = useTransform(scrollYProgress, [0, 0.5], [-10, 0]);

    // Mundavalya Interaction
    const [sparkle, setSparkle] = useState(false);
    const triggerSparkle = () => {
        // Play sound
        const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3"); // Gentle chime
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed req interaction", e));

        setSparkle(true);
        setTimeout(() => setSparkle(false), 2000);
    };

    // RSVP Logic
    const [rsvpOpen, setRsvpOpen] = useState(false);

    return (
        <div className={`min-h-screen bg-[#fff8e1] text-[#4a0e4e] ${mukta.className} overflow-x-hidden relative`}>

            {/* --- THREE.JS SILK BACKGROUND --- */}
            <div className="fixed inset-0 z-0 h-screen w-full opacity-30 pointer-events-none md:pointer-events-auto">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <SilkFabric />
                </Canvas>
            </div>


            {/* Navigation / Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href={`/templates/p1/preview`} className="group flex items-center gap-2 px-5 py-2.5 bg-white/90 text-[#4a0e4e] rounded-full backdrop-blur-md shadow-2xl border-2 border-[#d4af37] hover:bg-[#fff8e1] transition-all font-semibold">
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

            {/* --- Paithani Border (Top) --- */}
            <div className="fixed top-0 w-full z-50 h-3 bg-gradient-to-r from-[#d4af37] via-[#e91e63] to-[#d4af37] shadow-md" />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-10 pb-20 z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className={`${tiro.className} text-[#880e4f] text-xl md:text-2xl mb-4 font-bold`}>|| श्री गणेशाय नमः ||</p>
                    <h1 className={`${rozha.className} text-6xl md:text-8xl text-[#4a0e4e] mb-4 drop-shadow-[2px_2px_0px_#d4af37]`}>
                        {inviteData.groom}
                        <span className="text-[#e91e63] mx-4 text-4xl">&</span>
                        {inviteData.bride}
                    </h1>
                </motion.div>

                {/* Interactive Couple Portrait (Mundavalya Sparkle) */}
                <div className="relative mt-8 cursor-pointer group" onClick={triggerSparkle}>
                    <motion.div
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#d4af37] p-2 bg-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1623838804048-c9ca9a3e2327?q=80&w=800&auto=format&fit=crop"
                                fill
                                className="object-cover"
                                alt="Couple"
                            />
                            {/* Mundavalya Sparkle Overlay */}
                            {sparkle && (
                                <div className="absolute top-[20%] left-0 w-full h-[20%] flex justify-center items-center pointer-events-none">
                                    <div className="w-full h-full bg-blend-screen animate-pulse bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Click Instruction Tip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-[#e91e63] font-bold whitespace-nowrap">
                        ✨ Tap for Blessings ✨
                    </div>

                    {/* Sparkle Particles on Click */}
                    {sparkle && Array.from({ length: 10 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                            animate={{
                                x: (Math.random() - 0.5) * 200,
                                y: (Math.random() - 0.5) * 200,
                                opacity: 0,
                                scale: 1
                            }}
                            transition={{ duration: 1 }}
                            className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#ffd700] rounded-full pointer-events-none"
                        />
                    ))}
                </div>
            </section>

            {/* --- PEACOCK MOTION & INVITE --- */}
            <section className="py-24 bg-[#fff8e1]/90 backdrop-blur-sm relative overflow-hidden z-10 border-t border-[#d4af37]/30">
                {/* Animated SVG Peacock (Abstract representation) */}
                <motion.div
                    style={{ scale: peacockScale, rotate: peacockRotate }}
                    className="absolute -left-20 top-20 w-96 h-96 opacity-10 pointer-events-none"
                >
                    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#006064]">
                        <path d="M100 180 Q60 100 20 60 Q100 80 180 60 Q140 100 100 180" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="20" cy="60" r="5" fill="currentColor" />
                        <circle cx="180" cy="60" r="5" fill="currentColor" />
                        <circle cx="100" cy="40" r="5" fill="currentColor" />
                        <path d="M20 60 Q40 20 60 40" stroke="currentColor" strokeWidth="1" />
                        <path d="M180 60 Q160 20 140 40" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </motion.div>

                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className={`${tiro.className} text-4xl text-[#bf360c] mb-6`}>शुभ विवाह</h2>
                    <p className="text-xl md:text-2xl text-gray-800 leading-loose max-w-2xl mx-auto">
                        "नात्यांची गुंफण, प्रेमाचे बंधन..." <br />
                        We invite you to grace the auspicious wedding of <strong>{inviteData.groom}</strong> & <strong>{inviteData.bride}</strong> with your presence and blessings.
                    </p>
                </div>
            </section>

            {/* --- PRE-WEDDING SHOOT GALLERY (6 Photos) --- */}
            <section className="py-20 bg-[#fafafa] relative z-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className={`${rozha.className} text-4xl text-[#4a0e4e] mb-2`}>Pre-Wedding Moments</h2>
                        <div className="w-16 h-1 bg-[#e91e63] mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1623838804048-c9ca9a3e2327?q=80&w=800&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1542038784456-1ea77db0054a?q=80&w=800&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                        ].map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg border-4 border-[#d4af37]/20 group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-[#4a0e4e] opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                                <Image
                                    src={src}
                                    fill
                                    alt={`Pre-wedding ${index + 1}`}
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Corner Accents */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EVENTS (Traditional Cards) --- */}
            <section className="py-24 bg-[#4a0e4e] text-white relative z-10">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Haldi", icon: "✨", time: "10:00 AM", color: "bg-[#ffd700] text-[#880e4f]" },
                        { title: "Lagna", icon: "🔥", time: "12:35 PM", color: "bg-[#e91e63] text-white" },
                        { title: "Reception", icon: "🎉", time: "7:00 PM", color: "bg-[#009688] text-white" }
                    ].map((evt, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`${evt.color} p-8 rounded-t-full rounded-b-lg text-center shadow-xl border-b-8 border-[#d4af37] relative group`}
                        >
                            <div className="text-4xl mb-4">{evt.icon}</div>
                            <h3 className={`${rozha.className} text-2xl mb-2`}>{evt.title}</h3>
                            <p className="font-bold opacity-90">{evt.time}</p>
                            {/* Hover Reveal Pattern */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paisley.png')] opacity-10" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- RSVP VELVET BOX & SHAGUN --- */}
            <section className="py-32 bg-[#fff8e1] relative z-10 flex flex-col items-center justify-center">

                {/* Velvet Box Container */}
                <div className="relative w-80 perspective-[1000px] z-20">
                    <motion.div
                        initial={false}
                        animate={{ rotateX: rsvpOpen ? -20 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#880e4f] p-8 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center border-4 border-[#d4af37] cursor-pointer relative overflow-hidden"
                        onClick={() => setRsvpOpen(!rsvpOpen)}
                    >
                        {/* Velvet Texture Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-30 pointer-events-none" />

                        {!rsvpOpen ? (
                            <>
                                <h3 className={`${tiro.className} text-2xl text-[#ffd700] mb-4`}>RSVP Here</h3>
                                <p className="text-white/80 text-sm">Tap to Open the Box</p>
                                <div className="mt-4 w-12 h-12 mx-auto rounded-full border-2 border-[#d4af37] flex items-center justify-center animate-bounce">
                                    <span className="text-xl">👇</span>
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
                            >
                                <h3 className={`${tiro.className} text-2xl text-[#ffd700] mb-4`}>Confirm Presence</h3>
                                <input type="text" placeholder="Your Name" className="w-full p-2 rounded mb-3 bg-white/10 text-white border border-[#d4af37] placeholder-white/50 focus:outline-none" />
                                <button className="w-full py-2 bg-[#d4af37] text-[#4a0e4e] font-bold rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
                                    <CheckCircle size={16} /> I'll be there!
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Shagun / Gift Registry */}
                <div className="mt-16 flex flex-col items-center gap-4">
                    <span className="h-16 w-[1px] bg-[#d4af37]" />
                    <button className="flex items-center gap-3 px-8 py-3 bg-white border border-[#e91e63] text-[#e91e63] rounded-full shadow-sm hover:shadow-md transition-all group">
                        <Gift className="group-hover:rotate-12 transition-transform" />
                        <span className={`${mukta.className} font-bold`}>Send Shagun / Gift</span>
                    </button>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Nath Gift Registry</p>
                </div>

            </section>

            {/* --- LOCATION --- */}
            <section className="py-20 text-center relative z-10 bg-[#fafafa]">
                <div className="max-w-2xl mx-auto px-6">
                    <MapPin className="mx-auto text-[#bf360c] w-12 h-12 mb-4" />
                    <h2 className={`${rozha.className} text-3xl text-[#4a0e4e] mb-2`}>{inviteData.venue}</h2>
                    <p className="text-gray-600 mb-8">Near City Pride, Kothrud, Pune</p>
                    <button className="px-8 py-3 bg-[#bf360c] text-white font-bold rounded-full shadow-lg hover:bg-[#800020] transition-colors">
                        Google Maps
                    </button>
                </div>
            </section>

        </div>
    );
}
