import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "inicio", label: "Início" },
  { href: "sobre", label: "Sobre" },
  { href: "produtos", label: "Produtos" },
  { href: "mercados", label: "Mercados" },
  { href: "valores", label: "Valores" },
  { href: "contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Usar window.location para evitar encoding do #
      window.location.href = `/#${anchor}`;
    }
  };

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 dark:bg-background/80 backdrop-blur-xl shadow-lg border-b border-white/20" : "bg-background/50 backdrop-blur-sm"}`}>
      <nav className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, "inicio")} 
            className="flex-shrink-0"
          >
            <img src={logo} alt="LIMPO Soluções em Higiene e Limpeza - Logo" className="h-14 sm:h-16 md:h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={`#${link.href}`} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/vitrine" className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-all duration-200 text-xs xl:text-sm uppercase tracking-wide hover:bg-primary/90 hover:shadow-lg">
                Vitrine
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Glass Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white/90 dark:bg-background/90 backdrop-blur-xl border-t border-white/20 shadow-2xl animate-fade-in">
            <ul className="flex flex-col py-2 sm:py-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a 
                    href={`#${link.href}`} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 sm:px-6 py-2.5 sm:py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/vitrine" onClick={() => setIsMenuOpen(false)} className="block px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm">
                  Vitrine
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>;
};
export default Header;