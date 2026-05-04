import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniPreeti - Unicode to Preeti Converter | युनिकोड टु प्रिती कन्भर्टर",
  description: "Fast, accurate, and privacy-focused Unicode Nepali ↔ Preeti converter. Convert legacy Preeti documents to modern Unicode instantly in your browser. 100% client-side, no data upload required.",
  keywords: [
    "unicode to preeti",
    "preeti to unicode", 
    "nepali converter",
    "युनिकोड",
    "प्रिती",
    "nepali font converter",
    "preeti font",
    "unicode nepali",
    "devanagari converter",
    "nepali typing",
    "preeti to unicode converter online",
    "unicode to preeti online",
    "nepali unicode converter",
  ],
  authors: [{ name: "UniPreeti Team" }],
  creator: "UniPreeti",
  publisher: "UniPreeti",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ne_NP"],
    title: "UniPreeti - Unicode to Preeti Converter",
    description: "Convert Nepali text between Unicode and Preeti encoding instantly. Fast, accurate, and completely private.",
    siteName: "UniPreeti",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniPreeti - Unicode to Preeti Converter",
    description: "Convert Nepali text between Unicode and Preeti encoding instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "UniPreeti",
              "description": "Fast, accurate, and privacy-focused Unicode Nepali to Preeti converter",
              "url": "https://unipreeti.com",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Unicode to Preeti conversion",
                "Preeti to Unicode conversion",
                "Real-time conversion",
                "File upload and download",
                "100% client-side processing",
                "Privacy-focused"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
