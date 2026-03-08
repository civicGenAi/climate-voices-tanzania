import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BookOpen, TreePine, Languages, Users } from "lucide-react";
import focusEducation from "@/assets/focus-education-cartoon.png";
import focusPlanting from "@/assets/focus-planting-cartoon.png";
import focusTranslate from "@/assets/focus-translate-cartoon.png";
import focusLeadership from "@/assets/focus-leadership-cartoon.png";
import { useLanguage } from "@/contexts/LanguageContext";

const focusKeys = [
  { titleKey: "focus.education.title", descKey: "focus.education.description", Icon: BookOpen, image: focusEducation, iconColor: "text-gold" },
  { titleKey: "focus.planting.title", descKey: "focus.planting.description", Icon: TreePine, image: focusPlanting, iconColor: "text-leaf" },
  { titleKey: "focus.translation.title", descKey: "focus.translation.description", Icon: Languages, image: focusTranslate, iconColor: "text-sky" },
  { titleKey: "focus.leadership.title", descKey: "focus.leadership.description", Icon: Users, image: focusLeadership, iconColor: "text-gold" },
];

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCard, setActiveCard] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % focusKeys.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="focus" ref={ref} className="relative py-16 sm:py-24 md:py-36 bg-forest-night overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-gold/[0.06] animate-[spin_60s_linear_infinite] hidden sm:block" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-leaf/[0.08] animate-[spin_45s_linear_infinite_reverse] hidden sm:block" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-gold/[0.02] blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3 sm:mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5"
          >
            {t("focus.label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4"
          >
            {t("focus.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-sm sm:text-base text-muted-foreground max-w-xl mx-auto"
          >
            {t("focus.subtitle")}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 relative rounded-2xl sm:rounded-[2rem] overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[450px] bg-card"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-end justify-end p-4 sm:p-6"
              >
                <img
                  src={focusKeys[activeCard].image}
                  alt={t(focusKeys[activeCard].titleKey)}
                  className="w-[55%] sm:w-[65%] md:w-[55%] max-h-[80%] sm:max-h-[85%] object-contain drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                background: `linear-gradient(to right, hsl(var(--forest-night)) 0%, hsl(var(--forest-night) / 0.97) 15%, hsl(var(--forest-night) / 0.88) 25%, hsl(var(--forest-night) / 0.65) 35%, hsl(var(--forest-night) / 0.3) 45%, transparent 60%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-night/50 via-transparent to-transparent pointer-events-none z-[1]" />

            <div className="absolute inset-0 z-[2] flex flex-col justify-end p-5 sm:p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center border border-foreground/10">
                      {(() => {
                        const IconComp = focusKeys[activeCard].Icon;
                        return <IconComp className={`w-5 h-5 sm:w-6 sm:h-6 ${focusKeys[activeCard].iconColor}`} />;
                      })()}
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-2 sm:px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm text-gold font-semibold border border-gold/20">
                      {t("focus.tag")}
                    </span>
                  </div>

                  <span className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-foreground/[0.08] absolute top-4 sm:top-8 left-4 sm:left-8">
                    {String(activeCard + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                    {t(focusKeys[activeCard].titleKey)}
                  </h3>
                  <p className="font-body text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {t(focusKeys[activeCard].descKey)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full lg:w-72 flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto pb-2 lg:pb-0 snap-x snap-mandatory lg:snap-none"
          >
            {focusKeys.map((area, i) => (
              <button
                key={area.titleKey}
                onClick={() => setActiveCard(i)}
                className={`flex-shrink-0 w-[140px] sm:w-auto lg:flex-none text-left p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border transition-all duration-500 group snap-start ${
                  i === activeCard
                    ? "bg-card border-gold/30 shadow-lg shadow-gold/5"
                    : "bg-card/40 border-border hover:border-gold/20 hover:bg-card/70"
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${
                    i === activeCard ? "bg-gold/15" : "bg-background/50"
                  }`}>
                    <area.Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                      i === activeCard ? area.iconColor : "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-display text-xs sm:text-sm font-bold transition-colors truncate ${
                      i === activeCard ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {t(area.titleKey)}
                    </p>
                    <span className={`font-mono text-[9px] sm:text-[10px] tracking-wider ${
                      i === activeCard ? "text-gold" : "text-muted-foreground/50"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i === activeCard && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-1.5 h-8 bg-gold rounded-full hidden lg:block"
                    />
                  )}
                </div>

                {i === activeCard && (
                  <div className="mt-2 sm:mt-3 h-0.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      key={`progress-${activeCard}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="h-full bg-gold rounded-full"
                    />
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
