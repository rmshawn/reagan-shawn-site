import React from 'react';
import { Bot, PieChart, Calculator, ArrowUpRight, Code, Sparkles, FileText, Database, TrendingUp } from 'lucide-react';
import WorkGallery from './WorkGallery';

const Work: React.FC = () => {
  const aiTools = [
    {
      title: "Virtual Value Engineer",
      type: "Custom GPT",
      description: "Ingests customer discovery transcripts to automatically generate Level 1 Business Cases and strategic narratives.",
      icon: <Bot size={20} className="text-teal" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SE Opportunity Inspector",
      type: "Automation Tool",
      description: "Automated analysis of Solution Engineering opportunities to identify technical risks and value gaps before close.",
      icon: <Sparkles size={20} className="text-ochre" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "VE Prompt Library",
      type: "Notebook LM",
      description: "Curated prompt engineering architecture designed for Google Notebook LM to accelerate value storytelling.",
      icon: <FileText size={20} className="text-rose" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Transcript Consolidator",
      type: "Apps Script",
      description: "Google Apps Script that aggregates disparate call logs and transcripts into a unified view for analysis.",
      icon: <Code size={20} className="text-cerulean" />,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weekly Activity Tracker",
      type: "Apps Script",
      description: "Automated reporting system for engineering activities, impact tracking, and resource allocation.",
      icon: <Database size={20} className="text-lime" />,
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-midnight mb-6">Selected Work</h1>
          <p className="font-serif text-xl text-midnight/70">
            A curated collection of value engineering artifacts, AI implementations, and strategic models.
          </p>
        </div>

        {/* Section 1: AI Tools */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10 border-b border-midnight/10 pb-4">
            <div className="p-3 bg-teal/10 rounded-xl text-teal">
              <Bot size={24} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-midnight">AI Tools & Automation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <div key={index} className="group glass-panel rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white hover:border-teal/30 bg-white/50">
                <div className="h-40 rounded-xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={tool.image} alt={tool.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider text-midnight z-20 shadow-sm">
                    {tool.type}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  {tool.icon}
                  <h3 className="font-heading text-xl font-bold text-midnight">{tool.title}</h3>
                </div>
                
                <p className="font-serif text-sm text-midnight/70 mb-4 line-clamp-3">
                  {tool.description}
                </p>
                
                <button className="flex items-center text-teal text-sm font-heading font-bold hover:gap-2 transition-all">
                  View Details <ArrowUpRight size={14} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Presentations & Visualizations (Now powered by your Gallery) */}
        <div className="mb-32">
           <WorkGallery />
        </div>

        {/* Section 3: Modeling & Calculators */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b border-midnight/10 pb-4">
            <div className="p-3 bg-rose/10 rounded-xl text-rose">
              <Calculator size={24} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-midnight">Modeling & Calculators</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-midnight rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
               <TrendingUp className="text-teal mb-6 relative z-10" size={32} />
               <h3 className="font-heading text-2xl font-bold text-white mb-2 relative z-10">Salesloft Value Realization Model</h3>
               <p className="font-serif text-cloud/60 text-sm mb-8 relative z-10">
                 Comprehensive post-sale framework tracking actualized ROI against pre-sales benchmarks using live platform data.
               </p>
               <button className="w-full py-3 border border-white/20 rounded-xl text-white font-heading text-sm font-bold hover:bg-white hover:text-midnight transition-colors relative z-10">
                 Request Access
               </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-midnight/5 shadow-xl rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute top-0 right-0 w-32 h-32 bg-ochre/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
               <Calculator className="text-ochre mb-6 relative z-10" size={32} />
               <h3 className="font-heading text-2xl font-bold text-midnight mb-2 relative z-10">Salesloft Business Case Calculator</h3>
               <p className="font-serif text-midnight/60 text-sm mb-8 relative z-10">
                 Dynamic financial modeling tool allowing prospects to toggle variables and visualize 3-year NPV and payback periods.
               </p>
               <button className="w-full py-3 bg-midnight text-white rounded-xl font-heading text-sm font-bold hover:bg-teal transition-colors relative z-10">
                 Launch Model
               </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-midnight/5 shadow-xl rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
               <Database className="text-rose mb-6 relative z-10" size={32} />
               <h3 className="font-heading text-2xl font-bold text-midnight mb-2 relative z-10">Salesloft Benefit Register</h3>
               <p className="font-serif text-midnight/60 text-sm mb-8 relative z-10">
                 A centralized catalog of qualified value drivers, mapped to specific features and customer outcomes.
               </p>
               <button className="w-full py-3 border border-midnight/10 rounded-xl text-midnight font-heading text-sm font-bold hover:bg-midnight hover:text-white transition-colors relative z-10">
                 View Register
               </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;