import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Handshake, Mail, Phone, Instagram } from "lucide-react";

const JoinSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    for (let i = 0; i < 40; i++) {
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

  const contacts = [
    { Icon: Mail, text: "climatecardinalstz@gmail.com", href: "mailto:climatecardinalstz@gmail.com" },
    { Icon: Phone, text: "+255 626 700 442", href: "tel:+255626700442" },
    { Icon: Instagram, text: "@climatecardinalstz", href: "https://instagram.com/climatecardinalstz" },
  ];

  return (
    <section id="join" ref={ref} className="relative py-24 md:py-36 bg-forest overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-2"
          >
            Be Part of <span className="text-gold">the Change.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-body text-muted-foreground max-w-lg mx-auto mt-4"
          >
            Join our growing community of climate advocates making real impact across Tanzania.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-16">
          {/* Volunteer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex-1 bg-forest-night border border-border rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-leaf/10 flex items-center justify-center mb-5">
              <Sprout className="w-6 h-6 text-leaf" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Volunteer
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-6">
              Join our team of youth climate translators and educators. Make a real difference in your community.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Partner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex-1 bg-gold/10 border border-gold/20 rounded-2xl p-8 hover:bg-gold/15 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
              <Handshake className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gold mb-3">
              Partner With Us
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-6">
              Organizations and institutions — let's amplify impact together across Tanzania.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-gold font-body font-semibold px-6 py-3 rounded-full border-2 border-gold hover:bg-gold hover:text-accent-foreground transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Contact pills */}
        <div className="flex flex-wrap gap-4 justify-center">
          {contacts.map((c, i) => (
            <motion.a
              key={c.text}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="flex items-center gap-2 bg-forest-night/80 border border-border rounded-full px-5 py-2.5 font-body text-sm text-foreground hover:border-gold/40 transition-colors"
            >
              <c.Icon className="w-4 h-4 text-gold" />
              {c.text}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
