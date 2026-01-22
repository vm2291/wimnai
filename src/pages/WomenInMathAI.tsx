import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin } from "lucide-react";

import wimnEventImage from "@/assets/wimn-event.jpg";
import taiDanaeBradley from "@/assets/speakers/tai-danae-bradley.jpg";
import biancaViray from "@/assets/speakers/bianca-viray.jpg";
import gittaKutyniok from "@/assets/speakers/gitta-kutyniok.jpg";
import coniRojasMolinaImg from "@/assets/speakers/coni-rojas-molina.jpg";

const WomenInMathAI = () => {
  const speakers = [
    // Season 4 - Fall 2025
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
    // Season 3 - Spring 2025
    {
      season: "Season 3",
      semester: "Spring 2025",
      events: [
        {
          name: "Prof. Dr. Gitta Kutyniok",
          title:
            "Bavarian AI Chair for Mathematical Foundations of Artificial Intelligence, LMU Munich",
          talkTitle:
            "Reliable and Sustainable AI: From Mathematical Foundations to Next Generation AI Computing",
          date: "April 11, 2025",
          location: "Zoom",
          abstract:
            "The new wave of artificial intelligence is impacting industry, public life, and the sciences in an unprecedented manner. In this lecture, Prof. Kutyniok provided a gentle introduction into the mathematical perspective on AI. She showcased highlights of mathematical foundations of reliable AI such as explainability, and touched upon the topic of sustainable AI in the sense of energy efficiency.",
          image: gittaKutyniok,
          highlights: [
            "SIAM Fellow",
            "IEEE Fellow",
            "European Academy of Sciences Member",
            "ICM 2022 Invited Lecturer",
          ],
        },
      ],
    },
    // Season 2 - Spring 2024
    {
      season: "Season 2",
      semester: "Spring 2024",
      events: [
        {
          name: "Dr. Bianca Viray",
          title:
            "Craig McKibben and Sarah Merner Professor of Mathematics, University of Washington",
          talkTitle: "The interplay of geometry and arithmetic",
          date: "May 2, 2024",
          location: "A3-001, NYU Abu Dhabi",
          abstract:
            "Dr. Viray unraveled the mysteries of Pythagorean triples and whole number solutions. She explored the fascinating equation a² + b² = c² and its infinite possibilities, and discussed unsolved puzzles like aⁿ + bⁿ = cⁿ and the rational box problem, uncovering state-of-the-art discoveries and new frontiers in mathematical research.",
          image: biancaViray,
        },
        {
          name: "Dr. Tai-Danae Bradley",
          title:
            "Research Mathematician at SandboxAQ & Visiting Research Professor at The Master's University",
          talkTitle: "When Information Theory Meets Algebra and Topology",
          date: "February 29, 2024",
          location: "A3-001, NYU Abu Dhabi",
          abstract:
            "Dr. Bradley gave a non-technical overview of the intersect between information theory, algebra and topology, while touching upon the applications to physics. The talk also covered her career trajectory and professional success.",
          image: taiDanaeBradley,
        },
      ],
    },
    // Season 1 - Spring 2023
    {
      season: "Season 1",
      semester: "Spring 2023",
      events: [
        {
          name: "Dr. Hala Nelson",
          title: "Associate Professor, Department of Mathematics and Statistics, James Madison University",
          talkTitle: "A math journey that led to AI",
          date: "June 1, 2023",
          location: "Zoom",
          abstract:
            "Dr. Nelson described her nontraditional and nonlinear career path in math. She surveyed the math that necessarily underlies many seemingly disparate machine learning and AI models, and described her experience working with Harrisonburg City's emergency and infrastructure services. The talk unified machine learning models and natural language models under one mathematical structure, while stressing the importance of the quality of data and the downfalls of bad data.",
          image: null,
          highlights: [
            "Author, Essential Math For AI (O'Reilly Media)",
          ],
        },
        {
          name: "Dr. Anita T. Layton",
          title:
            "Canada 150 Research Chair in Mathematical Biology and Medicine, University of Waterloo",
          talkTitle:
            "His and Her Mathematical Models of Physiological Systems",
          date: "April 27, 2023",
          location: "A3-002, NYU Abu Dhabi",
          abstract:
            "Imagine someone having a heart attack. Do you visualize the dramatic Hollywood portrayal of a heart attack, in which a man collapses, grabbing his chest in agony? Even though heart disease is the leading killer of women worldwide, the misconception that heart disease is a men's disease has persisted. Dr. Layton discussed how gender biases and false impressions throughout our healthcare system lead to dangerous misconceptions. Her research program addresses this gender equity, by identifying and disseminating insights into sex differences in health and disease, using computational modeling tools.",
          image: null,
          highlights: [
            "Associate Dean, Research and International, Mathematics",
            "Professor of Applied Mathematics, Computer Science, Pharmacy, and Biology",
            "Chair, Research Equity, Diversity, and Inclusion Council",
          ],
        },
        {
          name: "Dr. Gretchen Matthews",
          title:
            "Professor of Mathematics & Director of Commonwealth Cyber Initiative, Virginia Tech",
          talkTitle: "Coding for distributed storage using algebraic geometry",
          date: "March 7, 2023",
          location: "A3-001, NYU Abu Dhabi",
          abstract:
            "Given the astonishing rates at which data is generated, how can it be stored efficiently? How is access to the stored information guaranteed? How can it be distributed across a network while also protecting it from distortion, degradation, and loss? Dr. Matthews explored how answers to these questions may be found using algebraic geometry. She shared how studying rich underlying structures provides a window into the powerful local properties that aid in designing codes for local recovery from erasures.",
          image: null,
          highlights: [
            "Fellow of the Association for Women in Mathematics",
            "Affiliated Faculty, National Security Institute",
            "Launch Event - Celebration of International Women's Day",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-sm font-medium mb-4 text-gold">
              WiMN+AI Series
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Women in Math + AI Nights
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              A Celebration of Diversity and Achievement
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-navy mb-6">
                About WiMN+AI
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
            </div>

            <div className="relative">
              <img
                src={wimnEventImage}
                alt="WiMN+AI Event at NYU Abu Dhabi"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-6 py-3 rounded-lg font-serif font-semibold">
                Since 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-navy mb-4">
              Past Speakers
            </h2>
            <p className="text-muted-foreground">
              Distinguished women mathematicians and scientists who shared their
              research and journeys
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {speakers.map((season) => (
              <div key={season.season}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-navy text-primary-foreground px-4 py-2 rounded-full font-serif font-semibold">
                    {season.season}
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-muted-foreground font-medium">
                    {season.semester}
                  </span>
                </div>

                <div className="grid gap-8">
                  {season.events.map((event, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-xl border border-border p-6 md:p-8 hover:border-gold/30 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {event.image && (
                          <div className="md:w-40 shrink-0">
                            <img
                              src={event.image}
                              alt={event.name}
                              className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover mx-auto"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-semibold text-navy mb-1">
                            {event.name}
                          </h3>
                          <p className="text-gold text-sm font-medium mb-3">
                            {event.title}
                          </p>

                          <h4 className="font-medium text-navy mb-2">
                            "{event.talkTitle}"
                          </h4>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </span>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {event.abstract}
                          </p>

                          {event.highlights && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {event.highlights.map((highlight, i) => (
                                <span
                                  key={i}
                                  className="bg-gold/10 text-navy text-xs px-3 py-1 rounded-full"
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
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomenInMathAI;