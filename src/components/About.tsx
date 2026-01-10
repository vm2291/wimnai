import { GraduationCap, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Educator",
      description: "Dedicated to making mathematics accessible and engaging for all students",
    },
    {
      icon: Lightbulb,
      title: "Innovator",
      description: "Exploring the intersection of artificial intelligence and education",
    },
    {
      icon: Heart,
      title: "Advocate",
      description: "Championing diversity and inclusion in STEM fields",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-subheading">About</p>
          <h2 className="section-heading">A Passion for Mathematics & Education</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dr. Dania Zantout is an Associate Professor of Practice in the
            Mathematics Department at NYU Abu Dhabi. With a deep commitment to
            educational excellence, she combines rigorous mathematical instruction
            with innovative teaching methodologies, including the integration of
            AI tools to enhance student learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="card-elegant text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
