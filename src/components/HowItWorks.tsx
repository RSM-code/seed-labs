import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Création",
    text: "Créez votre identité localement sur votre appareil sécurisé.",
  },
  {
    id: "02",
    title: "Attestation",
    text: "Un tiers de confiance (État, Banque) atteste un fait cryptographique.",
  },
  {
    id: "03",
    title: "Partage",
    text: "Vous présentez la preuve vérifiable. La donnée brute ne quitte jamais votre poche.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Comment ça marche</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-[#22c55e]/50 to-zinc-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center bg-zinc-950"
            >
              <div className="w-24 h-24 rounded-full bg-black border-4 border-zinc-900 flex items-center justify-center mb-6 shadow-xl relative z-10">
                <span className="text-3xl font-bold text-[#22c55e]">{step.id}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-400 px-4">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};