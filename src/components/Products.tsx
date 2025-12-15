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
    image: paperImg,
    subcategories: [
      {
        name: "Papel Higiênico",
        items: ["Rolão 300m", "Rolão 500m", "Folha dupla", "Folha simples"],
      },
      {
        name: "Papel Toalha",
        items: ["Interfolhado 2 dobras", "Interfolhado 3 dobras", "Bobina 200m"],
      },
      {
        name: "Guardanapos",
        items: ["Folha simples", "Folha dupla", "Sachê individual"],
      },
    ],
  },
  {
    icon: Beaker,
    title: "Químicos",
    description: "Linha completa de produtos químicos para limpeza pesada, desinfecção e manutenção.",
    image: chemicalImg,
    subcategories: [
      {
        name: "Limpeza Geral",
        items: ["Detergentes", "Multiusos", "Limpa vidros", "Desengordurantes"],
      },
      {
        name: "Desinfecção",
        items: ["Desinfetantes", "Álcool 70%", "Sanitizantes", "Bactericidas"],
      },
      {
        name: "Limpeza Pesada",
        items: ["Desincrustantes", "Removedores", "Cloro", "Ácidos"],
      },
    ],
  },
  {
    icon: Package,
    title: "Descartáveis",
    description: "Copos, pratos, talheres, embalagens e diversos itens descartáveis de qualidade.",
    image: disposableImg,
    subcategories: [
      {
        name: "Copa e Cozinha",
        items: ["Copos 200ml", "Copos 300ml", "Pratos", "Talheres"],
      },
      {
        name: "Embalagens",
        items: ["Marmitex", "Potes plásticos", "Sacos de lixo", "Filme PVC"],
      },
      {
        name: "Proteção",
        items: ["Luvas látex", "Luvas nitrílica", "Toucas", "Máscaras"],
      },
    ],
  },
  {
    icon: Wrench,
    title: "Equipamentos",
    description: "Equipamentos profissionais para otimizar a limpeza e manutenção dos ambientes.",
    image: equipmentImg,
    subcategories: [
      {
        name: "Dispensers",
        items: ["Papel higiênico", "Papel toalha", "Sabonete líquido", "Álcool gel"],
      },
      {
        name: "Limpeza",
        items: ["Mops", "Vassouras", "Rodos", "Baldes"],
      },
      {
        name: "Profissional",
        items: ["Carrinhos", "Lavadoras", "Aspiradores", "Enceradeiras"],
      },
    ],
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Glass Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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

        {/* Glass Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white/70 dark:bg-background/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30"
            >
              {/* Product Image */}
              <div className="h-40 sm:h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={`Produtos de ${product.title.toLowerCase()} - LIMPO Distribuidora`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-primary/20">
                    <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                    {product.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-3">
                  {product.subcategories.map((subcategory) => (
                    <div key={subcategory.name}>
                      <h4 className="text-xs font-semibold text-primary mb-1.5 uppercase tracking-wide">
                        {subcategory.name}
                      </h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {subcategory.items.map((item) => (
                          <li 
                            key={item} 
                            className="text-[10px] sm:text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Glass CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://wa.me/554732480393"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Solicitar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
