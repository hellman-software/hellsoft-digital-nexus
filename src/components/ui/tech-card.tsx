import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TechCardProps {
  title: string
  children: React.ReactNode
  className?: string
  glowEffect?: boolean
}

export function TechCard({ title, children, className, glowEffect = false }: TechCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50",
        "hover:border-primary/50 transition-all duration-300 hover:shadow-tech",
        glowEffect && "hover:shadow-glow",
        className
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Subtle tech pattern overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-50" />
      
      <CardHeader className="relative">
        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        {children}
      </CardContent>
    </Card>
  )
}