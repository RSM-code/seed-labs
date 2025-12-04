import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const rotatingTexts = t("hero.rotating_texts", {
    returnObjects: true,
  }) as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-4xl w-full px-4"
      >
        <div className="w-full flex justify-end">
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400 mb-8 font-medium">
            {t("hero.brand")}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 -mt-5 mb-4">
          {t("hero.main_slogan")}
        </h1>
        <div className="flex flex-col items-center justify-center text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-light tracking-wide">
          <div className="mb-2 mt-[130px]">{t("hero.sub_slogan_prefix")}</div>
          <div className="relative w-full h-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {rotatingTexts[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};