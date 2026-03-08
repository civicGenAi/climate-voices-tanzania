import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WordReveal } from "@/components/animations/AnimationUtils";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="mission" ref={ref} className="relative py-24 md:py-36 bg-parchment grain-overlay overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground text-center mb-20">
          <WordReveal text={t("mission.title")} />
        </h2>

        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-forest to-gold origin-top"
          />

          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-start mb-20"
          >
            <div className="w-full md:w-[45%] bg-forest text-foreground p-8 rounded-2xl rounded-tr-[3rem] shadow-lg hover-lift">
              <span className="font-mono text-xs text-leaf tracking-widest uppercase mb-3 block">{t("mission.missionLabel")}</span>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-10 h-10 rounded-lg bg-leaf/10 flex items-center justify-center"
                >
                  <Target className="w-5 h-5 text-leaf" />
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{t("mission.missionTitle")}</h3>
              </div>
              <p className="font-body text-foreground/80 leading-relaxed">
                {t("mission.missionText")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-end"
          >
            <div className="w-full md:w-[45%] bg-gold text-accent-foreground p-8 rounded-2xl rounded-tl-[3rem] shadow-lg hover-lift">
              <span className="font-mono text-xs text-forest/70 tracking-widest uppercase mb-3 block">{t("mission.visionLabel")}</span>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 text-forest" />
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{t("mission.visionTitle")}</h3>
              </div>
              <p className="font-body text-accent-foreground/80 leading-relaxed">
                {t("mission.visionText")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
