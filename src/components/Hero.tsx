import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slogans = [
  { lang: "fr", text: "identité souveraine" },
  { lang: "en", text: "sovereign identity" },
  { lang: "es", text: "identidad soberana" },
  { lang: "ja", text: "主権的アイデンティティ" },
  { lang: "zh", text: "主权身份" },
  { lang: "ru", text: "суверенная идентичность" },
  { lang: "tr", text: "egemen kimlik" },
  { lang: "id", text: "identitas berdaulat" },
];

// We use the longest slogan to create a stable width container, preventing layout shifts.
const longestSlogan = "суверенная идентичность";

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 4500); // Increased interval for a slower pace
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] dark:opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-4xl w-full px-4"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400 mb-8 font-medium">
          Recherche & Développement
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-800 dark:text-zinc-200">
          Votre identité numérique vous appartient
        </h1>
        <div className="h-12 flex items-center justify-center text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-light tracking-wide">
          <span>seed id/OS -&nbsp;</span>
          <div className="relative [perspective:200px] text-left">
            {/* Spacer to prevent jiggling */}
            <span className="invisible">{longestSlogan}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={slogans[index].lang}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.8, ease: "easeInOut" }} // Slowed down the flip animation
                className="absolute left-0 top-0"
              >
                {slogans[index].text}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};