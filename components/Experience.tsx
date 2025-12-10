import React from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, TrendingUp, Car } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    company: 'Salesloft',
    role: 'Manager, Scaled Value Engineering',
    duration: '2022 — Present',
    description: 'Leading the evolution of value engineering through automation and strategic narrative architecture.',
    highlights: [
      'Influenced $7M+ in revenue through executive-level business cases.',
      'Built automated business value analysis driving ~$500K pipeline per quarter.',
      'Designed AI-driven prompt libraries & Custom GPTs for value storytelling.',
      'President’s Club FY25 Winner.'
    ],
    logoInitials: 'SL',
    // Placeholder Image: Salesloft and Clari Announcement
    image: '/Salesloft_Clari.jpg' 
  },
  {
    id: '2',
    company: 'Volkswagen of America',
    role: 'Senior Product Strategy Specialist (EVs)',
    duration: '2017 — 2022',
    description: 'Spearheading the electric mobility revolution in the North American market.',
    highlights: [
      'Led product planning strategy for the ID.4 launch (40k+ reservations).',
      'Established North America’s OTA (Over-the-Air) update organization.',
      'Regularly reported to NA board and Global Chief Engineering Officer.',
      'Influenced lifecycle enhancements for charging innovations.'
    ],
    logoInitials: 'VW',
    // Placeholder Image: Electric SUV (Replace with vw-id4.jpg locally)
    image: '/about.jpg' 
  },
  {
    id: '3',
    company: 'Exclusive Automotive Group',
    role: 'Sales Specialist (Aston Martin, Bentley)',
    duration: '2012 — 2015',
    description: 'Mastering the art of high-touch luxury sales and client relationship management.',
    highlights: [
      'Generated $2.55M+ in sales of ultra-luxury vehicles.',
      'Set records for most cars sold in a day and fastest new car sale.',
      'Cultivated deep relationships with high-net-worth clientele.'
    ],
    logoInitials: 'EAG',
    // Placeholder Image: Luxury Sports Car (Replace with aston-martin.jpg locally)
    image: '/valkyrie.jpg' 
  }
];

const Experience: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white relative">
        {/* Subtle geometric background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="font-heading text-teal uppercase tracking-widest text-sm font-semibold mb-2">My Journey</h4>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-midnight">Value Engineering</h2>
          </div>
          <p className="font-serif text-midnight/60 max-w-md text-right md:mt-0 mt-4">
            A track record of driving revenue through strategic insight and product mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="group relative bg-cloud hover:bg-white border border-transparent hover:border-teal/20 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column: Role & Meta & Image */}
                <div className="md:w-1/3 flex flex-col gap-6">
                  <div>
                    <div className="w-16 h-16 bg-midnight text-white rounded-2xl flex items-center justify-center font-heading font-bold text-xl mb-6 shadow-lg group-hover:bg-teal transition-colors">
                      {exp.logoInitials}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-midnight mb-1">{exp.company}</h3>
                    <p className="font-heading text-teal font-medium mb-4">{exp.role}</p>
                    <span className="inline-block px-3 py-1 bg-slate-200 text-midnight/70 rounded-full text-xs font-heading tracking-wide uppercase">
                      {exp.duration}
                    </span>
                  </div>
                  
                  {exp.image && (
                    <div className="hidden md:block rounded-2xl overflow-hidden shadow-md mt-auto transform group-hover:scale-105 transition-transform duration-500 max-h-48">
                      <img src={exp.image} alt={`${exp.role} at ${exp.company}`} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Right Column: Details */}
                <div className="md:w-2/3">
                  <p className="font-serif text-lg text-midnight/80 italic mb-6 border-l-4 border-ochre pl-4">
                    "{exp.description}"
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-midnight/70 font-sans text-sm md:text-base">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.image && (
                    <div className="md:hidden mt-6 rounded-2xl overflow-hidden shadow-md">
                      <img src={exp.image} alt={`${exp.role} at ${exp.company}`} className="w-full h-48 object-cover" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative Icon based on industry */}
              <div className="absolute top-8 right-8 text-midnight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {exp.logoInitials === 'VW' ? <Car size={64} /> : 
                 exp.logoInitials === 'SL' ? <TrendingUp size={64} /> : 
                 <Briefcase size={64} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;