import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewChange: (view: 'home' | 'work' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Drifting Gradient Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal/10 rounded-full blur-[100px] animate-drift opacity-60"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-ochre/10 rounded-full blur-[80px] animate-drift opacity-50" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-2xl">
            <p className="font-heading text-teal font-semibold tracking-wider uppercase mb-6 animate-float">
              Manager, Scaled Value Engineering
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-midnight leading-[1.1] mb-8">
              Orchestrating <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-midnight">
                Business Value.
              </span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-midnight/70 max-w-2xl leading-relaxed mb-12">
              I bridge the gap between rigorous automotive precision and digital transformation. 
              Designing systems where human intuition meets artificial intelligence to drive measurable outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onViewChange('work')}
                className="group bg-midnight text-cloud font-heading font-medium px-8 py-4 rounded-xl inline-flex items-center justify-center hover:bg-teal transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-midnight/20"
              >
                View Selected Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToAbout}
                className="group border border-midnight/20 text-midnight font-heading font-medium px-8 py-4 rounded-xl inline-flex items-center justify-center hover:bg-white/50 transition-all duration-300 hover:-translate-y-1"
              >
                Read Biography
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent opacity-60 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-30"></div>
              {/* Placeholder Image: Professional Man in Suit */}
              <img 
                src="/profile.jpg" 
                alt="Reagan Shawn" 
                className="w-full h-full object-cover transform scale-105 transition-transform duration-1000 group-hover:scale-100"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-teal/20 rounded-2xl -z-10 hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-cloud/50 backdrop-blur-sm rounded-2xl -z-10 hidden md:block shadow-lg"></div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-30 hover:opacity-100 transition-opacity duration-300">
        <span className="font-heading text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-midnight to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;