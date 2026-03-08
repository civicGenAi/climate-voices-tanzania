import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Send, MessageSquareQuote, CheckCircle, X } from "lucide-react";

const ReviewSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", position: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim() || rating === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm({ name: "", position: "", description: "" });
      setRating(0);
    }, 3000);
  };

  return (
    <>
      <section ref={ref} className="relative py-24 md:py-32 bg-forest-deep overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gold/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-leaf/[0.03] blur-3xl" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Community Voices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Share Your Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground max-w-lg mx-auto mb-8"
          >
            Your feedback helps us grow and inspire others to join the movement.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Write a Review
            <Star className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MessageSquareQuote className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Write Your Review</h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-14 h-14 text-leaf mx-auto mb-3" />
                  <p className="font-display text-xl font-bold text-foreground mb-1">Thank You!</p>
                  <p className="font-body text-muted-foreground text-sm">Your review has been submitted.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name *"
                      maxLength={100}
                      required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      placeholder="Position (optional)"
                      maxLength={100}
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Rating *</label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          onClick={() => setRating(star)}
                          className="focus:outline-none transition-transform hover:scale-125"
                        >
                          <Star
                            className={`w-7 h-7 transition-colors duration-200 ${
                              star <= (hoveredStar || rating)
                                ? "text-gold fill-gold"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        </button>
                      ))}
                      {rating > 0 && (
                        <span className="ml-2 font-body text-sm text-gold">{rating}/5</span>
                      )}
                    </div>
                  </div>

                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Share your experience... *"
                    maxLength={1000}
                    required
                    rows={4}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-gold-warm transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Submit Review
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

export default ReviewSection;
