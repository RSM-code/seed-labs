import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-white dark:bg-black min-h-screen text-black dark:text-white selection:bg-[#22c55e] selection:text-black dark:selection:text-white">
      <Hero />
      <Footer />
    </main>
  );
};

export default Index;