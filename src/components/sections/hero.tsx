"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface HeroProps {
  name: string
  title: string
  location: string
  email: string
  phone: string
  imageUrl?: string
  summary: string
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

// Typing animation component
function TypingText({ text, className }: { text: string; className: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <span className={className}>{displayedText}</span>
}

export function Hero({ name, title, location, email, phone, imageUrl, summary }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 gap-12 place-items-center text-center">
          {/* Left side - Content exactly like the reference image */}
          <div className="space-y-8">
            {/* Greeting - exact match */}
            <div className="text-base sm:text-lg font-medium text-gray-500 tracking-wide">
              Hello, I&apos;m {name.split(' ')[0]},
            </div>
            
            {/* Name and title - exact typography match */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                a {title.split(' ')[0]}
              </h1>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {title.split(' ')[1]}.
                </span>
              </div>
            </div>
            
            {/* Summary - exact styling match */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              {summary}
            </p>
            
            {/* CTA Buttons & Social */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg">
                Hire me
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                View works
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a href="https://github.com/yashkapadi12" target="_blank" className="w-9 h-9 rounded-full bg-gray-900 text-white grid place-items-center">G</a>
              <a href="https://www.linkedin.com/in/yash03kapadi/" target="_blank" className="w-9 h-9 rounded-full bg-blue-600 text-white grid place-items-center">in</a>
              <a href="mailto:yashkapadi74909@outlook.com" className="w-9 h-9 rounded-full bg-rose-600 text-white grid place-items-center">@</a>
            </div>
          </div>
          
          {/* Right side removed as requested */}
        </div>
      </div>
    </section>
  )
}
