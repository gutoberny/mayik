"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
// import { Menu, X } from "lucide-react" // Will use later for mobile

const navLinks = [
  { name: "A Essência", href: "#about" },
  { name: "O Sentir", href: "#portfolio" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        scrolled ? "bg-background/60 backdrop-blur-xl border-border/20 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
             {/* Logo - Transparent PNG */}
             <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform hover:scale-105">
                <Image 
                    src="/logo.png" 
                    alt="Mayik Logo" 
                    fill 
                    className="object-contain"
                />
            </div>
          <span className={cn(
              "text-2xl font-serif tracking-widest text-foreground font-semibold group-hover:text-primary transition-colors",
              scrolled ? "opacity-100" : "opacity-100" // Always visible
          )}>
            MAYIK
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"
                layoutId="underline"
              />
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Trigger (Simple for now) */}
        <button className="md:hidden text-foreground">
            Menu
        </button>
      </div>
    </motion.header>
  )
}
