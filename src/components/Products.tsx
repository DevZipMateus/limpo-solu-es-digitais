import { FileText, Beaker, Package, Wrench } from "lucide-react";
import paperImg from "@/assets/paper-products.jpg";
import chemicalImg from "@/assets/chemical-products.jpg";
import disposableImg from "@/assets/disposable-products.jpg";
import equipmentImg from "@/assets/equipment-products.jpg";

const products = [
  {
    icon: FileText,
    title: "Papéis",
    description: "Papel higiênico, papel toalha, guardanapos e bobinas em diversas gramaturas e tamanhos.",
    items: ["Papel higiênico rolão", "Papel toalha interfolhado", "Guardanapos", "Bobinas"],
    image: paperImg,
  },
  {
    icon: Beaker,
    title: "Químicos",
    description: "Linha completa de produtos químicos para limpeza pesada, desinfecção e manutenção.",
    items: ["Desinfetantes", "Detergentes", "Multiusos", "Desincrustantes"],
    image: chemicalImg,
  },
  {
    icon: Package,
    title: "Descartáveis",
    description: "Copos, pratos, talheres, embalagens e diversos itens descartáveis de qualidade.",
    items: ["Copos descartáveis", "Embalagens", "Luvas", "Sacos de lixo"],
    image: disposableImg,
  },
  {
    icon: Wrench,
    title: "Equipamentos",
    description: "Equipamentos profissionais para otimizar a limpeza e manutenção dos ambientes.",
    items: ["Dispensers", "Carrinhos", "Mops", "Vassouras"],
    image: equipmentImg,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-secondary">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos produtos
          </span>
          <h2 className="heading-secondary mt-2 mb-3 sm:mb-4">
            Linha completa de produtos profissionais
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Oferecemos uma ampla variedade de produtos de higiene e limpeza para atender todas as necessidades do seu negócio.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`Produtos de ${product.title.toLowerCase()} - LIMPO Distribuidora`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                    {product.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://wa.me/554732480393"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-300"
          >
            Solicitar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
