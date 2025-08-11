import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Lüks Konut İnşaatı",
      description: "Modern ve zarif tasarımlarla yüksek standartlı yaşam alanları. Premium malzemeler ve detaylı işçilikle hayalinizdeki evi inşa ediyoruz.",
      features: [
        "Akıllı ev teknolojileri",
        "Premium malzeme kullanımı",
        "Özel tasarım seçenekleri",
        "Enerji verimli sistemler"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Ticari Yapılar",
      description: "İş dünyası için fonksiyonel ve prestijli ofis projeleri. Modern işletme ihtiyaçlarına uygun, teknoloji dostu tasarımlar.",
      features: [
        "A+ ofis standartları",
        "Teknoloji altyapısı",
        "Esnek alan çözümleri",
        "Sürdürülebilir tasarım"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: "Anahtar Teslim Projeler",
      description: "Planlama, mimari ve inşa süreçlerinin tamamında profesyonel hizmet. Projenizin başından sonuna kadar yanınızdayız.",
      features: [
        "Komple proje yönetimi",
        "Mimari tasarım hizmeti",
        "İç mimari ve dekorasyon",
        "Kalite kontrol süreçleri"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="section-padding bg-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="w-16 h-1 bg-evora-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-evora-navy mb-6 text-balance">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-evora-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Her türlü inşaat projesinde kaliteli hizmet anlayışımızla, müşteri memnuniyetini ön planda tutuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-evora-cream to-white p-8 rounded-2xl soft-shadow hover:elegant-shadow transition-all duration-500 scale-hover">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-evora-gold to-evora-light-gold rounded-xl flex items-center justify-center text-evora-navy group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-evora-navy mb-4">
                  {service.title}
                </h3>
                
                <p className="text-evora-charcoal/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-evora-charcoal/60">
                      <div className="w-2 h-2 bg-evora-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-evora-gold to-evora-light-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center ${isVisible ? 'fade-in animate-delayed-3' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-evora-navy to-evora-dark-navy rounded-2xl p-12 elegant-shadow">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Projeniz İçin Ücretsiz Danışmanlık
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle projenizin detaylarını konuşmak ve size özel çözümler geliştirmek için iletişime geçin.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-evora-gold text-evora-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-evora-light-gold transition-colors duration-300 inline-flex items-center group"
            >
              Hemen İletişime Geç
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;