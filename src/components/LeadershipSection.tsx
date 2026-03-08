import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Award } from "lucide-react";

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" ref={ref} className="relative py-24 md:py-36 bg-forest-night overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
        {/* Giant watermark name */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.04 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-foreground whitespace-nowrap select-none pointer-events-none leading-none"
        >
          Ester Kimario
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12 relative z-10"
        >
          Founded & Led By
        </motion.h2>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8"
        >
          <div className="absolute inset-0 rounded-full border-2 border-gold/40" />
          <div className="absolute -inset-3 rounded-full border border-leaf/20" />
          <div className="absolute -inset-6 rounded-full border border-leaf/10" />
          <div className="w-full h-full rounded-full bg-forest flex items-center justify-center">
            <User className="w-12 h-12 md:w-16 md:h-16 text-gold/70" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6 relative z-10"
        >
          <Award className="w-4 h-4 text-gold" />
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase">
            Founder & Chapter Lead
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="font-body text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto relative z-10"
        >
          Ester Kimario is a passionate young climate advocate from Tanzania who founded the Climate Cardinals 
          Tanzania Chapter to ensure that climate knowledge reaches every corner of her country — in every language 
          spoken by its people. Her vision is rooted in the belief that language should never be a barrier to survival.
        </motion.p>

        {/* Gold underline animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "8rem" } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="h-0.5 bg-gold mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default LeadershipSection;
