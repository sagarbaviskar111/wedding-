"use client";

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
];

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleLanguageChange = (language: typeof languages[0]) => {
        setSelectedLanguage(language);
        setIsOpen(false);
        // Here you would implement actual language change logic
        // For example: i18n.changeLanguage(language.code)
        console.log('Language changed to:', language.code);
    };

    return (
        <div className="relative">
            {/* Language Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-sm font-medium"
                aria-label="Select language"
            >
                <Globe size={16} className="text-gray-300" />
                <span className="hidden sm:inline text-gray-300">{selectedLanguage.nativeName}</span>
                <span className="text-xl">{selectedLanguage.flag}</span>
                <span className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-64 bg-gray-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
                        >
                            <div className="p-3">
                                <div className="text-xs text-gray-400 uppercase tracking-wider px-3 py-2 font-semibold">
                                    Select Language
                                </div>
                                <div className="space-y-1">
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => handleLanguageChange(language)}
                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${selectedLanguage.code === language.code
                                                    ? 'bg-rose-600 text-white'
                                                    : 'hover:bg-white/10 text-gray-300'
                                                }`}
                                        >
                                            <span className="text-2xl">{language.flag}</span>
                                            <div className="flex-1 text-left">
                                                <div className="font-medium">{language.nativeName}</div>
                                                <div className="text-xs opacity-70">{language.name}</div>
                                            </div>
                                            {selectedLanguage.code === language.code && (
                                                <span className="text-white">✓</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-3 py-2 bg-white/5 border-t border-white/10">
                                <p className="text-xs text-gray-500 text-center">
                                    More languages coming soon!
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
