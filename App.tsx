
import React, { useState, useEffect, useCallback } from 'react';
import FloatingPanel from './components/FloatingPanel';
import Chat from './tools/Chat';
import LandingPage from './LandingPage';
import { TOOLS, TOOL_SHORTCUTS } from './constants';
import { ToolId } from './types';
import { FileText, Loader2, Sparkles, Command, ChevronRight } from 'lucide-react';
import { summarizePage } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [activeToolId, setActiveToolId] = useState<ToolId>('chat');
  const [pageContext, setPageContext] = useState('');
  const [summarizing, setSummarizing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('context') === 'extension') {
      setView('dashboard');
      setIsDashboardOpen(true);
    }
  }, []);

  const gatherContext = useCallback(() => {
    const text = document.body.innerText.substring(0, 5000);
    setPageContext(text);
  }, []);

  const toggleDashboard = useCallback(() => {
    setIsDashboardOpen(prev => {
      if (!prev) gatherContext();
      return !prev;
    });
  }, [gatherContext]);

  // Fix: Defined handleSummarize to resolve "Cannot find name 'handleSummarize'" error in the UI
  const handleSummarize = async () => {
    if (!pageContext) gatherContext();
    
    setSummarizing(true);
    setSummary(null);
    try {
      const currentContent = pageContext || document.body.innerText.substring(0, 5000);
      const result = await summarizePage(currentContent);
      setSummary(result || "No summary was generated.");
    } catch (error) {
      console.error("Summarization error:", error);
      setSummary("Error generating summary.");
    } finally {
      setSummarizing(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Dashboard: Alt + A (Standardized)
      if (e.altKey && e.code === 'KeyA') {
        e.preventDefault();
        if (view !== 'dashboard') setView('dashboard');
        toggleDashboard();
      }

      if (isDashboardOpen) {
        if (e.key === 'Escape') setIsDashboardOpen(false);
        if (e.altKey && TOOL_SHORTCUTS[e.code]) {
          e.preventDefault();
          setActiveToolId(TOOL_SHORTCUTS[e.code]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDashboardOpen, toggleDashboard, view]);

  // If viewing landing, return LandingPage
  if (view === 'landing') {
    return (
      <LandingPage 
        onOpenDashboard={() => {
          setView('dashboard');
          setIsDashboardOpen(true);
          gatherContext();
        }} 
      />
    );
  }

  const activeTool = TOOLS.find(t => t.id === activeToolId);

  return (
    <div className="dark min-h-screen bg-transparent">
      {/* Small floating action button when closed */}
      {!isDashboardOpen && (
        <div className="fixed bottom-6 right-6 z-[999998]">
          <button 
            onClick={toggleDashboard}
            className="w-12 h-12 bg-white hover:bg-slate-100 text-slate-950 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group border border-white/20"
          >
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      )}

      {/* Floating Dashboard Panel */}
      {isDashboardOpen && (
        <FloatingPanel 
          title={activeTool?.name || "Nova Dashboard"} 
          onClose={() => setIsDashboardOpen(false)}
        >
          <div className="flex h-full bg-slate-900">
            {/* Minimal Dashboard Sidebar */}
            <div className="w-14 border-r border-white/5 flex flex-col items-center py-4 gap-3 bg-slate-950/40">
              {TOOLS.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveToolId(tool.id)}
                  title={`${tool.name} (Alt+${tool.shortcut})`}
                  className={`p-2.5 rounded-lg transition-all ${
                    activeToolId === tool.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                    : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {tool.icon}
                </button>
              ))}
              <div className="mt-auto pt-4 border-t border-white/5">
                <button 
                  onClick={() => setView('landing')}
                  className="p-2.5 text-slate-500 hover:text-indigo-400 transition-colors"
                  title="Return to Home"
                >
                  <Command size={18} />
                </button>
              </div>
            </div>

            {/* Content Viewport */}
            <div className="flex-1 overflow-hidden bg-slate-900">
              {activeToolId === 'chat' && <Chat context={pageContext} />}
              
              {activeToolId === 'summarize' && (
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FileText className="text-indigo-400" size={18} />
                      Context Analyzer
                    </h2>
                  </div>
                  
                  {!summary && !summarizing && (
                    <div className="bg-slate-950/50 rounded-xl p-10 text-center space-y-5 border border-white/5">
                      <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto border border-indigo-500/20">
                        <FileText className="text-indigo-400" size={24} />
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed max-w-[240px] mx-auto">
                        Nova will parse the visible content of this tab and generate a structured summary.
                      </p>
                      <button 
                        onClick={handleSummarize}
                        className="h-10 px-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-xl shadow-indigo-500/10 transition-all active:scale-95"
                      >
                        Start Summarization
                      </button>
                    </div>
                  )}

                  {summarizing && (
                    <div className="flex flex-col items-center justify-center py-20 space-y-4">
                      <Loader2 className="animate-spin text-indigo-400" size={28} />
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Parsing DOM Elements...</p>
                    </div>
                  )}

                  {summary && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <div className="bg-slate-950/80 p-5 rounded-xl border border-white/5">
                        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3">Analysis Result</p>
                        <div className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                          {summary}
                        </div>
                      </div>
                      <button 
                        onClick={() => setSummary(null)}
                        className="text-[10px] font-semibold text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-tight"
                      >
                        Reset and Rescan
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeToolId === 'settings' && (
                <div className="p-8 space-y-8">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Preferences</h2>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Configure Nova Extension</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/5">
                      <div className="flex items-center gap-3">
                        <Command size={16} className="text-slate-400" />
                        <div>
                          <p className="text-xs font-semibold text-white">Global Trigger</p>
                          <p className="text-[10px] text-slate-500">Currently set to Alt + A</p>
                        </div>
                      </div>
                      <button className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase">
                        Change
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/5">
                      <div className="flex items-center gap-3">
                        <Sparkles size={16} className="text-indigo-400" />
                        <div>
                          <p className="text-xs font-semibold text-white">Primary Model</p>
                          <p className="text-[10px] text-slate-500">Gemini 3 Flash</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1.5">System Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                      <p className="text-[10px] text-slate-400">Environment keys validated and active.</p>
                    </div>
                  </div>
                </div>
              )}

              {['explain', 'rewrite', 'translate', 'search'].includes(activeToolId) && (
                <div className="flex flex-col items-center justify-center h-full text-center p-12 space-y-6">
                  <div className="w-16 h-16 bg-slate-950 border border-white/5 rounded-2xl flex items-center justify-center text-indigo-400 shadow-2xl shadow-indigo-500/5">
                    {activeTool?.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white">{activeTool?.name}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
                      This specialized module is currently in the engineering preview phase.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveToolId('chat')}
                    className="h-9 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[11px] font-semibold transition-all text-white"
                  >
                    Return to Nova Chat
                  </button>
                </div>
              )}
            </div>
          </div>
        </FloatingPanel>
      )}
    </div>
  );
};

export default App;
