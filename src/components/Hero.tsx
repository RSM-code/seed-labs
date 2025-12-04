import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("problem");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative bg-black text-white overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-6 font-medium">
          v1.0 — Infrastructure
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Votre identité numérique vous appartient
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 font-light tracking-wide">
          SEED Protocol — Infrastructure d'identité souveraine
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNext}
          className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
        >
          En savoir plus
          <div className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce cursor-pointer text-zinc-500 hover:text-white transition-colors"
        onClick={scrollToNext}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};