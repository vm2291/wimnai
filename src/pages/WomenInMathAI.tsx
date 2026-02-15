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

      <footer className="relative z-10 py-10 px-6 bg-[#0d1d3a] border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={wimnLogo} alt="WiMN+AI" className="w-12 h-12 footer-logo" />
              <span className="font-display text-base font-semibold text-white">WiMN+AI</span>
            </div>
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Women in Math + AI Nights. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Founded and led by <span className="text-blue-400 font-medium">Dr. Dania Zantout</span>, Mathematics Program, Science Division, NYU Abu Dhabi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WomenInMathAI;
