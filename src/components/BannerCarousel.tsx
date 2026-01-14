import { useState, useEffect } from "react";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";

const banners = [banner1, banner2];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <div className="relative">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner promocional ${index + 1} - Soluções em higiene e limpeza`}
            className={`w-full h-auto object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          />
        ))}
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-primary scale-110" 
                  : "bg-background/60 hover:bg-background/80"
              }`}
              aria-label={`Ir para banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
