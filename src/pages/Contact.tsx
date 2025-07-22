import { Mail, Phone, Linkedin, Github, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechCard } from "@/components/ui/tech-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@hellsoft.com",
      href: "mailto:contact@hellsoft.com",
      description: "Drop me a line for project inquiries"
    },
    {
      icon: Phone, 
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available for urgent consultations"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/hellsoft-dev",
      href: "https://linkedin.com/in/hellsoft-dev",
      description: "Connect for professional networking"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/hellsoft-dev",
      href: "https://github.com/hellsoft-dev",
      description: "View my open-source contributions"
    }
  ]

  const availabilityInfo = [
    {
      icon: Clock,
      title: "Availability",
      items: [
        "Monday - Friday: 9:00 AM - 6:00 PM CET",
        "Weekend consultations: By appointment",
        "Emergency support: Available for existing clients"
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      items: [
        "Based in Stockholm, Sweden",
        "Available for remote work globally",
        "Open to travel for on-site projects"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to bring your next software project to life? Let's discuss how we can work together.
            </p>
            <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get In <span className="text-primary">Touch</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <TechCard key={index} title={method.title} glowEffect>
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto font-medium text-foreground hover:text-primary tech-link"
                      >
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.value}
                        </a>
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </TechCard>
              ))}
            </div>

            {/* Availability & Location */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {availabilityInfo.map((info, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span>{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {info.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-primary">Project</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need mobile development, IoT solutions, or technical leadership, 
              I'm here to help transform your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                variant="tech"
              >
                <a href="mailto:contact@hellsoft.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="hover:bg-primary/10 hover:border-primary/50"
              >
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}