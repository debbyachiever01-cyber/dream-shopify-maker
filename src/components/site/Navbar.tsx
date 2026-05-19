import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 30);
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "mt-3" : "mt-5"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 sm:px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-glow" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
              <div className="absolute inset-0 rounded-lg bg-gradient-primary blur-md opacity-60 group-hover:opacity-100 transition" />
              <span className="relative font-display font-bold text-white">L</span>
            </div>
            <span className="font-display font-semibold tracking-tight">Lumora</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="rounded-full bg-gradient-primary text-white border-0 shadow-glow hover:opacity-95"
            size="sm"
          >
            <a href="#audit">Get Free Store Advice</a>
          </Button>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60]">
        <div
          className="h-full bg-gradient-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.header>
  );
}
