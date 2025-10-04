import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  const socialLinks = [{
    icon: <Github />,
    href: "#",
    label: "GitHub"
  }, {
    icon: <Linkedin />,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: <Twitter />,
    href: "#",
    label: "Twitter"
  }, {
    icon: <Mail />,
    href: "mailto:contact@example.com",
    label: "Email"
  }];
  return <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's 
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out!
          </p>

          <div className="glass p-8 md:p-12 rounded-2xl card-shadow">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <Button size="lg" className="gradient-accent text-primary-foreground hover:opacity-90 transition-opacity" asChild>
                <a href="mailto:contact@example.com">Send Me an Email</a>
              </Button>

              <div className="pt-8">
                <p className="text-muted-foreground mb-4">Or find me on</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => <Button key={index} size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full w-12 h-12" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        {social.icon}
                      </a>
                    </Button>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;