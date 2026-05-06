import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/animations/AnimationUtils";
import { Calendar, Clock, ArrowRight, BookOpen, Search, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import journalHero from "@/assets/journal-hero-cartoon.png";

const categories = ["All", "News", "Stories", "Education", "Events"];

const blogPosts = [
  {
    id: 1,
    title: "How Kiswahili Translations Are Changing Climate Awareness in Rural Tanzania",
    excerpt: "Our latest translation project has brought critical climate documents to over 15,000 people in Dodoma region who previously had no access to this vital information.",
    category: "Stories",
    date: "March 5, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    title: "500 Trees Planted in Kilimanjaro Region — A Community Milestone",
    excerpt: "In partnership with local schools and community leaders, we achieved a significant milestone in our reforestation efforts on the slopes of Kilimanjaro.",
    category: "News",
    date: "February 28, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Climate Leadership Workshop — What We Learned",
    excerpt: "Our three-day workshop in Arusha brought together 40 young climate advocates. Here's what emerged from the conversations and collaborations.",
    category: "Education",
    date: "February 20, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Upcoming: World Environment Day Community Clean-Up",
    excerpt: "Join us on June 5th for a nationwide community clean-up event across 10 Tanzanian cities. Registration is now open for volunteers.",
    category: "Events",
    date: "February 15, 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Understanding Climate Change: A Guide in Simple Kiswahili",
    excerpt: "We've released our most comprehensive educational guide yet — designed for community leaders and teachers to explain climate change in accessible language.",
    category: "Education",
    date: "February 10, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    title: "Protecting What We Inherited",
    excerpt: "During a Wikimedia community activity, I visited a natural site full of beauty and life. It made me realize that what we enjoy today exists because someone chose to protect it.",
    category: "Stories",
    date: "May 6, 2026",
    readTime: "3 min read",
    featured: true,
  },

const Journal = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <PageTransition>
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 pb-10 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 bg-forest-night overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center sm:text-left">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              <BookOpen className="w-3.5 h-3.5" />
              Our Journal
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-3 sm:mb-4">
              Stories & <span className="text-gold">Impact</span>
            </h1>
            <p className="font-body text-sm sm:text-base text-muted-foreground max-w-xl">
              News, stories, and updates from our climate action journey across Tanzania.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <motion.img
              src={journalHero}
              alt="Climate stories journal illustration"
              className="w-36 sm:w-48 md:w-64 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-forest-deep py-4 sm:py-6 border-b border-border sticky top-14 sm:top-16 md:top-20 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold text-accent-foreground font-semibold"
                    : "text-muted-foreground border border-border hover:border-gold/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative flex-1 sm:max-w-xs sm:ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-background/30 border border-border rounded-lg sm:rounded-xl pl-10 pr-4 py-2 sm:py-2.5 font-body text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && featuredPost && (
        <section className="bg-forest-night py-8 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative bg-gradient-to-br from-gold/10 via-card to-card border border-gold/20 rounded-xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 hover:border-gold/40 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-full bg-gold/15 text-gold font-semibold">Featured</span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-full border border-border text-muted-foreground">
                  <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline mr-1" />{featuredPost.category}
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-gold transition-colors">
                {featuredPost.title}
              </h2>
              <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1.5 font-body text-xs sm:text-sm text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5 font-body text-xs sm:text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{featuredPost.readTime}
                </span>
              </div>
              <div className="mt-4 sm:mt-6 flex items-center gap-2 text-gold font-body font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                Read Full Story <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="bg-forest-night py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          {filtered.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <p className="font-body text-muted-foreground">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {(activeCategory === "All" ? regularPosts.filter((p) => !p.featured) : regularPosts).map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-gold/30 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-border text-muted-foreground">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1 font-body text-[10px] sm:text-xs text-muted-foreground">
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />{post.date}
                    </span>
                    <span className="flex items-center gap-1 font-body text-[10px] sm:text-xs text-muted-foreground">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />{post.readTime}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  );
};

export default Journal;
