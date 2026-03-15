import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, skillProgress, funFacts } from '../../portfolioData';

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      if (start === end) return;
      // Duration total = 2000ms
      const incrementTime = 2000 / end;
      
      const timer = setInterval(() => {
        start += Math.max(1, Math.ceil(end / 100)); // Smooth step
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, Math.max(10, incrementTime));
      
      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{count}+</span>;
};

const About = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 bg-white dark:bg-darkNavy/50" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side: Photo */}
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-5/12 flex justify-center lg:justify-start"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-electricBlue to-deepPurple rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <img 
                                src="/profile.jpg" 
                                alt={personalInfo.name} 
                                className="relative rounded-[2rem] shadow-2xl w-full max-w-sm object-cover border-4 border-white dark:border-gray-800"
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/400x500?text=About+Photo";
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right side: Bio & Progress Bars */}
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full lg:w-7/12"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            I'm <span className="text-electricBlue">{personalInfo.name}</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {personalInfo.bio} 
                            &nbsp;With a strong foundation in algorithmic problem solving and a passion for creating beautiful user interfaces, I bridge the gap between complex logic and seamless user experiences.
                        </p>

                        <div className="space-y-6">
                            {skillProgress.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        <span className="text-sm font-medium text-electricBlue dark:text-neonCyan">{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.percentage}%` } : {}}
                                            transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                                            className="bg-gradient-to-r from-electricBlue to-neonCyan h-2.5 rounded-full"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Fun Facts Row */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    {funFacts.map((fact, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -10 }}
                            className="glass rounded-2xl p-6 text-center shadow-lg border-t border-l border-white/20 dark:border-white/10"
                        >
                            <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple mb-2">
                                <Counter from={0} to={fact.value} />
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">{fact.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
