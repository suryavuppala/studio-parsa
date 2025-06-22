'use client'

import Image from 'next/image'

export default function FooterSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section
      id="footer"
      className={`w-full border-t px-6 py-10 mt-20 transition-all duration-500 ${
        isDarkMode ? 'bg-[#0F0F0F] border-[#1E1E1E] text-white' : 'bg-[#F5F5F5] border-[#DDD3C3] text-[#1A1A1A]'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/assets/splogo.jpg"
            alt="Studio Parsa Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h3 className="text-xl font-bold tracking-widest">STUDIO PARSA</h3>
          <p className="text-sm opacity-80">
            Architecture & Interiors based in Hyderabad. Designing meaningful spaces with elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-md font-semibold tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-3">
          <h4 className="text-md font-semibold tracking-wide uppercase">Contact</h4>
          <p className="text-sm opacity-90">Hyderabad, India</p>
          <p className="text-sm opacity-90">Email: <a href="mailto:studioparsa@email.com" className="hover:underline">studioparsa@email.com</a></p>
          <div className="flex space-x-4 mt-2">
            {/* Socials can be updated with real links/icons */}
            <a href="#" className="text-xl hover:scale-110 transition-transform">📸</a>
            <a href="#" className="text-xl hover:scale-110 transition-transform">📞</a>
            <a href="#" className="text-xl hover:scale-110 transition-transform">📐</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs opacity-60">
  © {new Date().getFullYear()} Studio PARSA. All rights reserved. <br />
  <span className="mt-1 block">Developed by <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A87E6E]">Aadarsh Surya Vuppala</a></span>
</div>


    </section>
  )
}
