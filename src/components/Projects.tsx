import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
const Projects = () => {
  const projects = [{
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-purple-500 to-pink-500"
  }, {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization and reporting.",
    tags: ["Next.js", "TypeScript", "Chart.js", "API Integration"],
    gradient: "from-blue-500 to-cyan-500"
  }, {
    title: "Design Portfolio",
    description: "A stunning portfolio website showcasing creative work with smooth animations and transitions.",
    tags: ["React", "Framer Motion", "Tailwind", "GSAP"],
    gradient: "from-orange-500 to-yellow-500"
  }, {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team features, and project tracking.",
    tags: ["Vue.js", "Firebase", "Vuex", "PWA"],
    gradient: "from-green-500 to-emerald-500"
  }];
  return <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured 
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="glass rounded-2xl overflow-hidden card-shadow hover:scale-105 transition-transform duration-300 animate-slide-up group" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Project Image Placeholder with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-sm bg-primary/10 text-primary-glow rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;