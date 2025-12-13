import React, { useState } from 'react';
import { X, ExternalLink, Maximize2 } from 'lucide-react';

// DATA: Matching your specific filenames from the screenshot
const PRESENTATIONS = [
  {
    id: 1,
    title: "E Solutions: Business Value Assessment",
    category: "Value Engineering",
    thumbnail: "/e-solutions-bva.jpg", 
    pdfUrl: "/e-solutions-bva.pdf"
  },
  {
    id: 2,
    title: "Dun & Bradstreet: Strategic POV",
    category: "GTM Strategy",
    thumbnail: "/dnb-pov.jpg",
    pdfUrl: "/dnb-pov.pdf"
  },
  {
    id: 3,
    title: "OneDigital: Revenue Convergence",
    category: "Transformation Strategy",
    thumbnail: "/onedigital-pov.jpg",
    pdfUrl: "/onedigital-pov.pdf"
  },
  {
    id: 4,
    title: "Diebold Nixdorf: Partnership Priorities",
    category: "Enterprise Sales",
    thumbnail: "/diebold-pov.jpg",
    pdfUrl: "/diebold-pov.pdf"
  },
  {
    id: 5,
    title: "PitchBook: Buyer-Centric GTM",
    category: "Sales Strategy",
    thumbnail: "/pitchbook-pov.jpg",
    pdfUrl: "/pitchbook-pov.pdf"
  },
  {
    id: 6,
    title: "Tata Technologies: Revenue Transformation",
    category: "Business Transformation",
    thumbnail: "/tata-technologies-pov.jpg",
    pdfUrl: "/tata-technologies-pov.pdf"
  }
];

const WorkGallery = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section className="py-12 w-full">
      <h2 className="font-heading text-3xl font-bold text-midnight mb-8">Presentations & Visualizations</h2>
      
      {/* THUMBNAIL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRESENTATIONS.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedPdf(item.pdfUrl)}
            className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-slate-100"
          >
            {/* Thumbnail Image */}
            <div className="aspect-video w-full overflow-hidden bg-slate-200 relative">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
              />
              
              {/* Overlay Icon on Hover */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Maximize2 className="text-white w-8 h-8 drop-shadow-md" />
              </div>
            </div>

            {/* Text Details */}
            <div className="p-4">
              <p className="text-xs font-bold text-teal uppercase tracking-wide mb-1">{item.category}</p>
              <h3 className="text-lg font-bold text-midnight group-hover:text-teal transition-colors">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* PDF MODAL (The "Expand" Effect) */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedPdf(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X size={32} />
          </button>

          {/* PDF Viewer Container */}
          <div className="w-full max-w-5xl h-[85vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-slate-100 px-4 py-2 border-b flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">Preview Mode</span>
              <a 
                href={selectedPdf} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-teal hover:text-teal-dark font-semibold"
              >
                Open Original <ExternalLink size={14} />
              </a>
            </div>
            
            <iframe 
              src={selectedPdf} 
              className="w-full h-full"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;