import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://helumlimited.com"),
  title: {
    default: "HELUM LIMITED | Technology, Energy & Renewable Energy Solutions",
    template: "%s | HELUM LIMITED",
  },
  description:
    "Helum Limited delivers practical technology and renewable energy solutions designed to improve energy access, reliability, productivity and business efficiency across Africa.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://helumlimited.com",
    siteName: "Helum Limited",
    title: "HELUM LIMITED | Technology, Energy & Renewable Energy Solutions",
    description:
      "Practical technology and renewable energy solutions for Africa. Engineering the Intelligence of Energy.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
        width: 1200,
        height: 630,
        alt: "Helum Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HELUM LIMITED | Technology, Energy & Renewable Energy Solutions",
    description: "Practical technology and renewable energy solutions for Africa.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://helumlimited.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helum Limited",
  url: "https://helumlimited.com",
  description:
    "Kenyan technology and renewable-energy company focused on developing, sourcing and delivering innovative solutions that address real-world energy and productivity challenges.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Darosa Plaza, Karen Road",
    addressLocality: "Nairobi",
    postalCode: "00502",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-710-125-685",
    contactType: "customer service",
    email: "helumlimited@gmail.com",
    areaServed: "KE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
