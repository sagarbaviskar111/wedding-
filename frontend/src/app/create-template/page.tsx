"use client";

import { useState } from "react";

export default function CreateTemplate() {
    const [groomName, setGroomName] = useState("");
    const [brideName, setBrideName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Groom: ${groomName}\nBride: ${brideName}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Template</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="groomName" className="block text-sm font-medium text-gray-700 mb-2">
                            Groom's Name
                        </label>
                        <input
                            type="text"
                            id="groomName"
                            value={groomName}
                            onChange={(e) => setGroomName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors text-gray-900"
                            placeholder="Enter groom's name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="brideName" className="block text-sm font-medium text-gray-700 mb-2">
                            Bride's Name
                        </label>
                        <input
                            type="text"
                            id="brideName"
                            value={brideName}
                            onChange={(e) => setBrideName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors text-gray-900"
                            placeholder="Enter bride's name"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:ring-4 focus:ring-rose-500/50"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
