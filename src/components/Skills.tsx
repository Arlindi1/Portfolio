import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Skills() {
  return (
    <section className="py-24 border-t border-white/5 scroll-mt-20" id="skills">
      {/* Mini Top Badge */}
      <div className="flex justify-center mb-10">
        <div className="px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-full flex items-center gap-2">
          <span className="text-cyan-400 font-mono text-xs">{"{ }"} SYSTEM CAPABILITIES</span>
        </div>
      </div>
      
      {/* Solid White Heading */}
      <h3 className="text-4xl font-mono text-center text-white font-bold mb-16 uppercase tracking-widest">
        Technical Competencies
      </h3>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {content.skills.map((skill, idx) => (
          <div key={idx} className="bg-[#0a0f1d] p-6 rounded-lg border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-cyan-500/30 transition-colors">
            <div className="flex justify-between font-mono text-sm mb-4">
              <span className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-sm"></span>
                {skill.name}
              </span>
              <span className="text-cyan-400">{skill.level}%</span>
            </div>
            
            {/* Background Track */}
            <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden border border-white/5 relative">
              {/* Solid Cyan Fill */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}