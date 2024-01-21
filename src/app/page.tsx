import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { DiscordSection } from "../components/DiscordSection/DiscordSection";
import { CategoriesSection } from "../components/CategoriesSection/CategoriesSection";
import { RiskNoticeSection } from "../components/RiskNoticeSection/RiskNoticeSection";
import { FooterSection } from "../components/FooterSection/FooterSection";
import { InformationSection } from "../components/InformationSection/InformationSection";

export default function Home() {
  return (
    <main className="bg-bg-element bg-no-repeat bg-right-top bg-fixed snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <HeroSection />
      <AboutSection />
      <DiscordSection />
      <CategoriesSection />
      <InformationSection />
      <RiskNoticeSection />
      <FooterSection />
    </main>
  );
}
