"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

type Template = {
    id: string;
    title: string;
    image: string;
    price: string;
    tag: string;
    category?: string; // Sub-category for filtering
};

type EventCategory = "Wedding" | "Birthday" | "Engagement" | "Party" | "Bachelor Party" | "Haldi" | "Office Party";

const categories: EventCategory[] = [
    "Wedding",
    "Birthday",
    "Engagement",
    "Party",
    "Bachelor Party",
    "Haldi",
    "Office Party",
];

const weddingSubCategories = [
    "All",
    "Royal",
    "Animated",
    "Marathi",
    "Punjabi",
    "North Indian",
    "Gujarati",
    "South Indian",
    "Western",
];

const templatesData: Record<EventCategory, Template[]> = {
    Wedding: [
        { id: "w1", title: "Royal Heritage", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", price: "₹299", tag: "Bestseller", category: "Royal" },
        { id: "w2", title: "Floral Elegance", image: "https://images.unsplash.com/photo-1522673607200-1645062cd95f?auto=format&fit=crop&q=80&w=800", price: "₹499", tag: "New", category: "Animated" },
        { id: "w3", title: "Golden Luxe", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", price: "₹799", tag: "Premium", category: "North Indian" },
        { id: "w4", title: "Paithani Grace", image: "https://images.unsplash.com/photo-1601304900720-d626894c2514?auto=format&fit=crop&q=80&w=800", price: "₹399", tag: "Traditional", category: "Marathi" },
        { id: "w5", title: "Punjabi Dhol", image: "https://images.unsplash.com/photo-1587271407850-8d438913d2cd?auto=format&fit=crop&q=80&w=800", price: "₹450", tag: "Fun", category: "Punjabi" },
        { id: "w6", title: "Royal Rajwada", image: "https://images.unsplash.com/photo-1510076857177-be9caa1c5307?auto=format&fit=crop&q=80&w=800", price: "₹899", tag: "Luxury", category: "Royal" },
        { id: "w7", title: "Gujarati Garba", image: "https://images.unsplash.com/photo-1545959755-f269d0335e49?auto=format&fit=crop&q=80&w=800", price: "₹350", tag: "Festive", category: "Gujarati" },
        { id: "w8", title: "Temple Vows", image: "https://images.unsplash.com/photo-1605367673523-a12d1b953456?auto=format&fit=crop&q=80&w=800", price: "₹599", tag: "Divine", category: "South Indian" },
        { id: "w9", title: "Modern White", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", price: "₹299", tag: "Elegant", category: "Western" },
        { id: "w10", title: "Love Story Motion", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800", price: "₹999", tag: "Video", category: "Animated" },
    ],
    Birthday: [
        { id: "b1", title: "Funky 1st Birthday", image: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?auto=format&fit=crop&q=80&w=800", price: "₹199", tag: "Cute" },
        { id: "b2", title: "Sweet 16 Glow", image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800", price: "₹299", tag: "Trendy" },
        { id: "b3", title: "Golden 50th", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800", price: "₹399", tag: "Premium" },
    ],
    Engagement: [
        { id: "e1", title: "Ring Ceremony", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", price: "₹399", tag: "Classic" },
        { id: "e2", title: "Floral Ring", image: "https://images.unsplash.com/photo-1522673607200-1645062cd95f?auto=format&fit=crop&q=80&w=800", price: "₹449", tag: "New" },
    ],
    Party: [
        { id: "p1", title: "DJ Night", image: "https://images.unsplash.com/photo-1514525253440-b393332569ca?auto=format&fit=crop&q=80&w=800", price: "₹249", tag: "Hype" },
        { id: "p2", title: "Neon Vibes", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", price: "₹299", tag: "Cool" },
    ],
    "Bachelor Party": [
        { id: "bp1", title: "Boys Night Out", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800", price: "₹349", tag: "Wild" },
        { id: "bp2", title: "Game Night", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800", price: "₹299", tag: "Fun" },
    ],
    Haldi: [
        { id: "h1", title: "Yellow Vibes", image: "https://images.unsplash.com/photo-1604604516480-1a1a5b828854?auto=format&fit=crop&q=80&w=800", price: "₹299", tag: "Traditional" },
        { id: "h2", title: "Marigold Special", image: "https://images.unsplash.com/photo-1596223594154-180e8568c09d?auto=format&fit=crop&q=80&w=800", price: "₹350", tag: "Bright" },
    ],
    "Office Party": [
        { id: "op1", title: "Corporate Gala", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800", price: "₹499", tag: "Formal" },
        { id: "op2", title: "Team Lunch", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", price: "₹199", tag: "Casual" },
    ],
};

export const EventTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState<EventCategory>("Wedding");
    const [subCategory, setSubCategory] = useState<string>("All");

    const filteredTemplates = templatesData[selectedCategory].filter((template) => {
        if (selectedCategory !== "Wedding") return true;
        if (subCategory === "All") return true;
        return template.category === subCategory;
    });

    return (
        <section className="py-24 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 drop-shadow-lg text-white">
                        Pick Your Celebration
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Every event deserves a special invitation. What are we celebrating?
                    </p>
                </div>

                {/* Main Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setSubCategory("All");
                            }}
                            className={`relative px-6 py-2 rounded-full text-base font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === category
                                ? "text-white bg-gradient-to-r from-rose-600 to-purple-600 shadow-lg shadow-rose-500/30 scale-105"
                                : "text-white/70 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10"
                                }`}
                        >
                            {category}
                            {selectedCategory === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-full border-2 border-white/20"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Wedding Sub-Category Tabs (Only visible when Wedding is selected) */}
                <AnimatePresence>
                    {selectedCategory === "Wedding" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-wrap justify-center gap-2 mb-12 overflow-hidden"
                        >
                            {weddingSubCategories.map((sub) => (
                                <button
                                    key={sub}
                                    onClick={() => setSubCategory(sub)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${subCategory === sub
                                        ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {sub}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredTemplates.map((template) => (
                            <motion.div
                                key={template.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-900/20"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden bg-gray-800">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        style={{ backgroundImage: `url(${template.image})` }}
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                                        <Link href={`/templates/${template.id}/preview`} className="w-full max-w-[200px]">
                                            <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                                                View Preview
                                            </button>
                                        </Link>
                                        <Link href={`/create/${template.id}`} className="w-full max-w-[200px]">
                                            <button className="w-full px-6 py-3 bg-gradient-to-r from-rose-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-rose-500/40 transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                                                Create Invitation
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20 uppercase tracking-wider z-10">
                                        {template.tag}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10">
                                        <h3 className="text-2xl font-serif font-bold mb-1 text-white">{template.title}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-rose-300">{template.price}</span>
                                            {template.category && selectedCategory === "Wedding" && (
                                                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">{template.category}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredTemplates.length === 0 && (
                    <p className="text-center text-gray-500 py-12">No templates found for this style yet.</p>
                )}

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                        View More Designs
                    </button>
                </div>
            </div>
        </section>
    );
};
