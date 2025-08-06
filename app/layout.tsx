
import '../styles/globals.css'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Parsa",
  description: `At Studio PARSA, we craft spaces that tell stories. Based in Hyderabad, we are a multidisciplinary design studio specializing in architecture, interior design, and spatial planning for both residential and commercial environments. Our philosophy blends functionality with aesthetic elegance—designing spaces that are timeless, sustainable, and deeply personal.
From concept to execution, every project is a collaborative journey shaped by context, culture, and client aspirations. Whether it's a serene home, a dynamic workspace, or a vibrant retail environment, we approach each project with a commitment to creativity, detail, and innovation.
Let us transform your space into a reflection of your vision.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        
      </body>
    </html>
  );
}
