import { useState } from "react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import paperPlane from "@/assets/paper-plane.png";
import { submitToGoogleSheet } from "@/lib/submitForm";

const ContactSection = () => {
  const [subscribeForm, setSubscribeForm] = useState({
    email: "", name: "", affiliation: "", updates: false, speakerLinks: false,
  });
  const [subscribeSubmitted, setSubscribeSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitToGoogleSheet("Subscribers", [
      subscribeForm.email,
      subscribeForm.name,
      subscribeForm.affiliation,
      subscribeForm.updates,
      subscribeForm.speakerLinks,
    ]);
    setSubmitting(false);
    setSubscribeSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all";
  const labelClass = "block text-white/90 font-medium mb-1.5 text-sm";

  return (
    <section id="contact" className="relative z-10 py-24 px-6 section-navy bg-[#112449]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-white max-w-lg mx-auto">
            For speaking, panels, partnerships, or general inquiries, please reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact + Illustration */}
          <div className="text-center md:text-left">
            <a
              href="mailto:dz41@nyu.edu"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all group"
            >
              <Mail className="w-5 h-5 text-blue-400" aria-hidden="true" />
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                dz41@nyu.edu
              </span>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
            </a>
            <div className="flex justify-center md:justify-start mt-10">
              <img src={paperPlane} alt="Contact illustration" className="w-56 md:w-72 h-auto object-contain opacity-80" />
            </div>
          </div>

          {/* Right: Subscribe Form */}
          <div id="subscribe">
            <h3 className="font-display text-2xl font-semibold text-white mb-2">Stay Connected</h3>
            <p className="text-white mb-6 text-sm">
              Opt in for WiMN+AI updates and post-event speaker links/resources (when shared).
            </p>

            {subscribeSubmitted ? (
              <div className="rounded-2xl bg-white/10 border border-white/20 p-8 text-center">
                <p className="text-white text-lg font-medium">You're subscribed! We'll keep you in the loop.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input required type="email" className={inputClass} value={subscribeForm.email} onChange={(e) => setSubscribeForm({ ...subscribeForm, email: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Name (optional)</label>
                    <input className={inputClass} value={subscribeForm.name} onChange={(e) => setSubscribeForm({ ...subscribeForm, name: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>Affiliation (optional)</label>
                    <input className={inputClass} value={subscribeForm.affiliation} onChange={(e) => setSubscribeForm({ ...subscribeForm, affiliation: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 text-white/70 cursor-pointer text-sm">
                    <input type="checkbox" checked={subscribeForm.updates} onChange={(e) => setSubscribeForm({ ...subscribeForm, updates: e.target.checked })} className="w-4 h-4 rounded accent-blue-500" />
                    Send me WiMN+AI updates
                  </label>
                  <label className="flex items-center gap-2.5 text-white/70 cursor-pointer text-sm">
                    <input type="checkbox" checked={subscribeForm.speakerLinks} onChange={(e) => setSubscribeForm({ ...subscribeForm, speakerLinks: e.target.checked })} className="w-4 h-4 rounded accent-blue-500" />
                    Send me speaker links/resources (when available)
                  </label>
                </div>
                <button type="submit" disabled={submitting} className="w-full px-6 py-3 rounded-lg bg-white text-[#112449] font-semibold hover:bg-white/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {submitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
