import { CheckCircle, Award, TrendingUp } from "lucide-react";
import warehouseImg from "@/assets/products-warehouse.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      {/* Background Glass Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Quem somos
            </span>
            <h2 className="heading-secondary mt-2 mb-4 sm:mb-6">
              Sua parceira em soluções de higiene e limpeza
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Estamos no mercado desde 2014, começamos como uma loja para público em geral 
              e hoje somos uma distribuidora voltada para o mercado institucional e profissional.
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Sempre tendo como objetivo os bons preços, a excelência no atendimento, 
              a qualidade dos nossos produtos e o melhor prazo de entrega do mercado.
            </p>

            {/* Glass Features List */}
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Preços competitivos</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Melhor custo-benefício do mercado</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Produtos de qualidade</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Marcas reconhecidas e aprovadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Entrega rápida</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Agilidade na entrega em toda região</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={warehouseImg} 
                alt="Estoque da distribuidora LIMPO com produtos de higiene e limpeza"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Glass Stats Overlay */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-2 right-2 sm:left-4 sm:right-4 bg-white/70 dark:bg-background/70 backdrop-blur-xl rounded-xl shadow-2xl p-3 sm:p-4 grid grid-cols-3 gap-2 sm:gap-4 border border-white/30">
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-bold text-primary">10+</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Anos</p>
              </div>
              <div className="text-center border-x border-border/50">
                <span className="text-xl sm:text-2xl font-bold text-primary">500+</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Clientes</p>
              </div>
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-bold text-primary">1000+</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Produtos</p>
              </div>
            </div>
            {/* Decorative Glass Element */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/20 backdrop-blur-xl rounded-full border border-white/20 -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
