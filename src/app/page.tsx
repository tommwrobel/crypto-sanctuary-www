import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { DiscordSection } from "../components/DiscordSection/DiscordSection";
import { RiskNoticeSection } from "../components/RiskNoticeSection/RiskNoticeSection";
import { FooterSection } from "../components/FooterSection/FooterSection";

export default function Home() {
  return (
    <main className="bg-bg-element bg-no-repeat bg-right-top bg-fixed">
      <HeroSection />
      <AboutSection />
      <DiscordSection />
      <RiskNoticeSection />
      <FooterSection />
    </main>
  );
}
