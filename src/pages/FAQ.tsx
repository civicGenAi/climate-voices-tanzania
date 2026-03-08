import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { faqs, faqCategories, type FAQItem } from "@/data/faq";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      !search ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 bg-forest-deep">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-leaf blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
              <HelpCircle className="w-4 h-4 text-gold" />
              <span className="font-body text-xs font-semibold text-gold tracking-wider uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Got Questions?{" "}
              <span className="text-gold">We've Got Answers</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Climate Cardinals Tanzania, our programs, climate action, and how to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="bg-background py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-card border border-border rounded-xl pl-11 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`font-body text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                activeCategory === "all"
                  ? "bg-gold text-accent-foreground border-gold"
                  : "bg-card text-muted-foreground border-border hover:border-gold/40"
              }`}
            >
              All Questions
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-body text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === cat.key
                    ? "bg-gold text-accent-foreground border-gold"
                    : "bg-card text-muted-foreground border-border hover:border-gold/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-muted-foreground">No questions found matching your search.</p>
              </div>
            )}
            {filtered.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left group"
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-foreground pr-4 group-hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openId === faq.id ? "auto" : 0,
                    opacity: openId === faq.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="w-12 h-0.5 bg-gold/30 rounded-full mb-3" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-card border border-border rounded-2xl p-8 sm:p-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-flex font-body text-sm font-semibold bg-gold text-accent-foreground px-6 py-3 rounded-full hover:bg-gold-warm transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
