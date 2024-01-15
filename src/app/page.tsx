import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";

export default function Home() {
  return (
    <main className="bg-bg-element bg-no-repeat bg-right-top">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
