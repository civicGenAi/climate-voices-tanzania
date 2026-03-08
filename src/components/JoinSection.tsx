import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const JoinSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showForm, setShowForm] = useState(false);
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
    { icon: "📧", text: "climatecardinalstz@gmail.com", href: "mailto:climatecardinalstz@gmail.com" },
    { icon: "📱", text: "+255 626 700 442", href: "tel:+255626700442" },
    { icon: "📸", text: "@climatecardinalstz", href: "https://instagram.com/climatecardinalstz" },
  ];

  return (
    <section id="join" ref={ref} className="relative py-24 md:py-36 bg-forest overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Be Part of
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gold"
          >
            the Change.
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-16">
          {/* Volunteer tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex-1"
          >
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full text-left bg-forest-night border border-border rounded-xl p-8 hover:border-gold/40 transition-colors duration-300 group"
            >
              <span className="text-3xl mb-4 block">🌿</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                Volunteer
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Join our team of youth climate translators and educators.
              </p>
            </button>

            {showForm && (
              <motion.form
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="bg-forest-night border border-border border-t-0 rounded-b-xl p-6 flex flex-col gap-4 overflow-hidden"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-muted text-foreground font-body px-4 py-3 rounded-lg border border-border focus:border-gold outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-muted text-foreground font-body px-4 py-3 rounded-lg border border-border focus:border-gold outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Languages You Speak"
                  className="bg-muted text-foreground font-body px-4 py-3 rounded-lg border border-border focus:border-gold outline-none transition-colors"
                />
                <button
                  type="button"
                  className="bg-gold text-accent-foreground font-body font-semibold py-3 rounded-lg hover:bg-gold-warm transition-colors"
                >
                  Submit Application
                </button>
              </motion.form>
            )}
          </motion.div>

          {/* Partner tile */}
          <motion.a
            href="mailto:climatecardinalstz@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex-1 bg-gold/10 border border-gold/20 rounded-xl p-8 hover:bg-gold/20 transition-colors duration-300 group"
          >
            <span className="text-3xl mb-4 block">🤝</span>
            <h3 className="font-display text-2xl font-bold text-gold mb-2 group-hover:text-gold-warm transition-colors">
              Partner With Us
            </h3>
            <p className="font-body text-muted-foreground text-sm">
              Organizations and institutions — let's amplify impact together.
            </p>
          </motion.a>
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
              transition={{ delay: 1 + i * 0.15 }}
              className="flex items-center gap-2 bg-forest-night/80 border border-border rounded-full px-5 py-2.5 font-body text-sm text-foreground hover:border-gold/40 transition-colors"
            >
              <span>{c.icon}</span>
              {c.text}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
