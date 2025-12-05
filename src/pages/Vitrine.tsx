import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px (h-20) */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>

      {/* Iframe - ocupa espaço restante */}
      <div className="flex-1 w-full">
        <iframe
          src="https://limpo.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>

      {/* Badge inferior - 63px */}
      <div id="montesite-footer-badge" className="h-[63px] flex-shrink-0 w-full" />
    </div>
  );
};

export default Vitrine;
