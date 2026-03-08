import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake } from "lucide-react";
import chanyaLogo from "@/assets/chanya-change-logo.png";

const PartnerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-parchment grain-overlay overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono text-xs text-gold tracking-[0.4em] uppercase mb-8 block"
        >
          Our Partner
        </motion.span>

        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "6rem" } : {}}
          transition={{ delay: 0.3, duration: 1 }}
          className="h-px bg-gold mx-auto mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-parchment border border-forest/10 rounded-2xl p-8 md:p-12 max-w-lg mx-auto shadow-sm"
        >
          <img
            src={chanyaLogo}
            alt="Chanya Change Initiators International"
            className="h-24 md:h-32 object-contain mx-auto mb-6"
          />

          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <Handshake className="w-5 h-5 text-gold" />
            </div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-parchment-foreground mb-4">
            Chanya Change
          </h3>
          <p className="font-body text-parchment-foreground/70 leading-relaxed">
            Together with Chanya Change Initiators International, we amplify our reach across Tanzanian 
            communities — combining forces to drive climate awareness and environmental action where it matters most.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
