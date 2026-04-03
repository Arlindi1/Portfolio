
export default function Contact() {
  return (
    <section className="py-24" id="contact">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-purple-500 font-mono text-sm">
            <span className="w-8 h-[1px] bg-purple-500"></span>
            TRANSMISSION LINK
          </div>
          <h2 className="text-6xl font-bold tracking-tighter text-white">
            INITIATE <span className="text-cyan-400 neon-glow">UPLINK</span>
          </h2>
          <p className="text-slate-400 max-w-md font-mono text-sm leading-relaxed">
            // READY TO COLLABORATE ON THE NEXT PROJECT? 
            ESTABLISH A SECURE CONNECTION BELOW.
          </p>
        </div>

        <div className="bg-[#0a0f1d] border border-cyan-500/20 p-8 rounded-sm relative overflow-hidden group">
          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />
          
          <form className="space-y-8 relative z-10 font-mono">
            <div className="space-y-2">
              <label className="text-xs text-cyan-400 uppercase tracking-widest">_ENTER_IDENTITY</label>
              <div className="flex items-center gap-4 bg-black/40 border-b border-white/10 p-2 focus-within:border-cyan-500 transition-all">
                <span className="text-slate-600 text-xs">NAME_STRING:</span>
                <input type="text" className="bg-transparent w-full outline-none text-white text-sm" placeholder="---" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-cyan-400 uppercase tracking-widest">_CONTACT_VECTOR</label>
              <div className="flex items-center gap-4 bg-black/40 border-b border-white/10 p-2 focus-within:border-cyan-500 transition-all">
                <span className="text-slate-600 text-xs">EMAIL_ADDR:</span>
                <input type="email" className="bg-transparent w-full outline-none text-white text-sm" placeholder="---" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-cyan-400 uppercase tracking-widest">_MESSAGE_PAYLOAD</label>
              <textarea rows={4} className="bg-black/40 border border-white/10 w-full p-4 outline-none focus:border-cyan-500 text-sm transition-all" placeholder="// Enter transmission data..." />
            </div>

            <button className="group w-full py-4 bg-cyan-500 text-black font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              Transmit Data <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}