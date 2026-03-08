import { BookOpen, Megaphone, Languages, TreePine } from "lucide-react";
import programEducationHero from "@/assets/program-education-hero.png";
import programCampaignsHero from "@/assets/program-campaigns-hero.png";
import programTranslationHero from "@/assets/program-translation-hero.png";
import programPlantingHero from "@/assets/program-planting-hero.png";

export const programs = [
  {
    slug: "climate-education",
    icon: BookOpen,
    heroImage: programEducationHero,
    title: "Climate Education Workshops",
    subtitle: "Knowledge for Every Community",
    tagline: "Translate. Educate. Empower.",
    description:
      "Interactive sessions in schools and community centers, teaching climate science in Kiswahili and local languages.",
    fullDescription: [
      "Our Climate Education Workshops are designed to bring climate science to life in communities across Tanzania. We work with local schools, community centers, and gathering spaces to deliver interactive, hands-on learning experiences.",
      "Each workshop is tailored to the audience — from primary school students to village elders — ensuring that everyone can engage with and understand the material. Our trained youth facilitators deliver content in Kiswahili and local tribal languages, using storytelling, visual aids, and participatory activities.",
      "We don't just teach — we inspire. Every workshop ends with an action plan that participants can take back to their communities, creating a ripple effect of climate awareness and action.",
    ],
    highlights: [
      "Tailored curriculum for different age groups",
      "Hands-on activities and visual aids",
      "Local language delivery for maximum impact",
      "Trained youth facilitators in every region",
    ],
    approach: [
      { step: "Assess", detail: "We survey community needs and language preferences before designing each workshop." },
      { step: "Design", detail: "Curriculum is co-created with local educators and climate experts." },
      { step: "Deliver", detail: "Youth facilitators lead interactive sessions in local languages." },
      { step: "Follow Up", detail: "Post-workshop surveys and community action plans ensure lasting impact." },
    ],
    impact: { number: "20+", label: "Workshops Conducted" },
    stats: [
      { number: "6+", label: "Communities" },
      { number: "20+", label: "Facilitators" },
      { number: "300+", label: "Participants" },
    ],
    color: "leaf" as const,
  },
  {
    slug: "community-campaigns",
    icon: Megaphone,
    heroImage: programCampaignsHero,
    title: "Community Awareness Campaigns",
    subtitle: "Reaching Every Corner of Tanzania",
    tagline: "Awareness is the first step toward action.",
    description:
      "Grassroots campaigns that bring climate information directly to rural and urban communities through radio, community gatherings, and creative media.",
    fullDescription: [
      "Our Community Awareness Campaigns take climate information directly to the people who need it most. Through community radio broadcasts in local languages, village-level meetings, and creative visual storytelling, we ensure critical climate knowledge reaches every corner of Tanzania.",
      "We partner with local leaders, religious organizations, and community groups to amplify our message and build trust. Our campaigns use culturally relevant messaging that resonates with local values and traditions.",
      "From street art and murals to radio dramas and community theater, we use every creative tool at our disposal to make climate change real, relatable, and actionable for everyday Tanzanians.",
    ],
    highlights: [
      "Community radio broadcasts in local languages",
      "Village-level awareness meetings",
      "Creative media and visual storytelling",
      "Partnerships with local leaders and organizations",
    ],
    approach: [
      { step: "Listen", detail: "We start by understanding what communities already know and what they need." },
      { step: "Collaborate", detail: "Local leaders and artists help craft culturally resonant campaigns." },
      { step: "Broadcast", detail: "Multi-channel delivery: radio, in-person, digital, and creative media." },
      { step: "Measure", detail: "We track reach, engagement, and behavior change to refine our approach." },
    ],
    impact: { number: "50,000+", label: "People Reached" },
    stats: [
      { number: "15+", label: "Radio Stations" },
      { number: "100+", label: "Events Held" },
      { number: "25+", label: "Partner Orgs" },
    ],
    color: "gold" as const,
  },
  {
    slug: "translation-program",
    icon: Languages,
    heroImage: programTranslationHero,
    title: "Youth Translation Volunteer Program",
    subtitle: "Bridging the Language Gap",
    tagline: "No language left behind.",
    description:
      "Training young volunteers to translate climate documents, reports, and educational materials into over 15 Tanzanian languages.",
    fullDescription: [
      "The Youth Translation Volunteer Program is at the heart of our mission. We recruit, train, and certify young Tanzanians to translate critical climate documents, scientific reports, educational materials, and policy briefs into over 15 Tanzanian languages.",
      "Every translation undergoes rigorous quality review by native speakers to ensure accuracy, cultural relevance, and accessibility. We're not just translating words — we're translating concepts, making complex climate science understandable in every language.",
      "Together, we are building an open-access library of climate knowledge that any community can use — breaking down the language barriers that have kept vital information out of reach for generations.",
    ],
    highlights: [
      "Translation into 15+ Tanzanian languages",
      "Volunteer training and certification",
      "Growing open-access knowledge library",
      "Quality review by native speakers",
    ],
    approach: [
      { step: "Recruit", detail: "We identify multilingual youth passionate about climate and language justice." },
      { step: "Train", detail: "Volunteers receive translation methodology and climate science training." },
      { step: "Translate", detail: "Teams work on priority documents with mentorship from experienced translators." },
      { step: "Verify", detail: "Native speakers review every translation for accuracy and cultural fit." },
    ],
    impact: { number: "120+", label: "Active Translators" },
    stats: [
      { number: "15+", label: "Languages" },
      { number: "200+", label: "Documents" },
      { number: "1,000+", label: "Pages Translated" },
    ],
    color: "leaf" as const,
  },
  {
    slug: "tree-planting",
    icon: TreePine,
    heroImage: programPlantingHero,
    title: "Tree Planting & Environmental Restoration",
    subtitle: "From Knowledge to Action",
    tagline: "Plant today. Protect tomorrow.",
    description:
      "Hands-on environmental action — organizing community tree planting events that restore ecosystems while educating participants.",
    fullDescription: [
      "Our Tree Planting & Environmental Restoration program turns climate knowledge into tangible action. We organize community-led planting events across Tanzania, prioritizing native species to maximize biodiversity and ecological impact.",
      "Every planting event includes an educational component — teaching participants about the critical role forests play in carbon sequestration, water regulation, and biodiversity. We believe that when people understand why trees matter, they become lifelong stewards of the environment.",
      "We also run long-term monitoring and care programs to ensure that planted trees survive and thrive, creating lasting environmental impact that can be measured and celebrated by the communities that made it happen.",
    ],
    highlights: [
      "Community-led planting events",
      "Native species prioritized for biodiversity",
      "Education integrated into every event",
      "Long-term monitoring and care programs",
    ],
    approach: [
      { step: "Plan", detail: "Site selection, species choice, and community engagement before every event." },
      { step: "Educate", detail: "Pre-planting workshops teach the science behind reforestation." },
      { step: "Plant", detail: "Community-led events bring together volunteers of all ages." },
      { step: "Steward", detail: "Long-term monitoring ensures survival and measures carbon impact." },
    ],
    impact: { number: "10,000+", label: "Trees Planted" },
    stats: [
      { number: "20+", label: "Planting Sites" },
      { number: "500+", label: "Volunteers" },
      { number: "15+", label: "Native Species" },
    ],
    color: "gold" as const,
  },
];

export type Program = (typeof programs)[0];
