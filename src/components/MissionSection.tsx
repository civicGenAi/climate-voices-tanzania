import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="relative py-24 md:py-36 bg-parchment grain-overlay overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground text-center mb-20"
        >
          What Drives Us
        </motion.h2>

        {/* Central vine */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-forest to-gold origin-top"
          />

          {/* Mission — Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-start mb-20"
          >
            <div className="w-full md:w-[45%] bg-forest text-foreground p-8 rounded-2xl rounded-tr-[3rem] shadow-lg">
              <span className="font-mono text-xs text-leaf tracking-widest uppercase mb-3 block">Our Mission</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-leaf/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-leaf" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Mission</h3>
              </div>
              <p className="font-body text-foreground/80 leading-relaxed">
                To make climate education accessible to every Tanzanian community by translating climate 
                knowledge into Kiswahili and local tribal languages — empowering youth to lead climate 
                action at the grassroots level.
              </p>
            </div>
          </motion.div>

          {/* Vision — Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-end"
          >
            <div className="w-full md:w-[45%] bg-gold text-accent-foreground p-8 rounded-2xl rounded-tl-[3rem] shadow-lg">
              <span className="font-mono text-xs text-forest/70 tracking-widest uppercase mb-3 block">Our Vision</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-forest" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Vision</h3>
              </div>
              <p className="font-body text-accent-foreground/80 leading-relaxed">
                A Tanzania where every community — urban or rural, young or old — has the knowledge and 
                tools to understand, respond to, and combat the effects of climate change in their own language.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
