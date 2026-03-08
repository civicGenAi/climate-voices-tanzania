import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import aboutTree from "@/assets/about-tree-planting.png";
import aboutEducation from "@/assets/about-education.png";
import aboutCommunity from "@/assets/about-community.png";
import aboutTranslate from "@/assets/about-translate.png";

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

const images = [
  { src: aboutTree, alt: "Tree planting initiative", rotate: -6, x: 0, y: 0 },
  { src: aboutEducation, alt: "Climate education", rotate: 4, x: 10, y: -20 },
  { src: aboutCommunity, alt: "Community outreach", rotate: -3, x: -10, y: 10 },
  { src: aboutTranslate, alt: "Translation work", rotate: 5, x: 5, y: -10 },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative overflow-hidden">
      {/* Stats bar */}
      <div className="bg-forest py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="text-center"
              >
                <CountUp target={stat.number} suffix={stat.suffix} inView={inView} />
                <p className="font-body text-foreground/60 mt-1 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main about content */}
      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        {/* Left — Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 bg-parchment p-8 md:p-16 flex flex-col justify-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground mb-6">
            Who We Are
          </h2>
          <p className="font-body text-parchment-foreground/80 text-lg leading-relaxed max-w-lg">
            Climate Cardinals Tanzania is a youth-led chapter of the global Climate Cardinals movement. 
            We break language barriers to bring vital climate education to Tanzanian communities — translating 
            critical climate information into Kiswahili and local tribal languages so that no community is 
            left behind in the fight against climate change.
          </p>
          <p className="font-body text-parchment-foreground/70 text-base mt-4 max-w-lg">
            Founded by Ester Kimario, we believe that climate justice begins with climate literacy — and 
            literacy must speak in the language of the people.
          </p>
        </motion.div>

        {/* Right — 4 animated images */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full lg:w-1/2 bg-forest p-8 md:p-16 flex items-center justify-center min-h-[50vh] lg:min-h-0"
        >
          <div className="relative w-full max-w-md aspect-square">
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: img.rotate } : {}}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[48%] rounded-xl overflow-hidden shadow-xl border-2 border-gold/20 hover:z-40 hover:scale-110 transition-transform duration-500 cursor-pointer"
                style={{
                  top: i < 2 ? "2%" : "50%",
                  left: i % 2 === 0 ? "2%" : "50%",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, i % 2 === 0 ? -6 : 6, 0],
                    rotate: [img.rotate, img.rotate + (i % 2 === 0 ? 2 : -2), img.rotate],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover aspect-square"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pull quote */}
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
