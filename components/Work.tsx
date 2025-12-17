import React from 'react';
import { Bot, PieChart, Calculator, ArrowUpRight, Code, Sparkles, FileText, Database, TrendingUp, MessageSquare, Terminal, Search, Layers, GitMerge, CheckCircle } from 'lucide-react';
import WorkGallery from './WorkGallery';

// --- BRAND PALETTE CONSTANTS ---
// Cerebral Teal: #0097A7
// Warm Ochre: #DDAA44
// Midnight Graphite: #1D1F21
// Soft Cloud: #ECEFF1
// Electric Cerulean: #00CFFF
// Rose Slate: #C76B82
// Lime Mist: #D7FFB8

// --- VISUALS COMPONENT (UNCHANGED) ---
const TechVisual = ({ variant }: { variant: 'value' | 'csm' | 'inspector' | 'library' | 'consolidator' | 'tracker' }) => {
  // 1. VALUE ENGINEER
  if (variant === 'value') {
    return (
      <div className="w-full h-full bg-[#ECEFF1] relative overflow-hidden group-hover:bg-[#E0F7FA] transition-colors duration-500">
        <div className="absolute top-6 left-4 w-28 h-14 bg-white border border-[#0097A7]/20 rounded-lg p-2 flex flex-col gap-1.5 shadow-sm group-hover:-translate-x-2 transition-transform duration-500 z-10">
          <div className="w-full h-1.5 bg-[#1D1F21]/20 rounded-full"></div>
          <div className="w-2/3 h-1.5 bg-[#1D1F21]/20 rounded-full"></div>
          <div className="w-3/4 h-1.5 bg-[#1D1F21]/20 rounded-full"></div>
          <div className="w-1/2 h-1.5 bg-[#1D1F21]/20 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0097A7] group-hover:text-[#00CFFF] group-hover:scale-110 transition-all duration-500 z-20">
          <Sparkles size={28} fill="currentColor" className="text-opacity-20" />
        </div>
        <div className="absolute bottom-5 right-5 flex items-end gap-1.5 z-10">
           <div className="w-4 h-8 bg-[#0097A7]/40 rounded-t-sm group-hover:h-10 transition-all duration-300"></div>
           <div className="w-4 h-12 bg-[#0097A7]/70 rounded-t-sm group-hover:h-16 transition-all duration-500 delay-75"></div>
           <div className="w-4 h-20 bg-[#0097A7] rounded-t-sm group-hover:h-24 transition-all duration-700 delay-150 shadow-lg shadow-[#0097A7]/20"></div>
        </div>
      </div>
    );
  }

  // 2. VIRTUAL CSM
  if (variant === 'csm') {
    return (
      <div className="w-full h-full bg-[#ECEFF1] relative overflow-hidden group-hover:bg-[#E0F7FA] transition-colors duration-500">
        <div className="absolute top-6 left-5 flex gap-2 items-end group-hover:translate-y-[-2px] transition-transform duration-300">
            <div className="w-8 h-8 rounded-full bg-[#1D1F21] flex items-center justify-center text-white shadow-md">
                <div className="w-4 h-4 bg-[#ECEFF1] rounded-full opacity-20"></div>
            </div>
            <div className="w-24 h-10 bg-white border border-[#1D1F21]/10 rounded-2xl rounded-bl-none flex items-center px-3 shadow-sm">
               <div className="w-16 h-2 bg-[#1D1F21]/20 rounded-full"></div>
            </div>
        </div>
        <div className="absolute bottom-6 right-5 flex flex-col items-end gap-1 group-hover:translate-y-[-2px] transition-transform duration-300 delay-100">
            <div className="flex items-end gap-2">
                <div className="w-32 h-12 bg-[#0097A7] rounded-2xl rounded-br-none flex items-center justify-center gap-1.5 shadow-md shadow-[#0097A7]/20">
                   <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></div>
                   <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0097A7] flex items-center justify-center shadow-md">
                    <Bot size={18} className="text-white" />
                </div>
            </div>
        </div>
      </div>
    );
  }

  // 3. INSPECTOR
  if (variant === 'inspector') {
    return (
      <div className="w-full h-full bg-[#ECEFF1] relative overflow-hidden group-hover:bg-[#FFF8E1] transition-colors duration-500">
        <div className="absolute inset-5 bg-white border border-[#DDAA44]/30 rounded-lg p-4 flex flex-col gap-2.5 shadow-sm group-hover:shadow-md transition-all duration-300">
           <div className="w-1/3 h-2 bg-[#1D1F21]/20 rounded-full mb-1"></div>
           <div className="w-full h-2 bg-[#1D1F21]/10 rounded-full"></div>
           <div className="w-full h-2 bg-[#1D1F21]/10 rounded-full"></div>
           <div className="w-full h-2 bg-[#1D1F21]/10 rounded-full flex items-center justify-between">
              <span className="w-3/4 h-full bg-inherit rounded-full"></span>
              <div className="w-2.5 h-2.5 bg-[#C76B82] rounded-full animate-pulse shadow-sm"></div>
           </div>
           <div className="w-5/6 h-2 bg-[#1D1F21]/10 rounded-full"></div>
        </div>
        <div className="absolute left-0 right-0 h-0.5 bg-[#DDAA44] top-1/4 group-hover:top-3/4 transition-all duration-[1.5s] ease-in-out shadow-[0_0_8px_rgba(221,170,68,0.6)] z-20"></div>
        <Search className="absolute bottom-3 right-3 text-[#DDAA44] w-12 h-12 -rotate-12 opacity-80" />
      </div>
    );
  }

  // 4. PROMPT LIBRARY
  if (variant === 'library') {
    return (
      <div className="w-full h-full bg-[#ECEFF1] relative overflow-hidden group-hover:bg-[#FCE4EC] transition-colors duration-500 flex items-center justify-center">
         <div className="relative w-36 h-28 pt-4 pl-4">
            <div className="absolute inset-0 bg-[#1D1F21] rounded-xl transform translate-x-4 -translate-y-6 rotate-12 opacity-10"></div>
            <div className="absolute inset-0 bg-[#C76B82] rounded-xl transform translate-x-2 -translate-y-3 rotate-6 opacity-40 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-6"></div>
            <div className="absolute inset-0 bg-white border-2 border-[#C76B82]/20 rounded-xl shadow-md p-3 flex flex-col gap-2 group-hover:-translate-y-1 transition-transform duration-300">
               <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-[#C76B82] flex items-center justify-center">
                      <FileText size={12} className="text-white" />
                  </div>
                  <div className="w-12 h-2 bg-[#1D1F21]/20 rounded-full"></div>
               </div>
               <div className="w-full h-1.5 bg-[#1D1F21]/10 rounded-full"></div>
               <div className="w-2/3 h-1.5 bg-[#1D1F21]/10 rounded-full"></div>
               <div className="mt-auto w-full h-1 bg-[#C76B82]/20 rounded-full"></div>
            </div>
         </div>
      </div>
    );
  }

  // 5. CONSOLIDATOR
  if (variant === 'consolidator') {
    return (
      <div className="w-full h-full bg-[#ECEFF1] relative overflow-hidden group-hover:bg-[#FCE4EC] transition-colors duration-500">
         <div className="absolute top-6 left-6 flex flex-col gap-2">
            <div className="w-10 h-8 bg-white border border-[#1D1F21]/20 rounded shadow-sm transform -rotate-12 group-hover:translate-x-12 group-hover:rotate-0 group-hover:opacity-0 transition-all duration-700"></div>
            <div className="w-10 h-8 bg-white border border-[#1D1F21]/20 rounded shadow-sm transform rotate-6 group-hover:translate-x-12 group-hover:rotate-0 group-hover:opacity-0 transition-all duration-700 delay-75"></div>
            <div className="w-10 h-8 bg-white border border-[#1D1F21]/20 rounded shadow-sm transform -rotate-3 group-hover:translate-x-12 group-hover:rotate-0 group-hover:opacity-0 transition-all duration-700 delay-150"></div>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C76B82] bg-white rounded-full p-1 shadow-sm z-10">
            <GitMerge size={24} />
         </div>
         <div className="absolute top-6 right-6 w-20 h-24 bg-[#C76B82] rounded-lg shadow-lg flex flex-col items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700 delay-300">
             <div className="w-12 h-1.5 bg-white/40 rounded-full"></div>
             <div className="w-12 h-1.5 bg-white/40 rounded-full"></div>
             <div className="w-12 h-1.5 bg-white/40 rounded-full"></div>
             <div className="w-12 h-1.5 bg-white/90 rounded-full mt-1"></div>
         </div>
      </div>
    );
  }

  // 6. ACTIVITY TRACKER
  if (variant === 'tracker') {
    return (
      <div className="w-full h-full bg-[#ECEFF1] relative overflow-hidden group-hover:bg-[#FFF8E1] transition-colors duration-500">
         <div className="absolute inset-0 p-6 flex gap-4">
             <div className="w-1.5 h-full bg-[#1D1F21]/10 rounded-full relative overflow-hidden">
                <div className="absolute top-0 w-full bg-[#DDAA44] h-1/3 group-hover:h-3/4 transition-all duration-1000 ease-out rounded-full"></div>
             </div>
             <div className="flex flex-col justify-between py-1 w-full">
                <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-[#DDAA44] flex items-center justify-center text-white shadow-sm">
                      <CheckCircle size={12} fill="currentColor" className="text-white" />
                   </div>
                   <div className="w-24 h-2 bg-[#1D1F21]/80 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   <div className="w-5 h-5 rounded-full border-2 border-[#DDAA44] bg-white group-hover:bg-[#DDAA44] flex items-center justify-center transition-colors duration-300">
                      <div className="w-2 h-2 bg-[#DDAA44] group-hover:bg-white rounded-full"></div>
                   </div>
                   <div className="w-16 h-2 bg-[#1D1F21]/40 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 opacity-30 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                   <div className="w-5 h-5 rounded-full border-2 border-[#DDAA44]/50 group-hover:border-[#DDAA44] bg-white flex items-center justify-center">
                   </div>
                   <div className="w-20 h-2 bg-[#1D1F21]/20 rounded-full"></div>
                </div>
             </div>
         </div>
      </div>
    );
  }
  return null;
};


const Work: React.FC = () => {
  
  // --- HANDLE ASK BOT FUNCTION ---
  // This emits a custom event that your layout/header (where the chat lives) should listen for.
  const handleAskBot = (prompt: string) => {
    // Dispatch a custom event with the prompt detail
    const event = new CustomEvent('triggerChat', { detail: prompt });
    window.dispatchEvent(event);
    
    // Optional: Log for debugging if you don't have the listener set up yet
    console.log("Chat Triggered with:", prompt);
  };

  const aiTools = [
    {
      title: "Virtual Value Engineer",
      type: "Custom GPT",
      variant: "value", 
      description: "Ingests customer discovery transcripts to automatically generate Level 1 Business Cases and strategic narratives.",
      icon: <Bot size={20} className="text-[#0097A7]" />,
      // New Property: The specific question to ask the bot
      botPrompt: "Can you tell me more about the Virtual Value Engineer project and how it generates business cases?"
    },
    {
      title: "Virtual CSM",
      type: "Custom GPT",
      variant: "csm",
      description: "Ingests customer call transcripts to generate executive-level narratives for business reviews.",
      icon: <MessageSquare size={20} className="text-[#0097A7]" />,
      botPrompt: "How does the Virtual CSM tool work, and what kind of narratives does it generate?"
    },
    {
      title: "SE Opportunity Inspector",
      type: "Custom GPT",
      variant: "inspector",
      description: "Automated analysis of Solution Engineering opportunities to identify technical risks and value gaps before close.",
      icon: <Sparkles size={20} className="text-[#DDAA44]" />,
      botPrompt: "Explain the SE Opportunity Inspector. How does it identify risks in engineering opportunities?"
    },
    {
      title: "VE Prompt Library",
      type: "Notebook LM",
      variant: "library",
      description: "Curated prompt engineering architecture designed for Google Notebook LM to accelerate value storytelling.",
      icon: <FileText size={20} className="text-[#C76B82]" />,
      botPrompt: "What is the VE Prompt Library and how does it utilize Google Notebook LM?"
    },
    {
      title: "Transcript Consolidator",
      type: "Apps Script",
      variant: "consolidator",
      description: "Google Apps Script that aggregates disparate call logs and transcripts into a unified view for analysis.",
      icon: <Code size={20} className="text-[#C76B82]" />,
      botPrompt: "Tell me about the Transcript Consolidator script. How does it aggregate call logs?"
    },
    {
      title: "Weekly Activity Tracker",
      type: "Apps Script",
      variant: "tracker",
      description: "Automated reporting system for engineering activities, impact tracking, and resource allocation.",
      icon: <Database size={20} className="text-[#DDAA44]" />,
      botPrompt: "How does the Weekly Activity Tracker system handle resource allocation reporting?"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F5F7FA]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#1D1F21] mb-6">Selected Work</h1>
          <p className="font-serif text-xl text-[#1D1F21]/70">
            A curated collection of value engineering artifacts, AI implementations, and strategic models.
          </p>
        </div>

        {/* === SECTION 1: AI TOOLS === */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10 border-b border-[#1D1F21]/10 pb-4">
            <div className="p-3 bg-[#0097A7]/10 rounded-xl text-[#0097A7]">
              <Bot size={24} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-[#1D1F21]">AI Tools & Automation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <div key={index} className="group glass-panel rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white hover:border-[#0097A7]/30 bg-white/60">
                <div className="h-40 rounded-xl overflow-hidden mb-6 relative bg-[#ECEFF1] border border-[#1D1F21]/5">
                  <TechVisual variant={tool.variant as any} />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider text-[#1D1F21] z-30 shadow-sm border border-[#1D1F21]/5">
                    {tool.type}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  {tool.icon}
                  <h3 className="font-heading text-xl font-bold text-[#1D1F21]">{tool.title}</h3>
                </div>
                
                <p className="font-serif text-sm text-[#1D1F21]/70 mb-4 line-clamp-3">
                  {tool.description}
                </p>
                
                {/* --- UPDATE: Button now triggers Chat --- */}
                <button 
                  onClick={() => handleAskBot(tool.botPrompt)}
                  className="flex items-center text-[#0097A7] text-sm font-heading font-bold hover:gap-2 hover:text-[#00CFFF] transition-all cursor-pointer"
                >
                  Learn More <MessageSquare size={14} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* === SECTION 2: PRESENTATIONS (GALLERY) === */}
        <div className="mb-32">
           <WorkGallery />
        </div>

        {/* === SECTION 3: MODELING (UNCHANGED) === */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b border-[#1D1F21]/10 pb-4">
            <div className="p-3 bg-[#C76B82]/10 rounded-xl text-[#C76B82]">
              <Calculator size={24} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-[#1D1F21]">Modeling & Calculators</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#1D1F21] rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#0097A7]/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
               <TrendingUp className="text-[#0097A7] mb-6 relative z-10" size={32} />
               <h3 className="font-heading text-2xl font-bold text-white mb-2 relative z-10">Salesloft Value Realization Model</h3>
               <p className="font-serif text-[#ECEFF1]/60 text-sm mb-8 relative z-10">
                 Comprehensive post-sale framework tracking actualized ROI against pre-sales benchmarks using live platform data.
               </p>
               <button onClick={() => handleAskBot("I'm interested in the Salesloft Value Realization Model. How does it track ROI?")} className="w-full py-3 border border-white/20 rounded-xl text-white font-heading text-sm font-bold hover:bg-white hover:text-[#1D1F21] transition-colors relative z-10 cursor-pointer">
                 Ask About This
               </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#1D1F21]/5 shadow-xl rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#DDAA44]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
               <Calculator className="text-[#DDAA44] mb-6 relative z-10" size={32} />
               <h3 className="font-heading text-2xl font-bold text-[#1D1F21] mb-2 relative z-10">Salesloft Business Case Calculator</h3>
               <p className="font-serif text-[#1D1F21]/60 text-sm mb-8 relative z-10">
                 Dynamic financial modeling tool allowing prospects to toggle variables and visualize 3-year NPV and payback periods.
               </p>
               <button onClick={() => handleAskBot("How does the Business Case Calculator work and what financial metrics does it output?")} className="w-full py-3 bg-[#1D1F21] text-white rounded-xl font-heading text-sm font-bold hover:bg-[#0097A7] transition-colors relative z-10 cursor-pointer">
                 Ask About This
               </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#1D1F21]/5 shadow-xl rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#C76B82]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
               <Database className="text-[#C76B82] mb-6 relative z-10" size={32} />
               <h3 className="font-heading text-2xl font-bold text-[#1D1F21] mb-2 relative z-10">Salesloft Benefit Register</h3>
               <p className="font-serif text-[#1D1F21]/60 text-sm mb-8 relative z-10">
                 A centralized catalog of qualified value drivers, mapped to specific features and customer outcomes.
               </p>
               <button onClick={() => handleAskBot("What is the Salesloft Benefit Register and how are value drivers qualified?")} className="w-full py-3 border border-[#1D1F21]/10 rounded-xl text-[#1D1F21] font-heading text-sm font-bold hover:bg-[#1D1F21] hover:text-white transition-colors relative z-10 cursor-pointer">
                 Ask About This
               </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;