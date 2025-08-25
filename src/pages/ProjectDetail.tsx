import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  details?: {
    location: string;
    area: string;
    completionDate: string;
    architect: string;
    developer: string;
    price: string;
    status: string;
    specifications: string[];
    gallery: string[];
    longDescription: string;
    projectHighlights: string[];
    amenities: string[];
    constructionDetails: string[];
    investmentInfo: string[];
  };
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde hemen görünür yap
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.project-detail');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Proje verilerini simüle ediyoruz - gerçek uygulamada API'den gelecek
    const projects = [
      {
        id: 1,
        title: "Platinum Residences",
        category: "Lüks Konut Projesi",
        description: "Modern mimari ile tasarlanmış, 120 daireli premium yaşam kompleksi. Panoramik şehir manzarası ve lüks amenitiler.",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        features: ["Akıllı Ev Sistemi", "Spa & Wellness", "Güvenlik 7/24"],
        details: {
          location: "İstanbul, Beşiktaş - Levent Mahallesi",
          area: "45,000 m² (Toplam İnşaat Alanı)",
          completionDate: "2025 Q2 (2. Çeyrek)",
          architect: "Evora Mimarlık & Tasarım Stüdyosu",
          developer: "Evora İnşaat ve Gayrimenkul A.Ş.",
          price: "Başlangıç 2.5M TL - 8.5M TL",
          status: "İnşaat Aşamasında (%65 Tamamlandı)",
          specifications: [
            "120 adet 1+1, 2+1, 3+1 ve 4+1 daire seçeneği",
            "Daire büyüklükleri: 85m² - 280m² arası",
            "Akıllı ev teknolojileri ve IoT entegrasyonu",
            "Spa & wellness merkezi (500m²)",
            "Fitness salonu ve yoga stüdyosu",
            "Kapalı ve açık otopark (200 araç kapasitesi)",
            "7/24 güvenlik sistemi ve doğalgaz alarmı",
            "Çocuk oyun alanı ve kreş",
            "Yeşil alan ve peyzaj tasarımı (3,000m²)",
            "Su deposu ve jeneratör sistemi"
          ],
          gallery: [
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
          ],
          longDescription: "Platinum Residences, İstanbul'un prestijli Levent bölgesinde konumlanan, modern mimari anlayışı ile tasarlanmış ultra lüks bir yaşam projesidir. 120 adet özel daire, 25 katlı yapısı ve panoramik şehir manzarası ile dikkat çeken bu proje, yaşam kalitesini en üst seviyeye çıkarmayı hedeflemektedir. Proje, akıllı ev teknolojileri, spa & wellness merkezi, fitness salonu gibi lüks amenitileri ile birlikte gelmektedir. 7/24 güvenlik sistemi, kapalı otopark ve özel peyzaj tasarımı ile tam donanımlı bir yaşam sunmaktadır.",
          projectHighlights: [
            "Levent'in en prestijli konumunda",
            "360° panoramik şehir manzarası",
            "Akıllı ev teknolojileri entegrasyonu",
            "Lüks spa ve wellness merkezi",
            "Özel fitness ve yoga alanları",
            "Güvenli ve konforlu yaşam"
          ],
          amenities: [
            "Spa & Wellness Merkezi",
            "Fitness Salonu & Yoga Stüdyosu",
            "Kapalı & Açık Otopark",
            "7/24 Güvenlik Sistemi",
            "Çocuk Oyun Alanı & Kreş",
            "Yeşil Alan & Peyzaj",
            "Su Deposu & Jeneratör",
            "Akıllı Ev Sistemleri"
          ],
          constructionDetails: [
            "Çelik konstrüksiyon sistem",
            "Yüksek kaliteli yalıtım malzemeleri",
            "Depreme dayanıklı tasarım",
            "Enerji verimli sistemler",
            "Ses yalıtımı ve akustik tasarım",
            "Yangın güvenlik sistemleri"
          ],
          investmentInfo: [
            "Yatırımcı dostu ödeme planları",
            "Kredi imkanları mevcut",
            "Değer artış potansiyeli yüksek",
            "Kira geliri potansiyeli",
            "Vergi avantajları"
          ]
        }
      },
      {
        id: 2,
        title: "Elite Business Center",
        category: "Ticari Yapı",
        description: "A+ ofis standardında, 25 katlı modern iş merkezi. Teknoloji odaklı tasarım ve sürdürülebilir mimari.",
        image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        features: ["LEED Sertifikası", "Konferans Salonu", "Otopark"],
        details: {
          location: "İstanbul, Maslak - Büyükdere Caddesi",
          area: "75,000 m² (Toplam İnşaat Alanı)",
          completionDate: "2024 Q4 (4. Çeyrek) - Tamamlandı",
          architect: "Evora Mimarlık & Ticari Yapı Tasarımı",
          developer: "Evora İnşaat ve Gayrimenkul A.Ş.",
          price: "Kiralık - 25€/m²/ay (ortalama)",
          status: "Tamamlandı ve Kullanıma Hazır",
          specifications: [
            "25 katlı modern iş merkezi",
            "A+ ofis standardı ve premium tasarım",
            "LEED sertifikalı sürdürülebilir bina",
            "Konferans salonu ve toplantı odaları",
            "Teknoloji odaklı altyapı ve fiber internet",
            "Güvenli otopark sistemi (300 araç)",
            "Restoran ve kafeterya alanları",
            "24/7 güvenlik ve teknik servis",
            "Merkezi klima ve havalandırma",
            "Asansör sistemleri (8 adet)"
          ],
          gallery: [
            "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
          ],
          longDescription: "Elite Business Center, İstanbul'un finans merkezi Maslak'ta konumlanan, A+ ofis standardında 25 katlı ultra modern bir iş merkezidir. LEED sertifikalı sürdürülebilir bina özelliği ile çevre dostu tasarım anlayışını benimseyen proje, teknoloji odaklı altyapısı ve premium ofis çözümleri ile iş dünyasının ihtiyaçlarını karşılamaktadır. Konferans salonu, toplantı odaları, restoran alanları ve güvenli otopark sistemi ile tam donanımlı bir iş merkezi sunmaktadır.",
          projectHighlights: [
            "Maslak'ın en prestijli iş merkezi",
            "LEED sertifikalı sürdürülebilir bina",
            "A+ ofis standardı",
            "Teknoloji odaklı altyapı",
            "Premium konferans ve toplantı alanları",
            "7/24 güvenlik ve teknik servis"
          ],
          amenities: [
            "Konferans Salonu & Toplantı Odaları",
            "Restoran & Kafeterya",
            "Güvenli Otopark Sistemi",
            "7/24 Güvenlik & Teknik Servis",
            "Merkezi Klima & Havalandırma",
            "Fiber İnternet Altyapısı",
            "Asansör Sistemleri",
            "Sürdürülebilir Enerji Sistemleri"
          ],
          constructionDetails: [
            "Çelik konstrüksiyon sistem",
            "Yüksek kaliteli yalıtım",
            "Depreme dayanıklı tasarım",
            "Enerji verimli sistemler",
            "Akustik tasarım",
            "Yangın güvenlik sistemleri"
          ],
          investmentInfo: [
            "Yüksek kira geliri potansiyeli",
            "Stabil yatırım getirisi",
            "Uzun vadeli kira sözleşmeleri",
            "Değer artış potansiyeli",
            "Düşük riskli yatırım"
          ]
        }
      },
      {
        id: 3,
        title: "Garden Villas",
        category: "Villa Projesi",
        description: "Doğayla iç içe, özel bahçeli villa konsepti. Minimalist tasarım ve maksimum konfor.",
        image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        features: ["Özel Bahçe", "Akıllı Sistem", "Kapalı Havuz"],
        details: {
          location: "İstanbul, Çekmeköy - Alemdağ Mahallesi",
          area: "15,000 m² (Toplam Parsel Alanı)",
          completionDate: "2025 Q1 (1. Çeyrek)",
          architect: "Evora Mimarlık & Villa Tasarım Stüdyosu",
          developer: "Evora İnşaat ve Gayrimenkul A.Ş.",
          price: "Başlangıç 8M TL - 25M TL",
          status: "Satışta - İnşaat Devam Ediyor",
          specifications: [
            "15 adet özel villa (her biri farklı tasarım)",
            "Her villa için özel bahçe (200m² - 500m²)",
            "Akıllı ev sistemleri ve IoT entegrasyonu",
            "Kapalı havuz ve spa alanları",
            "Güvenlik sistemi ve kamera altyapısı",
            "Özel peyzaj tasarımı ve yeşil alan",
            "Eko-dostu malzemeler ve sürdürülebilir tasarım",
            "Modern mimari ve minimalist konsept",
            "Özel otopark ve garaj alanları",
            "Su ve elektrik altyapısı"
          ],
          gallery: [
            "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
          ],
          longDescription: "Garden Villas, İstanbul'un huzurlu Çekmeköy bölgesinde konumlanan, doğayla iç içe özel villa projesidir. Her villa kendine özgü tasarımı ve geniş bahçe alanları ile dikkat çeken proje, minimalist mimari anlayışı ve maksimum konfor prensibi ile tasarlanmıştır. Akıllı ev sistemleri, kapalı havuz, spa alanları ve özel peyzaj tasarımı ile lüks villa yaşamının tüm detayları düşünülmüştür. Eko-dostu malzemeler ve sürdürülebilir tasarım yaklaşımı ile çevreye duyarlı bir yaşam alanı sunmaktadır.",
          projectHighlights: [
            "Çekmeköy'ün en prestijli villa projesi",
            "Her villa için özel tasarım",
            "Geniş bahçe alanları",
            "Akıllı ev teknolojileri",
            "Kapalı havuz ve spa alanları",
            "Doğayla iç içe yaşam"
          ],
          amenities: [
            "Özel Bahçe Alanları",
            "Kapalı Havuz & Spa",
            "Akıllı Ev Sistemleri",
            "Güvenlik Sistemi",
            "Özel Peyzaj Tasarımı",
            "Garaj & Otopark",
            "Su & Elektrik Altyapısı",
            "Eko-dostu Sistemler"
          ],
          constructionDetails: [
            "Çelik konstrüksiyon sistem",
            "Yüksek kaliteli yalıtım",
            "Depreme dayanıklı tasarım",
            "Enerji verimli sistemler",
            "Ses yalıtımı",
            "Yangın güvenlik sistemleri"
          ],
          investmentInfo: [
            "Yüksek değer artış potansiyeli",
            "Lüks villa segmenti",
            "Özel tasarım ve konum",
            "Uzun vadeli yatırım",
            "Kira geliri potansiyeli"
          ]
        }
      }
    ];

    const foundProject = projects.find(p => p.id === parseInt(id || "1"));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-evora-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-evora-gold mx-auto mb-4"></div>
          <p className="text-evora-navy text-lg">Proje yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-evora-cream project-detail">

      
      {/* Header */}
      <div className="bg-evora-navy text-white">
        <div className="container mx-auto px-6 lg:px-8 py-8">
          <button
            onClick={() => {
              // Scroll pozisyonunu koru ve ana sayfaya dön
              navigate("/");
            }}
            className="flex items-center text-evora-gold hover:text-white transition-colors duration-200 mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </button>
          
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000`}>
            <span className="bg-evora-gold text-evora-charcoal px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Main Image */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-200`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl elegant-shadow"
              />
            </div>

            {/* Long Description */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                Proje Hakkında Detaylı Bilgi
              </h3>
              <div className="bg-white rounded-2xl p-8 elegant-shadow">
                <p className="text-evora-charcoal/80 leading-relaxed text-lg">
                  {project.details?.longDescription || "Detaylı açıklama yükleniyor..."}
                </p>
              </div>
            </div>

            {/* Project Highlights */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-400`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                Proje Öne Çıkan Özellikleri
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.details?.projectHighlights?.map((highlight, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white rounded-xl elegant-shadow">
                    <div className="w-4 h-4 bg-evora-gold rounded-full mr-4 flex-shrink-0" />
                    <span className="text-evora-charcoal font-medium">{highlight}</span>
                  </div>
                )) || <p className="text-evora-charcoal/60">Öne çıkan özellikler yükleniyor...</p>}
              </div>
            </div>

            {/* Features */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                Temel Özellikler
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white rounded-xl elegant-shadow">
                    <div className="w-3 h-3 bg-evora-gold rounded-full mr-4" />
                    <span className="text-evora-charcoal font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-600`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                Tesis ve Hizmetler
              </h3>
              <div className="bg-white rounded-2xl p-8 elegant-shadow">
                <div className="grid md:grid-cols-2 gap-4">
                  {project.details?.amenities?.map((amenity, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-evora-gold rounded-full mr-3 flex-shrink-0" />
                      <span className="text-evora-charcoal/80">{amenity}</span>
                    </div>
                  )) || <p className="text-evora-charcoal/60">Tesis bilgileri yükleniyor...</p>}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                Teknik Özellikler ve Detaylar
              </h3>
              <div className="bg-white rounded-2xl p-8 elegant-shadow">
                <div className="grid md:grid-cols-1 gap-4">
                  {project.details?.specifications?.map((spec, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-evora-gold rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-evora-charcoal/80">{spec}</span>
                    </div>
                  )) || <p className="text-evora-charcoal/60">Teknik özellikler yükleniyor...</p>}
                </div>
              </div>
            </div>

            {/* Construction Details */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-800`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                İnşaat ve Yapı Detayları
              </h3>
              <div className="bg-white rounded-2xl p-8 elegant-shadow">
                <div className="grid md:grid-cols-2 gap-4">
                  {project.details?.constructionDetails?.map((detail, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-evora-gold rounded-full mr-3 flex-shrink-0" />
                      <span className="text-evora-charcoal/80">{detail}</span>
                    </div>
                  )) || <p className="text-evora-charcoal/60">İnşaat detayları yükleniyor...</p>}
                </div>
              </div>
            </div>

            {/* Investment Info */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-900`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                Yatırım Bilgileri
              </h3>
              <div className="bg-white rounded-2xl p-8 elegant-shadow">
                <div className="grid md:grid-cols-2 gap-4">
                  {project.details?.investmentInfo?.map((info, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-evora-gold rounded-full mr-3 flex-shrink-0" />
                      <span className="text-evora-charcoal/80">{info}</span>
                    </div>
                  )) || <p className="text-evora-charcoal/60">Yatırım bilgileri yükleniyor...</p>}
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-1000`}>
              <h3 className="font-display text-3xl font-bold text-evora-navy mb-6">
                Proje Galerisi
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.details?.gallery?.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${project.title} - ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-xl elegant-shadow hover:scale-105 transition-transform duration-300"
                  />
                )) || <p className="text-evora-charcoal/60">Galeri yükleniyor...</p>}
              </div>
            </div>
          </div>

          {/* Right Column - Project Details Sidebar */}
          <div className="space-y-8">
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
              <div className="bg-white rounded-2xl p-8 elegant-shadow sticky top-8">
                <h3 className="font-display text-2xl font-bold text-evora-navy mb-6">
                  Proje Bilgileri
                </h3>
                
                {project.details && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-evora-charcoal/60 text-sm font-medium">Konum</span>
                      <p className="text-evora-navy font-semibold">{project.details.location}</p>
                    </div>
                    
                    <div>
                      <span className="text-evora-charcoal/60 text-sm font-medium">Toplam Alan</span>
                      <p className="text-evora-navy font-semibold">{project.details.area}</p>
                    </div>
                    
                    <div>
                      <span className="text-evora-charcoal/60 text-sm font-medium">Tamamlanma Tarihi</span>
                      <p className="text-evora-navy font-semibold">{project.details.completionDate}</p>
                    </div>
                    
                    <div>
                      <span className="text-evora-charcoal/60 text-sm font-medium">Mimar</span>
                      <p className="text-evora-navy font-semibold">{project.details.architect}</p>
                    </div>
                    
                    <div>
                      <span className="text-evora-charcoal/60 text-sm font-medium">Geliştirici</span>
                      <p className="text-evora-navy font-semibold">{project.details.developer}</p>
                    </div>
                    
                    <div>
                      <span className="text-evora-charcoal/60 text-sm font-medium">Fiyat</span>
                      <p className="text-evora-navy font-semibold">{project.details.price}</p>
                    </div>
                    
                    <div>
                      <span className="text-evora-charcoal/60 text-sm font-medium">Durum</span>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        project.details.status.includes('Tamamlandı') 
                          ? 'bg-green-100 text-green-800' 
                          : project.details.status.includes('İnşaat')
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-evora-gold text-evora-charcoal'
                      }`}>
                        {project.details.status}
                      </span>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    // Hangi proje için iletişime geçildiğini localStorage'a kaydet
                    localStorage.setItem('selectedProject', project.title);
                    localStorage.setItem('selectedProjectCategory', project.category);
                    localStorage.setItem('selectedProjectDescription', project.description);
                    
                    // Ana sayfaya dön
                    navigate("/");
                    
                    // Kısa bir gecikme ile iletişim bölümüne scroll yap
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 200);
                  }}
                  className="w-full bg-evora-gold text-evora-charcoal font-semibold py-4 px-6 rounded-xl hover:bg-evora-gold/90 transition-colors duration-200 mt-8"
                >
                  İletişime Geçin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
