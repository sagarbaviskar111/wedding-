"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function CreateDynamicInvitation() {
    const params = useParams();
    const id = (params?.id as string) || "w1";

    const [formData, setFormData] = useState<Record<string, string>>({});
    const [ceremonies, setCeremonies] = useState<any[]>([{ name: "", date: "", time: "", location: "" }]);

    const handleFieldChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCeremonyChange = (index: number, field: string, value: string) => {
        const newCeremonies = [...ceremonies];
        newCeremonies[index][field] = value;
        setCeremonies(newCeremonies);
    };

    const addCeremony = () => {
        setCeremonies([...ceremonies, { name: "", date: "", time: "", location: "" }]);
    };

    const removeCeremony = (index: number) => {
        setCeremonies(ceremonies.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = { ...formData, ceremonies };
        alert(JSON.stringify(payload, null, 2));
    };

    // Determine the template structure based on the "code" (ID)
    let formFields = [];
    let templateCategory = "";

    // WE CAN CHECK DIFFERENT TEMPLATE CODES HERE
    if (id === "w1") {
        templateCategory = "Royal Heritage Wedding";
        formFields = [
            { name: "groomName", label: "Groom's Name", placeholder: "E.g. Vikram" },
            { name: "brideName", label: "Bride's Name", placeholder: "E.g. Anjali" },
            { name: "groomImage", label: "Groom's Image URL", type: "url", placeholder: "https://..." },
            { name: "brideImage", label: "Bride's Image URL", type: "url", placeholder: "https://..." },
            { name: "date", label: "Main Wedding Date", type: "date" },
            { name: "welcomeMessage", label: "Welcome Message", placeholder: "With the heavenly blessings..." },
            { name: "musicUrl", label: "Background Music URL", type: "url", placeholder: "https://... (MP3 or YouTube)" },
            { name: "preWeddingPhotos", label: "Pre-Wedding Photos (Comma separated URLs)", placeholder: "https://img1.jpg, https://img2.jpg" }
        ];
    } else if (id.startsWith("w")) {
        templateCategory = "Standard Wedding";
        formFields = [
            { name: "groomName", label: "Groom's Name", placeholder: "Enter groom's name" },
            { name: "brideName", label: "Bride's Name", placeholder: "Enter bride's name" },
            { name: "groomImage", label: "Groom's Image URL", type: "url", placeholder: "https://..." },
            { name: "brideImage", label: "Bride's Image URL", type: "url", placeholder: "https://..." },
            { name: "date", label: "Main Wedding Date", type: "date" },
            { name: "musicUrl", label: "Background Music URL", type: "url", placeholder: "https://... (MP3 or YouTube)" },
            { name: "preWeddingPhotos", label: "Pre-Wedding Photos (Comma separated URLs)", placeholder: "https://img1.jpg, https://img2.jpg" }
        ];
    } else if (id.startsWith("b")) {
        templateCategory = "Birthday";
        formFields = [
            { name: "birthdayPersonName", label: "Birthday Person's Name", placeholder: "Enter name" },
            { name: "turningAge", label: "Turning Age", type: "number", placeholder: "E.g. 5" },
            { name: "date", label: "Date", type: "date" }
        ];
    } else {
        templateCategory = "General Event";
        formFields = [
            { name: "eventName", label: "Event Name", placeholder: "Enter event name" },
            { name: "hostName", label: "Host Name", placeholder: "Enter host name" },
            { name: "date", label: "Date", type: "date" }
        ];
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 w-full max-w-4xl mx-auto">
                <div className="text-center mb-8 sm:mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                        {templateCategory}
                    </h1>
                    <span className="inline-block bg-rose-100 text-rose-800 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-mono tracking-widest font-bold shadow-sm">
                        TEMPLATE CODE: {id.toUpperCase()}
                    </span>
                    <p className="text-sm sm:text-base text-gray-600 mt-4 font-medium px-2">
                        Please fill in the details below to personalize your {templateCategory.toLowerCase()} invitation.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* General Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {formFields.map((field) => (
                            <div key={field.name} className={`flex flex-col ${['welcomeMessage', 'preWeddingPhotos', 'musicUrl'].includes(field.name) ? 'md:col-span-2' : ''}`}>
                                <label className="text-xs sm:text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide flex items-center gap-2">
                                    {field.label}
                                    {field.name === 'musicUrl' && <span className="bg-purple-100 text-purple-600 text-[10px] px-2 py-0.5 rounded-full">PRO</span>}
                                    {field.name === 'preWeddingPhotos' && <span className="bg-rose-100 text-rose-600 text-[10px] px-2 py-0.5 rounded-full">PRO</span>}
                                </label>
                                <input
                                    type={field.type || "text"}
                                    value={formData[field.name] || ""}
                                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-rose-500 hover:border-gray-300 transition-colors text-gray-900 font-semibold text-base sm:text-lg bg-gray-50 focus:bg-white placeholder-gray-400"
                                    placeholder={field.placeholder}
                                    required={!['welcomeMessage', 'preWeddingPhotos', 'musicUrl'].includes(field.name)}
                                />
                                {field.name === 'preWeddingPhotos' && (
                                    <p className="text-xs text-gray-500 mt-2 font-medium">Add multiple image links separated by a comma. They will auto-play as a slideshow.</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Array of Ceremonies for Wedding Templates */}
                    {id.startsWith("w") && (
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">Ceremonies & Events</h3>
                                <button
                                    type="button"
                                    onClick={addCeremony}
                                    className="text-sm font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-4 py-2 border border-rose-200 hover:border-rose-300 rounded-xl transition-all shadow-sm active:scale-95 flex items-center gap-1"
                                >
                                    <span>+ Add Event</span>
                                </button>
                            </div>

                            <div className="space-y-6">
                                {ceremonies.map((ceremony, idx) => (
                                    <div key={idx} className="p-5 sm:p-6 bg-gray-50/80 border-2 border-gray-100 rounded-2xl relative shadow-sm group hover:border-rose-100 transition-colors">
                                        {ceremonies.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeCeremony(idx)}
                                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 shadow-sm transition-all active:scale-90"
                                                title="Remove Event"
                                            >
                                                ✕
                                            </button>
                                        )}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                            <div className="sm:col-span-2">
                                                <label className="text-xs sm:text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide block">Event / Ceremony</label>
                                                <select
                                                    value={ceremony.name}
                                                    onChange={(e) => handleCeremonyChange(idx, "name", e.target.value)}
                                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-rose-500 bg-white font-semibold text-gray-900 cursor-pointer"
                                                    required
                                                >
                                                    <option value="" disabled>Select Ceremony</option>
                                                    <option value="Haldi">Haldi</option>
                                                    <option value="Mehendi">Mehendi</option>
                                                    <option value="Sangeet">Sangeet</option>
                                                    <option value="Wedding / Pheras">Wedding / Pheras</option>
                                                    <option value="Reception">Reception</option>
                                                    <option value="Baraat">Baraat</option>
                                                    <option value="Engagement">Engagement</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs sm:text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide block">Date</label>
                                                <input
                                                    type="date"
                                                    value={ceremony.date || ""}
                                                    onChange={(e) => handleCeremonyChange(idx, "date", e.target.value)}
                                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-rose-500 bg-white font-semibold text-gray-900 [color-scheme:light]"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs sm:text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide block">Time</label>
                                                <input
                                                    type="time"
                                                    value={ceremony.time || ""}
                                                    onChange={(e) => handleCeremonyChange(idx, "time", e.target.value)}
                                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-rose-500 bg-white font-semibold text-gray-900 [color-scheme:light]"
                                                    required
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className="text-xs sm:text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide block">Location / Venue</label>
                                                <input
                                                    type="text"
                                                    value={ceremony.location}
                                                    onChange={(e) => handleCeremonyChange(idx, "location", e.target.value)}
                                                    placeholder="E.g. Main Courtyard"
                                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-rose-500 bg-white font-semibold text-gray-900 placeholder-gray-400"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] text-base sm:text-lg tracking-wide uppercase"
                        >
                            Generate Invitation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
