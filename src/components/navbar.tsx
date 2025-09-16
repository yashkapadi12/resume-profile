"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { User, Briefcase, Sparkles, FolderGit2 } from "lucide-react"

const SECTIONS = [
  { id: "home", label: "Home", color: "text-blue-600", underline: "bg-blue-500", Icon: User },
  { id: "skills", label: "Skills", color: "text-amber-600", underline: "bg-amber-500", Icon: Sparkles },
  { id: "projects", label: "Projects", color: "text-rose-600", underline: "bg-rose-500", Icon: FolderGit2 },
  { id: "experience", label: "Experience", color: "text-purple-600", underline: "bg-purple-500", Icon: Briefcase },
]

export default function Navbar() {
  const [active, setActive] = useState<string>(SECTIONS[0].id)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  const handleChange = (value: string) => {
    const el = document.getElementById(value)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled ? 'backdrop-blur bg-white/60 dark:bg-gray-900/50 border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo like in the image */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow">
              <span className="text-white font-bold text-lg">YK</span>
            </div>
          </div>

          {/* Navigation like in the image */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleChange(section.id)}
                className={`inline-flex items-center gap-2 text-base font-medium transition-colors ${
                  active === section.id
                    ? `${section.color} dark:text-white`
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                <section.Icon className="w-5 h-5" />
                <span className="relative">
                  {section.label}
                  {active === section.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${section.underline}`}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-1 gap-1">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleChange(section.id)}
                className={`inline-flex items-center gap-2 text-base text-left py-2 ${
                  active === section.id ? `${section.color} font-semibold` : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <section.Icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}


