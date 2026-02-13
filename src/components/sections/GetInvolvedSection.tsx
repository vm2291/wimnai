import { useState } from "react";

const GetInvolvedSection = () => {
  const [speakerForm, setSpeakerForm] = useState({
    fullName: "", email: "", affiliation: "", interestType: "Apply to Speak",
    preferredFormat: "Talk", proposedTitle: "", shortDescription: "", links: "", agreeContact: false,
  });
  const [partnerForm, setPartnerForm] = useState({
    orgName: "", contactName: "", email: "", partnershipInterest: "Panel", message: "",
  });
  const [speakerSubmitted, setSpeakerSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleSpeakerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSpeakerSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-muted border border-glow/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-glow/50 transition-colors";
  const labelClass = "block text-foreground/90 font-medium mb-1.5";

  return (
    <section id="get-involved" className="relative z-10 py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get <span className="gradient-text">Involved</span>
          </h2>
        </div>

        {/* 5.1 Speak/Panel */}
        <div id="speak-panel" className="max-w-3xl mx-auto mb-20">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Be Featured at WiMN+AI</h3>
          <p className="text-foreground/80 mb-4">
            Are you a woman working in mathematics, AI, or at their intersection — in academia, industry, education, or the arts? We'd love to feature your work and journey through a talk, fireside chat, or panel.
          </p>
          <p className="text-foreground/80 mb-2">We're especially interested in:</p>
          <ul className="list-disc pl-6 text-foreground/80 mb-8 space-y-1">
            <li>the mathematics behind AI, and the people shaping it</li>
            <li>career stories that humanize the path (including nonlinear paths)</li>
            <li>interdisciplinary "entanglements" that expand what STEM can look like</li>
            <li>panels on AI curriculum and industry alignment, skills, and pathways</li>
          </ul>

          {speakerSubmitted ? (
            <div className="gradient-card rounded-2xl border border-glow/30 p-8 text-center">
              <p className="text-foreground text-lg font-medium">Thank you! Your submission has been received. We'll be in touch.</p>
            </div>
          ) : (
            <form onSubmit={handleSpeakerSubmit} className="gradient-card rounded-2xl border border-glow/20 p-6 md:p-8 space-y-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input required className={inputClass} value={speakerForm.fullName} onChange={(e) => setSpeakerForm({ ...speakerForm, fullName: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input required type="email" className={inputClass} value={speakerForm.email} onChange={(e) => setSpeakerForm({ ...speakerForm, email: e.target.value })} />
              </div>
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
              <div>
                <label className={labelClass}>Proposed Title / Topic *</label>
                <input required className={inputClass} value={speakerForm.proposedTitle} onChange={(e) => setSpeakerForm({ ...speakerForm, proposedTitle: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Short Description *</label>
                <textarea required className={`${inputClass} min-h-[100px]`} value={speakerForm.shortDescription} onChange={(e) => setSpeakerForm({ ...speakerForm, shortDescription: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Links (optional)</label>
                <input className={inputClass} value={speakerForm.links} onChange={(e) => setSpeakerForm({ ...speakerForm, links: e.target.value })} />
              </div>
              <label className="flex items-center gap-3 text-foreground/80 cursor-pointer">
                <input type="checkbox" required checked={speakerForm.agreeContact} onChange={(e) => setSpeakerForm({ ...speakerForm, agreeContact: e.target.checked })} className="w-5 h-5 rounded accent-glow" />
                I agree to be contacted regarding WiMN+AI programming.
              </label>
              <button type="submit" className="w-full px-6 py-3 rounded-xl bg-glow/20 border border-glow/40 hover:bg-glow/30 transition-colors text-foreground font-medium">
                Submit
              </button>
            </form>
          )}
        </div>

        {/* 5.2 Partnerships */}
        <div id="partners" className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Partner With WiMN+AI</h3>
          <p className="text-foreground/80 mb-4">
            WiMN+AI collaborates with academic, industry, and community partners to strengthen the ecosystem around mathematics and AI — from visibility and community-building to curriculum alignment and real-world practice.
          </p>
          <p className="text-foreground/80 mb-2">Ways to partner:</p>
          <ul className="list-disc pl-6 text-foreground/80 mb-8 space-y-1">
            <li>Join an industry–academia panel on AI curriculum alignment</li>
            <li>Provide speakers, case studies, or applied problem briefs</li>
            <li>Support networking and pathway-building initiatives (that can grow into mentorship over time)</li>
            <li>Sponsor a themed event or season</li>
          </ul>

          {partnerSubmitted ? (
            <div className="gradient-card rounded-2xl border border-glow/30 p-8 text-center">
              <p className="text-foreground text-lg font-medium">Thank you for your interest in partnering! We'll reach out soon.</p>
            </div>
          ) : (
            <form id="partner-form" onSubmit={handlePartnerSubmit} className="gradient-card rounded-2xl border border-glow/20 p-6 md:p-8 space-y-5">
              <div>
                <label className={labelClass}>Organization Name *</label>
                <input required className={inputClass} value={partnerForm.orgName} onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Contact Name *</label>
                <input required className={inputClass} value={partnerForm.contactName} onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })} />
              </div>
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
              <div>
                <label className={labelClass}>Message *</label>
                <textarea required className={`${inputClass} min-h-[100px]`} value={partnerForm.message} onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })} />
              </div>
              <button type="submit" className="w-full px-6 py-3 rounded-xl bg-glow/20 border border-glow/40 hover:bg-glow/30 transition-colors text-foreground font-medium">
                Submit Partnership Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
