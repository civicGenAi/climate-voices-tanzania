import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Journal", href: "/journal" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"EN" | "SW">("EN");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-forest-night/95 backdrop-blur-lg shadow-lg shadow-forest-night/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo only */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Climate Cardinals Tanzania"
                className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative font-body text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-gold"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Toggle */}
              <div className="relative flex items-center bg-forest/60 rounded-full p-0.5 border border-gold/20">
                <button
                  onClick={() => setLang("EN")}
                  className={`relative z-10 font-body text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 ${
                    lang === "EN" ? "text-accent-foreground" : "text-foreground/50"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("SW")}
                  className={`relative z-10 font-body text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 ${
                    lang === "SW" ? "text-accent-foreground" : "text-foreground/50"
                  }`}
                >
                  SW
                </button>
                <motion.div
                  layout
                  className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-gold rounded-full"
                  animate={{ left: lang === "EN" ? "2px" : "calc(50%)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>

              <Link
                to="/join"
                className="font-body text-sm font-semibold bg-gold text-accent-foreground px-6 py-2.5 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Join Us
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setLang(lang === "EN" ? "SW" : "EN")}
                className="font-body text-[10px] font-semibold text-gold border border-gold/30 rounded-full px-2.5 py-1"
              >
                {lang}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground z-50 relative w-8 h-8 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-1">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 w-5 bg-foreground rounded-full origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    className="block h-0.5 w-5 bg-foreground rounded-full"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 w-5 bg-foreground rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-night/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2">
              <img src={logo} alt="Climate Cardinals Tanzania" className="h-16 w-16 object-contain mb-8" />
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`font-display text-2xl font-semibold py-3 px-8 rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? "text-gold"
                        : "text-foreground/80 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6"
              >
                <Link
                  to="/join"
                  className="font-body text-base font-semibold bg-gold text-accent-foreground px-8 py-3 rounded-full"
                >
                  Join Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
