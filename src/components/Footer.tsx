export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center mt-20">
      <p className="text-slate-500 font-mono text-sm">
        Designed & Built by <span className="text-cyan-400">Arlind Arifaj</span>
      </p>
      <p className="text-slate-600 font-mono text-xs mt-2">
        © {new Date().getFullYear()}. All systems operational.
      </p>
    </footer>
  );
}