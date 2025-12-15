import { Phone, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/70 to-accent/90"></div>
      </div>

      {/* Floating Glass Elements - Parallax */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 backdrop-blur-xl border border-white/10 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div 
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hidden lg:block"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      />
      <div 
        className="absolute top-40 right-32 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-lg border border-white/10 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-primary-foreground px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 animate-fade-up border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium">Desde 2014 no mercado</span>
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-accent-foreground mb-4 sm:mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
            LIMPO SOLUÇÕES EM{" "}
            <span className="text-primary block sm:inline">HIGIENE E LIMPEZA</span>
          </h1>

          {/* H2 - Description */}
          <h2 className="text-base sm:text-lg md:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up leading-relaxed px-2" style={{ animationDelay: "0.2s" }}>
            Distribuidora especializada em produtos de higiene e limpeza profissional. 
            Oferecemos as melhores soluções para condomínios, empresas, restaurantes e hotéis em Itajaí e região.
          </h2>

          {/* CTA Buttons with Glass Effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up px-4" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://wa.me/554732480393"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Solicitar orçamento
            </a>
            <Link
              to="/vitrine"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <ShoppingBag size={20} />
              Ver vitrine
            </Link>
          </div>

          {/* Glass Trust Badges */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-xs sm:text-sm text-accent-foreground/60 mb-4 sm:mb-6">Confiado por empresas em toda região</p>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 sm:px-8 py-4 sm:py-6 border border-white/20 shadow-xl">
              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-2xl sm:text-3xl font-bold text-primary">10+</span>
                <span className="text-xs sm:text-sm text-accent-foreground/70">Anos de experiência</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-white/20 hidden sm:block"></div>
              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-2xl sm:text-3xl font-bold text-primary">10.000+</span>
                <span className="text-xs sm:text-sm text-accent-foreground/70">Clientes atendidos</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-white/20 hidden sm:block"></div>
              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-2xl sm:text-3xl font-bold text-primary">2000+</span>
                <span className="text-xs sm:text-sm text-accent-foreground/70">Produtos disponíveis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
