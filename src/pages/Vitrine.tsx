import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="w-full flex flex-col" style={{ height: "calc(100vh - 63px)" }}>
      {/* Header fixo - 80px (h-20) */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>

      {/* Iframe - ocupa espaço restante (100vh - 80px header - 63px badge) */}
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src="https://limpo.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
