import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Wedding Planning Blog - Tips, Ideas & Inspiration',
    description: 'Discover wedding planning tips, cultural traditions, invitation ideas, and expert advice for Indian weddings. Learn about Punjabi, Gujarati, Marathi, and South Indian wedding customs.',
    keywords: ['wedding blog', 'wedding planning tips', 'Indian wedding traditions', 'wedding invitation ideas', 'cultural weddings'],
};

const blogPosts = [
    {
        id: 1,
        title: "10 Essential Tips for Planning a Perfect Punjabi Wedding",
        excerpt: "From Mehendi to Anand Karaj, discover everything you need to know about planning an authentic Punjabi wedding celebration.",
        image: "https://images.unsplash.com/photo-1587271407850-8d438913d2cd?auto=format&fit=crop&q=80&w=800",
        category: "Punjabi Weddings",
        author: "Priya Sharma",
        date: "Feb 10, 2026",
        readTime: "8 min read",
        slug: "punjabi-wedding-planning-tips"
    },
    {
        id: 2,
        title: "Gujarati Wedding Traditions: A Complete Guide to Garba Night",
        excerpt: "Learn about the vibrant Garba ceremony, traditional rituals, and how to make your Gujarati wedding unforgettable.",
        image: "https://images.unsplash.com/photo-1545959755-f269d0335e49?auto=format&fit=crop&q=80&w=800",
        category: "Gujarati Weddings",
        author: "Raj Patel",
        date: "Feb 8, 2026",
        readTime: "6 min read",
        slug: "gujarati-garba-wedding-guide"
    },
    {
        id: 3,
        title: "South Indian Wedding Ceremonies: Temple Vows Explained",
        excerpt: "Understand the sacred rituals of South Indian weddings, from Ganesh Puja to Saptapadi around the holy fire.",
        image: "https://images.unsplash.com/photo-1605367673523-a12d1b953456?auto=format&fit=crop&q=80&w=800",
        category: "South Indian Weddings",
        author: "Meera Iyer",
        date: "Feb 5, 2026",
        readTime: "10 min read",
        slug: "south-indian-temple-wedding-rituals"
    },
    {
        id: 4,
        title: "How to Create the Perfect Digital Wedding Invitation",
        excerpt: "Step-by-step guide to designing beautiful digital wedding invitations that your guests will love.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
        category: "Wedding Tips",
        author: "Sagar Baviskar",
        date: "Feb 3, 2026",
        readTime: "5 min read",
        slug: "create-digital-wedding-invitation"
    },
    {
        id: 5,
        title: "Marathi Wedding Traditions: Paithani Sarees and Sacred Rituals",
        excerpt: "Explore the beauty of Marathi weddings, traditional Paithani sarees, and meaningful ceremonies.",
        image: "https://images.unsplash.com/photo-1601304900720-d626894c2514?auto=format&fit=crop&q=80&w=800",
        category: "Marathi Weddings",
        author: "Anjali Deshmukh",
        date: "Feb 1, 2026",
        readTime: "7 min read",
        slug: "marathi-wedding-paithani-traditions"
    },
    {
        id: 6,
        title: "Royal Rajasthani Weddings: Planning a Regal Celebration",
        excerpt: "Discover how to plan a majestic Rajasthani wedding with palace venues, royal traditions, and grand celebrations.",
        image: "https://images.unsplash.com/photo-1510076857177-be9caa1c5307?auto=format&fit=crop&q=80&w=800",
        category: "Royal Weddings",
        author: "Vikram Singh",
        date: "Jan 28, 2026",
        readTime: "9 min read",
        slug: "royal-rajasthani-wedding-planning"
    },
];

export default function BlogPage() {
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
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-rose-950/20 to-black">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-purple-200 to-rose-200">
                        Wedding Planning Blog
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Expert tips, cultural traditions, and inspiration for your perfect Indian wedding
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-rose-500/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-rose-600 text-white text-xs font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-rose-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={14} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                                        <User size={16} className="text-gray-500" />
                                        <span className="text-sm text-gray-400">{post.author}</span>
                                    </div>

                                    {/* Read More */}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="mt-4 inline-block text-rose-400 hover:text-rose-300 font-semibold text-sm"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-rose-950/30 to-purple-950/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">
                        Ready to Create Your Wedding Invitation?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Choose from 10+ premium templates and share instantly
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-full font-medium text-lg hover:brightness-110 transition-all hover:scale-105 shadow-xl"
                    >
                        Browse Templates
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 text-center text-gray-400 bg-black/40">
                <p>© 2026 Sagarbhai Invitations. Made with ❤️ for your special day.</p>
            </footer>
        </div>
    );
}
