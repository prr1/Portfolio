import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            Made with <Heart size={16} className="text-red-500 mx-1" /> and lots of coffee
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;