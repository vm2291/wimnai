import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useState } from "react";

import wimnEventImage from "@/assets/wimn-event.jpg";
import taiDanaeBradley from "@/assets/speakers/tai-danae-bradley.jpg";
import biancaViray from "@/assets/speakers/bianca-viray.jpg";
import gittaKutyniok from "@/assets/speakers/gitta-kutyniok.jpg";
import coniRojasMolinaImg from "@/assets/speakers/coni-rojas-molina.jpg";

const WomenInMathAI = () => {
  const [activeSeason, setActiveSeason] = useState("Season 4");

  const speakers = [
    {
      season: "Season 4",
      semester: "Fall 2025",
      events: [
        {
          name: "Dr. Constanza (Coni) Rojas-Molina",
          title: "Associate Professor, CY Cergy Paris Université",
          talkTitle: "The entanglement of mathematics and illustration",
          date: "November 27, 2025",
          location: "Zoom",
          abstract:
            "Separate the mathematician from the illustrator and the illustrator from the mathematician? Impossible when the two states are entangled! Coni is a mathematician and an illustrator, but how can you be two things at the same time? In this 'conference with drawings', Coni talked and drew about the creative process behind these activities, their differences and their similarities, and how one can learn from one to inspire the other. She discussed her research in the field of mathematical physics and the study of disordered quantum systems, that aims to develop rigorous mathematical theories to explain physical phenomena coming from quantum physics.",
          image: coniRojasMolinaImg,
        },
      ],
    },
    {
      season: "Season 3",
      semester: "Spring 2025",
      events: [
        {
          name: "Prof. Dr. Gitta Kutyniok",
          title: "Bavarian AI Chair for Mathematical Foundations of AI, LMU Munich",
          talkTitle: "Reliable and Sustainable AI: From Mathematical Foundations to Next Generation AI Computing",
          date: "April 11, 2025",
          location: "Zoom",
          abstract:
            "The new wave of artificial intelligence is impacting industry, public life, and the sciences in an unprecedented manner. In this lecture, Prof. Kutyniok provided a gentle introduction into the mathematical perspective on AI. She showcased highlights of mathematical foundations of reliable AI such as explainability, and touched upon the topic of sustainable AI in the sense of energy efficiency.",
          image: gittaKutyniok,
          highlights: ["SIAM Fellow", "IEEE Fellow", "European Academy of Sciences Member"],
        },
      ],
    },
    {
      season: "Season 2",
      semester: "Spring 2024",
      events: [
        {
          name: "Dr. Bianca Viray",
          title: "Craig McKibben and Sarah Merner Professor of Mathematics, University of Washington",
          talkTitle: "The interplay of geometry and arithmetic",
          date: "May 2, 2024",
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
          location: "NYU Abu Dhabi",
          abstract:
            "Dr. Bradley gave a non-technical overview of the intersect between information theory, algebra and topology, while touching upon the applications to physics. The talk also covered her career trajectory and professional success.",
          image: taiDanaeBradley,
        },
      ],
    },
    {
      season: "Season 1",
      semester: "Spring 2023",
      events: [
        {
          name: "Dr. Hala Nelson",
          title: "Associate Professor, James Madison University",
          talkTitle: "A math journey that led to AI",
          date: "June 1, 2023",
          location: "Zoom",
          abstract:
            "Dr. Nelson described her nontraditional and nonlinear career path in math. She surveyed the math that necessarily underlies many seemingly disparate machine learning and AI models, and described her experience working with Harrisonburg City's emergency and infrastructure services. The talk unified machine learning models and natural language models under one mathematical structure, while stressing the importance of the quality of data and the downfalls of bad data.",
          image: null,
          highlights: ["Author, Essential Math For AI (O'Reilly Media)"],
        },
        {
          name: "Dr. Anita T. Layton",
          title: "Canada 150 Research Chair in Mathematical Biology and Medicine, University of Waterloo",
          talkTitle: "His and Her Mathematical Models of Physiological Systems",
          date: "April 27, 2023",
          location: "NYU Abu Dhabi",
          abstract:
            "Dr. Layton discussed how gender biases and false impressions throughout our healthcare system lead to dangerous misconceptions. Her research program addresses this gender equity, by identifying and disseminating insights into sex differences in health and disease, using computational modeling tools.",
          image: null,
          highlights: ["Professor of Applied Mathematics, Computer Science, Pharmacy, and Biology"],
        },
        {
          name: "Dr. Gretchen Matthews",
          title: "Professor of Mathematics & Director of Commonwealth Cyber Initiative, Virginia Tech",
          talkTitle: "Coding for distributed storage using algebraic geometry",
          date: "March 7, 2023",
          location: "NYU Abu Dhabi",
          abstract:
            "Dr. Matthews explored how answers to questions about efficient data storage may be found using algebraic geometry. She shared how studying rich underlying structures provides a window into the powerful local properties that aid in designing codes for local recovery from erasures.",
          image: null,
          highlights: ["Fellow of the Association for Women in Mathematics", "Launch Event"],
        },
      ],
    },
  ];

  const seasons = speakers.map((s) => s.season);
  const currentSeasonData = speakers.find((s) => s.season === activeSeason);

  return (
    <div className="min-h-screen gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-glow/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-mid/20 rounded-full blur-3xl animate-pulse-glow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="font-display text-xl font-semibold text-glow">
            WiMN+AI
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-glow transition-colors">
              About
            </a>
            <a href="#speakers" className="text-sm text-muted-foreground hover:text-glow transition-colors">
              Speakers
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glow/20 bg-glow/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-glow rounded-full animate-pulse" />
            <span className="text-sm text-glow font-medium">NYU Abu Dhabi Initiative</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Women in Math</span>
            <br />
            <span className="gradient-text glow-text">+ AI Nights</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
            A Celebration of Diversity and Achievement
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
            <a
              href="#speakers"
              className="px-6 py-3 bg-glow text-primary-foreground font-medium rounded-lg hover:bg-glow/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-glow/25"
            >
              View Past Speakers
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-glow/30 text-glow font-medium rounded-lg hover:bg-glow/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">About</span> WiMN+AI
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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

              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-glow/10 border border-glow/20">
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-glow/20 rounded-full blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Past Speakers</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Distinguished women mathematicians and scientists who shared their research and journeys
            </p>
          </div>

          {/* Season Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {seasons.map((season) => (
              <button
                key={season}
                onClick={() => setActiveSeason(season)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  activeSeason === season
                    ? "bg-glow text-primary-foreground shadow-lg shadow-glow/25"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {season}
              </button>
            ))}
          </div>

          {/* Season Info */}
          {currentSeasonData && (
            <div className="mb-8 text-center">
              <span className="text-glow font-medium">{currentSeasonData.semester}</span>
            </div>
          )}

          {/* Speakers Grid */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {currentSeasonData?.events.map((event, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl border border-glow/10 p-6 md:p-8 hover:border-glow/30 transition-all duration-300 animate-scale-in glow-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {event.image && (
                    <div className="shrink-0">
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden ring-2 ring-glow/20 mx-auto md:mx-0">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {event.name}
                    </h3>
                    <p className="text-glow text-sm font-medium mb-3">
                      {event.title}
                    </p>

                    <h4 className="font-medium text-foreground/90 mb-3 italic">
                      "{event.talkTitle}"
                    </h4>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-glow" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-glow" />
                        {event.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.abstract}
                    </p>

                    {event.highlights && (
                      <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                        {event.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-glow/10 text-glow text-xs px-3 py-1.5 rounded-full border border-glow/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-glow/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-lg font-semibold text-glow">
              WiMN+AI
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Women in Math + AI Nights. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
