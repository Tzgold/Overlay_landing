import React from 'react';
import { 
  Sparkles, 
  ArrowRight,
  ShieldCheck, 
  Zap,
  Globe,
  Github,
  Twitter,
  Youtube,
  ExternalLink,
  ChevronRight,
  Monitor,
  Command,
  Download,
  Keyboard,
  CheckCircle2,
  GraduationCap,
  Code2,
  PenTool,
  Search,
  Lock,
  EyeOff,
  Star,
  X
} from 'lucide-react';

const LandingPage: React.FC<{ onOpenDashboard: () => void }> = ({ onOpenDashboard }) => {
  return (
    <div className="min-h-screen bg-transparent text-white p-5 selection:bg-white/10">
      
      {/* Main Frame Wrapper */}
      <div className="main-frame flex flex-col items-center relative overflow-hidden">
        
        {/* Navigation - Pill Design */}
        <div className="w-full pt-10 flex justify-center sticky top-0 z-50 px-6">
          <nav className="glass-surface flex items-center gap-2 p-1.5 rounded-full border border-white/10 shadow-2xl max-w-fit">
            {/* Left Brand Circle */}
            <div className="w-10 h-10 rounded-full bg-zinc-900/80 flex items-center justify-center text-white/40 hover:text-white transition-all cursor-pointer border border-white/5">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 px-6">
              <a href="#how-it-works" className="text-[11px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all">How it works</a>
              <a href="#features" className="text-[11px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all">Features</a>
              <a href="#use-cases" className="text-[11px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all">Use Cases</a>
              <a href="#privacy" className="text-[11px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all">Privacy</a>
            </div>

            {/* Action Button */}
            <button 
              onClick={onOpenDashboard}
              className="bg-white text-black text-[11px] font-black uppercase tracking-[0.15em] px-8 h-10 rounded-full hover:bg-zinc-200 transition-all shadow-[0_4px_15px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Get Extension
            </button>
          </nav>
        </div>

        {/* Hero Section with Centered Black Hole Background */}
        <section className="relative w-full flex flex-col items-center justify-center text-center px-6 min-h-[85vh] z-10 pt-10 pb-20 overflow-hidden">
          
          {/* Black Hole Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div 
              className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat grayscale contrast-[1.4] brightness-[0.8]" 
              style={{ 
                backgroundImage: 'url("https://images.hdqwalls.com/download/interstellar-black-hole-v4-1920x1080.jpg")',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface text-[10px] font-bold text-white/80 mb-8 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-xl">
              <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)] animate-pulse" />
              Nova AI Extension v2.5
            </div>
            
            <h1 className="hero-heading text-5xl md:text-7xl mb-8 max-w-4xl mx-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] leading-[1.1] font-black tracking-tighter">
              Your AI Intelligence,<br />Anywhere on the Web
            </h1>
            
            <p className="readable-text text-base md:text-lg max-w-xl mx-auto mb-12 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] opacity-90">
              Unleash a high-performance command center on any website  instantly, with zero context switching.
            </p>

            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={onOpenDashboard}
                  className="px-10 py-4 rounded-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] bg-white text-black font-black text-sm transition-all flex items-center gap-3 group hover:scale-[1.03] active:scale-95"
                >
                  <CheckCircle2 size={18} />
                  Get Extension 
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                </button>
                
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl glass-surface border border-white/10 hover:border-white/30 text-white/80 hover:text-white font-bold text-sm transition-all flex items-center gap-3 group hover:scale-[1.03] active:scale-95 bg-white/5"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <div className="h-4 w-[1px] bg-white/10 mx-1" />
                  <span className="text-xs opacity-60 group-hover:opacity-100 flex items-center gap-1">
                    <Star size={12} className="fill-white/20 group-hover:fill-white/80" /> 4.2k
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[9px] secondary-label uppercase tracking-[0.3em] opacity-50">
                <span className="hover:text-white transition-colors cursor-default">Native Integration</span>
                <span className="opacity-20">•</span>
                <span className="flex items-center gap-2 text-white font-black">E2E Privacy</span>
                <span className="opacity-20">•</span>
                <span className="hover:text-white transition-colors cursor-default">Unified UX</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-24 px-10 z-10 relative bg-black/40">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 text-white">How It Works</h2>
            <p className="secondary-label text-[10px] uppercase tracking-[0.5em] opacity-50">The path to frictionless intelligence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: <Download />, title: "Install Extension", desc: "Add it to Chrome in one click. Experience native integration deep in the browser." },
              { icon: <Keyboard />, title: "Press Shortcut", desc: "Use Alt + A to summon the AI dashboard on any page instantly without a click." },
              { icon: <Zap />, title: "Instant Answers", desc: "Ask, summarize, or rewrite without ever breaking your focus or switching tabs." }
            ].map((step, i) => (
              <div key={i} className="p-10 rounded-[32px] glass-surface flex flex-col items-center text-center gap-6 group hover:bg-white/[0.1] hover:border-white/40 transition-all duration-700 cursor-default">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white/30 group-hover:text-white transition-all duration-700 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  {React.cloneElement(step.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white transition-colors duration-500">{step.title}</h3>
                  <p className="readable-text text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-24 px-10 z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl font-black leading-[1.1] text-white tracking-tighter">Everything You Need.<br />Nothing You Don’t.</h2>
              <ul className="space-y-6">
                {[
                  "Open an AI panel on any website",
                  "Chat with AI without changing tabs",
                  "Summarize articles and pages instantly",
                  "Explain selected text or code snippets",
                  "Rewrite or translate content in one click",
                  "Keyboard-first, distraction-free experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-zinc-100 font-bold text-base group cursor-default">
                    <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-white/60 group-hover:bg-white/20">
                      <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)] opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="transition-all group-hover:translate-x-2 group-hover:text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-surface p-1 rounded-[40px] overflow-hidden group">
               <div className="bg-black/60 rounded-[39px] p-12 h-[420px] flex flex-col items-center justify-center text-center gap-8 transition-all duration-1000 group-hover:bg-black/80">
                  <Monitor size={56} className="text-white/20 group-hover:text-white transition-all duration-1000 group-hover:scale-110" />
                  <p className="secondary-label text-[10px] uppercase tracking-[0.4em]">Engineered for Performance</p>
                  <div className="flex flex-col gap-4">
                    <span className="readable-text text-base opacity-60">Zero Context-Switching</span>
                    <span className="readable-text text-base opacity-60">Shadow DOM Isolation</span>
                    <span className="text-white font-black text-2xl tracking-tight transition-all duration-1000 group-hover:tracking-wider">Precision tools, everywhere.</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="w-full py-24 px-10 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4 text-white">Built for the Modern Workflow</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: <GraduationCap />, role: "Students", text: "Summarize academic readings and master concepts instantly during research." },
              { icon: <Code2 />, role: "Developers", text: "Explain code, debug logic, and navigate docs without leaving the tab." },
              { icon: <PenTool />, role: "Writers", text: "Rewrite drafts, adjust tone, and generate ideas as you compose in any CMS." },
              { icon: <Search />, role: "Researchers", text: "Ask AI deep context questions about long articles without breaking flow." }
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-[32px] glass-surface group hover:bg-white/10 transition-all duration-700 border border-white/5 hover:border-white/30">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700 border border-white/10 group-hover:border-white/40">
                  <div className="text-white/30 group-hover:text-white transition-colors duration-700">{useCase.icon}</div>
                </div>
                <h3 className="text-xl font-black mb-3 text-white transition-all duration-700 group-hover:translate-x-1">{useCase.role}</h3>
                <p className="readable-text text-sm leading-relaxed transition-all duration-700 group-hover:text-white/90">{useCase.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy & Security Section */}
        <section id="privacy" className="w-full py-24 px-10 z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-white tracking-tighter">Privacy First</h2>
                <p className="readable-text text-base">Nova runs in a secure sandbox, ensuring your browsing data never leaves your environment unless explicitly requested.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <EyeOff size={20} />, text: "No User Tracking" },
                  { icon: <Lock size={20} />, text: "No Data Selling" },
                  { icon: <ShieldCheck size={20} />, text: "Sandbox Isolated" },
                  { icon: <Globe size={20} />, text: "Secure TLS 1.3" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-[24px] glass-surface hover:border-white/40 transition-all group">
                    <div className="text-white/30 group-hover:text-white transition-colors">{item.icon}</div>
                    <span className="text-[10px] font-black text-white/60 group-hover:text-white uppercase tracking-[0.2em] transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-80 h-80 flex items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full animate-pulse group-hover:bg-white/10 transition-all duration-1000" />
                <ShieldCheck size={140} className="text-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 glass-surface text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)] border-white/20 border-2 group-hover:scale-110 transition-transform duration-1000">
                     <Lock size={32} className="opacity-80" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-32 px-10 z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 max-w-4xl text-white leading-[1.05] tracking-tighter">Stop Switching Tabs.<br />Elevate Your Reality.</h2>
          <button 
            onClick={onOpenDashboard}
            className="px-12 py-5 rounded-2xl shadow-[0_30px_60px_rgba(255,255,255,0.08)] bg-white text-black font-black text-base transition-all flex items-center gap-3 hover:scale-105 active:scale-95 group"
          >
             Get Extension Free
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
          </button>
          <p className="mt-8 secondary-label uppercase text-[10px] tracking-[0.4em] opacity-40">Zero cost. Zero friction. Total intelligence.</p>
        </section>

        {/* Status Bar */}
        <div className="w-full py-12 px-10 flex flex-wrap items-center justify-center gap-16 md:gap-24 z-10 bg-black/60 border-t border-white/5 backdrop-blur-3xl">
           <div className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500 group cursor-default">
              <Zap size={20} className="text-white group-hover:scale-110 transition-transform" />
              <span className="text-base font-bold tracking-tight text-white uppercase tracking-widest">Instant</span>
           </div>
           <div className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500 group cursor-default">
              <Monitor size={20} className="text-white group-hover:scale-110 transition-transform" />
              <span className="text-base font-bold tracking-tight text-white uppercase tracking-widest">Manifest V3</span>
           </div>
           <div className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500 group cursor-default">
              <ShieldCheck size={20} className="text-white group-hover:scale-110 transition-transform" />
              <span className="text-base font-bold tracking-tight text-white uppercase tracking-widest">Sandbox</span>
           </div>
        </div>
      </div>

      {/* Redesigned Footer Section */}
      <footer className="w-full px-10 py-20 mt-10 bg-black/80 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                <div className="w-3 h-3 bg-white rotate-45" />
              </div>
              <span className="text-lg font-black tracking-tighter uppercase">Nova AI</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-[240px]">
              The precision intelligence layer for your browser. Engineered for speed, focus, and privacy.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all hover:scale-110 border border-white/5">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all hover:scale-110 border border-white/5">
                <Github size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all hover:scale-110 border border-white/5">
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Product</h4>
            <ul className="space-y-4 text-xs text-white/40">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Company</h4>
            <ul className="space-y-4 text-xs text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Support</h4>
            <ul className="space-y-4 text-xs text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/20">
            © 2025 Nova Intelligence Systems — Precision Intelligence
          </p>
          <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
            <span className="flex items-center gap-1"><ShieldCheck size={10} /> Manifest V3 Secure</span>
            <span className="flex items-center gap-1"><Zap size={10} /> Fast Response</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;