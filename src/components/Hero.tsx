import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-800 dark:text-zinc-200">
          {t("hero.main_slogan")}
        </h1>
        <div className="h-12 flex items-center justify-center text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-light tracking-wide">
          <span>{t("hero.sub_slogan_prefix")}&nbsp;</span>
          <span className="text-left">{t("hero.sovereign_identity")}</span>
        </div>
      </motion.div>
    </section>
  );
};