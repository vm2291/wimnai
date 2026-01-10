import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Initiatives from "@/components/Initiatives";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Initiatives />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
