import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const programs = [
  {
    title: "Climate Education Workshops",
    description: "Interactive sessions in schools and community centers, teaching climate science in Kiswahili and local languages. We use storytelling, visual aids, and participatory methods to make climate knowledge stick.",
    visual: "🏫",
  },
  {
    title: "Community Awareness Campaigns",
    description: "Grassroots campaigns that bring climate information directly to rural and urban communities through radio, community gatherings, and creative media in local languages.",
    visual: "📢",
  },
  {
    title: "Youth Translation Program",
    description: "Training young volunteers to translate climate documents, reports, and educational materials into over 15 Tanzanian languages — creating a library of accessible climate knowledge.",
    visual: "📝",
  },
  {
    title: "Tree Planting & Restoration",
    description: "Hands-on environmental action — organizing community tree planting events that restore ecosystems while educating participants about the role of forests in climate regulation.",
    visual: "🌱",
  },
];

const ProgramsSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" ref={ref} className="relative py-24 md:py-36 bg-parchment grain-overlay overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground mb-16 text-center"
        >
          In Action
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left — Program list */}
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            {programs.map((program, i) => (
              <motion.button
                key={program.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-lg transition-all duration-500 group ${
                  active === i
                    ? "bg-forest text-foreground"
                    : "bg-transparent text-parchment-foreground hover:bg-forest/10"
                }`}
              >
                <h3 className="font-display text-lg md:text-xl font-semibold">
                  {program.title}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: active === i ? "100%" : 0 }}
                  transition={{ duration: 0.6 }}
                  className="h-0.5 bg-gold mt-2"
                />
              </motion.button>
            ))}
          </div>

          {/* Right — Active program detail */}
          <div className="w-full lg:w-1/2 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-forest-night text-foreground p-8 md:p-12 rounded-2xl w-full"
              >
                <span className="text-6xl mb-6 block">{programs[active].visual}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gold">
                  {programs[active].title}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {programs[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
