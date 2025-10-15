
import '../styles/globals.css'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title:
    "Studio PARSA | Best Architects & Interior Designers in Hyderabad | Luxury Residential & Commercial Spaces",
  description:
    "Studio PARSA is Hyderabad’s leading architecture and interior design studio crafting luxury, sustainable, and modern spaces. From residential villas to commercial interiors, we transform ideas into elegant realities across Telangana and beyond.",
  keywords: [
    "best architects in Hyderabad",
    "architecture firms Hyderabad",
    "interior designers Hyderabad",
    "luxury home interiors Hyderabad",
    "residential architecture",
    "commercial interiors Hyderabad",
    "modern architects Telangana",
    "Studio PARSA",
    "architectural design studio Hyderabad",
    "hyderabad architecture and interiors",
    "sustainable design Hyderabad",
  ],
  authors: [{ name: "Studio PARSA" }],
  creator: "Studio PARSA",
  publisher: "Studio PARSA",

  openGraph: {
    title:
      "Studio PARSA | Award-Winning Architects & Interior Designers in Hyderabad",
    description:
      "Explore Studio PARSA — the Hyderabad-based architecture and interior design studio blending creativity, sustainability, and luxury design aesthetics.",
    url: "https://studioparsa.in",
    siteName: "Studio PARSA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio PARSA — Architecture & Interior Design in Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Studio PARSA | Architecture & Interior Design in Hyderabad",
    description:
      "Hyderabad’s creative architecture & interior design studio specializing in elegant, functional spaces — Studio PARSA.",
    images: ["/assets/og-image.jpg"],
  },

  icons: {
    icon: "/assets/faicon.ico",
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
    <link rel="icon" href="/sp-icon.png" type="image/png" />
  </head>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {children}
  </body>
</html>

  );
}
