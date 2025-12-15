import { ShoppingBag, Truck, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const benefits = [
  {
    icon: ShoppingBag,
    title: "Catálogo completo",
    description: "Mais de 2000 produtos disponíveis para sua empresa",
  },
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Receba seus produtos em até 24 horas na região",
  },
  {
    icon: Clock,
    title: "Pedido fácil",
    description: "Faça seu pedido online de forma rápida e prática",
  },
  {
    icon: CheckCircle,
    title: "Qualidade garantida",
    description: "Produtos das melhores marcas do mercado",
  },
];

const VitrineSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Floating Glass Elements - Parallax */}
      <div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/10 hidden lg:block"
        style={{ transform: `translateY(${(scrollY - 2000) * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary/5 backdrop-blur-xl border border-primary/10 hidden lg:block"
        style={{ transform: `translateY(${(scrollY - 2000) * -0.15}px)` }}
      />

      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">
              Novidade
            </span>
            <h2 className="heading-secondary mb-4 sm:mb-6">
              Conheça nossa <span className="text-primary">vitrine online</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Navegue por todo nosso catálogo de produtos de higiene e limpeza. 
              Encontre exatamente o que sua empresa precisa com facilidade e praticidade.
            </p>

            {/* Glass Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/20 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/vitrine"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <ShoppingBag size={24} />
              Acessar vitrine de produtos
            </Link>
          </div>

          {/* Glass Visual Element */}
          <div className="relative">
            <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/30 shadow-2xl">
              <div className="bg-white/80 dark:bg-background/80 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 text-center border border-white/50">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
                  <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Vitrine Online</h3>
                <p className="text-muted-foreground mb-6">
                  Todos os produtos disponíveis em um só lugar
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex flex-col items-center px-3 py-2 bg-primary/5 backdrop-blur-sm rounded-lg">
                    <span className="text-2xl font-bold text-primary">1000+</span>
                    <span className="text-muted-foreground">Produtos</span>
                  </div>
                  <div className="flex flex-col items-center px-3 py-2 bg-primary/5 backdrop-blur-sm rounded-lg">
                    <span className="text-2xl font-bold text-primary">24h</span>
                    <span className="text-muted-foreground">Entrega</span>
                  </div>
                  <div className="flex flex-col items-center px-3 py-2 bg-primary/5 backdrop-blur-sm rounded-lg">
                    <span className="text-2xl font-bold text-primary">100%</span>
                    <span className="text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative glass elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 backdrop-blur-xl rounded-full border border-white/20 hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 backdrop-blur-xl rounded-full border border-white/10 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
