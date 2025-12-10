import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import AISkills from './components/AISkills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

type View = 'home' | 'work' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen relative selection:bg-teal selection:text-white flex flex-col">
      {/* Global Grain Overlay */}
      <div className="bg-noise"></div>
      
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onViewChange={setCurrentView} />
            <About />
            <Experience />
            <AISkills />
          </>
        )}
        
        {currentView === 'work' && <Work />}
        
        {currentView === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
};

export default App;