import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: 'home' | 'work' | 'contact';
  onViewChange: (view: 'home' | 'work' | 'contact') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; value: 'home' | 'work' | 'contact' }[] = [
    { name: 'Home', value: 'home' }, // Added Home link for easier navigation
    { name: 'About', value: 'home' }, // About stays on Home view
    { name: 'Work', value: 'work' },
    { name: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (value: 'home' | 'work' | 'contact', anchor?: string) => {
    onViewChange(value);
    setMobileOpen(false);
    
    // If navigating to About, we might want to scroll to it if we are already on home
    // But for simplicity in this view-based model, 'About' just goes to Home top or we can implement specific scrolling later.
    // For now, mapping 'About' to 'Home' view is safest.
    if (anchor && value === 'home') {
       setTimeout(() => {
         const element = document.getElementById(anchor);
         if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass-panel rounded-2xl px-6 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'shadow-lg bg-cloud/90' : 'bg-transparent border-transparent'}`}>
          <button onClick={() => handleNavClick('home')} className="font-heading font-bold text-xl tracking-tight text-midnight focus:outline-none">
            RS<span className="text-teal">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.value, link.name === 'About' ? 'about' : undefined)}
                className={`font-heading text-sm font-medium transition-colors tracking-wide ${
                  currentView === link.value && link.name !== 'About'
                    ? 'text-teal' 
                    : 'text-midnight/80 hover:text-teal'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-midnight focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-6 py-4">
          <div className="glass-panel rounded-2xl p-6 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.value, link.name === 'About' ? 'about' : undefined)}
                className="text-left font-heading text-lg font-medium text-midnight hover:text-teal"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;