import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Geometric Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-evora-gold transform rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-evora-gold transform -rotate-45" />
        <div className="absolute top-1/2 right-1/3 w-16 h-px bg-evora-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in text-balance">
          Geleceği Zarafetle <span className="text-evora-gold">İnşa</span> Ediyoruz
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto fade-in animate-delayed font-light leading-relaxed">
          Evora İnşaat, modern mimariyi ve mühendislik gücünü bir araya getirerek hayallerinizi gerçeğe dönüştürüyor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in animate-delayed-2">
          <Button 
            variant="premium" 
            size="xl"
            onClick={scrollToProjects}
            className="group"
          >
            Projelerimizi İnceleyin
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          
          <Button 
            variant="outline-gold" 
            size="xl"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hakkımızda
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;