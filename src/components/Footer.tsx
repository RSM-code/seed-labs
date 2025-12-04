export const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-background text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-bold text-foreground tracking-wider">SEED</span>
          <span>PROTOCOL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
          <span>Projet en développement</span>
        </div>
        <div>
          <a href="mailto:dev@seed-labs.xyz" className="hover:text-[#22c55e] transition-colors">
            dev@seed-labs.xyz
          </a>
        </div>
      </div>
    </footer>
  );
};