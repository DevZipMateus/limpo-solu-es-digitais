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
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nosso propósito
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2 mb-4 text-accent-foreground">
            Missão, visão e valores
          </h2>
          <p className="text-accent-foreground/70">
            Conheça os princípios que guiam nossa empresa e nosso compromisso com você.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-accent-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-accent-foreground/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-accent-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-accent-foreground/80 leading-relaxed">
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
