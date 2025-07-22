import { ArrowRight, Code2, Cpu, Globe, Smartphone, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { TechCard } from "@/components/ui/tech-card"
import heroImage from "@/assets/hero-bg.jpg"

export default function Home() {
  const specialties = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications with expertise in iOS, Android, and React Native."
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems", 
      description: "Connected devices and embedded solutions for smart homes, automotive, and industrial applications."
    },
    {
      icon: Globe,
      title: "Web & Cloud Solutions",
      description: "Scalable web applications, cloud architecture, and streaming services with modern frameworks."
    },
    {
      icon: Code2,
      title: "Technical Leadership",
      description: "Engineering management, software architecture, and technical guidance for large-scale projects."
    }
  ]

  const featuredProjects = [
    {
      company: "Husqvarna",
      role: "Senior Engineer",
      period: "June 2024 - July 2025",
      description: "Advanced BLE protocols and multi-platform solutions using Compose Multiplatform and Kotlin."
    },
    {
      company: "KTM/Pierer Innovation",
      role: "Tech Lead & Software Architect",
      period: "January 2023 - June 2024",
      description: "Next-generation infotainment for motorcycles featuring WebRTC streaming and Android Automotive."
    },
    {
      company: "Google",
      role: "WebRTC Contractor",
      period: "May 2018 - June 2019",
      description: "Developer relations for WebRTC technology stack, documentation, and code labs."
    },
    {
      company: "Spotify",
      role: "Android Developer",
      period: "December 2013 - December 2014", 
      description: "Platform team development focusing on architecture, test automation, and deployment solutions."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Tech background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/lovable-uploads/651b9e9a-074d-438a-a0a0-488b27ee2115.png"
                  alt="Erik Hellman - Software Engineer"
                  className="w-32 h-32 rounded-full border-4 border-primary/20 shadow-glow object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-tech opacity-20" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Hellsoft
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Software Consulting & Engineering Excellence
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              25 years of expertise in mobile development, IoT solutions, and technical leadership. 
              Building the future, one line of code at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                variant="tech"
              >
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-primary/10 hover:border-primary/50"
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Hellsoft</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a seasoned Software Engineer with an extensive 25-year professional tenure, 
              specialising in a wide array of programming languages, technologies, platforms, and tools. 
              Presently, I am engaged as a freelance software engineer and technical lead, with a 
              concentrated expertise in mobile application development, embedded systems, and Internet of Things (IoT) solutions.
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specialties.map((specialty, index) => (
              <TechCard key={index} title={specialty.title} glowEffect>
                <div className="flex flex-col items-center text-center">
                  <specialty.icon className="h-12 w-12 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </TechCard>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              In the last decade, my professional focus has been predominantly on client-side development, 
              augmented by significant contributions to streaming services, cloud and backend solutions, and IoT projects. 
              I also bring a wealth of experience in roles such as engineering manager, team leader, and software architect, 
              particularly in the realm of large-scale project management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing expertise across various technologies and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <TechCard key={index} title={project.company} className="h-full">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-primary">{project.role}</h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </TechCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Discuss Your Project <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}