import { Calendar, MapPin } from "lucide-react";
import megaphoneGirl from "@/assets/megaphone-girl.png";
import taiDanaeBradley from "@/assets/speakers/tai-danae-bradley.jpg";
import biancaViray from "@/assets/speakers/bianca-viray.jpg";
import gittaKutyniok from "@/assets/speakers/gitta-kutyniok.jpg";
import coniRojasMolinaImg from "@/assets/speakers/coni-rojas-molina.jpg";
import halaNelsonImg from "@/assets/speakers/30.png";
import anitaLaytonImg from "@/assets/speakers/20.png";
import gretchenMatthewsImg from "@/assets/speakers/1.png";

const allSpeakers = [
  {
    name: "Dr. Constanza (Coni) Rojas-Molina",
    title: "Associate Professor, CY Cergy Paris Université",
    talkTitle: "The entanglement of mathematics and illustration",
    date: "November 27, 2025",
    season: "Season 4",
    location: "Zoom",
    abstract: "Separate the mathematician from the illustrator and the illustrator from the mathematician? Impossible when the two states are entangled! Coni is a mathematician and an illustrator, but how can you be two things at the same time? In this 'conference with drawings', Coni talked and drew about the creative process behind these activities, their differences and their similarities, and how one can learn from one to inspire the other. She discussed her research in the field of mathematical physics and the study of disordered quantum systems, that aims to develop rigorous mathematical theories to explain physical phenomena coming from quantum physics.",
    image: coniRojasMolinaImg,
  },
  {
    name: "Prof. Dr. Gitta Kutyniok",
    title: "Bavarian AI Chair for Mathematical Foundations of AI, LMU Munich • SIAM Fellow • IEEE Fellow",
    talkTitle: "Reliable and Sustainable AI: From Mathematical Foundations to Next Generation AI Computing",
    date: "April 11, 2025",
    season: "Season 3",
    location: "Zoom",
    abstract: "The new wave of artificial intelligence is impacting industry, public life, and the sciences in an unprecedented manner. In this lecture, Prof. Kutyniok provided a gentle introduction into the mathematical perspective on AI. She showcased highlights of mathematical foundations of reliable AI such as explainability, and touched upon the topic of sustainable AI in the sense of energy efficiency.",
    image: gittaKutyniok,
  },
  {
    name: "Dr. Bianca Viray",
    title: "Craig McKibben and Sarah Merner Professor of Mathematics, University of Washington",
    talkTitle: "The interplay of geometry and arithmetic",
    date: "May 2, 2024",
    season: "Season 2",
    location: "NYU Abu Dhabi",
    abstract: "Dr. Viray unraveled the mysteries of Pythagorean triples and whole number solutions. She explored the fascinating equation a² + b² = c² and its infinite possibilities, and discussed unsolved puzzles like aⁿ + bⁿ = cⁿ and the rational box problem, uncovering state-of-the-art discoveries and new frontiers in mathematical research.",
    image: biancaViray,
  },
  {
    name: "Dr. Tai-Danae Bradley",
    title: "Research Mathematician at SandboxAQ & Visiting Research Professor at The Master's University",
    talkTitle: "When Information Theory Meets Algebra and Topology",
    date: "February 29, 2024",
    season: "Season 2",
    location: "NYU Abu Dhabi",
    abstract: "Dr. Bradley gave a non-technical overview of the intersect between information theory, algebra and topology, while touching upon the applications to physics. The talk also covered her career trajectory and professional success.",
    image: taiDanaeBradley,
  },
  {
    name: "Dr. Hala Nelson",
    title: "Associate Professor, James Madison University • Author, Essential Math For AI (O'Reilly Media)",
    talkTitle: "A math journey that led to AI",
    date: "June 1, 2023",
    season: "Season 1",
    location: "Zoom",
    abstract: "Dr. Nelson described her nontraditional and nonlinear career path in math. She surveyed the math that necessarily underlies many seemingly disparate machine learning and AI models, and described her experience working with Harrisonburg City's emergency and infrastructure services. The talk unified machine learning models and natural language models under one mathematical structure, while stressing the importance of the quality of data and the downfalls of bad data.",
    image: halaNelsonImg,
  },
  {
    name: "Dr. Anita T. Layton",
    title: "Professor of Applied Mathematics, Computer Science, Pharmacy, and Biology",
    talkTitle: "His and Her Mathematical Models of Physiological Systems",
    date: "April 27, 2023",
    season: "Season 1",
    location: "NYU Abu Dhabi",
    abstract: "Dr. Layton discussed how gender biases and false impressions throughout our healthcare system lead to dangerous misconceptions. Her research program addresses this gender equity, by identifying and disseminating insights into sex differences in health and disease, using computational modeling tools.",
    image: anitaLaytonImg,
  },
  {
    name: "Dr. Gretchen Matthews",
    title: "Professor of Mathematics & Director of Commonwealth Cyber Initiative, Virginia Tech",
    talkTitle: "Coding for distributed storage using algebraic geometry",
    date: "March 7, 2023",
    season: "Season 1",
    location: "NYU Abu Dhabi",
    abstract: "Dr. Matthews explored how answers to questions about efficient data storage may be found using algebraic geometry. She shared how studying rich underlying structures provides a window into the powerful local properties that aid in designing codes for local recovery from erasures. This was the launch event for WiMN+AI.",
    image: gretchenMatthewsImg,
  },
];

const SeriesSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="series" className="relative z-10 py-24 px-1.5 md:px-6 bg-background">
      <div className="container mx-auto px-2 md:px-0">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            The WiMN+AI <span className="gradient-text">Series</span>
          </h2>
        </div>

        {/* 4.1 Upcoming */}
        <div id="upcoming" className="mb-20">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">Upcoming</h3>
          <p className="text-foreground/70 max-w-lg mx-auto mb-8 text-center">
            Stay tuned for announcements about our next speakers and events.
          </p>
          <div className="flex justify-center mb-10">
            <img src={megaphoneGirl} alt="Stay tuned for announcements" className="w-80 md:w-[28rem] h-auto object-contain drop-shadow-lg" />
          </div>

          {/* Connection Nudge */}
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-8 text-center">
            <p className="text-foreground/85 mb-2">
              Want to connect after an event? Opt in to receive the speaker's shared contact/links (when available) and community updates.
            </p>
            <p className="text-foreground/70 mb-6">
              Networking-friendly format: Many events include time for Q&A and informal conversation so participants can connect directly with speakers and each other.
            </p>
            <button onClick={() => scrollTo("subscribe")} className="px-6 py-3 rounded-lg bg-[#112449] text-white font-medium hover:bg-[#1a3563] transition-colors">
              Opt in for follow-ups
            </button>
          </div>
        </div>

        {/* 4.2 Archive */}
        <div id="archive">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4 text-center">Archive</h3>
          <p className="text-foreground/70 max-w-lg mx-auto text-center mb-12">
            Distinguished women mathematicians and scientists who shared their research and journeys
          </p>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#112449]/20 transform md:-translate-x-1/2" />

            {allSpeakers.map((speaker, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-[#112449] rounded-full transform -translate-x-1/2 ring-4 ring-white shadow-md z-10" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <article
                    className="bg-[#112449] rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 shadow-lg animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                      <span className="bg-white/10 text-white font-semibold px-3 py-1 rounded-full border border-white/20">
                        {speaker.season}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {speaker.image && (
                        <div className="shrink-0">
                          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-xl overflow-hidden ring-2 ring-white/20 mx-auto sm:mx-0">
                            <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="font-display text-[22px] font-semibold text-white mb-1">{speaker.name}</h4>
                        <p className="text-white font-medium mb-2">{speaker.title}</p>
                      </div>
                    </div>

                    <h5 className="font-medium text-white mt-4 mb-3 italic">"{speaker.talkTitle}"</h5>

                    <div className="flex flex-wrap gap-3 text-white mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
                        {speaker.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                        {speaker.location}
                      </span>
                    </div>

                    <p className="text-white leading-relaxed">{speaker.abstract}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesSection;
