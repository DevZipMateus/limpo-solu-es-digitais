import { Building2, Factory, UtensilsCrossed, Hotel, Stethoscope, Home } from "lucide-react";

const markets = [
  {
    icon: Building2,
    title: "Condomínios",
    description: "Produtos para limpeza de áreas comuns, halls, garagens e espaços compartilhados.",
  },
  {
    icon: Factory,
    title: "Empresas",
    description: "Soluções completas para escritórios, indústrias e ambientes corporativos.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description: "Produtos específicos para cozinhas profissionais e áreas de alimentação.",
  },
  {
    icon: Hotel,
    title: "Hotéis",
    description: "Linha hospitality com produtos para quartos, lavanderias e áreas comuns.",
  },
  {
    icon: Stethoscope,
    title: "Clínicas",
    description: "Produtos hospitalares e de higienização para ambientes de saúde.",
  },
  {
    icon: Home,
    title: "Residências",
    description: "Opções econômicas e de qualidade para o uso doméstico.",
  },
];

const Markets = () => {
  return (
    <section id="mercados" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Mercados de atuação
          </span>
          <h2 className="heading-secondary mt-2 mb-4">
            Atendemos diversos segmentos
          </h2>
          <p className="text-muted-foreground">
            Nossa expertise nos permite oferecer soluções personalizadas para cada tipo de negócio, 
            entendendo as necessidades específicas de cada segmento.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => (
            <div
              key={market.title}
              className="group flex items-start gap-4 p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <market.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {market.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {market.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;
