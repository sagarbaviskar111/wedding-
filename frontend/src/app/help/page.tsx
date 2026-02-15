import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Search, MessageCircle, Mail, Phone, HelpCircle, Book, Video, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Help & Support - Sagarbhai Wedding Invitations',
    description: 'Get help with creating digital wedding invitations. Find FAQs, tutorials, and contact our support team for assistance.',
    keywords: ['wedding invitation help', 'support', 'FAQ', 'customer service', 'how to create invitation'],
};

const faqs = [
    {
        category: "Getting Started",
        questions: [
            {
                q: "How do I create a wedding invitation?",
                a: "Simply browse our templates, select your favorite, customize it with your wedding details, and share it via WhatsApp, Email, or Social Media. It takes less than 5 minutes!"
            },
            {
                q: "Do I need to create an account?",
                a: "Yes, creating a free account helps you save your invitations, track RSVPs, and access them anytime from any device."
            },
            {
                q: "Can I preview before purchasing?",
                a: "Absolutely! Every template has a free demo preview. You can see exactly how it looks before making a purchase."
            },
        ]
    },
    {
        category: "Templates & Customization",
        questions: [
            {
                q: "How many templates are available?",
                a: "We offer 10+ premium templates covering Royal, Punjabi, Gujarati, Marathi, South Indian, and Western wedding styles. New templates are added regularly!"
            },
            {
                q: "Can I customize the colors and text?",
                a: "Yes! All templates are fully customizable. You can change names, dates, venue details, colors, and add your own photos and videos."
            },
            {
                q: "Can I add my pre-wedding photos or videos?",
                a: "Yes! Our premium templates support photo galleries and video integration. Perfect for adding your pre-wedding shoot or couple story."
            },
        ]
    },
    {
        category: "Pricing & Payment",
        questions: [
            {
                q: "What are the template prices?",
                a: "Templates range from ₹299 to ₹999. Basic templates start at ₹299, Premium at ₹599, and Video templates at ₹999. One-time payment, unlimited sharing!"
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept UPI, Credit/Debit Cards, Net Banking, and popular digital wallets like Paytm, PhonePe, and Google Pay."
            },
            {
                q: "Is there a refund policy?",
                a: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with your purchase. No questions asked!"
            },
        ]
    },
    {
        category: "Sharing & RSVP",
        questions: [
            {
                q: "How do I share my invitation?",
                a: "After creating your invitation, you'll get a unique link. Share it via WhatsApp (one-click), Email, SMS, or any social media platform."
            },
            {
                q: "How does RSVP tracking work?",
                a: "Guests can respond directly through your invitation with 'Attending', 'Not Attending', or 'Maybe'. You can view all responses in your dashboard in real-time."
            },
            {
                q: "Can I send reminders to guests?",
                a: "Yes! You can send automated WhatsApp reminders to guests who haven't responded or confirmed attendance."
            },
        ]
    },
    {
        category: "Technical Support",
        questions: [
            {
                q: "Which devices are supported?",
                a: "Our invitations work on all devices - smartphones, tablets, laptops, and desktops. They're optimized for both Android and iOS."
            },
            {
                q: "Do I need an internet connection?",
                a: "Yes, guests need internet to view the invitation. However, it loads quickly even on slow connections (2G/3G)."
            },
            {
                q: "Can I edit my invitation after sharing?",
                a: "Yes! You can edit details anytime. Changes are reflected immediately for all guests who have the link."
            },
        ]
    },
];

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <div className="font-serif text-xl font-bold text-rose-400">Sagarbhai</div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-purple-950/20 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-rose-200 to-purple-200">
                        How Can We Help?
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Find answers to common questions or contact our support team
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-rose-500 transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Quick Help Cards */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-rose-500/50 transition-all group cursor-pointer">
                            <div className="w-16 h-16 bg-rose-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Book className="text-rose-400" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Documentation</h3>
                            <p className="text-sm text-gray-400">Step-by-step guides</p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-purple-500/50 transition-all group cursor-pointer">
                            <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Video className="text-purple-400" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Video Tutorials</h3>
                            <p className="text-sm text-gray-400">Watch and learn</p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-blue-500/50 transition-all group cursor-pointer">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="text-blue-400" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Live Chat</h3>
                            <p className="text-sm text-gray-400">Chat with support</p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-green-500/50 transition-all group cursor-pointer">
                            <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="text-green-400" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Submit Ticket</h3>
                            <p className="text-sm text-gray-400">Get personalized help</p>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-serif font-bold mb-12 text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-8">
                            {faqs.map((category, idx) => (
                                <div key={idx}>
                                    <h3 className="text-2xl font-bold mb-6 text-rose-400 flex items-center gap-2">
                                        <HelpCircle size={24} />
                                        {category.category}
                                    </h3>
                                    <div className="space-y-4">
                                        {category.questions.map((faq, qIdx) => (
                                            <details
                                                key={qIdx}
                                                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-rose-500/50 transition-all"
                                            >
                                                <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between hover:text-rose-400 transition-colors">
                                                    <span>{faq.q}</span>
                                                    <span className="text-rose-400 group-open:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                                                    {faq.a}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-20 px-6 bg-gradient-to-r from-rose-950/30 to-purple-950/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">
                        Still Need Help?
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Our support team is here to assist you
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                            <Mail className="w-12 h-12 text-rose-400 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Email Support</h3>
                            <p className="text-sm text-gray-400 mb-4">Response within 24 hours</p>
                            <a href="mailto:support@sagarbhai.com" className="text-rose-400 hover:text-rose-300 font-semibold">
                                support@sagarbhai.com
                            </a>
                        </div>

                        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                            <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Phone Support</h3>
                            <p className="text-sm text-gray-400 mb-4">Mon-Sat, 10 AM - 7 PM IST</p>
                            <a href="tel:+919876543210" className="text-purple-400 hover:text-purple-300 font-semibold">
                                +91 98765 43210
                            </a>
                        </div>

                        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                            <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Live Chat</h3>
                            <p className="text-sm text-gray-400 mb-4">Instant responses</p>
                            <button className="text-blue-400 hover:text-blue-300 font-semibold">
                                Start Chat →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 text-center text-gray-400 bg-black/40">
                <p>© 2026 Sagarbhai Invitations. Made with ❤️ for your special day.</p>
            </footer>
        </div>
    );
}
