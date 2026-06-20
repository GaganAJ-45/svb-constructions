import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import ProcessTimeline from "./components/ProcessTimeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <div className="font-inter min-h-screen bg-white overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <About />
        <WhyChooseUs />
        <Team />
        <Portfolio />
        <ProcessTimeline />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <FloatingButtons />
    </div>
  );
}

export default App;
