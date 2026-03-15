import React from 'react';
import { personalInfo, socialLinks } from '../portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-darkNavy border-t border-gray-200 dark:border-white/10 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h3 className="text-2xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple mb-4">
          {personalInfo.name}
        </h3>
        <div className="flex space-x-6 mb-6">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-electricBlue transition-colors">
            <FiGithub className="text-2xl" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-electricBlue transition-colors">
            <FiLinkedin className="text-2xl" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-electricBlue transition-colors">
            <FiMail className="text-2xl" />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
