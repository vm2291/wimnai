import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import SeriesSection from "@/components/sections/SeriesSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import SupportSection from "@/components/sections/SupportSection";
import ContactSection from "@/components/sections/ContactSection";
import wimnLogo from "@/assets/wimn-logo.png";

const WomenInMathAI = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <SeriesSection />
        <GetInvolvedSection />
        <SupportSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-12 px-6 border-t border-glow/20 gradient-hero">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={wimnLogo} alt="WiMN+AI" className="w-24 h-24 footer-logo" />
              <span className="font-display text-lg font-semibold text-foreground">WiMN+AI</span>
            </div>
            <p className="text-lg text-foreground/60">
              © {new Date().getFullYear()} Women in Math + AI Nights. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-lg text-foreground/60">
              <span>Organized by</span>
              <span className="text-glow font-medium">Dr. Dania Zantout</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WomenInMathAI;
