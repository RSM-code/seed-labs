import { motion } from "framer-motion";
import { Fingerprint, ShieldCheck, Cpu } from "lucide-react";

const solutions = [
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Identité Souveraine",
    description: "Vous créez et contrôlez votre identité. Aucune autorité centrale ne peut la supprimer ou la censurer.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Preuves Zero-Knowledge",
    description: "Prouvez des faits (âge, nationalité) mathématiquement sans jamais révéler les données sous-jacentes.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Ancrage Matériel",
    description: "Vos clés cryptographiques sont générées et sécurisées directement par le hardware de votre appareil.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-24 px-6 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La solution <span className="text-[#22c55e]">SEED</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Une nouvelle couche de confiance pour l'internet.</p>
        </motion.div>

        <div className="space-y-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col md:flex-row items-start md:items-center p-6 border-l-2 border-zinc-800 hover:border-[#22c55e] hover:bg-zinc-900/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 mr-6 mb-4 md:mb-0 p-3 bg-zinc-900 rounded-lg text-[#22c55e]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};