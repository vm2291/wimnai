import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Users, School, Award, Calendar, Target, BookOpen, GraduationCap } from "lucide-react";

const TakamulCup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-sm font-medium mb-4 text-gold">
              Mathematics Competition
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Takãmul Cup
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              The First High School Math Competition in the UAE
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-navy mb-6 text-center">
              About Takãmul Cup
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
              The Takãmul Cup is an annual mathematics competition designed to inspire and
              challenge high school students across the UAE. It fosters mathematical excellence 
              while building community connections between schools and universities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-12">
              "Takãmul" (تكامل) means "integration" in Arabic — representing both a fundamental 
              concept in mathematics and our mission to bring together students, educators, 
              and institutions in celebration of mathematical achievement.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-elegant text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                  Annual Competition
                </h3>
                <p className="text-sm text-muted-foreground">
                  Held every year to celebrate mathematical achievement
                </p>
              </div>

              <div className="card-elegant text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                  High School Focus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Designed for talented high school students across the UAE
                </p>
              </div>

              <div className="card-elegant text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                  Recognition & Awards
                </h3>
                <p className="text-sm text-muted-foreground">
                  Winners receive recognition and prizes
                </p>
              </div>

              <div className="card-elegant text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <School className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                  UAE-Wide Participation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building connections across UAE schools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Structure */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-navy mb-8 text-center">
              Competition Structure
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    Qualifying Round
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Students from schools across the UAE compete in a preliminary round 
                  to qualify for the final competition. This round tests fundamental 
                  mathematical skills and problem-solving abilities.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    Final Round
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Top performers advance to the final round, featuring more challenging 
                  problems that test advanced mathematical thinking and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Trophy className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-semibold text-navy mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Takãmul Cup is founded by Dr. Dania Zantout with the mission to
              nurture young mathematical minds, provide a platform for students
              to showcase their problem-solving abilities, and build bridges
              between educational institutions across the UAE.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <BookOpen className="w-10 h-10 text-gold mx-auto mb-3" />
                <h4 className="font-serif font-semibold text-navy mb-2">Inspire</h4>
                <p className="text-sm text-muted-foreground">
                  Ignite passion for mathematics in young minds
                </p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 text-gold mx-auto mb-3" />
                <h4 className="font-serif font-semibold text-navy mb-2">Connect</h4>
                <p className="text-sm text-muted-foreground">
                  Build a community of math enthusiasts
                </p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 text-gold mx-auto mb-3" />
                <h4 className="font-serif font-semibold text-navy mb-2">Celebrate</h4>
                <p className="text-sm text-muted-foreground">
                  Recognize and reward mathematical excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Details Coming Soon */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gold/10 rounded-xl p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                More Information Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Details about upcoming competitions, registration, and past
                winners will be added soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakamulCup;