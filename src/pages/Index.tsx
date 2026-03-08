import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FocusSection from "@/components/FocusSection";
import ProgramsSection from "@/components/ProgramsSection";
import LeadershipSection from "@/components/LeadershipSection";
import PartnerSection from "@/components/PartnerSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FocusSection />
      <ProgramsSection />
      <LeadershipSection />
      <PartnerSection />
      <ReviewSection />
      <JoinSection />
      <Footer />
    </main>
  );
};

export default Index;
