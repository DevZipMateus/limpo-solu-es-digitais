import { CheckCircle, Award, TrendingUp } from "lucide-react";

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

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-secondary rounded-2xl p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">10+</span>
                  <p className="text-muted-foreground mt-2">Anos de mercado</p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">500+</span>
                  <p className="text-muted-foreground mt-2">Clientes satisfeitos</p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">1000+</span>
                  <p className="text-muted-foreground mt-2">Produtos</p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">24h</span>
                  <p className="text-muted-foreground mt-2">Prazo médio de entrega</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
