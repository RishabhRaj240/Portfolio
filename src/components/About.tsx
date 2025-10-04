import { Code2, Palette, Zap } from "lucide-react";
const About = () => {
  const features = [{
    icon: <Code2 className="w-8 h-8" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and modern standards."
  }, {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Design",
    description: "Designing beautiful interfaces that users love with attention to every detail."
  }, {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance",
    description: "Building lightning-fast applications optimized for the best user experience."
  }];
  return <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About 
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate web developer and designer dedicated to creating exceptional digital experiences. 
            With a focus on modern technologies and user-centered design, I bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="glass p-8 rounded-2xl card-shadow hover:scale-105 transition-transform duration-300 animate-slide-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;