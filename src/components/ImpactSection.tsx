import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const statKeys = [
  { number: 15, key: "impact.stat.languages", suffix: "+" },
  { number: 120, key: "impact.stat.volunteers", suffix: "+" },
  { number: 30, key: "impact.stat.communities", suffix: "+" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gold">
      {count}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative bg-forest-night py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-16 md:gap-8">
          {statKeys.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start sm:items-start"
              style={{ marginTop: window.innerWidth >= 640 ? `${i * 2}rem` : 0 }}
            >
              <CountUp target={stat.number} suffix={stat.suffix} inView={inView} />
              <p className="font-body text-muted-foreground mt-2 text-sm sm:text-lg">{t(stat.key)}</p>
              <svg width="60" height="20" viewBox="0 0 60 20" className="mt-3 text-leaf/40">
                <motion.path
                  d="M5 15 Q15 5 30 10 Q45 15 55 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.3, duration: 1.5 }}
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
