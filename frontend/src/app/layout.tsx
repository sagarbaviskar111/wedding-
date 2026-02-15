import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sagarbhai.com"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sagarbhai - Premium Digital Wedding Invitations | Create Beautiful Indian Wedding Cards Online",
    template: "%s | Sagarbhai Wedding Invitations"
  },
  description: "Create stunning digital wedding invitations for Indian weddings. Choose from 10+ premium templates including Royal, Punjabi, Gujarati, South Indian & more. Share via WhatsApp, Email & Social Media. Free RSVP tracking.",
  keywords: [
    "wedding invitations",
    "digital wedding cards",
    "Indian wedding invitations",
    "online wedding invitations",
    "e-wedding cards",
    "Punjabi wedding cards",
    "Gujarati wedding invitations",
    "South Indian wedding cards",
    "Royal wedding invitations",
    "Marathi wedding cards",
    "wedding RSVP",
    "WhatsApp wedding invitations",
    "animated wedding cards",
    "video wedding invitations",
    "custom wedding invitations India",
    "wedding card maker online",
    "shaadi card online",
    "vivah card design"
  ],
  authors: [{ name: "Sagarbhai" }],
  creator: "Sagarbhai",
  publisher: "Sagarbhai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Sagarbhai - Premium Digital Wedding Invitations for Indian Weddings",
    description: "Create beautiful digital wedding invitations with 10+ premium templates. Perfect for Punjabi, Gujarati, Marathi, South Indian & Royal weddings. Share instantly via WhatsApp!",
    siteName: "Sagarbhai Wedding Invitations",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sagarbhai Wedding Invitations - Premium Digital Wedding Cards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagarbhai - Premium Digital Wedding Invitations",
    description: "Create stunning digital wedding invitations for Indian weddings. 10+ premium templates, instant WhatsApp sharing & free RSVP tracking.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@sagarbhai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Wedding Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sagarbhai Wedding Invitations",
    "url": "https://sagarbhai.com",
    "logo": "https://sagarbhai.com/logo.png",
    "description": "Premium digital wedding invitation platform for Indian weddings with 10+ cultural templates",
    "sameAs": [
      "https://www.facebook.com/sagarbhai",
      "https://www.instagram.com/sagarbhai",
      "https://twitter.com/sagarbhai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi", "Gujarati", "Marathi", "Punjabi", "Tamil"]
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
