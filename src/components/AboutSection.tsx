import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutLanguages from "@/assets/about-languages-cartoon.png";

const stats = [
  { number: 15, label: "Languages Targeted", suffix: "+" },
  { number: 120, label: "Youth Volunteers", suffix: "+" },
  { number: 30, label: "Communities Reached", suffix: "+" },
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
    <span className="font-display text-4xl md:text-5xl font-bold text-gold">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        {/* Left — Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 bg-parchment p-8 md:p-16 flex flex-col justify-center"
        >
          <span className="font-mono text-xs text-forest tracking-[0.3em] uppercase mb-3 block">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground mb-6">
            Who We Are
          </h2>
          <p className="font-body text-parchment-foreground/80 text-lg leading-relaxed max-w-lg mb-4">
            Climate Cardinals Tanzania is a youth-led chapter of the global Climate Cardinals movement. 
            We break language barriers to bring vital climate education to Tanzanian communities — translating 
            critical climate information into Kiswahili and local tribal languages so that no community is 
            left behind in the fight against climate change.
          </p>
          <p className="font-body text-parchment-foreground/60 text-sm max-w-lg mb-3 italic">
            Our mission: To make climate education accessible to every Tanzanian community by empowering 
            youth to lead climate action at the grassroots level.
          </p>

          {/* Impact stats */}
          <div className="flex flex-wrap gap-8 mt-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <CountUp target={stat.number} suffix={stat.suffix} inView={inView} />
                <p className="font-body text-parchment-foreground/50 mt-1 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-forest text-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-forest/90 transition-colors duration-300"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — Single cartoon illustration */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full lg:w-1/2 bg-forest p-8 md:p-16 flex items-center justify-center min-h-[50vh] lg:min-h-0 relative"
        >
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gold/[0.08]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-gold/[0.05]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <motion.img
              src={aboutLanguages}
              alt="Diverse community speaking many languages"
              className="w-72 md:w-96 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating dots */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-16 w-3 h-3 rounded-full bg-gold/30"
          />
          <motion.div
            animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-leaf/40"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
