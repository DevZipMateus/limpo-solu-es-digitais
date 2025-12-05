import { Target, Eye, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import warehouseImg from "@/assets/products-warehouse.jpg";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer ao nosso cliente, soluções em higiene e limpeza, proporcionando melhor resultado pelo menor custo.",
    color: "bg-primary",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser reconhecida como empresa modelo, em parceria entre fornecedor e cliente, sendo a melhor e mais completa empresa de material de higiene e limpeza na região de Itajaí.",
    color: "bg-accent",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "A Limpo crê que agir com dignidade, ética e flexibilidade é primordial para uma boa relação, e que trabalhando em parceria é o caminho mais curto para o sucesso. Por isso a Limpo tem como principal filosofia de trabalho a parceria, acreditando sempre que o esforço mútuo à levará para o melhor resultado.",
    color: "bg-primary",
  },
];

const Values = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="valores" className="section-padding text-accent-foreground relative overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${warehouseImg})`,
          transform: `translateY(${(scrollY - 3500) * 0.3}px) scale(1.1)`,
        }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/90 to-accent/95"></div>
      
      {/* Glass Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/10 backdrop-blur-xl rounded-full border border-white/10 hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 hidden lg:block"></div>

      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Glass Header Card */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <span className="inline-block bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/30">
            Nosso propósito
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-3 sm:mb-4 text-accent-foreground">
            Missão, visão e valores
          </h2>
          <p className="text-accent-foreground/70 text-sm sm:text-base">
            Conheça os princípios que guiam nossa empresa e nosso compromisso com você.
          </p>
        </div>

        {/* Glass Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/20 hover:border-primary/50 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${value.color} backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-accent-foreground mb-3 sm:mb-4">
                {value.title}
              </h3>
              <p className="text-accent-foreground/80 leading-relaxed text-sm sm:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
