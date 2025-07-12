import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import MetricsSection from "@/components/MetricsSection";
import TradingFeatures from "@/components/TradingFeatures";
import CreatorShowcase from "@/components/CreatorShowcase";
import GetStartedSection from "@/components/GetStartedSection";
import AiPresenceSection from "@/components/AiPresenceSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      <HeroSection />
      <DashboardSection />
      <MetricsSection />
      <TradingFeatures />
      <CreatorShowcase />
      <GetStartedSection />
      <AiPresenceSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
