import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass card-shadow py-4" : "py-6"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold">
            <span className="text-primary">&lt;</span>
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                {item.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 glass rounded-lg animate-slide-up">
            {navItems.map(item => <a key={item.name} href={item.href} className="block py-2 px-4 text-muted-foreground hover:text-foreground transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;