import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-subheading">Contact</p>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Interested in collaboration, speaking engagements, or learning more
            about my work? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <a
            href="mailto:dz41@nyu.edu"
            className="card-elegant text-center group hover:border-gold/50 block"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-navy mb-1">
              Email
            </h3>
            <p className="text-sm text-muted-foreground">dz41@nyu.edu</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
