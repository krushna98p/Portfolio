import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Profiles from './components/sections/Profiles';
import Contact from './components/sections/Contact';
import Stats from './components/sections/Stats';
import KonamiCode from './components/KonamiCode';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark theme

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsDarkMode(false);
    }
    
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen font-sans selection:bg-electricBlue/30 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <CustomCursor />
      <ToastContainer theme={isDarkMode ? "dark" : "light"} position="bottom-right" />
      
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Stats isDarkMode={isDarkMode} />
        <Profiles />
        <Contact />
      </main>
      
      <Footer />
      <KonamiCode />
      <FloatingButtons />
    </div>
  );
}

export default App;
