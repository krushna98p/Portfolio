import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo, socialLinks } from '../../portfolioData';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';

const Hero = ({ isDarkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: isDarkMode ? "#3b82f6" : "#8b5cf6" },
      links: { enable: true, color: isDarkMode ? "#3b82f6" : "#8b5cf6", distance: 150, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
      size: { value: 3, random: true },
      opacity: { value: 0.5, random: true },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="h-full w-full" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left pt-10 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-electricBlue font-medium text-lg mb-2">
            Hello, World! I am
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold heading-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple pb-2">
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12">
            I'm a{' '}
            <span className="text-neonCyan">
              <Typewriter
                words={personalInfo.roles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            {personalInfo.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-electricBlue to-deepPurple text-white font-semibold hover:shadow-lg hover:shadow-electricBlue/30 transition-all transform hover:-translate-y-1">
                View My Work
              </button>
            </Link>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
              <button className="px-8 py-3 rounded-full border-2 border-electricBlue text-electricBlue dark:text-white dark:border-white/20 hover:bg-electricBlue/10 transition-all transform hover:-translate-y-1 flex items-center gap-2 font-semibold">
                <FiDownload /> Download Resume
              </button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start space-x-6">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-electricBlue dark:hover:text-electricBlue text-2xl transition-all transform hover:scale-110">
              <FiGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-electricBlue dark:hover:text-electricBlue text-2xl transition-all transform hover:scale-110">
              <FiLinkedin />
            </a>
            <a href={socialLinks.codechef} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-electricBlue dark:hover:text-electricBlue text-2xl transition-all transform hover:scale-110">
              <SiCodechef />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Photo Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated glowing border */}
            <div className="absolute inset-0 rounded-full border-4 border-electricBlue animate-spin-slow" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-2 rounded-full border-4 border-deepPurple border-dashed animate-spin-reverse-slow" style={{ animationDuration: '15s' }}></div>
            
            {/* Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-darkNavy z-10">
              <img 
                src="/profile.jpg" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400?text=Profile";
                }}
              />
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electricBlue/20 blur-3xl rounded-full z-0"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
