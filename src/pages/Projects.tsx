import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    name: "HellCart Race",
    description: "A very simple gocart racing game written entirely by Claude Code. This project showcases AI-driven development and game programming.",
    url: "https://github.com/ErikHellman/hellcart-race",
    stars: 0,
    forks: 0,
    language: "JavaScript",
    topics: ["game-development", "ai-generated", "racing-game", "claude"]
  },
  {
    name: "Claude Code Reviewer",
    description: "A GitHub action that performs code review using Claude Code. Automates the code review process with AI assistance.",
    url: "https://github.com/ErikHellman/claude-code-reviewer",
    stars: 1,
    forks: 2,
    language: "JavaScript",
    topics: ["github-actions", "code-review", "ai", "automation", "claude"]
  },
  {
    name: "Snackis Chatbot Client",
    description: "A modern chatbot client running locally in your browser.",
    url: "https://github.com/ErikHellman/snackis-chatbot-client",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    topics: ["chatbot", "client", "conversation", "ui"]
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Side Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of open-source projects and experiments exploring various technologies, 
            from AI-driven development to automation tools and modern web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card key={project.name} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
                
                {/* Language and Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  asChild 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  variant="outline"
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">More Projects Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and experiments. Check out my GitHub profile 
              for the latest updates and contributions.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a 
                href="https://github.com/ErikHellman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Visit GitHub Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}