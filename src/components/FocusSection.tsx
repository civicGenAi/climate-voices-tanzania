import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const focusAreas = [
  {
    title: "Climate Education",
    description: "Delivering climate literacy programs in schools and communities across Tanzania, making complex climate science understandable and actionable.",
    icon: "📖",
    clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
  },
  {
    title: "Tree Planting",
    description: "Organizing tree planting initiatives to restore degraded ecosystems and combat deforestation — one seedling at a time.",
    icon: "🌳",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 85%)",
    borderRadius: "1rem 1rem 2.5rem 2.5rem",
  },
  {
    title: "Translation Work",
    description: "Translating critical climate documents, guides, and educational materials into Kiswahili and tribal languages — bridging the knowledge gap.",
    icon: "🗣️",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
  },
  {
    title: "Youth Leadership",
    description: "Training and empowering young Tanzanians to become climate ambassadors in their communities — building the next generation of change-makers.",
    icon: "✊",
    borderLeft: "4px solid hsl(43 75% 46%)",
  },
];

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="focus" ref={ref} className="relative py-24 md:py-36 bg-forest-night overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-center"
        >
          How We Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground text-center mb-16 max-w-xl mx-auto"
        >
          Four pillars that define our approach to climate action in Tanzania.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card p-8 md:p-10 rounded-xl hover:bg-forest transition-colors duration-500 border border-border hover:border-leaf/30 cursor-default"
              style={{
                clipPath: area.clipPath,
                borderLeft: area.borderLeft,
                borderRadius: area.borderRadius,
              }}
            >
              <span className="font-mono text-xs text-gold tracking-widest uppercase mb-4 block">
                0{i + 1}
              </span>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {area.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="font-body text-muted-foreground group-hover:text-foreground/70 transition-colors text-sm md:text-base leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
