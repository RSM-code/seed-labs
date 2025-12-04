import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen max-h-screen overflow-hidden">
      <div className="flex-grow flex flex-col">
        <Hero />
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Index;