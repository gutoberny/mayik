"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { GlassCard } from "@/components/ui/glass-card"

export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div style={{ y: yText, opacity }} className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-serif text-primary">A Essência</h2>
                <div className="w-24 h-[2px] bg-accent" />
                <p className="text-xl font-light leading-relaxed text-muted-foreground">
                    A arquitetura que praticamos não se limita ao visual. Ela busca a conexão profunda entre o indivíduo e o espaço.
                </p>
                <p className="text-xl font-light leading-relaxed text-muted-foreground">
                    Chamamos de <span className="text-foreground italic font-serif">Transcedental</span> aquilo que atravessa a matéria e toca o espírito. É projetar sentindo, é construir para a alma.
                </p>
            </motion.div>
            
            {/* Visual element / Image Placeholder */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
                 <GlassCard variant="default" className="p-10 aspect-[4/5] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <span className="font-serif text-5xl italic text-primary/20 group-hover:scale-110 transition-transform duration-700">Sentir</span>
                 </GlassCard>
            </motion.div>
        </div>
    </section>
  )
}
