import React from 'react';
import { SkillItem } from '../types';
import { Cpu, Database, PenTool, Layout, Terminal, Zap } from 'lucide-react';

const skills: SkillItem[] = [
  { id: '1', category: 'AI Strategy', name: 'Prompt Engineering', description: 'Advanced context window management & chain-of-thought protocols.' },
  { id: '2', category: 'AI Strategy', name: 'Custom GPTs', description: 'Building Virtual Value Engineers for automated discovery.' },
  { id: '3', category: 'Engineering', name: 'Google Apps Script', description: 'Automating workflows across the Google Workspace ecosystem.' },
  { id: '4', category: 'Engineering', name: 'Value Modeling', description: 'Creating dynamic ROI calculators and business case frameworks.' },
  { id: '5', category: 'Design', name: 'Executive Presentation', description: 'Synthesizing complex data into compelling visual narratives.' },
  { id: '6', category: 'Design', name: 'Product Strategy', description: 'Lifecycle management from concept to market launch.' },
];

const AISkills: React.FC = () => {
  return (
    <section id="ai" className="py-24 bg-midnight text-cloud relative overflow-hidden">
        {/* Background Grain specifically for dark section to add texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cerulean font-heading uppercase tracking-[0.2em] text-sm font-semibold">Technical Arsenal</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-teal">Architecture</span>
          </h2>
          <p className="font-serif text-cloud/70 text-lg">
            Deploying next-generation tools to solve traditional business bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className="group relative p-[2px] bg-gradient-to-br from-white/10 to-transparent hover:from-teal/50 hover:to-cerulean/50 transition-all duration-500 rounded-2xl"
            >
              <div className="bg-[#25282A] rounded-2xl p-8 h-full transition-transform group-hover:scale-[0.99]">
                <div className="flex justify-between items-start mb-6">
                    {/* Hexagon Icon Container */}
                    <div className="w-12 h-12 bg-gradient-to-br from-teal to-cerulean hexagon flex items-center justify-center shadow-lg shadow-teal/20">
                        {index === 0 && <Terminal size={20} className="text-white" />}
                        {index === 1 && <Cpu size={20} className="text-white" />}
                        {index === 2 && <Zap size={20} className="text-white" />}
                        {index === 3 && <Database size={20} className="text-white" />}
                        {index === 4 && <Layout size={20} className="text-white" />}
                        {index === 5 && <PenTool size={20} className="text-white" />}
                    </div>
                    <span className="text-xs font-heading uppercase tracking-wider text-white/30 border border-white/10 px-2 py-1 rounded">
                        {skill.category}
                    </span>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cerulean transition-colors">
                    {skill.name}
                </h3>
                <p className="font-serif text-sm text-cloud/60 leading-relaxed">
                    {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISkills;