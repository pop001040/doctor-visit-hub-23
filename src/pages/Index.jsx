import Hero from "../components/Hero";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;