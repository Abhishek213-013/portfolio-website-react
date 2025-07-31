import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      <Footer />
      </main>
    </>
  );
}

export default App;
