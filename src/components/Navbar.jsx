import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { personalInfo } from '../portfolioData';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="text-2xl font-bold heading-font text-electricBlue text-glow">
              {personalInfo.name.split(' ')[0]}<span className="text-deepPurple">.dev</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-electricBlue dark:text-electricBlue font-bold"
                className="text-gray-600 dark:text-gray-300 hover:text-electricBlue dark:hover:text-electricBlue font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
              {isDarkMode ? <FiSun className="text-yellow-400 text-xl" /> : <FiMoon className="text-gray-600 text-xl" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
              {isDarkMode ? <FiSun className="text-yellow-400 text-xl" /> : <FiMoon className="text-gray-600 text-xl" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 hover:text-electricBlue focus:outline-none">
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="text-electricBlue font-bold"
              className="block text-gray-800 dark:text-gray-200 hover:text-electricBlue text-lg cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
