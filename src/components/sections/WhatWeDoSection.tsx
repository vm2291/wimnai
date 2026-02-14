import { Lightbulb, Users, BookOpen, Sparkles, GraduationCap, Handshake } from "lucide-react";

const coreGoals = [
  {
    icon: Lightbulb,
    title: "Showcasing Role Models",
    description: "Highlight diverse journeys and successful career paths of women mathematicians and scientists from academia, industry, and the arts.",
  },
  {
    icon: Users,
    title: "Building Community",
    description: 'Ensure women in these fields feel welcomed, supported, and inspired, not isolated as "tokens" or "solos."',
  },
  {
    icon: BookOpen,
    title: "Story + Scholarship",
    description: "We humanize the mathematician's path through personal narrative while celebrating rigorous ideas, so students can see both the person and the work.",
  },
  {
    icon: Sparkles,
    title: "Breaking Boundaries",
    description: 'Encourage interdisciplinary "entanglements" (e.g., mathematics and illustration) that broaden the definition of a scientist and open new ways to solve complex problems.',
  },
];

const evolvingFocus = [
  {
    icon: GraduationCap,
    title: "Bridging Academia, Education, and Industry",
    description: "Convene talks and panels including partner conversations that connect AI education and curriculum with evolving industry practice and societal needs.",
  },
  {
    icon: Handshake,
    title: "Catalyzing Connections",
    description: "Create high-access spaces for Q&A, dialogue, and networking that help participants build relationships that may develop into collaborations and mentorship over time.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="goals" className="relative z-10 py-24 px-6 section-navy bg-[#112449]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            What We <span className="text-blue-400">Do</span>
          </h2>
        </div>

        <h3 className="font-display text-2xl font-semibold text-white mb-8 text-center">Core Goals</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreGoals.map((goal) => (
            <article key={goal.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <goal.icon className="w-10 h-10 text-[#112449] mb-4" aria-hidden="true" />
              <h4 className="font-display text-xl font-semibold text-[#112449] mb-2">{goal.title}</h4>
              <p className="text-gray-600 leading-relaxed">{goal.description}</p>
            </article>
          ))}
        </div>

        <h3 className="font-display text-2xl font-semibold text-white mb-8 text-center">Evolving Focus</h3>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {evolvingFocus.map((item) => (
            <article key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <item.icon className="w-10 h-10 text-[#112449] mb-4" aria-hidden="true" />
              <h4 className="font-display text-xl font-semibold text-[#112449] mb-2">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
