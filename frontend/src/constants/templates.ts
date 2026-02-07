
export type TemplateType = {
    id: string;
    title: string;
    price: string;
    description: string;
    type: 'Royal' | 'Modern' | 'Floral' | 'Traditional' | 'Golden' | 'Marathi';
    coverImage: string;
    images: string[];
    features: string[];
    tag: string;
};

export const TEMPLATES: Record<string, TemplateType> = {
    "w1": {
        id: "w1",
        title: "Royal Heritage",
        price: "₹299",
        description: "A timeless design inspired by the royal courts of Rajasthan, featuring intricate mandala patterns and luxurious gold accents. Perfect for a grand palace wedding.",
        type: 'Royal',
        coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
        images: [
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1587271407850-8d438913d2cd?auto=format&fit=crop&q=80&w=800"
        ],
        features: ["Royal Aesthetics", "Traditional Music", "Elephant Animations", "Gold Foil Effects"],
        tag: "Bestseller"
    },
    "w2": {
        id: "w2",
        title: "Floral Elegance",
        price: "₹499",
        description: "Soft pastels and blooming animations create a romantic atmosphere. Ideal for spring weddings and outdoor ceremonies.",
        type: 'Floral',
        coverImage: "https://images.unsplash.com/photo-1522673607200-1645062cd95f?auto=format&fit=crop&q=80&w=800",
        images: [
            "https://images.unsplash.com/photo-1522673607200-1645062cd95f?auto=format&fit=crop&q=80&w=800"
        ],
        features: ["Floral Animations", "Pastel Theme", "Soft Typography", "Romantic Music"],
        tag: "New"
    },
    "w3": {
        id: "w3",
        title: "Golden Luxe",
        price: "₹799",
        description: "A premium North Indian style template focusing on glitz, glamour, and luxury. Features black and gold aesthetics with shimmer animations.",
        type: 'Golden',
        coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
        images: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
        ],
        features: ["Gold Shimmer", "Spotlight Effect", "Dark Theme", "Premium Animations"],
        tag: "Premium"
    },
    "w4": {
        id: "w4",
        title: "Paithani Grace",
        price: "₹499",
        description: "Inspired by the rich heritage of Maharashtra. Features authentic Paithani saree textures, Warli art motifs, and royal peacock colors.",
        type: 'Marathi',
        coverImage: "https://images.unsplash.com/photo-1605218427306-0336d355dc03?auto=format&fit=crop&q=80&w=800", // Placeholder for saree texture
        images: [
            "https://images.unsplash.com/photo-1605218427306-0336d355dc03?auto=format&fit=crop&q=80&w=800"
        ],
        features: ["Paithani Texture", "Peacock Motifs", "Marathi Fonts", "Cultural Music"],
        tag: "Traditional"
    },
    "w9": {
        id: "w9",
        title: "Modern White",
        price: "₹299",
        description: "Clean lines, bold typography, and a minimalist aesthetic. For the modern couple who loves simplicity and elegance.",
        type: 'Modern',
        coverImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
        images: [
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
        ],
        features: ["Minimalist Design", "Modern Fonts", "Clean Layout", "Fast Loading"],
        tag: "Elegant"
    }
};

export const getTemplateById = (id: string) => TEMPLATES[id] || TEMPLATES['w1'];
