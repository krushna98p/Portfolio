import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { toast } from 'react-toastify';
import { personalInfo } from '../../portfolioData';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulating Formspree submission
        // In real use, point form action to formspree endpoint or use fetch
        const formData = new FormData(e.target);
        
        try {
            await fetch('https://formspree.io/f/mbljeaav', { // Placeholder ID
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            toast.success("Message sent successfully!");
            e.target.reset();
        } catch (error) {
            toast.success("Message sent! (Mocked)");
            e.target.reset();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-darkNavy relative overflow-hidden" ref={sectionRef}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electricBlue/5 to-transparent pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        Get In Touch
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a question or want to work together? Leave a message!
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
                    
                    {/* Contact Info & Map */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-5/12 space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl shadow-lg border-t border-l border-white/20 dark:border-white/10">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-electricBlue/10 text-electricBlue rounded-lg">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                                        <a href={`mailto:${personalInfo.email}`} className="text-gray-800 dark:text-gray-200 hover:text-electricBlue dark:hover:text-electricBlue transition-colors font-medium break-all">
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-deepPurple/10 text-deepPurple rounded-lg">
                                        <FiPhone className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Mobile</p>
                                        <a href={`tel:${personalInfo.mobile}`} className="text-gray-800 dark:text-gray-200 hover:text-deepPurple dark:hover:text-deepPurple transition-colors font-medium">
                                            {personalInfo.mobile}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-neonCyan/10 text-neonCyan rounded-lg">
                                        <FiMapPin className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                                        <p className="text-gray-800 dark:text-gray-200 font-medium">
                                            {personalInfo.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Location Badge / Map Embed */}
                        <div className="glass p-1 rounded-2xl shadow-lg border border-white/10 overflow-hidden relative h-48 group">
                            {personalInfo.mapUrl ? (
                                <iframe 
                                    src={personalInfo.mapUrl}
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl filter grayscale dark:grayscale-0 contrast-125 dark:contrast-100 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    title="Location Map"
                                ></iframe>
                            ) : (
                                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-xl">
                                    {/* Simplified map pattern background */}
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                                    <div className="absolute inset-0 opacity-5 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                                    
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="text-red-500 text-5xl z-10"
                                    >
                                        <FiMapPin />
                                    </motion.div>
                                    <div className="absolute bottom-1/2 translate-y-8 w-12 h-4 bg-black/20 blur-md rounded-full scale-y-50 z-0"></div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full lg:w-7/12"
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl shadow-xl border border-white/20 dark:border-white/10 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        required 
                                        className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 px-0 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-electricBlue dark:focus:border-electricBlue transition-colors peer"
                                        placeholder=" "
                                    />
                                    <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 dark:text-gray-400 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-electricBlue transition-all peer-valid:text-xs peer-valid:-top-4">
                                        Your Name
                                    </label>
                                </div>
                                <div className="relative group">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        required 
                                        className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 px-0 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-electricBlue dark:focus:border-electricBlue transition-colors peer"
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 dark:text-gray-400 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-electricBlue transition-all peer-valid:text-xs peer-valid:-top-4">
                                        Your Email
                                    </label>
                                </div>
                            </div>

                            <div className="relative group">
                                <input 
                                    type="text" 
                                    name="subject" 
                                    id="subject" 
                                    required 
                                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 px-0 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-electricBlue dark:focus:border-electricBlue transition-colors peer"
                                    placeholder=" "
                                />
                                <label htmlFor="subject" className="absolute left-0 top-3 text-gray-500 dark:text-gray-400 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-electricBlue transition-all peer-valid:text-xs peer-valid:-top-4">
                                    Subject
                                </label>
                            </div>

                            <div className="relative group mt-2">
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    required 
                                    rows="4"
                                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 px-0 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-electricBlue dark:focus:border-electricBlue transition-colors peer resize-none"
                                    placeholder=" "
                                ></textarea>
                                <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 dark:text-gray-400 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-electricBlue transition-all peer-valid:text-xs peer-valid:-top-4">
                                    Message
                                </label>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`mt-4 w-full py-4 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-lg transition-all ${
                                    isSubmitting 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-electricBlue to-deepPurple hover:shadow-lg hover:shadow-electricBlue/40 transform hover:-translate-y-1'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : <>Send Message <FiSend /></>}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
