import { ShoppingBag, Truck, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: ShoppingBag,
    title: "Catálogo completo",
    description: "Mais de 1000 produtos disponíveis para sua empresa",
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
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Novidade
            </span>
            <h2 className="heading-secondary mb-4 sm:mb-6">
              Conheça nossa <span className="text-primary">vitrine online</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Navegue por todo nosso catálogo de produtos de higiene e limpeza. 
              Encontre exatamente o que sua empresa precisa com facilidade e praticidade.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 sm:p-4 bg-background rounded-lg shadow-sm border border-border/50"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="bg-background rounded-xl shadow-2xl p-6 sm:p-8 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Vitrine Online</h3>
                <p className="text-muted-foreground mb-6">
                  Todos os produtos disponíveis em um só lugar
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary">1000+</span>
                    <span className="text-muted-foreground">Produtos</span>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary">24h</span>
                    <span className="text-muted-foreground">Entrega</span>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary">100%</span>
                    <span className="text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
