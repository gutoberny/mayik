"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        name: "Sofia Alencar",
        role: "Residência Privada",
        text: "A Mayik não desenhou apenas uma casa, ela traduziu nossa alma em paredes e luz. É transcendental viver aqui."
    },
    {
        name: "Carlos & Fernanda",
        role: "Apartamento Litoral",
        text: "Buscávamos luxo, mas encontramos propósito. O design respira e nos conecta com a natureza de forma única."
    },
    {
        name: "Instituto Solaris",
        role: "Espaço Corporativo",
        text: "A atmosfera criada elevou nossa produtividade e bem-estar. Clientes entram e sentem a diferença na hora."
    }
]

export function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section id="testimonials" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden">
            {/* Background ambiance */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-secondary/10 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                        Ecos de quem vive
                    </h2>
                    <p className="text-muted-foreground font-light tracking-wide max-w-xl mx-auto">
                        Palavras que refletem a experiência de habitar espaços com alma.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            style={{ y: i % 2 === 0 ? 0 : y }} // Parallax effect on middle card
                        >
                            <GlassCard className="h-full p-8 flex flex-col justify-between hover:bg-white/5 transition-colors">
                                <div className="mb-6 text-primary/60">
                                    <Quote size={40} strokeWidth={1} />
                                </div>
                                <p className="text-lg font-light leading-relaxed mb-8 italic text-foreground/90">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="font-serif text-xl">{t.name}</h4>
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                        {t.role}
                                    </span>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
