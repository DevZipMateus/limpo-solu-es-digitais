import { CheckCircle, Award, TrendingUp } from "lucide-react";
import warehouseImg from "@/assets/products-warehouse.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Quem somos
            </span>
            <h2 className="heading-secondary mt-2 mb-6">
              Sua parceira em soluções de higiene e limpeza
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Estamos no mercado desde 2014, começamos como uma loja para público em geral 
              e hoje somos uma distribuidora voltada para o mercado institucional e profissional.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sempre tendo como objetivo os bons preços, a excelência no atendimento, 
              a qualidade dos nossos produtos e o melhor prazo de entrega do mercado.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Preços competitivos</h3>
                  <p className="text-sm text-muted-foreground">Melhor custo-benefício do mercado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Produtos de qualidade</h3>
                  <p className="text-sm text-muted-foreground">Marcas reconhecidas e aprovadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Entrega rápida</h3>
                  <p className="text-sm text-muted-foreground">Agilidade na entrega em toda região</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={warehouseImg} 
                alt="Estoque da distribuidora LIMPO com produtos de higiene e limpeza"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 left-4 right-4 bg-background rounded-xl shadow-lg p-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">10+</span>
                <p className="text-xs text-muted-foreground">Anos</p>
              </div>
              <div className="text-center border-x border-border">
                <span className="text-2xl font-bold text-primary">500+</span>
                <p className="text-xs text-muted-foreground">Clientes</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">1000+</span>
                <p className="text-xs text-muted-foreground">Produtos</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
