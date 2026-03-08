import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Focus", href: "#focus" },
  { label: "Programs", href: "#programs" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#join" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between bg-forest-night/80 backdrop-blur-md border-b border-border">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Climate Cardinals Tanzania" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg text-foreground hidden sm:block">
            Climate Cardinals <span className="text-gold">TZ</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <span className="font-mono text-xs text-muted-foreground border border-border rounded px-2 py-1">
            EN | SW
          </span>
          <a
            href="#join"
            className="font-body text-sm bg-gold text-accent-foreground px-5 py-2 rounded-full hover:bg-gold-warm transition-colors duration-300"
          >
            Join Us
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-foreground"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-foreground"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-foreground"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2rem) 2rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-forest flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="font-display text-3xl text-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-mono text-sm text-muted-foreground border border-border rounded px-3 py-1"
            >
              EN | SW
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
