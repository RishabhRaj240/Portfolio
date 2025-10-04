import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "A resume analyzer that uses AI to analyze resumes and provide feedback on the resume.",
      tags: ["React", "Tailwind", "Typescript", "Puter.js"],
      image: "/project-images/ai-resume-analyzer.jpg",
      alt: "AI Resume Analyzer project screenshot",
      githubLink: "https://github.com/RishabhRaj240/AI-Resume-Analyzer",
      liveLink: "https://ai-resume-analyzer-zeta-ten.vercel.app/",
    },
    {
      title: "Redefine Gaming Website",
      description:
        "A gaming website that provides a platform for gamers to connect and play games.",
      tags: ["React", "Vite", "Javascript", "Tailwind"],
      image: "/project-images/redefine-gaming.jpg",
      alt: "Redefine Gaming Website project screenshot",
      githubLink: "https://github.com/RishabhRaj240/Awwards",
      liveLink: "https://awwards-rishabh.vercel.app/",
    },
    {
      title: "Omnifood Website",
      description:
        "A food delivery website that provides a platform for food delivery services.",
      tags: ["HTML", "CSS", "Javascript", "ScrollReveal"],
      image: "/project-images/omnifood.jpg",
      alt: "Omnifood Website project screenshot",
      githubLink: "https://github.com/RishabhRaj240/Omnifood",
      liveLink: "https://omnifood-rishabh.netlify.app/",
    },
    {
      title: "CarePulse",
      description:
        "Collaborative task management tool with real-time updates, team features, and project tracking.",
      tags: ["Next.js", "Typescript", "Supabase", "Tailwind"],
      image: "/project-images/carepulse.jpg",
      alt: "CarePulse project screenshot",
      githubLink: "https://github.com/RishabhRaj240/CarePulse",
      liveLink: "https://jsm-carepulse.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of recent projects that showcase my skills and passion
            for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden card-shadow hover:scale-105 transition-transform duration-300 animate-slide-up group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                    onClick={() => window.open(project.liveLink, "_blank")}
                    title="View Live Project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                    onClick={() => window.open(project.githubLink, "_blank")}
                    title="View GitHub Repository"
                  >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
