import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom X icon component
const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github />,
      href: "https://github.com/RishabhRaj240",
      label: "GitHub",
    },
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/rishabh-raj-0028622b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: <XIcon />,
      href: "https://x.com/Rishabh042405",
      label: "X",
    },
    {
      icon: <Instagram />,
      href: "https://instagram.com/rishabh_0424",
      label: "Instagram",
    },
  ];
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-hero opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out!
          </p>

          <div className="glass p-8 md:p-12 rounded-2xl card-shadow">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground">
                  Whether you have a question or just want to say hi, I'll try
                  my best to get back to you!
                </p>
              </div>

              <Button
                size="lg"
                className="gradient-accent text-primary-foreground hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTgCdMsWzsFPqJkqZXnkTztJjGFgMfFHVctSHmDNLHfrVhlWSDBnSdFvVnrbJjTMzxZFg">
                  Send Me an Email
                </a>
              </Button>

              <div className="pt-8">
                <p className="text-muted-foreground mb-4">Or find me on</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      size="icon"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 rounded-full w-12 h-12"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
