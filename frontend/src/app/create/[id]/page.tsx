"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Type, Image as ImageIcon, Music, Calendar } from "lucide-react";

export default function CreateInvitation() {
    const { id } = useParams();

    // State for form inputs (Basic Mockup)
    const [formData, setFormData] = useState({
        brideName: "",
        groomName: "",
        date: "",
        venue: ""
    });

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col h-screen overflow-hidden">
            {/* Editor Header */}
            <header className="h-16 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-6 shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <Link href={`/templates/${id}/preview`} className="p-2 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="font-semibold text-lg hidden sm:block">Editor <span className="text-gray-500 mx-2">/</span> Royal Heritage</h1>
                </div>

                <div className="flex gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Save Draft
                    </button>
                    <button className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-full transition-colors flex items-center gap-2">
                        <Save size={16} />
                        Publish
                    </button>
                </div>
            </header>

            {/* Main Editor Area */}
            <div className="flex flex-1 overflow-hidden">

                {/* Left Sidebar: Tools */}
                <aside className="w-20 bg-[#0a0a0a] border-r border-white/10 flex flex-col items-center py-6 gap-6 shrink-0 z-10">
                    <ToolButton icon={Type} label="Text" active />
                    <ToolButton icon={ImageIcon} label="Photos" />
                    <ToolButton icon={Music} label="Music" />
                    <ToolButton icon={Calendar} label="Event" />
                </aside>

                {/* Middle: Canvas/Preview (Scrollable) */}
                <main className="flex-1 bg-[#121212] p-8 overflow-y-auto flex justify-center">
                    {/* Phone/Card Canvas Simulation */}
                    <div className="w-full max-w-sm aspect-[9/16] bg-white text-black shadow-2xl relative rounded-md overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
                        {/* Background Image Mock */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800')" }}
                        />
                        <div className="absolute inset-0 bg-white/80" />

                        {/* Live Preview Text */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                            <p className="text-rose-600 font-serif italic text-lg">Together with their families</p>

                            <div className="space-y-2">
                                <h2 className="text-3xl font-serif font-bold text-gray-800">
                                    {formData.brideName || "Anjali"}
                                </h2>
                                <span className="text-rose-500 font-serif text-2xl">&</span>
                                <h2 className="text-3xl font-serif font-bold text-gray-800">
                                    {formData.groomName || "Vikram"}
                                </h2>
                            </div>

                            <p className="text-gray-600 font-serif italic pt-4">Request the honor of your presence at their wedding ceremony</p>

                            <div className="pt-6 border-t border-rose-200 w-full max-w-[200px] mx-auto">
                                <p className="font-bold text-gray-800 uppercase tracking-widest text-sm">
                                    {formData.date || "DECEMBER 12, 2025"}
                                </p>
                                <p className="text-gray-600 text-sm mt-1">
                                    {formData.venue || "The Royal Palace, Udaipur"}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Right Sidebar: Properties/Inputs */}
                <aside className="w-80 bg-[#0a0a0a] border-l border-white/10 p-6 overflow-y-auto shrink-0 z-10">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Type size={18} className="text-rose-500" />
                        Edit Details
                    </h3>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Bride's Name</label>
                            <input
                                type="text"
                                placeholder="Ex. Anjali"
                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-rose-500 transition-colors"
                                value={formData.brideName}
                                onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Groom's Name</label>
                            <input
                                type="text"
                                placeholder="Ex. Vikram"
                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-rose-500 transition-colors"
                                value={formData.groomName}
                                onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Date</label>
                            <input
                                type="date"
                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-rose-500 transition-colors text-gray-300"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Venue</label>
                            <textarea
                                placeholder="Ex. The Royal Palace, Udaipur"
                                rows={3}
                                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-rose-500 transition-colors resize-none"
                                value={formData.venue}
                                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

function ToolButton({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={`flex flex-col items-center gap-1 group w-full py-2 border-l-2 transition-colors ${active ? 'border-rose-500 text-rose-500' : 'border-transparent text-gray-400 hover:text-white'}`}>
            <div className={`p-2 rounded-lg transition-colors ${active ? 'bg-rose-500/10' : 'group-hover:bg-white/5'}`}>
                <Icon size={24} />
            </div>
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    )
}
