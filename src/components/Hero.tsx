import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
const Hero = () => {
  useEffect(() => {
    // Load UnicornStudio script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.32/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40"></div>
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 animate-slide-up">
          <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary-glow">
            Welcome to my portfolio
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            Web Developer
            <br />
            
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg">
            I craft beautiful, functional digital experiences that make an impact. 
            Specializing in modern web technologies and user-centered design.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="gradient-accent text-primary-foreground hover:opacity-90 transition-opacity" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* UnicornStudio Animation */}
        <div className="flex justify-center items-center animate-fade-in">
          <div data-us-project="gW5NkoqyuFAnupBPtVxt" className="w-full max-w-[390px] h-[500px] rounded-2xl overflow-hidden glass card-shadow"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors">
        <ArrowDown size={32} />
      </a>
    </section>;
};
export default Hero;