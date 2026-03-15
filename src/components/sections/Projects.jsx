import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { projects } from '../../portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="bottom"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="h-full"
        >
            <div className="glass h-full rounded-2xl overflow-hidden flex flex-col group border-t border-l border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-electricBlue/20 transition-all duration-300">
                
                {/* Image Container with Overlay */}
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-electricBlue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x400?text=Project+Preview";
                        }}
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow bg-white/50 dark:bg-darkNavy/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold heading-font text-gray-800 dark:text-gray-100 mb-2 group-hover:text-electricBlue transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map(tech => (
                            <span 
                                key={tech} 
                                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-electricBlue/10 text-electricBlue dark:bg-electricBlue/20 border border-electricBlue/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-gray-800 hover:bg-gray-900 dark:bg-white dark:text-darkNavy dark:hover:bg-gray-200 text-white p-2 rounded-full flex items-center justify-center transition-colors shadow-md"
                            title="View Source Code"
                        >
                            <FiGithub className="text-xl" />
                        </a>
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-gradient-to-r from-electricBlue to-deepPurple hover:shadow-lg hover:shadow-electricBlue/30 text-white p-2 rounded-full flex items-center justify-center transition-all"
                            title="Live Demo"
                        >
                            <FiExternalLink className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });
    
    // Extract unique tech stacks
    const allTechs = ['All', ...new Set(projects.flatMap(p => p.techStack))];
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.techStack.includes(filter));

    return (
        <section id="projects" className="py-20 bg-white dark:bg-darkNavy/80 relative" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute top-40 left-0 w-64 h-64 bg-deepPurple/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-40 right-0 w-80 h-80 bg-electricBlue/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {allTechs.map(tech => (
                        <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                filter === tech 
                                ? 'bg-gradient-to-r from-electricBlue to-deepPurple text-white shadow-md shadow-electricBlue/30' 
                                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                            }`}
                        >
                            {tech}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Projects;
