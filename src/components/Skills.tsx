const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Supabase", "SQL", "Firebase"],
    },
    {
      category: "Design",
      skills: ["Figma", "Canva", "Stich", "UI/UX"],
    },
    {
      category: "Tools",
      skills: ["Github", "Cursor", "VS Code", "Lovable"],
    },
  ];
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 gradient-hero opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and tools I use to bring
            projects to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl card-shadow animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="font-display text-xl font-semibold mb-6 text-primary-glow">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-muted px-4 py-2 rounded-lg text-sm hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
