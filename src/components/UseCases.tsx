import { motion } from "framer-motion";
import { CreditCard, Smartphone, Gamepad2, Layers } from "lucide-react";

const cases = [
  { name: "Finance", icon: <CreditCard /> },
  { name: "Télécoms", icon: <Smartphone /> },
  { name: "Gaming", icon: <Gamepad2 /> },
  { name: "Super Apps", icon: <Layers /> },
];

export const UseCases = () => {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">Cas d'usage</h2>
            <div className="h-px bg-zinc-800 flex-grow ml-8"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, backgroundColor: "#18181b" }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg flex flex-col items-center justify-center gap-4 cursor-default transition-all"
            >
              <div className="text-[#22c55e]">
                {useCase.icon}
              </div>
              <span className="font-medium text-lg">{useCase.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};