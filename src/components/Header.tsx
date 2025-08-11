import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md soft-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7276803a-8058-4492-b00a-b09d63581c8d.png" 
              alt="Evora İnşaat" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-evora-charcoal hover:text-evora-gold transition-colors duration-200"
            >
              Anasayfa
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-evora-charcoal hover:text-evora-gold transition-colors duration-200"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-evora-charcoal hover:text-evora-gold transition-colors duration-200"
            >
              Projeler
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-evora-charcoal hover:text-evora-gold transition-colors duration-200"
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-evora-charcoal hover:text-evora-gold transition-colors duration-200"
            >
              İletişim
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Proje Danışmanlığı
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;