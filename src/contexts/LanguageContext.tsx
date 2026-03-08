import { createContext, useContext, useState, ReactNode } from "react";

type Language = "EN" | "SW";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.journal": "Journal",
    "nav.community": "Community",
    "nav.contact": "Contact",
    "nav.joinUs": "Join Us",
    "nav.tanzaniaChapter": "Tanzania\nChapter",

    // Hero
    "hero.title1": "Climate Knowledge",
    "hero.title2": "For Every Voice.",
    "hero.description": "We break language barriers to bring vital climate education to Tanzanian communities — translating knowledge into Kiswahili and local tribal languages.",
    "hero.joinMovement": "Join the Movement",
    "hero.learnMore": "Learn More",
    "hero.scroll": "SCROLL",

    // About Section
    "about.label": "About Us",
    "about.title": "Who We Are",
    "about.p1": "Climate Cardinals Tanzania is a youth-led chapter of the global Climate Cardinals movement. We break language barriers to bring vital climate education to Tanzanian communities — translating critical climate information into Kiswahili and local tribal languages so that no community is left behind in the fight against climate change.",
    "about.p2": "Our mission: To make climate education accessible to every Tanzanian community by empowering youth to lead climate action at the grassroots level.",
    "about.learnMore": "Learn More",
    "about.stat.languages": "Languages Targeted",
    "about.stat.volunteers": "Youth Volunteers",
    "about.stat.communities": "Communities Reached",

    // Mission Section
    "mission.title": "What Drives Us",
    "mission.missionLabel": "Our Mission",
    "mission.missionTitle": "Mission",
    "mission.missionText": "To make climate education accessible to every Tanzanian community by translating climate knowledge into Kiswahili and local tribal languages — empowering youth to lead climate action at the grassroots level.",
    "mission.visionLabel": "Our Vision",
    "mission.visionTitle": "Vision",
    "mission.visionText": "A Tanzania where every community — urban or rural, young or old — has the knowledge and tools to understand, respond to, and combat the effects of climate change in their own language.",

    // Focus Section
    "focus.label": "Our Approach",
    "focus.title": "How We Work",
    "focus.subtitle": "Four pillars that define our approach to climate action in Tanzania.",
    "focus.education.title": "Climate Education",
    "focus.education.description": "Delivering climate literacy programs in schools and communities across Tanzania, making complex climate science understandable and actionable.",
    "focus.planting.title": "Tree Planting",
    "focus.planting.description": "Organizing tree planting initiatives to restore degraded ecosystems and combat deforestation — one seedling at a time.",
    "focus.translation.title": "Translation Work",
    "focus.translation.description": "Translating critical climate documents, guides, and educational materials into Kiswahili and tribal languages — bridging the knowledge gap.",
    "focus.leadership.title": "Youth Leadership",
    "focus.leadership.description": "Training and empowering young Tanzanians to become climate ambassadors in their communities — building the next generation of change-makers.",
    "focus.tag": "In Action",

    // Programs Section
    "programs.title": "In Action",
    "programs.education.title": "Climate Education Workshops",
    "programs.education.description": "Interactive sessions in schools and community centers, teaching climate science in Kiswahili and local languages. We use storytelling, visual aids, and participatory methods to make climate knowledge stick.",
    "programs.campaigns.title": "Community Awareness Campaigns",
    "programs.campaigns.description": "Grassroots campaigns that bring climate information directly to rural and urban communities through radio, community gatherings, and creative media in local languages.",
    "programs.translation.title": "Youth Translation Program",
    "programs.translation.description": "Training young volunteers to translate climate documents, reports, and educational materials into over 15 Tanzanian languages — creating a library of accessible climate knowledge.",
    "programs.planting.title": "Tree Planting & Restoration",
    "programs.planting.description": "Hands-on environmental action — organizing community tree planting events that restore ecosystems while educating participants about the role of forests in climate regulation.",

    // Leadership Section
    "leadership.founderLabel": "Message from the Founder",
    "leadership.founderName": "Ester Kimario",
    "leadership.founderRole": "Founder & Chapter Lead",
    "leadership.founderMessage": "I founded Climate Cardinals Tanzania because I believe that language should never be a barrier to survival. Every Tanzanian — whether they speak Kiswahili, Sukuma, Chagga, or any of our beautiful tribal languages — deserves to understand the climate crisis and how to protect their community. Together, we are building a movement where climate knowledge belongs to everyone.",
    "leadership.reviewsLabel": "Community Voices",
    "leadership.reviewsTitle": "What People Say",
    "leadership.writeReview": "Write Your Review Too",
    "leadership.reviewModal.title": "Write Your Review",
    "leadership.reviewModal.name": "Your Name *",
    "leadership.reviewModal.position": "Position (optional)",
    "leadership.reviewModal.rating": "Rating *",
    "leadership.reviewModal.description": "Share your experience... *",
    "leadership.reviewModal.submit": "Submit Review",
    "leadership.reviewModal.thanks": "Thank You!",
    "leadership.reviewModal.submitted": "Your review has been submitted.",

    // Partner Section
    "partners.label": "Partnerships",
    "partners.title": "Our Partners",
    "partners.subtitle": "Together with our partners, we amplify climate action across Tanzania.",
    "partners.officialPartner": "Official Partner",
    "partners.chanyaName": "Chanya Change Initiators International",
    "partners.chanyaDescription": "Together with Chanya Change Initiators International, we amplify our reach across Tanzanian communities — combining forces to drive climate awareness and environmental action where it matters most.",
    "partners.visitWebsite": "Visit Website",
    "partners.interested": "Interested in partnering with us?",
    "partners.becomePartner": "Become a Partner",

    // Join Section
    "join.title1": "Be Part of ",
    "join.title2": "the Change.",
    "join.subtitle": "Join our growing community of climate advocates making real impact across Tanzania.",
    "join.volunteer.title": "Volunteer",
    "join.volunteer.description": "Join our team of youth climate translators and educators. Make a real difference in your community.",
    "join.volunteer.apply": "Apply Now",
    "join.partner.title": "Partner With Us",
    "join.partner.description": "Organizations and institutions — let's amplify impact together across Tanzania.",
    "join.partner.contact": "Get in Touch",
    "join.modal.title": "Volunteer Application",
    "join.modal.name": "Full Name *",
    "join.modal.email": "Email Address *",
    "join.modal.phone": "Phone Number (optional)",
    "join.modal.motivation": "Why do you want to volunteer? (optional)",
    "join.modal.submit": "Submit Application",
    "join.modal.success": "Application Sent!",
    "join.modal.successMsg": "We'll be in touch soon.",

    // Impact Section
    "impact.stat.languages": "Languages Targeted",
    "impact.stat.volunteers": "Youth Volunteers",
    "impact.stat.communities": "Communities Reached",

    // Footer
    "footer.brand.description": "Breaking language barriers to bring climate knowledge to every Tanzanian community in Kiswahili and local languages.",
    "footer.quickLinks": "Quick Links",
    "footer.quickLinks.home": "Home",
    "footer.quickLinks.about": "About Us",
    "footer.quickLinks.programs": "Programs",
    "footer.quickLinks.join": "Join Us",
    "footer.quickLinks.contact": "Contact",
    "footer.quickLinks.faq": "FAQ",
    "footer.ourPrograms": "Our Programs",
    "footer.programs.education": "Climate Education",
    "footer.programs.campaigns": "Community Campaigns",
    "footer.programs.translation": "Youth Translation",
    "footer.programs.planting": "Tree Planting",
    "footer.getInTouch": "Get In Touch",
    "footer.newsletter.title": "Stay Updated",
    "footer.newsletter.subtitle": "Subscribe to our newsletter for climate action updates.",
    "footer.newsletter.placeholder": "Your email address",
    "footer.newsletter.button": "Subscribe",
    "footer.chapter": "An official chapter of Climate Cardinals",
    "footer.copyright": "© 2026 Climate Cardinals Tanzania · Founded by Ester Kimario",

    // Login
    "login.welcome": "Welcome back",
    "login.subtitle": "Sign in to continue your impact",
    "login.email": "Email",
    "login.password": "Password",
    "login.forgot": "Forgot password?",
    "login.signIn": "Sign In",
    "login.backHome": "← Back to home",
    "login.heroTitle1": "Empowering youth to",
    "login.heroTitle2": "protect our planet",
    "login.heroDescription": "Join thousands of young climate leaders making a real difference in their communities.",
  },

  SW: {
    // Navigation
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.programs": "Programu",
    "nav.journal": "Jarida",
    "nav.community": "Jamii",
    "nav.contact": "Wasiliana",
    "nav.joinUs": "Jiunge Nasi",
    "nav.tanzaniaChapter": "Tawi la\nTanzania",

    // Hero
    "hero.title1": "Elimu ya Hali ya Hewa",
    "hero.title2": "Kwa Kila Sauti.",
    "hero.description": "Tunavunja vikwazo vya lugha kuleta elimu muhimu ya hali ya hewa kwa jamii za Tanzania — kutafsiri maarifa katika Kiswahili na lugha za makabila.",
    "hero.joinMovement": "Jiunge na Harakati",
    "hero.learnMore": "Jifunze Zaidi",
    "hero.scroll": "SOGEZA",

    // About Section
    "about.label": "Kuhusu Sisi",
    "about.title": "Sisi ni Nani",
    "about.p1": "Climate Cardinals Tanzania ni tawi linaloongozwa na vijana la harakati za Climate Cardinals duniani. Tunavunja vikwazo vya lugha kuleta elimu muhimu ya hali ya hewa kwa jamii za Tanzania — kutafsiri taarifa muhimu za hali ya hewa katika Kiswahili na lugha za makabila ili hakuna jamii itakayoachwa nyuma katika mapambano dhidi ya mabadiliko ya hali ya hewa.",
    "about.p2": "Dhamira yetu: Kufanya elimu ya hali ya hewa ipatikane kwa kila jamii ya Tanzania kwa kuwawezesha vijana kuongoza hatua za hali ya hewa katika ngazi ya jamii.",
    "about.learnMore": "Jifunze Zaidi",
    "about.stat.languages": "Lugha Zinazolengwa",
    "about.stat.volunteers": "Vijana wa Kujitolea",
    "about.stat.communities": "Jamii Zilizofikiwa",

    // Mission Section
    "mission.title": "Kinachotusukuma",
    "mission.missionLabel": "Dhamira Yetu",
    "mission.missionTitle": "Dhamira",
    "mission.missionText": "Kufanya elimu ya hali ya hewa ipatikane kwa kila jamii ya Tanzania kwa kutafsiri maarifa ya hali ya hewa katika Kiswahili na lugha za makabila — kuwawezesha vijana kuongoza hatua za hali ya hewa katika ngazi ya jamii.",
    "mission.visionLabel": "Maono Yetu",
    "mission.visionTitle": "Maono",
    "mission.visionText": "Tanzania ambapo kila jamii — mjini au vijijini, vijana au wazee — ina maarifa na zana za kuelewa, kukabiliana, na kupambana na athari za mabadiliko ya hali ya hewa kwa lugha yao wenyewe.",

    // Focus Section
    "focus.label": "Mkakati Wetu",
    "focus.title": "Jinsi Tunavyofanya Kazi",
    "focus.subtitle": "Nguzo nne zinazofafanua mkakati wetu wa hatua za hali ya hewa Tanzania.",
    "focus.education.title": "Elimu ya Hali ya Hewa",
    "focus.education.description": "Kutoa programu za ujuzi wa hali ya hewa shuleni na jumuiya kote Tanzania, kufanya sayansi ngumu ya hali ya hewa ieleweke na iweze kutekelezwa.",
    "focus.planting.title": "Kupanda Miti",
    "focus.planting.description": "Kupanga miradi ya upandaji miti kurejesha mifumo ya ikolojia iliyoharibika na kupambana na ukataji miti — mche mmoja kwa wakati.",
    "focus.translation.title": "Kazi ya Tafsiri",
    "focus.translation.description": "Kutafsiri hati muhimu za hali ya hewa, miongozo, na vifaa vya kielimu katika Kiswahili na lugha za makabila — kuziba pengo la maarifa.",
    "focus.leadership.title": "Uongozi wa Vijana",
    "focus.leadership.description": "Kuwafunza na kuwawezesha vijana wa Tanzania kuwa mabalozi wa hali ya hewa katika jamii zao — kujenga kizazi kijacho cha waletaji mabadiliko.",
    "focus.tag": "Inatumika",

    // Programs Section
    "programs.title": "Inatumika",
    "programs.education.title": "Warsha za Elimu ya Hali ya Hewa",
    "programs.education.description": "Vipindi vya maingiliano shuleni na vituo vya jamii, kufundisha sayansi ya hali ya hewa kwa Kiswahili na lugha za ndani. Tunatumia masimulizi, vielelezo, na mbinu shirikishi kufanya maarifa ya hali ya hewa yaendelee.",
    "programs.campaigns.title": "Kampeni za Uhamasishaji wa Jamii",
    "programs.campaigns.description": "Kampeni za ngazi ya chini zinazoleta taarifa za hali ya hewa moja kwa moja kwa jamii za vijijini na mijini kupitia redio, mikutano ya jamii, na vyombo vya ubunifu kwa lugha za ndani.",
    "programs.translation.title": "Programu ya Tafsiri ya Vijana",
    "programs.translation.description": "Kuwafunza vijana wa kujitolea kutafsiri hati za hali ya hewa, ripoti, na vifaa vya kielimu katika lugha zaidi ya 15 za Tanzania — kuunda maktaba ya maarifa ya hali ya hewa yanayopatikana.",
    "programs.planting.title": "Upandaji Miti na Urejeshaji",
    "programs.planting.description": "Hatua za mazingira za vitendo — kupanga matukio ya upandaji miti ya jamii yanayorejesha mifumo ya ikolojia huku yakielimisha washiriki kuhusu jukumu la misitu katika udhibiti wa hali ya hewa.",

    // Leadership Section
    "leadership.founderLabel": "Ujumbe kutoka kwa Mwanzilishi",
    "leadership.founderName": "Ester Kimario",
    "leadership.founderRole": "Mwanzilishi na Kiongozi wa Tawi",
    "leadership.founderMessage": "Nilianzisha Climate Cardinals Tanzania kwa sababu ninaamini kwamba lugha haipaswi kamwe kuwa kikwazo cha kuishi. Kila Mtanzania — awe anazungumza Kiswahili, Kisukuma, Kichagga, au yoyote ya lugha zetu nzuri za makabila — anastahili kuelewa mgogoro wa hali ya hewa na jinsi ya kulinda jamii yake. Pamoja, tunajenga harakati ambapo maarifa ya hali ya hewa ni ya kila mtu.",
    "leadership.reviewsLabel": "Sauti za Jamii",
    "leadership.reviewsTitle": "Watu Wanasema Nini",
    "leadership.writeReview": "Andika Maoni Yako Pia",
    "leadership.reviewModal.title": "Andika Maoni Yako",
    "leadership.reviewModal.name": "Jina Lako *",
    "leadership.reviewModal.position": "Nafasi (si lazima)",
    "leadership.reviewModal.rating": "Ukadiriaji *",
    "leadership.reviewModal.description": "Shiriki uzoefu wako... *",
    "leadership.reviewModal.submit": "Tuma Maoni",
    "leadership.reviewModal.thanks": "Asante!",
    "leadership.reviewModal.submitted": "Maoni yako yametumwa.",

    // Partner Section
    "partners.label": "Ushirikiano",
    "partners.title": "Washirika Wetu",
    "partners.subtitle": "Pamoja na washirika wetu, tunaimarisha hatua za hali ya hewa kote Tanzania.",
    "partners.officialPartner": "Mshirika Rasmi",
    "partners.chanyaName": "Chanya Change Initiators International",
    "partners.chanyaDescription": "Pamoja na Chanya Change Initiators International, tunakuza ufikiaji wetu katika jamii za Tanzania — kuchanganya nguvu kuendeleza uhamasishaji wa hali ya hewa na hatua za mazingira mahali zinapohitajika zaidi.",
    "partners.visitWebsite": "Tembelea Tovuti",
    "partners.interested": "Ungependa kushirikiana nasi?",
    "partners.becomePartner": "Kuwa Mshirika",

    // Join Section
    "join.title1": "Kuwa Sehemu ya ",
    "join.title2": "Mabadiliko.",
    "join.subtitle": "Jiunge na jamii yetu inayokua ya watetezi wa hali ya hewa wanaofanya athari halisi kote Tanzania.",
    "join.volunteer.title": "Jitolee",
    "join.volunteer.description": "Jiunge na timu yetu ya vijana watafsiri na waelimishaji wa hali ya hewa. Fanya tofauti halisi katika jamii yako.",
    "join.volunteer.apply": "Omba Sasa",
    "join.partner.title": "Shirikiana Nasi",
    "join.partner.description": "Mashirika na taasisi — hebu tuimarishe athari pamoja kote Tanzania.",
    "join.partner.contact": "Wasiliana Nasi",
    "join.modal.title": "Maombi ya Kujitolea",
    "join.modal.name": "Jina Kamili *",
    "join.modal.email": "Anwani ya Barua Pepe *",
    "join.modal.phone": "Nambari ya Simu (si lazima)",
    "join.modal.motivation": "Kwa nini unataka kujitolea? (si lazima)",
    "join.modal.submit": "Tuma Maombi",
    "join.modal.success": "Maombi Yametumwa!",
    "join.modal.successMsg": "Tutawasiliana nawe hivi karibuni.",

    // Impact Section
    "impact.stat.languages": "Lugha Zinazolengwa",
    "impact.stat.volunteers": "Vijana wa Kujitolea",
    "impact.stat.communities": "Jamii Zilizofikiwa",

    // Footer
    "footer.brand.description": "Kuvunja vikwazo vya lugha kuleta maarifa ya hali ya hewa kwa kila jamii ya Tanzania kwa Kiswahili na lugha za ndani.",
    "footer.quickLinks": "Viungo vya Haraka",
    "footer.quickLinks.home": "Nyumbani",
    "footer.quickLinks.about": "Kuhusu Sisi",
    "footer.quickLinks.programs": "Programu",
    "footer.quickLinks.join": "Jiunge Nasi",
    "footer.quickLinks.contact": "Wasiliana",
    "footer.quickLinks.faq": "Maswali",
    "footer.ourPrograms": "Programu Zetu",
    "footer.programs.education": "Elimu ya Hali ya Hewa",
    "footer.programs.campaigns": "Kampeni za Jamii",
    "footer.programs.translation": "Tafsiri ya Vijana",
    "footer.programs.planting": "Upandaji Miti",
    "footer.getInTouch": "Wasiliana Nasi",
    "footer.newsletter.title": "Pata Taarifa",
    "footer.newsletter.subtitle": "Jiandikishe kwa jarida letu la taarifa za hatua za hali ya hewa.",
    "footer.newsletter.placeholder": "Anwani yako ya barua pepe",
    "footer.newsletter.button": "Jiandikishe",
    "footer.chapter": "Tawi rasmi la Climate Cardinals",
    "footer.copyright": "© 2026 Climate Cardinals Tanzania · Ilianzishwa na Ester Kimario",

    // Login
    "login.welcome": "Karibu tena",
    "login.subtitle": "Ingia kuendelea na athari yako",
    "login.email": "Barua Pepe",
    "login.password": "Neno la Siri",
    "login.forgot": "Umesahau neno la siri?",
    "login.signIn": "Ingia",
    "login.backHome": "← Rudi nyumbani",
    "login.heroTitle1": "Kuwawezesha vijana",
    "login.heroTitle2": "kulinda sayari yetu",
    "login.heroDescription": "Jiunge na maelfu ya viongozi vijana wa hali ya hewa wanaofanya tofauti halisi katika jamii zao.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("EN");

  const t = (key: string): string => {
    return translations[lang][key] || translations["EN"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
