import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/content";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Frontend", "Web", "Full Stack"] as const;

export default function Projects() {
  // Set the initial state to "All"
  const [activeTab, setActiveTab] = useState<string>("All");

  // Simplified Filtering Logic
  const filteredProjects = content.projects.filter((project) => {
    if (activeTab === "All") return true;
    // This matches the project.category in your content.ts
    return project.category === activeTab;
  });

  return (
    <section className="py-24 border-t border-white/5 scroll-mt-20" id="projects">
      <h3 className="text-4xl font-mono text-center text-cyan-400 mb-10 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
        Selected Projects
      </h3>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full font-mono text-sm border transition-all duration-300 ${
              activeTab === cat
                ? "border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                : "border-white/10 text-slate-400 hover:border-cyan-400/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-[#0a0f1d] border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] to-transparent opacity-80" />

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-cyan-400 text-xs px-3 py-1 rounded font-mono border border-cyan-500/30">
                  {project.tech.split(",")[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">{project.desc}</p>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={14} /> LIVE DEMO
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={14} /> SOURCE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}