export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "organization" | "climate" | "programs" | "volunteering";
}

export const faqCategories = [
  { key: "organization", label: "About Us" },
  { key: "climate", label: "Climate & Environment" },
  { key: "programs", label: "Our Programs" },
  { key: "volunteering", label: "Get Involved" },
] as const;

export const faqs: FAQItem[] = [
  // Organization
  {
    id: "org-1",
    question: "What is Climate Cardinals Tanzania?",
    answer: "Climate Cardinals Tanzania is the official Tanzanian chapter of Climate Cardinals, a global youth-led organization. We focus on breaking language barriers in climate education by translating climate information into Kiswahili and local Tanzanian languages, empowering communities to understand and act on climate change.",
    category: "organization",
  },
  {
    id: "org-2",
    question: "How is Climate Cardinals Tanzania connected to the global organization?",
    answer: "We are an official chapter of Climate Cardinals, a global nonprofit founded by Aditi Sheshadri. As the Tanzania chapter, we operate independently with our own programs and leadership, while aligning with the global mission of making climate information accessible in every language worldwide.",
    category: "organization",
  },
  {
    id: "org-3",
    question: "Who founded Climate Cardinals Tanzania?",
    answer: "Climate Cardinals Tanzania was founded by Ester Kimario, a passionate young climate activist committed to ensuring that every Tanzanian community has access to climate knowledge in their own language.",
    category: "organization",
  },
  {
    id: "org-4",
    question: "Where does Climate Cardinals Tanzania operate?",
    answer: "We operate across Tanzania, East Africa — from urban centers like Dar es Salaam and Arusha to rural communities in regions where local languages are the primary means of communication. Our programs reach communities in over 15 language groups.",
    category: "organization",
  },
  // Climate & Environment
  {
    id: "clm-1",
    question: "Why is climate education important in Tanzania?",
    answer: "Tanzania is one of the most climate-vulnerable countries in Africa. Rising temperatures, unpredictable rainfall, and extreme weather events directly impact agriculture, water supply, and livelihoods. Yet most climate information is only available in English — a language many rural Tanzanians don't speak. Translating this knowledge saves lives and empowers communities to adapt.",
    category: "climate",
  },
  {
    id: "clm-2",
    question: "What are the biggest climate challenges facing Tanzania?",
    answer: "Tanzania faces droughts affecting food security, glacier retreat on Mount Kilimanjaro, coral reef degradation along the coast, deforestation, and flooding in low-lying areas. These challenges disproportionately affect rural communities who depend on natural resources for their livelihoods.",
    category: "climate",
  },
  {
    id: "clm-3",
    question: "How does language access relate to climate justice?",
    answer: "Climate justice means ensuring that the communities most affected by climate change have the tools and knowledge to protect themselves. When climate information is only available in English or academic jargon, millions are excluded. Translating this knowledge into local languages is a fundamental act of climate justice.",
    category: "climate",
  },
  {
    id: "clm-4",
    question: "What can individuals do to fight climate change in Tanzania?",
    answer: "Individuals can plant native trees, practice sustainable agriculture, reduce waste, conserve water, and spread awareness in their communities. Most importantly, they can share climate knowledge in their local language — because informed communities are resilient communities.",
    category: "climate",
  },
  // Programs
  {
    id: "prg-1",
    question: "What programs does Climate Cardinals Tanzania run?",
    answer: "We run four core programs: Climate Education Workshops (interactive learning in schools and communities), Community Awareness Campaigns (radio, gatherings, creative media), Youth Translation Volunteer Program (translating climate documents into 15+ languages), and Tree Planting & Environmental Restoration (community-led planting events).",
    category: "programs",
  },
  {
    id: "prg-2",
    question: "How many languages do you translate into?",
    answer: "Our volunteers translate climate materials into over 15 Tanzanian languages including Kiswahili, Kimeru, Kichagga, Kisukuma, Kihaya, Kimasai, and many more. We are continuously expanding our language coverage based on community needs.",
    category: "programs",
  },
  {
    id: "prg-3",
    question: "How many trees has Climate Cardinals Tanzania planted?",
    answer: "We have planted over 10,000 trees across 20+ planting sites in Tanzania, prioritizing native species for biodiversity. Every planting event includes an educational component about the role of forests in carbon sequestration and ecosystem health.",
    category: "programs",
  },
  {
    id: "prg-4",
    question: "Can I request a workshop for my school or community?",
    answer: "Absolutely! We welcome requests from schools, community centers, religious organizations, and local governments. Contact us through our website or email us at climatecardinalstz@gmail.com to discuss how we can bring a tailored workshop to your area.",
    category: "programs",
  },
  // Volunteering
  {
    id: "vol-1",
    question: "How can I volunteer with Climate Cardinals Tanzania?",
    answer: "Visit our Join Us page to sign up as a volunteer. We're always looking for translators, educators, event organizers, content creators, and community mobilizers. No prior experience is required — just passion for climate action and willingness to learn.",
    category: "volunteering",
  },
  {
    id: "vol-2",
    question: "Do I need to speak multiple languages to volunteer?",
    answer: "While multilingual skills are valuable for our translation program, they're not required for all volunteer roles. We need help with event organizing, social media, photography, research, and community outreach. There's a role for everyone!",
    category: "volunteering",
  },
  {
    id: "vol-3",
    question: "Can I volunteer remotely?",
    answer: "Yes! Many of our roles — especially translation, content creation, research, and social media — can be done remotely from anywhere in Tanzania or the world. We use digital tools to collaborate and keep our distributed team connected.",
    category: "volunteering",
  },
  {
    id: "vol-4",
    question: "How can organizations partner with Climate Cardinals Tanzania?",
    answer: "We welcome partnerships with NGOs, businesses, schools, and government agencies. Partners can sponsor programs, co-host events, provide resources, or collaborate on campaigns. Reach out to us at climatecardinalstz@gmail.com to explore partnership opportunities.",
    category: "volunteering",
  },
];
