import { Users2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Initiatives = () => {
  const initiatives = [
    {
      icon: Users2,
      title: "Women in Math + AI",
      role: "Founder & Organizer",
      description:
        "WiMN+AI is a NYU Abu Dhabi initiative highlighting the work and journeys of women mathematicians and scientists. Now in its fourth season, it features speakers from academia, industry, and the arts.",
      highlights: [
        "4 Seasons",
        "Distinguished Speakers",
        "Fund for Inclusion Award",
        "Open to All Genders",
      ],
      link: "/women-in-math-ai",
    },
    {
      icon: Trophy,
      title: "Takãmul Cup",
      role: "Founder",
      description:
        "An annual mathematics competition designed to inspire and challenge students across the UAE. The Takãmul Cup fosters mathematical excellence while building community connections between schools and universities.",
      highlights: [
        "Annual competition",
        "Multi-level participation",
        "Scholarship opportunities",
        "Regional recognition",
      ],
      link: "/takamul-cup",
    },
  ];

  return (
    <section id="initiatives" className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-medium mb-2 text-gold">
            Initiatives
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Building Community & Excellence
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Dedicated to creating opportunities and platforms that nurture
            mathematical talent and foster inclusive communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {initiatives.map((item) => (
            <Link
              to={item.link}
              key={item.title}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10 hover:border-gold/30 transition-colors block group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-lg bg-gold/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-1 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-gold text-sm font-medium">{item.role}</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-primary-foreground/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-gold font-medium text-sm group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
