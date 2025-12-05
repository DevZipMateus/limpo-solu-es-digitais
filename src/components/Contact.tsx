import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Fale conosco
          </span>
          <h2 className="heading-secondary mt-2 mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground">
            Estamos prontos para atender você e oferecer as melhores soluções em higiene e limpeza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-6 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-foreground mb-6">
                Informações de contato
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Endereço</h4>
                    <p className="text-muted-foreground text-sm">
                      Rua Paulo Fuck, 87 - Barra do Rio<br />
                      Itajaí/SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <a 
                      href="tel:+554732480393" 
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      (47) 3248-0393
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <a 
                      href="mailto:vendas@distribuidoralimpo.com.br" 
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      vendas@distribuidoralimpo.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horário de funcionamento</h4>
                    <p className="text-muted-foreground text-sm">
                      Segunda a Sexta: 8:00 às 12:00 | 13:30 às 18:18
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instagram</h4>
                    <a 
                      href="https://instagram.com/distribuidoralimpoitajai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      @distribuidoralimpoitajai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/554732480393"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <Phone size={20} />
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-sm h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.2073788889!2d-48.70023752378646!3d-26.912195176640424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cbf76a1d1c2f%3A0x8b7f0e4e7a3c1d2e!2sRua%20Paulo%20Fuck%2C%2087%20-%20Barra%20do%20Rio%2C%20Itaja%C3%AD%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da LIMPO Distribuidora em Itajaí"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
