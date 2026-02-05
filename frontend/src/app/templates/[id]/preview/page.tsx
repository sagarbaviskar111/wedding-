"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Share2, ZoomIn, Star, Sparkles } from "lucide-react";
import { getTemplateById } from "@/constants/templates";

export default function TemplatePreview() {
    const { id } = useParams();
    const templateId = (Array.isArray(id) ? id[0] : id) || 'w1';
    const template = getTemplateById(templateId);

    // Fallback if not found (though getTemplateById handles it)
    if (!template) {
        return <div className="text-white text-center py-20">Template not found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-rose-500 font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Templates</span>
                    </Link>
                    <div className="font-serif text-xl font-bold text-rose-400">Sagarbhai</div>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Share2 size={20} className="text-gray-300" />
                    </button>
                </div>
            </nav>

            <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Image/Preview Area */}
                <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 aspect-[4/5] lg:aspect-auto h-[600px]">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${template.coverImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                    <Link href={`/templates/${id}/demo`}>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <button className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-bold shadow-xl hover:scale-110 transition-transform">
                                Live Preview
                            </button>
                        </div>
                    </Link>

                    <button className="absolute bottom-6 right-6 p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-rose-600 transition-colors border border-white/20">
                        <ZoomIn size={24} />
                    </button>
                </div>

                {/* Right: Details & Call to Action */}
                <div className="space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-sm font-semibold mb-4 border border-rose-500/30">
                            <Sparkles size={14} /> {template.tag || "Premium Template"}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {template.title}
                        </h1>
                        <p className="text-3xl font-bold text-rose-400">{template.price}</p>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-rose-500/30 pl-6">
                        {template.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {template.features?.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                                <Check size={18} className="text-emerald-400" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                        <Link href={`/create/${id}`} className="flex-1">
                            <button className="w-full py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white font-bold rounded-full text-lg hover:scale-105 transition-all shadow-xl shadow-rose-900/30 ring-1 ring-white/20">
                                Create Invitation Now
                            </button>
                        </Link>
                        <Link href={`/templates/${id}/demo`} className="flex-1">
                            <button className="w-full py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors">
                                Try Demo
                            </button>
                        </Link>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        * No credit card required for editing. Pay only when you download.
                    </p>
                </div>
            </div>
        </div>
    );
}
