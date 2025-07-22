import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ErikHellman",
      icon: Github,
    },
    {
      name: "LinkedIn", 
      href: "https://linkedin.com/in/ErikHellman",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:erik.hellman@hellsoft.se",
      icon: Mail,
    },
    {
      name: "Phone",
      href: "tel:+46705777477",
      icon: Phone,
    },
  ]

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-1">Hellsoft</h3>
            <p className="text-sm text-muted-foreground">
              Software consulting and engineering excellence
            </p>
          </div>

          <div className="flex space-x-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Hellsoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}