import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-medium">Desde 2014 no mercado</span>
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            LIMPO SOLUÇÕES EM{" "}
            <span className="text-primary">HIGIENE E LIMPEZA</span>
          </h1>

          {/* H2 - Description */}
          <h2 className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Distribuidora especializada em produtos de higiene e limpeza profissional. 
            Oferecemos as melhores soluções para condomínios, empresas, restaurantes e hotéis em Itajaí e região.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://wa.me/554732480393"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Solicitar orçamento
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Ver produtos
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-6">Confiado por empresas em toda região</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-sm">Anos de experiência</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-sm">Clientes atendidos</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">1000+</span>
                <span className="text-sm">Produtos disponíveis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
