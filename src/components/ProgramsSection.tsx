import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GraduationCap, Megaphone, FileText, Sprout } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const programKeys = [
  { titleKey: "programs.education.title", descKey: "programs.education.description", Icon: GraduationCap },
  { titleKey: "programs.campaigns.title", descKey: "programs.campaigns.description", Icon: Megaphone },
  { titleKey: "programs.translation.title", descKey: "programs.translation.description", Icon: FileText },
  { titleKey: "programs.planting.title", descKey: "programs.planting.description", Icon: Sprout },
];

const ProgramsSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="programs" ref={ref} className="relative py-24 md:py-36 bg-parchment grain-overlay overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground mb-16 text-center"
        >
          {t("programs.title")}
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            {programKeys.map((program, i) => (
              <motion.button
                key={program.titleKey}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-lg transition-all duration-500 group flex items-center gap-4 ${
                  active === i
                    ? "bg-forest text-foreground"
                    : "bg-transparent text-parchment-foreground hover:bg-forest/10"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  active === i ? "bg-gold/20" : "bg-forest/10 group-hover:bg-forest/20"
                }`}>
                  <program.Icon className={`w-5 h-5 transition-colors ${
                    active === i ? "text-gold" : "text-forest group-hover:text-leaf"
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl font-semibold">
                    {t(program.titleKey)}
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: active === i ? "100%" : 0 }}
                    transition={{ duration: 0.6 }}
                    className="h-0.5 bg-gold mt-2"
                  />
                </div>
              </motion.button>
            ))}
          </div>

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
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  {(() => {
                    const ActiveIcon = programKeys[active].Icon;
                    return <ActiveIcon className="w-7 h-7 text-gold" />;
                  })()}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gold">
                  {t(programKeys[active].titleKey)}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {t(programKeys[active].descKey)}
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
