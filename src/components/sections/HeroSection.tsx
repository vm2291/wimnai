import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videos = ["/videos/hero-bg-1.mp4", "/videos/hero-bg-2.mp4"];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
    const handleCanPlay = () => setIsVideoReady(true);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", handleCanPlay);
    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [currentVideo]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center section-navy">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 gradient-hero transition-opacity duration-500 ${isVideoReady ? "opacity-0" : "opacity-100"}`} />
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
          autoPlay muted playsInline preload="auto"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-16">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 animate-slide-up text-foreground">
          Women in Math
          <br />
          <span style={{ color: '#7ca0ea' }}>+ AI Nights</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-4 animate-slide-up delay-200">
          A Celebration of Diversity and Achievement
        </p>
        <p className="text-foreground/75 max-w-2xl mx-auto mb-10 animate-slide-up delay-300">
          Spotlighting women in mathematics and AI through talks, panels, and interdisciplinary "entanglements" while welcoming participants of all genders.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-400">
          <button onClick={() => scrollTo("series")} className="px-8 py-3 rounded-lg bg-white text-[#112449] font-semibold hover:bg-white/90 transition-colors">
            Explore the Series
          </button>
          <button onClick={() => scrollTo("speak-panel")} className="px-8 py-3 rounded-lg bg-transparent border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all text-white font-medium">
            Speak / Panel
          </button>
          <button onClick={() => scrollTo("partners")} className="px-8 py-3 rounded-lg bg-transparent border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all text-white font-medium">
            Partnerships
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
