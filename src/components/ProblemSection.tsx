import { motion } from "framer-motion";
import { CloudOff, LockOpen, EyeOff } from "lucide-react";

const problems = [
  {
    icon: <CloudOff className="w-8 h-8 text-red-500" />,
    title: "Vos données dispersées",
    description: "Fragmentées sur des centaines de serveurs que vous ne contrôlez pas.",
  },
  {
    icon: <LockOpen className="w-8 h-8 text-red-500" />,
    title: "Aucun contrôle",
    description: "Les conditions d'utilisation changent, vos accès peuvent être révoqués à tout moment.",
  },
  {
    icon: <EyeOff className="w-8 h-8 text-red-500" />,
    title: "Vie privée inexistante",
    description: "Vos comportements sont tracés, analysés et monétisés sans votre consentement réel.",
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Le problème actuel</h2>
          <div className="h-1 w-20 bg-zinc-800 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-black border border-zinc-800 p-8 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};