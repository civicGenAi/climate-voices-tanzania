import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative bg-forest-night pt-20 pb-8 overflow-hidden grain-overlay">
      {/* Root system SVG */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-48 opacity-10"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M600 0 C600 50 500 80 400 120 C300 160 200 170 100 200"
          fill="none"
          stroke="hsl(152 43% 50%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.path
          d="M600 0 C600 60 700 90 800 130 C900 170 1000 180 1100 200"
          fill="none"
          stroke="hsl(152 43% 50%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path
          d="M600 0 C580 80 450 100 350 150 C250 180 150 190 50 200"
          fill="none"
          stroke="hsl(43 75% 46%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
        />
        <motion.path
          d="M600 0 C620 70 750 110 850 140 C950 170 1050 185 1150 200"
          fill="none"
          stroke="hsl(43 75% 46%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut", delay: 0.7 }}
        />
      </svg>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-xl md:text-3xl text-gold text-center mb-16 italic"
        >
          "Breaking Language Barriers, One Community at a Time"
        </motion.p>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="font-mono text-xs text-gold tracking-widest uppercase mb-4">Navigate</h4>
            {["About", "Mission", "Focus Areas", "Programs", "Leadership"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "")}`}
                className="block font-body text-muted-foreground hover:text-foreground transition-colors py-1.5 text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-mono text-xs text-gold tracking-widest uppercase mb-4">Contact</h4>
            <a href="mailto:climatecardinalstz@gmail.com" className="block font-body text-muted-foreground hover:text-foreground transition-colors py-1.5 text-sm">
              climatecardinalstz@gmail.com
            </a>
            <a href="tel:+255626700442" className="block font-body text-muted-foreground hover:text-foreground transition-colors py-1.5 text-sm">
              +255 626 700 442
            </a>
          </div>

          <div>
            <h4 className="font-mono text-xs text-gold tracking-widest uppercase mb-4">Social</h4>
            <a
              href="https://instagram.com/climatecardinalstz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-muted-foreground hover:text-foreground transition-colors py-1.5 text-sm"
            >
              📸 @climatecardinalstz
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground text-center">
            © 2026 Climate Cardinals Tanzania · Founded by Ester Kimario
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
