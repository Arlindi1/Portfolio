import { motion } from 'framer-motion';
import { content } from '../data/content';
import { MapPin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      {/* Container constrained to max-w-6xl for better centering */}
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto px-6">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-500/30 bg-cyan-500/10 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">
              System Online
            </p>
          </div>
          
          {/* Solid White Heading - No Gradient */}
          <h1 className="text-4xl md:text-5xl font-black font-mono text-white mb-4 tracking-tighter uppercase">
            Frontend Developer
          </h1>
          
          {/* Simplified Subtitle Styling */}
          <h2 className="text-lg md:text-xl font-mono text-cyan-400 mb-8 border-l-2 border-cyan-400 pl-4">
            {"> Building Intuitive & Dynamic Interfaces"}
          </h2>

          <div className="flex flex-wrap gap-6 mb-8 font-mono text-[12px] border-l-2 border-cyan-500/50 pl-4 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
            <div>
              <span className="text-cyan-500 block text-[10px] mb-1 uppercase tracking-widest text-opacity-60">Location</span>
              <span className="text-white flex items-center gap-2"><MapPin size={12}/> PRISHTINA, KS</span>
            </div>
            <div>
              <span className="text-purple-500 block text-[10px] mb-1 uppercase tracking-widest text-opacity-60">Secure Uplink</span>
              <a href="mailto:arlind1arifaj@gmail.com" className="text-white flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail size={12}/> arlind1arifaj@gmail.com
              </a>
            </div>
          </div>

          <p className="text-slate-400 text-md max-w-lg mb-8 leading-relaxed border-t border-white/5 pt-4">
            {content.hero.subtitle}
          </p>
          
          <div className="flex gap-4">
            <a href="#projects" className="group px-6 py-3 font-mono border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-sm flex items-center gap-3 uppercase tracking-widest text-xs font-bold">
              Initialize Project <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Changed to justify-center to keep the image closer to center
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Animated Ring Background - Kept as per your original form */}
            <div className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            
            {/* Main Photo Container - Kept as per your original form */}
            <div className="absolute inset-4 rounded-full border-2 border-cyan-500/50 overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <img 
                src="/projects/profile/Arlindi.jpg" 
                alt="Arlind Arifaj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}