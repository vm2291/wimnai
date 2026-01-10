import { Brain, BookOpen, Users, TrendingUp } from "lucide-react";

const Research = () => {
  const interests = [
    {
      icon: Brain,
      title: "AI in Education",
      description:
        "Investigating how artificial intelligence can transform mathematics pedagogy and personalize learning experiences for diverse student populations.",
    },
    {
      icon: BookOpen,
      title: "Mathematics Pedagogy",
      description:
        "Developing innovative teaching methods that make complex mathematical concepts accessible and engaging for undergraduate students.",
    },
    {
      icon: Users,
      title: "Inclusive STEM Education",
      description:
        "Researching strategies to create welcoming and supportive environments that encourage underrepresented groups in mathematics.",
    },
    {
      icon: TrendingUp,
      title: "Educational Technology",
      description:
        "Exploring the integration of cutting-edge technology tools to enhance mathematical understanding and problem-solving skills.",
    },
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-subheading">Research</p>
          <h2 className="section-heading">Areas of Interest</h2>
          <p className="text-muted-foreground text-lg">
            Bridging the gap between traditional mathematics instruction and
            modern technological innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, index) => (
            <div
              key={item.title}
              className="card-elegant flex gap-5 group hover:border-gold/50"
            >
              <div className="w-14 h-14 shrink-0 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <item.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
