import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "15+", label: "Yıllık Deneyim" },
    { number: "200+", label: "Tamamlanan Proje" },
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "100%", label: "Kalite Garantisi" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding bg-gradient-to-br from-evora-cream to-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="mb-6">
              <div className="w-16 h-1 bg-evora-gold mb-6" />
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-evora-navy mb-8 text-balance">
                Hakkımızda
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-evora-charcoal/80 leading-relaxed">
              <p>
                <strong className="text-evora-navy">Evora İnşaat</strong>, yüksek kalite standartlarını ve yenilikçi tasarımları bir araya getiren bir inşaat firmasıdır. Amacımız, estetik ve fonksiyonelliği harmanlayarak uzun yıllar değerini koruyan yapılar inşa etmektir.
              </p>
              
              <p>
                Modern mimari anlayışımız ve deneyimli ekibimizle, her projede mükemmeliyeti hedefliyoruz. Müşterilerimizin hayallerini gerçeğe dönüştürürken, en yüksek kalite standartlarını korumayı ilke ediniyoruz.
              </p>
              
              <p>
                Sürdürülebilirlik ve çevre dostu yaklaşımlarımızla, gelecek nesillere daha yaşanabilir bir dünya bırakma vizyonumuzu projelerimize yansıtıyoruz.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className={`${isVisible ? 'fade-in animate-delayed' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl soft-shadow hover:elegant-shadow transition-all duration-300 scale-hover"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-evora-navy mb-3">
                    {stat.number}
                  </div>
                  <div className="text-evora-charcoal/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-evora-navy to-evora-dark-navy rounded-2xl text-white">
              <h3 className="font-display text-2xl font-bold mb-4">
                Vizyonumuz
              </h3>
              <p className="text-white/90 leading-relaxed">
                Türkiye'nin önde gelen inşaat firması olarak, dünya standartlarında projeler üretmek ve sektörde yenilikçi yaklaşımlarla öncü olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;