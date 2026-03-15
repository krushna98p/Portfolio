import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUp, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../portfolioData';

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 500, smooth: true });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            
            {/* Download Resume Button */}
            <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 rounded-full bg-electricBlue text-white shadow-lg shadow-electricBlue/40 hover:bg-blue-600 hover:shadow-electricBlue/60 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
                title="Download Resume"
            >
                <FiDownload className="text-xl" />
                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Download Resume
                </span>
            </a>

            {/* Back to Top Button */}
            <button 
                onClick={scrollToTop}
                className={`p-3 rounded-full bg-deepPurple text-white shadow-lg shadow-deepPurple/40 hover:bg-purple-600 hover:shadow-deepPurple/60 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
                title="Back to Top"
            >
                <FiArrowUp className="text-xl" />
            </button>
            
        </div>
    );
};

export default FloatingButtons;
