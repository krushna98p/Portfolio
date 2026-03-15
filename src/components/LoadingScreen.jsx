import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../portfolioData';

const LoadingScreen = () => {
  const initials = personalInfo.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-darkNavy">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 blur-xl bg-electricBlue opacity-50 rounded-full animate-pulse"></div>
        <div className="relative z-10 text-6xl font-bold heading-font text-white border-4 border-electricBlue rounded-full w-32 h-32 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] bg-darkNavy/80 backdrop-blur-sm">
          {initials}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
