import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Using the Lake/Mountain photo for variety */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute inset-0 bg-ochre/20 rounded-2xl transform -translate-x-4 translate-y-4 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
              {/* Placeholder Image: Reagan About Photo) */}
              <img 
                src="/vizzion.jpg" 
                alt="Reagan Shawn in Hallstatt" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 bg-cloud p-6 rounded-xl shadow-lg border border-white/50 hidden md:block">
              <p className="font-heading text-3xl font-bold text-midnight">10+</p>
              <p className="font-serif text-sm text-midnight/60">Years of <br/>Impact</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-midnight mb-8">
              Strategy <span className="text-[#0097A7]">→</span> Structure <span className="text-[#0097A7]">→</span> Scale
            </h2>
            
            <div className="space-y-6 font-serif text-midnight/80 text-lg leading-relaxed">
              <p>
                I’m drawn to complex systems, especially those that reveal hidden patterns or demand re-thinking.
              </p>
              <p>
                My career began in the the Automotive Insdusty, supporting Volkswagen’s electric transition
                in North America. There, I learned how to drive change in large, multinational organizations
                through strategic thinking, cross-functional collaboration, and executive communication.
              </p>
              <p>
                When I transitioned into Value Engineering in the Software world, I applied a similar framework: 
                help leaders of large, complex organizations understand what they need to change, why they need 
                to change it, and how to make it happen.
              </p>
              <p>
                Through my work in building bespoke strategies for companies, I started to identify patterns,
                which I codified into scalable tools that enable teams to deliver deeper, more consistent value 
                conversations, and which enable customers to realize greater impact throughout the value lifecycle.
              </p>
              <p>
                Whether building AI-driven value models or composing music across instruments, I’m driven by the 
                same desire to <span className="text-[#0097A7]"><strong>constantly learn, apply creativity to topics that matter, and scale the outcomes 
                into something that delivers compounding value.</strong></span>
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="px-4 py-2 bg-white/50 rounded-full border border-midnight/10 text-sm font-heading">
                🇩🇪 A1 German Certified
              </div>
              <div className="px-4 py-2 bg-white/50 rounded-full border border-midnight/10 text-sm font-heading">
                🎹 Multi-instrumentalist
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;