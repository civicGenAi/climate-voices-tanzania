import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Sprout, Handshake, Send, CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const JoinSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({ name: "", email: "", phone: "", motivation: "" });
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;

    const fireflies: { x: number; y: number; vx: number; vy: number; opacity: number; phase: number }[] = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const count = window.innerWidth < 768 ? 20 : 40;
    for (let i = 0; i < count; i++) {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
        phase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;
      fireflies.forEach((f) => {
        f.x += f.vx;
        f.y += f.vy;
        if (f.x < 0 || f.x > canvas.width) f.vx *= -1;
        if (f.y < 0 || f.y > canvas.height) f.vy *= -1;
        const glow = (Math.sin(time + f.phase) + 1) / 2;
        ctx.globalAlpha = glow * 0.6 + 0.1;
        ctx.fillStyle = "#D4A017";
        ctx.beginPath();
        ctx.arc(f.x, f.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = glow * 0.2;
        ctx.beginPath();
        ctx.arc(f.x, f.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); };
  }, []);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.name.trim() || !volunteerForm.email.trim()) return;
    setVolunteerSubmitted(true);
    setTimeout(() => {
      setShowVolunteerModal(false);
      setVolunteerSubmitted(false);
      setVolunteerForm({ name: "", email: "", phone: "", motivation: "" });
    }, 3000);
  };

  return (
    <>
      <section id="join" ref={ref} className="relative py-16 sm:py-24 md:py-36 bg-forest overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-2"
            >
              {t("join.title1")}<span className="text-gold">{t("join.title2")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-body text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mt-3 sm:mt-4"
            >
              {t("join.subtitle")}
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex-1 bg-forest-night border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-leaf/10 flex items-center justify-center mb-4 sm:mb-5">
                <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-leaf" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                {t("join.volunteer.title")}
              </h3>
              <p className="font-body text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                {t("join.volunteer.description")}
              </p>
              <button
                onClick={() => setShowVolunteerModal(true)}
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                {t("join.volunteer.apply")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex-1 bg-gold/10 border border-gold/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:bg-gold/15 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gold/15 flex items-center justify-center mb-4 sm:mb-5">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gold mb-2 sm:mb-3">
                {t("join.partner.title")}
              </h3>
              <p className="font-body text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                {t("join.partner.description")}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-gold font-body text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-gold hover:bg-gold hover:text-accent-foreground transition-all duration-300"
              >
                {t("join.partner.contact")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showVolunteerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowVolunteerModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-lg bg-card border border-border rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowVolunteerModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-leaf/10 flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-leaf" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{t("join.modal.title")}</h3>
              </div>

              {volunteerSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-14 h-14 text-leaf mx-auto mb-3" />
                  <p className="font-display text-xl font-bold text-foreground mb-1">{t("join.modal.success")}</p>
                  <p className="font-body text-muted-foreground text-sm">{t("join.modal.successMsg")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <input
                    type="text" value={volunteerForm.name} onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                    placeholder={t("join.modal.name")} maxLength={100} required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                  <input
                    type="email" value={volunteerForm.email} onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    placeholder={t("join.modal.email")} maxLength={255} required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                  <input
                    type="tel" value={volunteerForm.phone} onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                    placeholder={t("join.modal.phone")} maxLength={20}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                  <textarea
                    value={volunteerForm.motivation} onChange={(e) => setVolunteerForm({ ...volunteerForm, motivation: e.target.value })}
                    placeholder={t("join.modal.motivation")} maxLength={500} rows={3}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-gold-warm transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    {t("join.modal.submit")}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JoinSection;
