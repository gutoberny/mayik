import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "light" | "dark"
  intensity?: "low" | "medium" | "high"
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default", 
  intensity = "medium",
  ...props 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md border transition-all duration-500 rounded-2xl",
        // Variants
        variant === "default" && "bg-card/30 border-white/10 text-card-foreground",
        variant === "light" && "bg-white/20 border-white/20 text-primary-foreground",
        variant === "dark" && "bg-black/20 border-white/5 text-white",
        
        // Intensity (Blur & Shadow)
        intensity === "low" && "backdrop-blur-sm shadow-sm",
        intensity === "medium" && "backdrop-blur-md shadow-md",
        intensity === "high" && "backdrop-blur-xl shadow-xl",
        
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
