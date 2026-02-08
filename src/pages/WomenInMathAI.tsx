import { Calendar, MapPin, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import Navbar from "@/components/Navbar";
import wimnEventImage from "@/assets/wimn-event.jpg";
import taiDanaeBradley from "@/assets/speakers/tai-danae-bradley.jpg";
import biancaViray from "@/assets/speakers/bianca-viray.jpg";
import gittaKutyniok from "@/assets/speakers/gitta-kutyniok.jpg";
import coniRojasMolinaImg from "@/assets/speakers/coni-rojas-molina.jpg";
import halaNelsonImg from "@/assets/speakers/30.png";
import anitaLaytonImg from "@/assets/speakers/20.png";
import gretchenMatthewsImg from "@/assets/speakers/1.png";
import wimnLogo from "@/assets/wimn-logo.png";
import paperPlane from "@/assets/paper-plane.png";
import megaphoneGirl from "@/assets/megaphone-girl.png";

const WomenInMathAI = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = ["/videos/hero-bg-1.mp4", "/videos/hero-bg-2.mp4"];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

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

  const allSpeakers = [
    {
      name: "Dr. Constanza (Coni) Rojas-Molina",
      title: "Associate Professor, CY Cergy Paris Université",
      talkTitle: "The entanglement of mathematics and illustration",
      date: "November 27, 2025",
      season: "Season 4",
      location: "Zoom",
      abstract:
        "Separate the mathematician from the illustrator and the illustrator from the mathematician? Impossible when the two states are entangled! Coni is a mathematician and an illustrator, but how can you be two things at the same time? In this 'conference with drawings', Coni talked and drew about the creative process behind these activities, their differences and their similarities, and how one can learn from one to inspire the other. She discussed her research in the field of mathematical physics and the study of disordered quantum systems, that aims to develop rigorous mathematical theories to explain physical phenomena coming from quantum physics.",
      image: coniRojasMolinaImg,
    },
    {
      name: "Prof. Dr. Gitta Kutyniok",
      title: "Bavarian AI Chair for Mathematical Foundations of AI, LMU Munich • SIAM Fellow • IEEE Fellow",
      talkTitle: "Reliable and Sustainable AI: From Mathematical Foundations to Next Generation AI Computing",
      date: "April 11, 2025",
      season: "Season 3",
      location: "Zoom",
      abstract:
        "The new wave of artificial intelligence is impacting industry, public life, and the sciences in an unprecedented manner. In this lecture, Prof. Kutyniok provided a gentle introduction into the mathematical perspective on AI. She showcased highlights of mathematical foundations of reliable AI such as explainability, and touched upon the topic of sustainable AI in the sense of energy efficiency.",
      image: gittaKutyniok,
    },
    {
      name: "Dr. Bianca Viray",
      title: "Craig McKibben and Sarah Merner Professor of Mathematics, University of Washington",
      talkTitle: "The interplay of geometry and arithmetic",
      date: "May 2, 2024",
      season: "Season 2",
      location: "NYU Abu Dhabi",
      abstract:
        "Dr. Viray unraveled the mysteries of Pythagorean triples and whole number solutions. She explored the fascinating equation a² + b² = c² and its infinite possibilities, and discussed unsolved puzzles like aⁿ + bⁿ = cⁿ and the rational box problem, uncovering state-of-the-art discoveries and new frontiers in mathematical research.",
      image: biancaViray,
    },
    {
      name: "Dr. Tai-Danae Bradley",
      title: "Research Mathematician at SandboxAQ & Visiting Research Professor at The Master's University",
      talkTitle: "When Information Theory Meets Algebra and Topology",
      date: "February 29, 2024",
      season: "Season 2",
      location: "NYU Abu Dhabi",
      abstract:
        "Dr. Bradley gave a non-technical overview of the intersect between information theory, algebra and topology, while touching upon the applications to physics. The talk also covered her career trajectory and professional success.",
      image: taiDanaeBradley,
    },
    {
      name: "Dr. Hala Nelson",
      title: "Associate Professor, James Madison University • Author, Essential Math For AI (O'Reilly Media)",
      talkTitle: "A math journey that led to AI",
      date: "June 1, 2023",
      season: "Season 1",
      location: "Zoom",
      abstract:
        "Dr. Nelson described her nontraditional and nonlinear career path in math. She surveyed the math that necessarily underlies many seemingly disparate machine learning and AI models, and described her experience working with Harrisonburg City's emergency and infrastructure services. The talk unified machine learning models and natural language models under one mathematical structure, while stressing the importance of the quality of data and the downfalls of bad data.",
      image: halaNelsonImg,
    },
    {
      name: "Dr. Anita T. Layton",
      title: "Professor of Applied Mathematics, Computer Science, Pharmacy, and Biology",
      talkTitle: "His and Her Mathematical Models of Physiological Systems",
      date: "April 27, 2023",
      season: "Season 1",
      location: "NYU Abu Dhabi",
      abstract:
        "Dr. Layton discussed how gender biases and false impressions throughout our healthcare system lead to dangerous misconceptions. Her research program addresses this gender equity, by identifying and disseminating insights into sex differences in health and disease, using computational modeling tools.",
      image: anitaLaytonImg,
    },
    {
      name: "Dr. Gretchen Matthews",
      title: "Professor of Mathematics & Director of Commonwealth Cyber Initiative, Virginia Tech",
      talkTitle: "Coding for distributed storage using algebraic geometry",
      date: "March 7, 2023",
      season: "Season 1",
      location: "NYU Abu Dhabi",
      abstract:
        "Dr. Matthews explored how answers to questions about efficient data storage may be found using algebraic geometry. She shared how studying rich underlying structures provides a window into the powerful local properties that aid in designing codes for local recovery from erasures. This was the launch event for WiMN+AI.",
      image: gretchenMatthewsImg,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar logoClassName="w-12 h-12 nav-logo" />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Fallback gradient while video loads */}
          <div
            className={`absolute inset-0 gradient-hero transition-opacity duration-500 ${
              isVideoReady ? "opacity-0" : "opacity-100"
            }`}
          />
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isVideoReady ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            playsInline
            preload="auto"
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center pt-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-foreground">
            Women in Math
            <br />
            <span className="gradient-text glow-text">+ AI Nights</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
            A Celebration of Diversity and Achievement
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6 gradient-hero">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                About <span className="gradient-text">WiMN+AI</span>
              </h2>
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  WiMN+AI is a NYU Abu Dhabi initiative founded and led by Dr. Dania Zantout.
                  It highlights the work and journeys of women mathematicians and scientists,
                  showcases successful role models and diverse career paths in
                  mathematics and AI, and welcomes participants of all genders.
                </p>
                <p>
                  Through its talks and community events, WiMN aims to make
                  mathematics and AI more visible, inclusive, and vibrant on
                  campus and beyond.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-glow/15 border border-glow/30">
                <span className="text-glow font-display font-semibold">Since 2023</span>
              </div>
            </div>

            <div className="relative animate-scale-in delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={wimnEventImage}
                  alt="WiMN+AI Event"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section - All in Timeline */}
      <section id="speakers" className="relative z-10 py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Past <span className="gradient-text">Speakers</span>
            </h2>
            <p className="text-foreground/70 max-w-lg mx-auto text-lg">
              Distinguished women mathematicians and scientists who shared their research and journeys
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-glow via-purple to-glow/30 transform md:-translate-x-1/2" />

            {allSpeakers.map((speaker, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-glow rounded-full transform -translate-x-1/2 ring-4 ring-background shadow-lg shadow-glow/50" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div
                    className="gradient-card rounded-2xl border border-glow/20 p-6 md:p-8 hover:border-glow/40 transition-all duration-300 glow-border animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Season badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-glow/20 text-glow text-lg font-semibold px-3 py-1 rounded-full">
                        {speaker.season}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {speaker.image && (
                        <div className="shrink-0">
                          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-xl overflow-hidden ring-2 ring-glow/30 mx-auto sm:mx-0">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-display text-[22px] font-semibold text-foreground mb-1">
                          {speaker.name}
                        </h3>
                        <p className="text-glow text-lg font-medium mb-2">
                          {speaker.title}
                        </p>
                      </div>
                    </div>

                    <h4 className="font-medium text-foreground/90 mt-4 mb-3 italic text-lg">
                      "{speaker.talkTitle}"
                    </h4>

                    <div className="flex flex-wrap gap-3 text-lg text-foreground/70 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-5 h-5 text-glow" />
                        {speaker.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-5 h-5 text-glow" />
                        {speaker.location}
                      </span>
                    </div>

                    <p className="text-foreground/70 text-lg leading-relaxed">
                      {speaker.abstract}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="relative z-10 py-24 px-6 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-foreground/70 max-w-lg mx-auto mb-8 text-lg">
            Stay tuned for announcements about our next speakers and events.
          </p>
          <div className="flex justify-center">
            <img
              src={megaphoneGirl}
              alt="Stay tuned for announcements"
              className="w-80 md:w-[28rem] h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-foreground/70 max-w-lg mx-auto mb-8 text-lg">
            Have questions or want to get involved? Reach out to us.
          </p>
          <a
            href="mailto:dz41@nyu.edu"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-glow/15 border border-glow/30 hover:bg-glow/25 transition-colors group"
          >
            <Mail className="w-5 h-5 text-glow" />
            <span className="text-foreground font-medium text-lg group-hover:text-glow transition-colors">
              dz41@nyu.edu
            </span>
          </a>
          <div className="flex justify-center mt-10">
            <img
              src={paperPlane}
              alt="Contact illustration"
              className="w-64 md:w-96 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
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
