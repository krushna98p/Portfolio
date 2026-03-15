import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { certificates } from '../../portfolioData';
import { FiX, FiAward, FiCalendar } from 'react-icons/fi';

const Certificates = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certificates" className="py-20 bg-gray-50 dark:bg-darkNavy" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        Certifications
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my continuous learning and achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                            className="glass group rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-electricBlue/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-white/10"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <span className="text-white font-semibold bg-electricBlue/80 px-4 py-2 rounded-full backdrop-blur-sm">Click to View</span>
                                </div>
                                <img 
                                    src={cert.image} 
                                    alt={cert.name} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/600x400?text=Certificate+Image";
                                    }}
                                />
                            </div>
                            <div className="p-6 bg-white dark:bg-darkNavy/50">
                                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100 group-hover:text-electricBlue transition-colors">
                                    {cert.name}
                                </h3>
                                <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <FiAward className="text-electricBlue" /> {cert.issuer}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FiCalendar className="text-deepPurple" /> {cert.date}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                            className="relative max-w-5xl w-full bg-darkNavy rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-electricBlue text-white p-2 rounded-full transition-colors"
                            >
                                <FiX className="text-2xl" />
                            </button>
                            
                            <img 
                                src={selectedCert.image} 
                                alt={selectedCert.name} 
                                className="w-full h-auto max-h-[75vh] object-contain bg-gray-900" 
                            />
                            
                            <div className="p-6 bg-gradient-to-t from-darkNavy to-transparent absolute bottom-0 w-full">
                                <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-lg">{selectedCert.name}</h3>
                                <p className="text-gray-300 drop-shadow-md">Issued by {selectedCert.issuer} • {selectedCert.date}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
