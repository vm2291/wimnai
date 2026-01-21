import drDaniaPortrait from "@/assets/dr-dania-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="section-subheading opacity-0 animate-fade-in-up">
              Mathematics Professor
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6 opacity-0 animate-fade-in-up animation-delay-100">
              Dr. Dania Zantout
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
              Associate Professor of Practice at NYU Abu Dhabi, passionate about
              mathematics education, AI in education, and empowering the next
              generation of mathematicians.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-navy text-primary-foreground font-medium rounded-lg hover:bg-navy-light transition-colors"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gold text-navy font-medium rounded-lg hover:bg-gold hover:text-primary-foreground transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative opacity-0 animate-fade-in animation-delay-200">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-navy/10 rounded-2xl blur-2xl" />
              <img
                src={drDaniaPortrait}
                alt="Dr. Dania Zantout"
                className="relative w-72 h-auto md:w-80 lg:w-96 rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
