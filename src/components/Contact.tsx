import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  // Proje detay sayfasından gelen proje bilgilerini otomatik yükle
  useEffect(() => {
    const selectedProject = localStorage.getItem('selectedProject');
    const selectedProjectCategory = localStorage.getItem('selectedProjectCategory');
    const selectedProjectDescription = localStorage.getItem('selectedProjectDescription');
    
    if (selectedProject && selectedProjectCategory && selectedProjectDescription) {
      // Proje bilgilerini form'a otomatik yükle
      setFormData(prev => ({
        ...prev,
        message: `${selectedProject} (${selectedProjectCategory}) projesi hakkında detaylı bilgi almak istiyorum.\n\n${selectedProjectDescription}\n\nProje hakkında danışmanlık almak istiyorum.`
      }));
      
      // localStorage'dan temizle (bir kez kullanıldıktan sonra)
      localStorage.removeItem('selectedProject');
      localStorage.removeItem('selectedProjectCategory');
      localStorage.removeItem('selectedProjectDescription');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form gönderildi olarak işaretle
    setIsFormSubmitted(true);
    
    // Önce özeti göster
    setShowSummary(true);
    
    // 3 saniye sonra başarı mesajını göster
    setTimeout(() => {
      setShowSummary(false);
    }, 3000);
  };

  const handleNewForm = () => {
    // Yeni form için sadece mesaj kısmını temizle, diğer bilgileri koru
    setFormData({
      ...formData,
      message: ""
    });
    setIsFormSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Adres",
      info: "Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefon",
      info: "+90 212 123 45 67"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-posta",
      info: "info@evorainşaat.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Çalışma Saatleri",
      info: "Pazartesi - Cuma: 09:00 - 18:00"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="section-padding bg-gradient-to-br from-evora-cream to-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="w-16 h-1 bg-evora-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-evora-navy mb-6 text-balance">
            İletişim
          </h2>
          <p className="text-xl text-evora-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim. Uzman ekibimizle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
            {isFormSubmitted ? (
              <div className="bg-white p-8 rounded-2xl soft-shadow">
                {showSummary ? (
                  // Gönderilen Bilgiler Özeti
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-evora-navy mb-6">
                      Gönderilen Bilgiler Özeti
                    </h3>
                    
                    <div className="bg-evora-cream/50 rounded-xl p-6 mb-6 text-left">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium text-evora-charcoal">Ad Soyad:</span>
                          <span className="text-evora-navy">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-evora-charcoal">Telefon:</span>
                          <span className="text-evora-navy">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-evora-charcoal">E-posta:</span>
                          <span className="text-evora-navy">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-evora-charcoal">Proje Detayları:</span>
                          <span className="text-evora-navy max-w-xs text-right">
                            {formData.message || "Belirtilmedi"}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-evora-charcoal/70 text-sm">
                      Bilgileriniz kontrol ediliyor...
                    </p>
                  </div>
                ) : (
                  // Başarı Mesajı
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-evora-navy mb-4">
                      Formunuz Başarıyla Gönderildi!
                    </h3>
                    <p className="text-evora-charcoal/70 mb-6">
                      Teşekkür ederiz, en kısa sürede size ulaşacağız.
                    </p>
                    
                    <div className="bg-evora-gold/10 rounded-xl p-6 mb-6 text-left">
                      <h4 className="font-semibold text-evora-navy mb-3">Sonraki Adımlar:</h4>
                      <ul className="space-y-2 text-sm text-evora-charcoal/70">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-evora-gold rounded-full mr-3"></div>
                          24-48 saat içinde size ulaşacağız
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-evora-gold rounded-full mr-3"></div>
                          E-posta ve telefon ile bilgilendirme yapılacak
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-evora-gold rounded-full mr-3"></div>
                          Özel danışmanınız size atanacak
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-4 mb-6">
                      <p className="text-sm text-blue-800">
                        <strong>İletişim:</strong> Acil durumlar için +90 212 123 45 67
                      </p>
                    </div>
                    
                    <Button 
                      onClick={handleNewForm}
                      variant="outline" 
                      size="lg" 
                      className="w-full border-evora-gold text-evora-gold hover:bg-evora-gold hover:text-white transition-colors duration-200"
                    >
                      Farklı Projede Yardım Almak İçin Tekrar Formu Doldur
                    </Button>
                  </div>
                )}
              </div>
            ) : (
            <div className="bg-white p-8 rounded-2xl soft-shadow">
              <h3 className="font-display text-2xl font-bold text-evora-navy mb-6">
                Proje Danışmanlığı Formu
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-evora-charcoal mb-2">
                      Ad Soyad *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-evora-gold/20 focus:border-evora-gold"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-evora-charcoal mb-2">
                      Telefon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-evora-gold/20 focus:border-evora-gold"
                      placeholder="0xxx xxx xx xx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-evora-charcoal mb-2">
                    E-posta *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-evora-gold/20 focus:border-evora-gold"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-evora-charcoal mb-2">
                    Proje Detayları
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-evora-gold/20 focus:border-evora-gold resize-none"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg" 
                  className="w-full"
                  aria-label="İletişim formunu gönder"
                >
                  Formu Gönder
                </Button>
              </form>
            </div>
            )}
          </div>

          {/* Contact Info */}
          <div className={`${isVisible ? 'fade-in animate-delayed' : 'opacity-0'}`}>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl soft-shadow hover:elegant-shadow transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-evora-gold/10 rounded-lg flex items-center justify-center text-evora-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-evora-navy mb-2">
                      {item.title}
                    </h4>
                    <p className="text-evora-charcoal/70">
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-white p-6 rounded-2xl soft-shadow">
              <h4 className="font-display text-xl font-bold text-evora-navy mb-4">
                Ofis Lokasyonu
              </h4>
              <div className="bg-evora-cream rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-evora-charcoal/60">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">
                    Google Maps Entegrasyonu
                  </p>
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