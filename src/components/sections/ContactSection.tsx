import { useState } from "react";
import { Mail } from "lucide-react";
import paperPlane from "@/assets/paper-plane.png";

const ContactSection = () => {
  const [subscribeForm, setSubscribeForm] = useState({
    email: "", name: "", affiliation: "", updates: false, speakerLinks: false,
  });
  const [subscribeSubmitted, setSubscribeSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-muted border border-glow/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-glow/50 transition-colors";
  const labelClass = "block text-foreground/90 font-medium mb-1.5";

  return (
    <section id="contact" className="relative z-10 py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-foreground/70 max-w-lg mx-auto mb-8">
            For speaking, panels, partnerships, or general inquiries, please reach out.
          </p>
          <a
            href="mailto:dz41@nyu.edu"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-glow/15 border border-glow/30 hover:bg-glow/25 transition-colors group"
          >
            <Mail className="w-5 h-5 text-glow" aria-hidden="true" />
            <span className="text-foreground font-medium text-lg group-hover:text-glow transition-colors">
              dz41@nyu.edu
            </span>
          </a>
          <div className="flex justify-center mt-10">
            <img src={paperPlane} alt="Contact illustration" className="w-64 md:w-96 h-auto object-contain drop-shadow-lg" />
          </div>
        </div>

        {/* Subscribe Form */}
        <div id="subscribe" className="max-w-xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4 text-center">Stay Connected</h3>
          <p className="text-foreground/70 text-center mb-8">
            Opt in for WiMN+AI updates and post-event speaker links/resources (when shared).
          </p>

          {subscribeSubmitted ? (
            <div className="gradient-card rounded-2xl border border-glow/30 p-8 text-center">
              <p className="text-foreground text-lg font-medium">You're subscribed! We'll keep you in the loop.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="gradient-card rounded-2xl border border-glow/20 p-6 md:p-8 space-y-5">
              <div>
                <label className={labelClass}>Email *</label>
                <input required type="email" className={inputClass} value={subscribeForm.email} onChange={(e) => setSubscribeForm({ ...subscribeForm, email: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Name (optional)</label>
                <input className={inputClass} value={subscribeForm.name} onChange={(e) => setSubscribeForm({ ...subscribeForm, name: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Affiliation (optional)</label>
                <input className={inputClass} value={subscribeForm.affiliation} onChange={(e) => setSubscribeForm({ ...subscribeForm, affiliation: e.target.value })} />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-foreground/80 cursor-pointer">
                  <input type="checkbox" checked={subscribeForm.updates} onChange={(e) => setSubscribeForm({ ...subscribeForm, updates: e.target.checked })} className="w-5 h-5 rounded accent-glow" />
                  Send me WiMN+AI updates
                </label>
                <label className="flex items-center gap-3 text-foreground/80 cursor-pointer">
                  <input type="checkbox" checked={subscribeForm.speakerLinks} onChange={(e) => setSubscribeForm({ ...subscribeForm, speakerLinks: e.target.checked })} className="w-5 h-5 rounded accent-glow" />
                  Send me speaker links/resources (when available)
                </label>
              </div>
              <button type="submit" className="w-full px-6 py-3 rounded-xl bg-glow/20 border border-glow/40 hover:bg-glow/30 transition-colors text-foreground font-medium">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
