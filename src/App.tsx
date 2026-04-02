import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader"; // make sure this file exists

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#070b14] overflow-x-hidden">
      {/* 1. Global Background Effects */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40 z-0" />

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative z-10">
          <Navbar />
          <main className="max-w-7xl mx-auto px-6 pt-20">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
