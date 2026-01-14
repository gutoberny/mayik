"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { GlassCard } from "@/components/ui/glass-card"

const projects = [
  {
    id: 1,
    title: "Casa Âmbar",
    category: "Residencial",
    image: "/projects/project-1.png",
    description: "Um refúgio de tons terrosos onde a luz natural desenha os espaços ao longo do dia."
  },
  {
    id: 2,
    title: "Apartamento Poente",
    category: "Interiores",
    image: "/projects/project-2.png",
    description: "Materiais orgânicos e texturas cruas criando um diálogo suave entre cozinha e estar."
  },
  {
    id: 3,
    title: "Escada Helicoidal",
    category: "Detalhe",
    image: "/projects/project-3.png",
    description: "A curva como elemento de fluidez, conectando pavimentos não apenas fisicamente, mas visualmente."
  }
]

export function Portfolio() {
  const ref = useRef(null)
  
  return (
    <section id="portfolio" ref={ref} className="min-h-screen py-32 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-primary">O Sentir</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Projetos Selecionados</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <GlassCard 
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer border-0 rounded-none md:rounded-lg"
                intensity="low"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs text-white/80 uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-serif text-white mb-4 italic">{project.title}</h3>
                    <p className="text-white/80 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                        {project.description}
                    </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
