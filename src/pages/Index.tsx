import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#22c55e] selection:text-black flex flex-col justify-between">
      <Hero />
      <Footer />
    </main>
  );
};

export default Index;