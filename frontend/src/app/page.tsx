"use client";

import { EventTemplates } from "@/components/EventTemplates";
import { FestiveBackground } from "@/components/FestiveBackground";
import LanguageSelector from "@/components/LanguageSelector";
import { HeaderAd, InFeedAd } from "@/components/GoogleAd";
import Image from "next/image";
import Link from "next/link";
import { HelpCircle, Menu, X, User, LogOut, Settings } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setProfileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white relative">
      <FestiveBackground />
      <div className="relative z-10 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold font-serif text-rose-400 tracking-wider drop-shadow-md hover:scale-105 transition-transform">
              Sagarbhai
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium text-gray-200">
              <Link href="#templates" className="hover:text-white transition-colors hover:scale-105">Templates</Link>
              <Link href="#features" className="hover:text-white transition-colors hover:scale-105">Features</Link>
              <Link href="#pricing" className="hover:text-white transition-colors hover:scale-105">Pricing</Link>
              <Link href="/blog" className="hover:text-white transition-colors hover:scale-105">Blog</Link>
              <Link href="/help" className="flex items-center gap-1 hover:text-white transition-colors hover:scale-105">
                <HelpCircle size={16} />
                Help
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSelector />

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium">{user.name}</span>
                  </button>

                  {/* Profile Dropdown */}
                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                      <div className="p-4 border-b border-white/10">
                        <p className="text-sm font-semibold text-white">{user.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>
                      <div className="py-2">
                        <Link
                          href="/profile"
                          onClick={() => setProfileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-sm"
                        >
                          <User size={16} />
                          My Profile
                        </Link>
                        <Link
                          href="/profile"
                          onClick={() => setProfileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-sm"
                        >
                          <Settings size={16} />
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-sm text-red-400"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-medium px-4 py-2 hover:text-white text-gray-200 transition-colors">
                    Login
                  </Link>
                  <Link href="/register" className="text-sm font-medium px-5 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full hover:scale-105 transition-all shadow-lg">
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
              <div className="px-4 py-6 space-y-4">
                <Link href="#templates" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-base">
                  Templates
                </Link>
                <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-base">
                  Features
                </Link>
                <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-base">
                  Pricing
                </Link>
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-base">
                  Blog
                </Link>
                <Link href="/help" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-base">
                  Help & Support
                </Link>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <LanguageSelector />

                  {user ? (
                    <>
                      <div className="p-4 bg-white/10 rounded-lg">
                        <p className="text-sm font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>
                      <Link
                        href="/profile"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full py-3 px-4 text-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-base"
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full py-3 px-4 text-center bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors text-base"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="block w-full py-3 px-4 text-center hover:bg-white/10 rounded-lg transition-colors text-base">
                        Login
                      </Link>
                      <Link href="/register" className="block w-full py-3 px-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg font-medium text-base">
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:py-1 rounded-full bg-white/10 border border-white/20 text-rose-200 text-xs sm:text-xs font-medium mb-6 sm:mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs">Now Available in 10+ Regional Languages</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 sm:mb-8 drop-shadow-2xl px-4 sm:px-0">
              Create Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-purple-200 to-rose-200 animate-gradient">Digital Wedding</span> <br className="hidden sm:block" />
              <span className="block sm:inline">Invitations Online</span>
            </h1>

            <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-12 leading-relaxed drop-shadow-md px-4 sm:px-6">
              Design stunning wedding invitations for Indian weddings with our premium templates. Choose from Royal, Punjabi, Gujarati, Marathi, South Indian & more cultural designs. Share instantly via WhatsApp, Email & Social Media with built-in RSVP tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <a
                href="#templates"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-full font-medium text-base sm:text-lg hover:brightness-110 transition-all hover:scale-105 shadow-xl shadow-rose-500/25 text-center"
                aria-label="Create your wedding invitation"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Create Invitation
              </a>
              <a
                href="#templates"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium text-base sm:text-lg hover:bg-white/20 transition-all backdrop-blur-md text-center"
                aria-label="View wedding invitation examples"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Examples
              </a>
            </div>
          </div>
        </section>

        {/* Ad Placement - After Hero */}
        <HeaderAd />

        {/* Features Grid */}
        <section id="features" className="py-16 sm:py-24 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-3 sm:mb-4 drop-shadow-lg px-4">
                Why Choose Sagarbhai for Your Wedding Invitations?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Everything you need to create and share beautiful digital wedding invitations
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <FeatureCard
                title="10+ Premium Templates"
                description="Choose from professionally designed templates for Royal, Punjabi, Gujarati, Marathi, South Indian, and Western weddings. Each template is culturally authentic and beautifully animated."
                icon="🎨"
              />
              <FeatureCard
                title="Smart RSVP Tracking"
                description="Track guest attendance in real-time with our built-in RSVP system. Guests can respond directly through the invitation with just one click. Export guest lists easily."
                icon="💌"
              />
              <FeatureCard
                title="Video & Music Integration"
                description="Add your pre-wedding shoot videos, couple photos, or personal messages. Include background music to make your invitation truly special and memorable."
                icon="🎥"
              />
            </div>
          </div>
        </section>

        {/* Ad Placement - Between Sections */}
        <InFeedAd />

        {/* Event Templates Section */}
        <section id="templates">
          <EventTemplates />
        </section>

        {/* Ad Placement - After Templates */}
        <InFeedAd />

        {/* Visual Showcase (Placeholder for now) */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 drop-shadow-lg">Designed to Impress</h2>
              <p className="text-gray-300">Experience the next generation of wedding invites.</p>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                {/* In a real app, I'd put a nice image or video here */}
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">✨</div>
                  <p>Interactive Preview Container</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-8 mb-8 sm:mb-12">
              {/* Brand */}
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold font-serif text-rose-400 mb-3 sm:mb-4">Sagarbhai</div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Create beautiful digital wedding invitations for your special day. Share instantly via WhatsApp!
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center sm:text-left">
                <h3 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Quick Links</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li><Link href="#templates" className="hover:text-rose-400 transition-colors">Templates</Link></li>
                  <li><Link href="#features" className="hover:text-rose-400 transition-colors">Features</Link></li>
                  <li><Link href="#pricing" className="hover:text-rose-400 transition-colors">Pricing</Link></li>
                  <li><Link href="/blog" className="hover:text-rose-400 transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div className="text-center sm:text-left">
                <h3 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Support</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li><Link href="/help" className="hover:text-rose-400 transition-colors">Help Center</Link></li>
                  <li><Link href="/help#faq" className="hover:text-rose-400 transition-colors">FAQs</Link></li>
                  <li><Link href="/help#contact" className="hover:text-rose-400 transition-colors">Contact Us</Link></li>
                  <li><a href="mailto:support@sagarbhai.com" className="hover:text-rose-400 transition-colors">Email Support</a></li>
                </ul>
              </div>

              {/* Social */}
              <div className="text-center sm:text-left">
                <h3 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Follow Us</h3>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors" aria-label="Facebook">
                    <span className="text-xl">📘</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors" aria-label="Instagram">
                    <span className="text-xl">📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors" aria-label="Twitter">
                    <span className="text-xl">🐦</span>
                  </a>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-3 sm:mt-4">
                  Available in 8+ languages including Hindi, Gujarati, Marathi, Punjabi & more
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <p className="text-center md:text-left">© 2026 Sagarbhai Invitations. Made with ❤️ for your special day.</p>
              <div className="flex gap-4 sm:gap-6">
                <Link href="/privacy" className="hover:text-rose-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-rose-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="p-8 rounded-2xl bg-black border border-white/10 hover:border-rose-500/50 transition-colors group">
      <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
