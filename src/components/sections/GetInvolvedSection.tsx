import { useState } from "react";
import { Mic, Handshake, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitToGoogleSheet } from "@/lib/submitForm";

const GetInvolvedSection = () => {
  const [activeTab, setActiveTab] = useState<"speak" | "partner">("speak");

  const [speakerForm, setSpeakerForm] = useState({
    fullName: "", email: "", affiliation: "", interestType: "Apply to Speak",
    preferredFormat: "Talk", proposedTitle: "", shortDescription: "", links: "", agreeContact: false,
  });
  const [partnerForm, setPartnerForm] = useState({
    orgName: "", contactName: "", email: "", partnershipInterest: "Panel", message: "",
  });
  const [speakerSubmitted, setSpeakerSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSpeakerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitToGoogleSheet("Speakers", [
      speakerForm.fullName,
      speakerForm.email,
      speakerForm.affiliation,
      speakerForm.interestType,
      speakerForm.preferredFormat,
      speakerForm.proposedTitle,
      speakerForm.shortDescription,
      speakerForm.links,
    ]);
    setSubmitting(false);
    setSpeakerSubmitted(true);
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitToGoogleSheet("Partners", [
      partnerForm.orgName,
      partnerForm.contactName,
      partnerForm.email,
      partnerForm.partnershipInterest,
      partnerForm.message,
    ]);
    setSubmitting(false);
    setPartnerSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all";
  const labelClass = "block text-foreground/90 font-medium mb-1.5 text-sm";

  const speakerInterests = [
    "The mathematics behind AI, and the people shaping it",
    "Career stories that humanize the path (including nonlinear paths)",
    "Interdisciplinary \"entanglements\" that expand what STEM can look like",
    "Panels on AI curriculum and industry alignment, skills, and pathways",
  ];

  const partnerWays = [
    "Join an industry–academia panel on AI curriculum alignment",
    "Provide speakers, case studies, or applied problem briefs",
    "Support networking and pathway-building initiatives",
    "Sponsor a themed event or season",
  ];

  return (
    <section id="get-involved" className="relative z-10 py-24 px-6 section-navy bg-[#112449]">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-white">
            Get Involved
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Whether you want to share your work or build partnerships, we'd love to hear from you.
          </p>
        </div>

        {/* Two intro cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <button
            id="speak-panel"
            onClick={() => setActiveTab("speak")}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 group ${
              activeTab === "speak"
                ? "bg-white/15 border-white/30"
                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${activeTab === "speak" ? "bg-white/20" : "bg-white/10"} transition-colors`}>
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  Be Featured
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === "speak" ? "rotate-90" : ""}`} />
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Are you a woman working in mathematics, AI, or at their intersection? Share your work through a talk, fireside chat, or panel.
                </p>
              </div>
            </div>
          </button>

          <button
            id="partners"
            onClick={() => setActiveTab("partner")}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 group ${
              activeTab === "partner"
                ? "bg-white/15 border-white/30"
                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${activeTab === "partner" ? "bg-white/20" : "bg-white/10"} transition-colors`}>
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  Partner With Us
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === "partner" ? "rotate-90" : ""}`} />
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Collaborate with WiMN+AI to strengthen the ecosystem around mathematics and AI.
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Tab content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === "speak" && (
            <div className="animate-fade-in">
              {/* Interest bullets */}
              <div className="mb-8 p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/80 text-sm font-medium mb-3">We're especially interested in:</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {speakerInterests.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speaker form */}
              {speakerSubmitted ? (
                <div className="rounded-2xl bg-white/10 border border-white/20 p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">Thank you! Your submission has been received. We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSpeakerSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input required className={inputClass} value={speakerForm.fullName} onChange={(e) => setSpeakerForm({ ...speakerForm, fullName: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input required type="email" className={inputClass} value={speakerForm.email} onChange={(e) => setSpeakerForm({ ...speakerForm, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>Affiliation / Role *</label>
                      <input required className={inputClass} value={speakerForm.affiliation} onChange={(e) => setSpeakerForm({ ...speakerForm, affiliation: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Interest Type *</label>
                      <select required className={inputClass} value={speakerForm.interestType} onChange={(e) => setSpeakerForm({ ...speakerForm, interestType: e.target.value })}>
                        <option>Apply to Speak</option>
                        <option>Nominate a Speaker</option>
                        <option>Suggest a Panel Topic</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Format *</label>
                      <select required className={inputClass} value={speakerForm.preferredFormat} onChange={(e) => setSpeakerForm({ ...speakerForm, preferredFormat: e.target.value })}>
                        <option>Talk</option>
                        <option>Panel</option>
                        <option>Fireside Chat</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>Proposed Title / Topic *</label>
                      <input required className={inputClass} value={speakerForm.proposedTitle} onChange={(e) => setSpeakerForm({ ...speakerForm, proposedTitle: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Links (optional)</label>
                      <input className={inputClass} value={speakerForm.links} onChange={(e) => setSpeakerForm({ ...speakerForm, links: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className={labelClass}>Short Description *</label>
                    <textarea required className={`${inputClass} min-h-[80px]`} value={speakerForm.shortDescription} onChange={(e) => setSpeakerForm({ ...speakerForm, shortDescription: e.target.value })} />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <label className="flex items-center gap-2.5 text-white/70 cursor-pointer text-sm">
                      <input type="checkbox" required checked={speakerForm.agreeContact} onChange={(e) => setSpeakerForm({ ...speakerForm, agreeContact: e.target.checked })} className="w-4 h-4 rounded accent-blue-500" />
                      I agree to be contacted regarding WiMN+AI programming.
                    </label>
                    <button type="submit" disabled={submitting} className="px-8 py-3 rounded-lg bg-white text-[#112449] font-semibold hover:bg-white/90 transition-colors shrink-0 disabled:opacity-60 flex items-center gap-2">
                      {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {activeTab === "partner" && (
            <div className="animate-fade-in">
              {/* Partner ways */}
              <div className="mb-8 p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/80 text-sm font-medium mb-3">Ways to partner:</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {partnerWays.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partner form */}
              {partnerSubmitted ? (
                <div className="rounded-2xl bg-white/10 border border-white/20 p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">Thank you for your interest in partnering! We'll reach out soon.</p>
                </div>
              ) : (
                <form id="partner-form" onSubmit={handlePartnerSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>Organization Name *</label>
                      <input required className={inputClass} value={partnerForm.orgName} onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Contact Name *</label>
                      <input required className={inputClass} value={partnerForm.contactName} onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input required type="email" className={inputClass} value={partnerForm.email} onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Partnership Interest *</label>
                      <select required className={inputClass} value={partnerForm.partnershipInterest} onChange={(e) => setPartnerForm({ ...partnerForm, partnershipInterest: e.target.value })}>
                        <option>Panel</option>
                        <option>Sponsor</option>
                        <option>Speaker</option>
                        <option>Case Study</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className={labelClass}>Message *</label>
                    <textarea required className={`${inputClass} min-h-[80px]`} value={partnerForm.message} onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })} />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" disabled={submitting} className="px-8 py-3 rounded-lg bg-white text-[#112449] font-semibold hover:bg-white/90 transition-colors disabled:opacity-60 flex items-center gap-2">
                      {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                      {submitting ? "Submitting..." : "Submit Partnership Inquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
