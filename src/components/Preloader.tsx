import { motion, } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cpu } from 'lucide-react';

export default function Preloader({ finishLoading }: { finishLoading: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#070b14] flex flex-col items-center justify-center font-mono"
    >
      <div className="relative mb-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full"
        />
        <Cpu className="absolute inset-0 m-auto text-cyan-400" size={32} />
      </div>
      
      <h2 className="text-cyan-400 tracking-[0.3em] mb-2">⚡ SYSTEM INITIALIZING</h2>
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden border border-white/5">
        <motion.div 
          className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.8)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">
        Loading_Assets: {progress}%
      </p>
    </motion.div>
  );
}