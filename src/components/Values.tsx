import { Target, Eye, Heart } from "lucide-react";

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
  return (
    <section id="valores" className="section-padding bg-accent text-accent-foreground">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nosso propósito
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mt-2 mb-3 sm:mb-4 text-accent-foreground">
            Missão, visão e valores
          </h2>
          <p className="text-accent-foreground/70 text-sm sm:text-base">
            Conheça os princípios que guiam nossa empresa e nosso compromisso com você.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-accent-foreground/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-accent-foreground/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${value.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
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
