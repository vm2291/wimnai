import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import wimnEventImage from "@/assets/wimn-event.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About <span className="gradient-text">WiMN+AI</span>
            </h2>
            <p className="text-foreground/85 leading-relaxed mb-8">
              WiMN+AI (Women in Math + AI Nights) is a series founded and led by Dr. Dania Zantout at NYU Abu Dhabi to make mathematics and artificial intelligence more visible, accessible, and vibrant on campus and beyond.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="mission" className="border border-gray-200 rounded-xl px-6 bg-gray-50">
                 <AccordionTrigger className="font-display font-semibold text-foreground hover:text-glow">
                   Official Mission
                 </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    The mission of WiMN+AI is to transform the landscape of STEM by making mathematics and artificial intelligence more visible, accessible, and vibrant. Founded and led by Dr. Dania Zantout at NYU Abu Dhabi, the series responds to a well-documented challenge: women in STEM often find themselves as "tokens" or "solos" within their departments.
                  </p>
                  <p>To counter this isolation, WiMN+AI is dedicated to three core goals:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Showcasing Role Models:</strong> Spotlighting diverse journeys and successful career paths of women mathematicians and scientists across academia, industry, and the arts.</li>
                    <li><strong>Building Community:</strong> Creating spaces where women in these fields feel welcomed, supported, and inspired rather than isolated.</li>
                    <li><strong>Breaking Boundaries:</strong> Exploring interdisciplinary "entanglements," such as mathematics and illustration, to broaden the definition of a scientist and open new ways to solve complex problems.</li>
                  </ul>
                  <p>
                    WiMN+AI welcomes participants of all genders to foster a community that celebrates diverse career paths and pushes the boundaries of traditional research culture. WiMN+AI is designed to be connection-friendly, creating opportunities for dialogue and relationships that may grow into collaboration and mentorship over time.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="series" className="border border-gray-200 rounded-xl px-6 bg-gray-50">
                 <AccordionTrigger className="font-display font-semibold text-foreground hover:text-glow">
                   About the Series
                 </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    WiMN+AI (Women in Math + AI Nights) features talks, panels, and community events that highlight the work and journeys of women mathematicians and scientists. Now in its fourth season, the series brings together speakers from academia, industry, and the arts, and invites participants of all genders.
                  </p>
                  <p>
                    Through research spotlights and personal narrative, WiMN+AI makes the mathematics behind modern scientific and AI-driven work more visible, while building a campus culture where women in STEM feel supported rather than alone. As the series evolves, WiMN+AI is expanding to further bridge academia, education, and industry through panels and partner conversations, including AI curriculum and alignment with real-world practice.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
              <span className="text-glow font-display font-semibold">Since 2023</span>
            </div>
          </div>

          <div className="relative animate-scale-in delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={wimnEventImage} alt="WiMN+AI community event gathering" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
