import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Handshake, ArrowRight, ExternalLink } from "lucide-react";
import chanyaLogo from "@/assets/chanya-change-logo.png";

const PartnerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 bg-parchment grain-overlay overflow-hidden">
      {/* Decorative circles — hidden on mobile */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-forest/5 hidden sm:block" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full border border-forest/5 hidden sm:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-gold tracking-[0.4em] uppercase mb-3 sm:mb-4 block"
          >
            Partnerships
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-parchment-foreground mb-3 sm:mb-4"
          >
            Our Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-sm sm:text-base text-parchment-foreground/60 max-w-lg mx-auto"
          >
            Together with our partners, we amplify climate action across Tanzania.
          </motion.p>
        </div>

        {/* Partner card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-white/80 backdrop-blur-sm border border-forest/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 max-w-3xl mx-auto shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Logo */}
          <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl sm:rounded-2xl bg-parchment border border-forest/10 flex items-center justify-center p-3 sm:p-4">
            <img
              src={chanyaLogo}
              alt="Chanya Change Initiators International"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-3">
              <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
              <span className="font-mono text-[10px] sm:text-xs text-gold tracking-wider uppercase">Official Partner</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-parchment-foreground mb-2 sm:mb-3">
              Chanya Change Initiators International
            </h3>
            <p className="font-body text-xs sm:text-sm text-parchment-foreground/70 leading-relaxed mb-4 sm:mb-6">
              Together with Chanya Change Initiators International, we amplify our reach across Tanzanian 
              communities — combining forces to drive climate awareness and environmental action where it matters most.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-forest font-body font-medium text-xs sm:text-sm hover:text-gold transition-colors"
            >
              Visit Website <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Join as partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="font-body text-sm text-parchment-foreground/60 mb-3 sm:mb-4">
            Interested in partnering with us?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-forest text-foreground font-body text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-forest/90 transition-all duration-300 hover:shadow-lg"
          >
            Become a Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
