"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Volume2, VolumeX } from "lucide-react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  const [volume, setVolume] = useState(1)

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      
      // Reset volume to 1 if unmuting from 0
      if (!newMutedState && volume === 0) {
        setVolume(1)
        videoRef.current.volume = 1
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      videoRef.current.muted = newVolume === 0
      setIsMuted(newVolume === 0)
    }
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay - Gradient for legibility */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-black/20 to-background/90" />
      </div>
      
      {/* Audio Control */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-24 right-6 md:right-10 z-20 flex items-center gap-3 group p-2 rounded-full hover:bg-black/20 backdrop-blur-sm border border-transparent hover:border-white/10 transition-all duration-300"
      >
         <input 
           type="range" 
           min="0" 
           max="1" 
           step="0.01"
           value={isMuted ? 0 : volume}
           onChange={handleVolumeChange}
           className="w-0 group-hover:w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer transition-all duration-300 overflow-hidden [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        />
        <button
          onClick={toggleMute}
          className="text-white/70 hover:text-white transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 text-center px-4 flex flex-col items-center gap-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-widest"
        >
          MAYIK
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="w-24 h-[1px] bg-white/50 my-2"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-lg md:text-2xl font-light text-white/90 tracking-[0.2em] uppercase font-sans"
        >
          Arquitetura além do físico
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </section>
  )
}
