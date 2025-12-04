import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen max-h-screen overflow-hidden">
      <div className="absolute top-6 right-6 z-50 flex items-center gap-2">
        <LanguageToggle />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-black/20 text-black dark:text-white hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center -translate-y-[70px]">
        <Hero />
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Index;