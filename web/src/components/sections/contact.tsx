"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react"

export function Contact() {
  const [name, setName] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  const [message, setMessage] = useState("")

  const handleWhatsAppSend = () => {
    const phoneNumber = "555195973496"
    const text = `Olá, meu nome é *${name}*.\nMeu contato é: ${contactInfo}\n\n*Mensagem:*\n${message}`
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank")
  }

  return (
    <section id="contact" className="min-h-screen relative flex flex-col justify-center py-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-primary/5 blur-[100px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
            >
                <h2 className="text-5xl md:text-7xl font-serif text-primary">Vamos Criar?</h2>
                <div className="w-24 h-[1px] bg-primary/30" />
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    Sua essência merece um espaço que a reflita. Entre em contato para iniciarmos a jornada de transformar seus sonhos em arquitetura viva.
                </p>

                <div className="space-y-6 pt-8">
                    {/* WhatsApp */}
                    <a href="https://wa.me/555195973496" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-green-600 transition-colors group">
                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-green-600/50 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="font-clean tracking-wide font-light">(51) 9597-3496</span>
                    </a>
                    
                    {/* Email */}
                     <a href="mailto:contato@mayik.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <span className="font-clean tracking-wide font-light">contato@mayik.com</span>
                    </a>
                    
                    {/* Location */}
                    <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <span className="font-clean tracking-wide font-light">Santa Cruz do Sul, RS</span>
                    </div>
                </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
                <GlassCard className="p-10 space-y-6" variant="light" intensity="medium">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent border-b border-primary/20 p-2 outline-none focus:border-primary transition-colors text-foreground" 
                            placeholder="Como gostaria de ser chamado?" 
                        />
                    </div>
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Contato</label>
                        <input 
                            type="text" 
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            className="w-full bg-transparent border-b border-primary/20 p-2 outline-none focus:border-primary transition-colors text-foreground" 
                            placeholder="Email ou Telefone" 
                        />
                    </div>
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</label>
                        <textarea 
                            rows={4} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-transparent border-b border-primary/20 p-2 outline-none focus:border-primary transition-colors text-foreground resize-none" 
                            placeholder="Conte um pouco sobre seu sonho..." 
                        />
                    </div>
                    <button 
                        onClick={handleWhatsAppSend}
                        className="w-full py-4 bg-primary text-primary-foreground font-serif text-lg hover:bg-primary/90 transition-colors mt-4"
                    >
                        Iniciar Conversa no WhatsApp
                    </button>
                    {/* Helper text */}
                    <p className="text-center text-xs uppercase tracking-widest text-muted-foreground opacity-60 mt-4">
                        Será aberta uma conversa com a mensagem acima
                    </p>
                </GlassCard>
            </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full py-6 border-t border-border/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <span>© {new Date().getFullYear()} MAYIK Arquitetura</span>
            <div className="flex gap-6">
                <a href="https://www.instagram.com/mayik.arquiteturatranscedental/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/mayara-isabel-kipper-aa51a6153/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
            <span>Developed with ❤️ by Gberny</span>
        </div>
      </footer>
    </section>
  )
}
