import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../../portfolioData';
import { FiBriefcase, FiExternalLink, FiCalendar } from 'react-icons/fi';

const Experience = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div id="experience" className="mt-32 pt-16 border-t border-gray-200 dark:border-white/10 relative" ref={sectionRef}>
            <div className="relative z-10">
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        Experience
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences && experiences.length > 0 ? (
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div 
                                    key={exp.id || index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="glass flex flex-col p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-electricBlue/20 transition-all border-l-4 border-electricBlue bg-white/50 dark:bg-white/5"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                                            <div className="flex items-center text-electricBlue font-medium mt-1">
                                                <FiBriefcase className="mr-2" />
                                                {exp.companyUrl ? (
                                                    <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center">
                                                        {exp.company} <FiExternalLink className="ml-1 text-sm" />
                                                    </a>
                                                ) : (
                                                    <span>{exp.company}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0 text-sm font-semibold">
                                            <FiCalendar className="mr-2" />
                                            {exp.duration}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            className="text-center p-10 glass rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-white/5"
                        >
                            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4 flex justify-center">
                                <FiBriefcase />
                            </div>
                            <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">Open to Opportunities</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Currently seeking new roles. My experience will be updated here soon!
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
