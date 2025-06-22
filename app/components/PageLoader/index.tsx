'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type PageLoaderProps = {
  isDarkMode: boolean
}

export default function PageLoader({ isDarkMode }: PageLoaderProps) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000) // Loader duration
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
        fadeOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      } ${isDarkMode ? 'bg-[#0F0F0F] text-white' : 'bg-[#F5F5F5] text-[#1A1A1A]'}`}
    >
      {/* Logo with fade + bounce */}
      <div className="mb-6 animate-bounce-slow">
        <Image
          src="/assets/splogo.jpg"
          alt="Studio Parsa Logo"
          width={120}
          height={120}
          className="rounded-full shadow-xl"
        />
      </div>

      {/* Animated Text */}
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest animate-text-slide-up">
        <span className={isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'}>
          Studio PARSA
        </span>
      </h1>
      <p className="mt-2 text-sm md:text-base tracking-wide animate-text-fade-in">
        Architecture & Interiors
      </p>
    </div>
  )
}

