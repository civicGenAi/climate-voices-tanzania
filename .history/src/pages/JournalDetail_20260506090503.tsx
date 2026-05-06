import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/animations/AnimationUtils";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import all nature images
import nature01 from "@/assets/nature/01.jpeg";
import nature02 from "@/assets/nature/02.jpeg";
import nature03 from "@/assets/nature/03.jpeg";
import nature04 from "@/assets/nature/04.jpeg";
import nature05 from "@/assets/nature/05.jpeg";
import nature07 from "@/assets/nature/07.jpeg";
import nature08 from "@/assets/nature/08.jpeg";
import nature09 from "@/assets/nature/09.jpeg";
import nature10 from "@/assets/nature/10.jpeg";
import nature11 from "@/assets/nature/11.jpeg";
import nature12 from "@/assets/nature/12.jpeg";
import nature13 from "@/assets/nature/13.jpeg";
import nature14 from "@/assets/nature/14.jpeg";
import { blogPosts } from "@/data/journal";
  {
    id: 1,
    title: "How Kiswahili Translations Are Changing Climate Awareness in Rural Tanzania",
    excerpt: "Our latest translation project has brought critical climate documents to over 15,000 people in Dodoma region who previously had no access to this vital information.",
    content: "Full content for this post...",
    category: "Stories",
    date: "March 5, 2026",
    readTime: "6 min read",
    featured: false,
    author: "Climate Voices Tanzania Team"
  },
  {
    id: 2,
    title: "500 Trees Planted in Kilimanjaro Region — A Community Milestone",
    excerpt: "In partnership with local schools and community leaders, we achieved a significant milestone in our reforestation efforts on the slopes of Kilimanjaro.",
    content: "Full content for this post...",
    category: "News",
    date: "February 28, 2026",
    readTime: "4 min read",
    featured: false,
    author: "Climate Voices Tanzania Team"
  },
  {
    id: 3,
    title: "Youth Climate Leadership Workshop — What We Learned",
    excerpt: "Our three-day workshop in Arusha brought together 40 young climate advocates. Here's what emerged from the conversations and collaborations.",
    content: "Full content for this post...",
    category: "Education",
    date: "February 20, 2026",
    readTime: "8 min read",
    featured: false,
    author: "Climate Voices Tanzania Team"
  },
  {
    id: 4,
    title: "Upcoming: World Environment Day Community Clean-Up",
    excerpt: "Join us on June 5th for a nationwide community clean-up event across 10 Tanzanian cities. Registration is now open for volunteers.",
    content: "Full content for this post...",
    category: "Events",
    date: "February 15, 2026",
    readTime: "3 min read",
    featured: false,
    author: "Climate Voices Tanzania Team"
  },
  {
    id: 5,
    title: "Understanding Climate Change: A Guide in Simple Kiswahili",
    excerpt: "We've released our most comprehensive educational guide yet — designed for community leaders and teachers to explain climate change in accessible language.",
    content: "Full content for this post...",
    category: "Education",
    date: "February 10, 2026",
    readTime: "5 min read",
    featured: false,
    author: "Climate Voices Tanzania Team"
  },
  {
    id: 6,
    title: "Partner Spotlight: Chanya Change Initiators International",
    excerpt: "A look at how our partnership with Chanya Change has expanded our reach and created new opportunities for environmental advocacy.",
    content: "Full content for this post...",
    category: "Stories",
    date: "February 1, 2026",
    readTime: "5 min read",
    featured: false,
    author: "Climate Voices Tanzania Team"
  },
  {
    id: 7,
    title: "Protecting What We Inherited",
    excerpt: "During a Wikimedia community activity, I visited a natural site full of beauty and life. It made me realize that what we enjoy today exists because someone chose to protect it.",
    content: `During a Wikimedia community activity, I visited a natural site full of beauty and life.

It made me realize that what we enjoy today exists because someone chose to protect it.

Now, the responsibility is ours — to protect our environment so future generations can experience the same.

This is why climate education must reach everyone, regardless of language. Understanding is the first step to action.

— ESTA Gasper Kimario, Tanzania`,
    category: "Stories",
    date: "May 6, 2026",
    readTime: "3 min read",
    featured: true,
    author: "ESTA Gasper Kimario"
  },
];

const JournalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-forest-night">
          <Navigation />
          <div className="pt-32 pb-16 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Story not found</h1>
            <button
              onClick={() => navigate('/journal')}
              className="text-gold hover:underline"
            >
              Back to Journal
            </button>
          </div>
          <Footer />
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-forest-night">
        <Navigation />

        {/* Back Button */}
        <section className="pt-24 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <button
              onClick={() => navigate('/journal')}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Journal
            </button>
          </div>
        </section>

        {/* Article Header */}
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-gold/15 text-gold font-semibold">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-gold/30 text-gold">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="text-sm">By {post.author}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div className="font-body text-foreground leading-relaxed whitespace-pre-line mb-12">
                {post.content}
              </div>
            </motion.div>

            {/* Nature Images Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {natureImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border"
                >
                  <img
                    src={image}
                    alt={`Nature scene ${index + 1}`}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default JournalDetail;