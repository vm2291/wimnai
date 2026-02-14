import { Award, Building2 } from "lucide-react";

const SupportSection = () => {
  return (
    <section id="support" className="relative z-10 py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#112449]">
            Support
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
            <Award className="w-8 h-8 text-glow mb-4" />
            <h3 className="font-display text-lg font-semibold text-[#112449] mb-2">Fund for Inclusion &amp; Innovation Award</h3>
            <p className="text-gray-600 leading-relaxed">
              WiMN+AI has been recognized with the Fund for Inclusion and Innovation Award, with generous support from the Office of Global Access and Engagement (January 2023–December 2025).
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
            <Building2 className="w-8 h-8 text-glow mb-4" />
            <h3 className="font-display text-lg font-semibold text-[#112449] mb-2">CIDSAI Partnership</h3>
            <p className="text-gray-600 leading-relaxed">
              Starting January 2026, WiMN+AI receives support from the Center of Interdisciplinary Data Science and AI (CIDSAI).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
