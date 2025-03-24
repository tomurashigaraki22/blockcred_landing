import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isDarkMode, toggleTheme} = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-black via-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              BlockCred
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('#root')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('.features')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Features</button>
              <button onClick={() => scrollToSection('.pricing')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Pricing</button>
              <button onClick={() => scrollToSection('.team')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Team</button>
              <button onClick={() => scrollToSection('.contact')} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black bg-opacity-95`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => scrollToSection('#root')}
            className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900 hover:bg-opacity-50 rounded-md transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('.features')}
            className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900 hover:bg-opacity-50 rounded-md transition-colors duration-300"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('.pricing')}
            className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900 hover:bg-opacity-50 rounded-md transition-colors duration-300"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('.team')}
            className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900 hover:bg-opacity-50 rounded-md transition-colors duration-300"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection('.contact')}
            className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900 hover:bg-opacity-50 rounded-md transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>
      const { isDarkMode, toggleTheme } = useTheme();
      
      // Add this button in the desktop menu div, before the closing tag:
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-full hover:bg-purple-900 hover:bg-opacity-50 transition-colors duration-300"
      >
        {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-purple-400" />}
      </button>
    </nav>
  );
};

export default Navbar;