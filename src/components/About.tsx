import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 grid md:grid-cols-2 gap-16 scroll-mt-20">
      {/* Bio Side */}
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-3 mb-8">

          <h3 className="text-3xl font-mono text-white font-bold uppercase tracking-widest">About Me </h3>
        </div>
        
        <div className="text-slate-400 leading-relaxed space-y-4 font-sans text-lg">
          <p>{content.about.bio}</p>
        </div>

        {/* Mini Skill Cards */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="p-4 border border-white/10 bg-[#0a0f1d] rounded hover:border-cyan-500/50 transition-colors">
            <div className="text-cyan-400 mb-2 font-mono">{"</>"}</div>
            <h4 className="text-white font-bold mb-1">Frontend</h4>
            <p className="text-xs text-slate-500 font-mono">JavaScript, Rect, Vue.js, Tailwind</p>
          </div>
          <div className="p-4 border border-white/10 bg-[#0a0f1d] rounded hover:border-purple-500/50 transition-colors">
            <div className="text-purple-400 mb-2 font-mono">{"{ }"}</div>
            <h4 className="text-white font-bold mb-1">Backend & DB</h4>
            <p className="text-xs text-slate-500 font-mono">PHP, MySQL, node.js</p>
          </div>
        </div>
      </motion.div>

      {/* Journey Timeline Side */}
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-3 mb-8">
          <h3 className="text-xl font-mono text-purple-400 font-bold uppercase tracking-widest">{"⚡ The Journey"}</h3>
        </div>
        <div className="relative border-l border-white/10 pl-8 ml-3 space-y-12">
          {content.journey.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#070b14] border-2 border-slate-600 group-hover:border-cyan-400 transition-colors shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
              
              <p className="text-cyan-400 font-mono text-xs mb-2 tracking-widest">{item.date}</p>
              <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
              <p className="text-slate-500 text-sm font-mono mb-3">{item.company}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}