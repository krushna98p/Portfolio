import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { socialLinks } from '../../portfolioData';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';

const extractUsername = (url) => {
    try {
        if (!url) return '';
        // Special case for linkedin to remove queries
        const cleanUrl = url.split('?')[0];
        const parts = cleanUrl.split('/').filter(Boolean);
        return parts[parts.length - 1];
    } catch (e) {
        return "Visit Profile";
    }
};

const Profiles = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    const profilesData = [
        {
            name: "GitHub",
            url: socialLinks.github,
            username: extractUsername(socialLinks.github),
            icon: <FiGithub />,
            brandClass: "hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 border-gray-800 dark:border-white shadow-gray-800/30 dark:shadow-white/30"
        },
        {
            name: "LinkedIn",
            url: socialLinks.linkedin,
            username: extractUsername(socialLinks.linkedin),
            icon: <FiLinkedin />,
            brandClass: "hover:bg-[#0A66C2] hover:text-white border-[#0A66C2] shadow-[#0A66C2]/30 text-[#0A66C2] dark:text-blue-400"
        },
        {
            name: "CodeChef",
            url: socialLinks.codechef,
            username: extractUsername(socialLinks.codechef),
            icon: <SiCodechef />,
            brandClass: "hover:bg-[#5B4638] hover:text-white border-[#5B4638] shadow-[#5B4638]/30 text-[#5B4638] dark:text-[#a88268]"
        }
    ];

    return (
        <section id="profiles" className="py-20 bg-white dark:bg-darkNavy/80" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        Connect & Coding Profiles
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {profilesData.map((profile, index) => (
                        <motion.a
                            href={profile.url}
                            target="_blank"
                            rel="noreferrer"
                            key={profile.name}
                            initial={{ y: 50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className={`glass group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${profile.brandClass}`}
                        >
                            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                                {profile.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                            <p className="text-sm opacity-80 mb-6 font-medium">@{profile.username}</p>
                            
                            <div className="flex items-center gap-2 text-sm font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Visit Profile <FiExternalLink />
                            </div>
                            
                            {/* Pulsing hidden border effect */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-current opacity-0 group-hover:animate-ping z-[-1]" style={{ animationDuration: '2s' }}></div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profiles;
