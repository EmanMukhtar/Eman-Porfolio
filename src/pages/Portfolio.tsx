import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Graphics from "@/components/Graphics";
import Contact from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Graphics />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground cyber-text">
           Eman Mukhtar @ 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;