import { useEffect, useRef, useState } from "react";

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "Platinum Residences",
      category: "Lüks Konut Projesi",
      description: "Modern mimari ile tasarlanmış, 120 daireli premium yaşam kompleksi. Panoramik şehir manzarası ve lüks amenitiler.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Akıllı Ev Sistemi", "Spa & Wellness", "Güvenlik 7/24"]
    },
    {
      id: 2,
      title: "Elite Business Center",
      category: "Ticari Yapı",
      description: "A+ ofis standardında, 25 katlı modern iş merkezi. Teknoloji odaklı tasarım ve sürdürülebilir mimari.",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["LEED Sertifikası", "Konferans Salonu", "Otopark"]
    },
    {
      id: 3,
      title: "Garden Villas",
      category: "Villa Projesi",
      description: "Doğayla iç içe, özel bahçeli villa konsepti. Minimalist tasarım ve maksimum konfor.",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Özel Bahçe", "Akıllı Sistem", "Kapalı Havuz"]
    },
    {
      id: 4,
      title: "Sky Tower",
      category: "Rezidans",
      description: "Şehrin en yüksek noktasında, 360° manzaralı ultra lüks rezidans projesi.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Gökdelende Yaşam", "Concierge Hizmet", "Helipad"]
    },
    {
      id: 5,
      title: "Marina Complex",
      category: "Karma Proje",
      description: "Deniz manzaralı, konut ve ticari alanları birleştiren entegre yaşam projesi.",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Marina Erişimi", "Alışveriş Merkezi", "Restoran"]
    },
    {
      id: 6,
      title: "Green Valley Homes",
      category: "Sürdürülebilir Konut",
      description: "Çevre dostu malzemeler ve enerji verimli teknolojilerle tasarlanmış ekolojik konut projesi.",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Sıfır Atık", "Güneş Enerjisi", "Yeşil Çatı"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="section-padding bg-evora-cream"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="w-16 h-1 bg-evora-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-evora-navy mb-6 text-balance">
            Projelerimiz
          </h2>
          <p className="text-xl text-evora-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Lüks konut projelerinden modern mimari yapılara, her biri özenle tasarlanmış prestijli inşaatlarımızı keşfedin.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden elegant-shadow hover:gold-shadow transition-all duration-500 scale-hover ${
                isVisible ? 'fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-evora-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-evora-gold text-evora-charcoal px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-evora-navy mb-3">
                  {project.title}
                </h3>
                <p className="text-evora-charcoal/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-evora-charcoal/60">
                      <div className="w-2 h-2 bg-evora-gold rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="text-evora-gold font-semibold hover:text-evora-navy transition-colors duration-200 group">
                  Detayları İncele
                  <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;