import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src={logo}
              alt="LIMPO Soluções em Higiene e Limpeza"
              className="h-10 sm:h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-accent-foreground/70 text-xs sm:text-sm leading-relaxed max-w-md">
              Distribuidora de produtos de higiene e limpeza em Itajaí/SC. 
              Desde 2014 oferecendo as melhores soluções para o mercado institucional e profissional.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="https://instagram.com/distribuidoralimpoitajai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram da LIMPO"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/554732480393"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp da LIMPO"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-accent-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-accent-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-accent-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#mercados" className="text-accent-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Mercados
                </a>
              </li>
              <li>
                <a href="#contato" className="text-accent-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-accent-foreground/70">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                <span>Rua Paulo Fuck, 87 - Barra do Rio, Itajaí/SC</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-accent-foreground/70">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="tel:+554732480393" className="hover:text-primary transition-colors">
                  (47) 3248-0393
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-accent-foreground/70">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:vendas@distribuidoralimpo.com.br" className="hover:text-primary transition-colors break-all">
                  vendas@distribuidoralimpo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 mt-8 sm:mt-10 pt-4 sm:pt-6 text-center">
          <p className="text-accent-foreground/50 text-[10px] sm:text-xs md:text-sm">
            © {new Date().getFullYear()} Distribuidora Limpo LTDA. CNPJ: 20.446.817/0001-03. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
