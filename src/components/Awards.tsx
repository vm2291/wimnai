import { Award, Star } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      year: "2023",
      title: "Excellence in Teaching Award",
      organization: "NYU Abu Dhabi",
      description: "Recognized for outstanding contributions to mathematics education and innovative pedagogy.",
    },
    {
      year: "2022",
      title: "STEM Education Leadership Award",
      organization: "UAE Ministry of Education",
      description: "Honored for efforts in advancing STEM education and inspiring future mathematicians.",
    },
    {
      year: "2021",
      title: "Women in STEM Achievement Award",
      organization: "Emirates Foundation",
      description: "Celebrated for promoting gender diversity and inclusion in mathematics and science fields.",
    },
    {
      year: "2020",
      title: "Innovation in Education Award",
      organization: "Academic Excellence Council",
      description: "Acknowledged for pioneering the integration of AI tools in mathematics instruction.",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-subheading">Recognition</p>
          <h2 className="section-heading">Awards & Honors</h2>
          <p className="text-muted-foreground text-lg">
            Celebrating achievements in education, research, and community building.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {awards.map((award, index) => (
              <div key={index} className="relative pl-20 pb-10 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-5 w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                  <Star className="w-3 h-3 text-primary-foreground" />
                </div>

                {/* Year badge */}
                <div className="absolute left-0 -translate-x-full pr-4 hidden md:block">
                  <span className="text-sm font-semibold text-gold">{award.year}</span>
                </div>

                <div className="card-elegant">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gold md:hidden">
                        {award.year}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-navy mb-1">
                        {award.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {award.organization}
                      </p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
