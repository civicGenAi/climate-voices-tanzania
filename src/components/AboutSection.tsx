import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tanzaniaDots = [
  { x: 45, y: 20, label: "Arusha" }, { x: 60, y: 25, label: "Kilimanjaro" },
  { x: 30, y: 40, label: "Tabora" }, { x: 55, y: 50, label: "Dodoma" },
  { x: 70, y: 60, label: "Dar es Salaam" }, { x: 40, y: 65, label: "Mbeya" },
  { x: 25, y: 55, label: "Kigoma" }, { x: 65, y: 35, label: "Tanga" },
  { x: 50, y: 75, label: "Lindi" }, { x: 35, y: 30, label: "Mwanza" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left — Parchment */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-1/2 bg-parchment p-8 md:p-16 flex flex-col justify-center"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
        >
          {/* Ghost watermark */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[6rem] md:text-[10rem] font-bold text-forest/[0.04] whitespace-nowrap select-none pointer-events-none leading-none">
            Climate Cardinals
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground mb-6 relative z-10">
            Who We Are
          </h2>
          <p className="font-body text-parchment-foreground/80 text-lg leading-relaxed relative z-10 max-w-lg">
            Climate Cardinals Tanzania is a youth-led chapter of the global Climate Cardinals movement. 
            We break language barriers to bring vital climate education to Tanzanian communities — translating 
            critical climate information into Kiswahili and local tribal languages so that no community is 
            left behind in the fight against climate change.
          </p>
          <p className="font-body text-parchment-foreground/70 text-base mt-4 relative z-10 max-w-lg">
            Founded by Ester Kimario, we believe that climate justice begins with climate literacy — and 
            literacy must speak in the language of the people.
          </p>
        </motion.div>

        {/* Right — Dark green with map */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full lg:w-1/2 bg-forest p-8 md:p-16 flex items-center justify-center min-h-[50vh] lg:min-h-0"
        >
          {/* Animated Tanzania map dots */}
          <div className="relative w-full max-w-sm aspect-square">
            {tanzaniaDots.map((dot, i) => (
              <motion.div
                key={dot.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                className="absolute group"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              >
                <span className="block w-3 h-3 rounded-full bg-gold/70 animate-glow-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                <span className="absolute left-5 top-0 font-mono text-[10px] text-leaf/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {dot.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pull quote overlapping */}
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative -mt-12 md:-mt-16 mx-6 md:mx-auto max-w-3xl bg-forest-night/90 backdrop-blur-sm border border-gold/20 px-8 py-6 md:px-12 md:py-8 rounded-lg z-10"
      >
        <p className="font-display text-lg md:text-2xl italic text-gold/90 text-center">
          "A Tanzania where every community can access climate knowledge — regardless of language."
        </p>
      </motion.blockquote>
    </section>
  );
};

export default AboutSection;
