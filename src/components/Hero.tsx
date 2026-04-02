import { motion } from 'framer-motion';
import { content } from '../data/content';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {/* System Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-500/30 bg-cyan-500/10 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            System Online
          </p>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] tracking-tighter">
          {content.hero.title}
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-slate-300">
          Building Intuitive & <span className="text-white">Dynamic Interfaces</span>
        </h2>

        {/* Location & Status Terminal Box */}
        <div className="flex gap-8 mb-10 font-mono text-sm border-l-2 border-cyan-500/50 pl-4 py-3 bg-gradient-to-r from-cyan-500/10 to-transparent">
          <div>
            <span className="text-cyan-500 block text-xs mb-1">LOC</span>
            <span className="text-white flex items-center gap-2"><MapPin size={14}/> PRISHTINA, KS</span>
          </div>
          <div>
            <span className="text-purple-500 block text-xs mb-1">STATUS</span>
            <span className="text-white uppercase">OPEN TO WORK</span>
          </div>
        </div>

        <p className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed">
          {content.hero.subtitle}
        </p>
        
        <div className="flex gap-4">
          <a href="#projects" className="group px-8 py-4 font-mono border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 rounded-sm flex items-center gap-3 uppercase tracking-widest text-sm font-bold">
            Initialize Project <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}