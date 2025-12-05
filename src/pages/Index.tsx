import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Delivery from "@/components/Delivery";
import Products from "@/components/Products";
import Markets from "@/components/Markets";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Delivery />
        <Products />
        <Markets />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
