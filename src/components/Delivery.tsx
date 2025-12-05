import deliveryImg from "@/assets/delivery.jpg";

const Delivery = () => {
  return (
    <section className="py-10 sm:py-12 bg-background overflow-hidden">
      <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={deliveryImg}
              alt="Entrega rápida para toda a região é com a Distribuidora Limpo"
              className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Entrega expressa
            </span>
            <h2 className="heading-secondary mt-2 mb-3 sm:mb-4">
              Entrega rápida para toda a região
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Contamos com uma frota própria para garantir que seus produtos cheguem 
              no prazo. Atendemos Itajaí e toda a região com agilidade e pontualidade.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-muted-foreground text-sm sm:text-base">Prazo médio de entrega de 24 horas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-muted-foreground text-sm sm:text-base">Frota própria para maior agilidade</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-muted-foreground text-sm sm:text-base">Atendimento em toda região de Itajaí</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
