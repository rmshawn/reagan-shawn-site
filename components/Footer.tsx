import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight text-cloud/40 py-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-heading">
        <p>&copy; {new Date().getFullYear()} Reagan Shawn. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span>Reagan Shawn</span>
          <span>DLS v1.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;