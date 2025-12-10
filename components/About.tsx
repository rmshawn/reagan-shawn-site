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
              <p className="font-heading text-3xl font-bold text-midnight">7+</p>
              <p className="font-serif text-sm text-midnight/60">Years of <br/>Strategy</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-midnight mb-8">
              From Internal Combustion <br/> to <span className="text-teal">Infinite Scale.</span>
            </h2>
            
            <div className="space-y-6 font-serif text-midnight/80 text-lg leading-relaxed">
              <p>
                My professional narrative is defined by a fascination with complex systems. 
                It began in the high-stakes world of German automotive engineering, where I 
                supported the launch of Volkswagen’s electric future in North America. There, 
                precision wasn't just a requirement—it was the currency of trust.
              </p>
              <p>
                Today, I translate that rigorous strategic framework into the SaaS landscape at Salesloft. 
                As a Value Engineer, I don't just calculate ROI; I architect narratives that empower 
                organizations to see their own potential.
              </p>
              <p>
                I exist at the intersection of the technical and the human. Whether I'm designing 
                AI-driven prompt libraries to automate business value analysis or composing music across 
                multiple instruments, my goal remains the same: <strong>to harmonize disparate elements into a 
                cohesive, high-performing whole.</strong>
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