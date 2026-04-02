import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const navLinks = [
  { name: '01. About', id: 'about' },
  { name: '02. Skills', id: 'skills' },
  { name: '03. Projects', id: 'projects' },
  { name: '04. Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ScrollSpy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Logic
  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      // Calculate position minus navbar height (approx 80px)
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b14]/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        
        {/* Logo area - clicks back to top */}
        <div 
          onClick={() => scrollTo('home')}
          className="text-cyan-400 font-mono font-bold text-xl tracking-tighter hover:text-white transition-colors cursor-pointer drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
        >
          {"<Arlind Arifaj/>"}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`transition-all duration-300 relative ${
                activeSection === link.id 
                  ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] font-bold" 
                  : "text-slate-400 hover:text-cyan-200"
              }`}
            >
              {link.name}
              {/* Active Indicator Underline */}
              {activeSection === link.id && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
              )}
            </button>
          ))}
        </div>

        {/* Socials & Menu Toggle */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/YourUsername" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hidden sm:block">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/YourUsername" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hidden sm:block">
            <Linkedin size={20} />
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyan-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0a0f1d] border-b border-white/5 p-6 flex flex-col gap-6 shadow-xl font-mono text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left ${
                activeSection === link.id ? "text-cyan-400 font-bold" : "text-slate-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}