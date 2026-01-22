import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Users, Calendar, Clock, MapPin, GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const TakamulCup = () => {
  const universities = ["Abu Dhabi University", "American University in Dubai", "Middlesex University Dubai", "Heriot-Watt University Dubai", "UAE University", "NYU Abu Dhabi", "Mohamed bin Zayed University of Artificial Intelligence"];
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gold text-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              National University Level Integration Bee
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Takāmul Cup
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              The UAE's premier integration competition for university students, where the 
              brightest mathematical minds compete in speed, accuracy, and strategic problem-solving
            </p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <Calendar className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Date</p>
                <p className="font-serif font-semibold text-navy">Sunday</p>
                <p className="font-serif font-semibold text-navy">Dec 7, 2025</p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Time</p>
                <p className="font-serif font-semibold text-navy">9:00 AM - 5:00 PM</p>
                <p className="text-sm text-muted-foreground">(GST)</p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Venue</p>
                <p className="font-serif font-semibold text-navy">NYU Abu Dhabi</p>
                <p className="text-sm text-muted-foreground">C2 West Forum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Battle of Mathematical Excellence
            </h2>
            <p className="text-primary-foreground/80 mb-12 max-w-xl mx-auto">
              The UAE's premier integration competition where the nation's brightest mathematical minds compete in speed, accuracy, and strategic problem-solving!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gold/10 rounded-xl p-6">
                <Users className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-4xl font-serif font-bold text-gold mb-1">35+</p>
                <p className="text-sm uppercase tracking-wide">Competitors</p>
              </div>
              <div className="bg-gold/10 rounded-xl p-6">
                <GraduationCap className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-4xl font-serif font-bold text-gold mb-1">7</p>
                <p className="text-sm uppercase tracking-wide">Universities</p>
              </div>
              <div className="bg-gold/10 rounded-xl p-6">
                <Trophy className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-4xl font-serif font-bold text-gold mb-1">5</p>
                <p className="text-sm uppercase tracking-wide">Stages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participating Universities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <GraduationCap className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-semibold text-navy mb-4">
                Participating Universities
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {universities.map(university => <div key={university} className="bg-muted/30 rounded-lg py-4 text-center font-medium text-navy border border-border px-[50px]">
                  {university}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Where It All Started */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gold text-center mb-6 italic">
              Where It All Started
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              The Takāmul Cup story began in the halls of NYU Abu Dhabi, where a vision to 
              celebrate mathematical excellence took its first steps.
            </p>
            
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-gold" />
                <div>
                  <p className="font-serif font-semibold text-navy text-lg">Fall 2024</p>
                  <p className="text-sm text-muted-foreground">NYU Abu Dhabi Campus</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                In collaboration with the NYU Abu Dhabi Math SIG, the first Integration Bee 
                brought together students passionate about mathematics to compete in a friendly 
                yet challenging environment. What started as a campus event would soon grow 
                into something much larger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-navy mb-8 text-center">
              The Vision Behind the Cup
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The motivation behind scaling the Takāmul Cup to the national level stems from 
                both a powerful local experience and a broader pedagogical concern. When I hosted 
                the Integration Bee locally at NYU Abu Dhabi, witnessing students engage deeply in 
                cognitive problem-solving for six hours straight—the genuine critical thinking, the 
                intellectual perseverance, the spirit of mathematical inquiry filling the room—was 
                truly enlightening.
              </p>
              <p>
                At the same time, we are observing in our classes what is being discussed globally 
                across academic environments. Students are increasingly losing interest in developing 
                the deep analytical and problem-solving skills that manual integration represents. In 
                an era where AI tools can generate solutions instantly, we are seeing a decline in 
                students' willingness to engage in the rigorous cognitive work that builds genuine 
                mathematical thinking. This makes events like the Integration Bee all the more valuable, 
                as they create rare moments where students choose to immerse themselves in authentic 
                intellectual challenge.
              </p>
              <p>
                The Takāmul Cup at the national level is designed to foster and celebrate this culture 
                across the UAE—to create an environment that honors and rewards the discipline and deep 
                thinking required for paper-based problem-solving. At a time when AI discussions dominate 
                educational discourse (especially in our local geography) and risk overshadowing 
                foundational mathematical competencies, establishing a tradition that celebrates this 
                kind of cognitive commitment is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Visit the Official Takāmul Cup Website
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              For registration, competition details, and more information
            </p>
            <Button asChild className="bg-gold text-navy hover:bg-gold/90 font-semibold">
              <a href="https://takāmulcup.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default TakamulCup;