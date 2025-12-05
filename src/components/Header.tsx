import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const navLinks = [{
  href: "#inicio",
  label: "Início"
}, {
  href: "#sobre",
  label: "Sobre"
}, {
  href: "#produtos",
  label: "Produtos"
}, {
  href: "#mercados",
  label: "Mercados"
}, {
  href: "#valores",
  label: "Valores"
}, {
  href: "#contato",
  label: "Contato"
}];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"}`}>
      <nav className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img src={logo} alt="LIMPO Soluções em Higiene e Limpeza - Logo" className="h-24 sm:h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map(link => <li key={link.href}>
                <a href={link.href} className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wide">
                  {link.label}
                </a>
              </li>)}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-background border-t border-border shadow-lg animate-fade-in">
            <ul className="flex flex-col py-2 sm:py-4">
              {navLinks.map(link => <li key={link.href}>
                  <a href={link.href} onClick={handleLinkClick} className="block px-4 sm:px-6 py-2.5 sm:py-3 text-foreground/80 hover:text-primary hover:bg-secondary transition-colors font-medium text-sm">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>}
      </nav>
    </header>;
};
export default Header;