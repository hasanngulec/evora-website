import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Proje detay sayfasından geri dönüldüğünde scroll pozisyonunu geri yükle
    const savedScrollPosition = localStorage.getItem('projectsScrollPosition');
    if (savedScrollPosition) {
      // Kısa bir gecikme ile scroll yap (sayfa tam yüklendikten sonra)
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        // Scroll pozisyonunu temizle
        localStorage.removeItem('projectsScrollPosition');
      }, 100);
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
