import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { codingStats } from '../../portfolioData';

const Stats = ({ isDarkMode }) => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });
    
    const githubTheme = isDarkMode ? 'tokyonight' : 'default';

    const renderCard = (stat, index) => {
        let imgSrc = "";
        let dark = isDarkMode ? 'dark' : 'light';
        if (stat.platform === "github") {
            imgSrc = `https://github-readme-stats.vercel.app/api?username=${stat.username}&show_icons=true&theme=${githubTheme}&hide_border=true&bg_color=00000000`;
        } else if (stat.platform === "codechef") {
            imgSrc = `https://codechef-stats-badge.vercel.app/api?username=${stat.username}&theme=${dark}`;
        } else if (stat.platform === "leetcode") {
            imgSrc = `https://leetcard.jacoblin.cool/${stat.username}?theme=${dark}&ext=activity`;
        }
        
        if (!imgSrc) return null;

        return (
            <motion.div
                key={stat.platform}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="w-full lg:w-auto hover:shadow-2xl hover:shadow-electricBlue/20 transition-shadow rounded-2xl overflow-hidden glass border border-white/20 dark:border-white/10"
            >
                <a href={stat.link} target="_blank" rel="noreferrer" className="block p-4">
                    <img 
                        src={imgSrc} 
                        alt={`${stat.username} ${stat.platform} Stats`}
                        className="w-full max-w-md mx-auto h-auto rounded-lg"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="p-8 text-center"><h3 class="text-2xl font-bold mb-2 capitalize">${stat.platform} Profile</h3><p class="text-xl text-electricBlue">${stat.username}</p></div>`;
                        }}
                    />
                </a>
            </motion.div>
        );
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-darkNavy" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        Coding Statistics
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-wrap lg:flex-row gap-8 items-center justify-center">
                    {codingStats && codingStats.map((stat, index) => renderCard(stat, index))}
                </div>

            </div>
        </section>
    );
};

export default Stats;
