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
              WiMN+AI (Women in Math Nights plus AI) is a NYU Abu Dhabi initiative founded by Dr. Dania Zantout to make mathematics and artificial intelligence more visible, inclusive, and vibrant — on campus and beyond.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="mission" className="border border-gray-200 rounded-xl px-6 bg-gray-50">
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-glow">
                  Official Mission
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    The mission of WiMN+AI is to transform the landscape of STEM by making mathematics and artificial intelligence more visible, inclusive, and vibrant both on campus and beyond. Founded at NYU Abu Dhabi by Dr. Dania Zantout, this initiative specifically addresses the challenge of women in STEM frequently finding themselves as "tokens" or "solos" within their departments.
                  </p>
                  <p>To combat this isolation, the program is dedicated to several core goals:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Showcasing Role Models:</strong> Highlights the diverse journeys and successful career paths of women mathematicians and scientists from academia, industry, and the arts.</li>
                    <li><strong>Building Community:</strong> Serves as a platform to ensure women in these fields feel welcomed, supported, and inspired, rather than isolated.</li>
                    <li><strong>Breaking Boundaries:</strong> Encourages the exploration of interdisciplinary "entanglements," such as the intersection of mathematics and illustration, to solve complex problems and broaden the definition of a scientist.</li>
                  </ul>
                  <p>
                    Recognized with the Fund for Inclusion and Innovation Award, WiMN+AI welcomes participants of all genders to foster a community that celebrates the "spirit of diverse career paths" and pushes the boundaries of traditional research.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="series" className="border border-gray-200 rounded-xl px-6 bg-gray-50">
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-glow">
                  About the Series
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    WiMN+AI is a NYU Abu Dhabi initiative founded by Dr. Dania Zantout to highlight the work and journeys of women mathematicians and scientists. It showcases successful role models and diverse career paths in mathematics and AI, and welcomes participants of all genders.
                  </p>
                  <p>
                    Through its talks and community events, WiMN+AI aims to make mathematics and AI more visible, inclusive, and vibrant on campus and beyond. The literature shows that women in STEM often find themselves as 'tokens' or 'solos' in their departments. WiMN+AI acknowledges this challenge and serves as a program to ensure women in mathematics feel welcomed, supported, and inspired.
                  </p>
                  <p>
                    Now in its fourth season, the series features speakers from across academia, industry, and the arts, and has been recognized with the Fund for Inclusion and Innovation Award, with generous support from the Office of Global Access and Engagement (January 2023–December 2025). Starting January 2026, WiMN+AI receives support from the Center of Interdisciplinary Data Science and AI (CIDSAI).
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
