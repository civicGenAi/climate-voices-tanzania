import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PartnerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-parchment grain-overlay overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono text-xs text-gold tracking-[0.4em] uppercase mb-8 block"
        >
          Partner
        </motion.span>

        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "6rem" } : {}}
          transition={{ delay: 0.3, duration: 1 }}
          className="h-px bg-gold mx-auto mb-10"
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground mb-6"
        >
          Chanya Change
        </motion.h3>

        {/* Two leaves touching */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center gap-1 mb-8"
        >
          <span className="text-3xl rotate-[-30deg]">🌿</span>
          <span className="text-3xl rotate-[30deg] scale-x-[-1]">🌿</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="font-body text-parchment-foreground/70 text-lg leading-relaxed max-w-xl mx-auto"
        >
          Together with Chanya Change, we amplify our reach across Tanzanian communities — combining forces 
          to drive climate awareness and environmental action where it matters most.
        </motion.p>
      </div>
    </section>
  );
};

export default PartnerSection;
