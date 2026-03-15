import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../portfolioData';
import Experience from './Experience';
import { 
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiFirebase, SiCplusplus, 
  SiPython, SiGit, SiGithub,
  SiPandas, SiNumpy, SiPlotly, SiTensorflow, SiPytorch, SiScikitlearn, SiHuggingface, SiOpencv,
  SiMysql, SiPostgresql, SiSqlite
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';

// Map icon strings to React Icons
const iconMap = {
  "html": <SiHtml5 className="text-[#E34F26]" />,
  "javascript": <SiJavascript className="text-[#F7DF1E]" />,
  "react": <SiReact className="text-[#61DAFB]" />,
  "tailwind": <SiTailwindcss className="text-[#06B6D4]" />,
  "nodejs": <SiNodedotjs className="text-[#339933]" />,
  "mongodb": <SiMongodb className="text-[#47A248]" />,
  "firebase": <SiFirebase className="text-[#FFCA28]" />,
  "cpp": <SiCplusplus className="text-[#00599C]" />,
  "python": <SiPython className="text-[#3776AB]" />,
  "git": <SiGit className="text-[#F05032]" />,
  "github": <SiGithub className="text-gray-800 dark:text-white" />,
  "vscode": <VscVscode className="text-[#007ACC]" />,
  "pandas": <SiPandas className="text-[#150458] dark:text-[#EAC262]" />,
  "numpy": <SiNumpy className="text-[#013243] dark:text-[#4dABCF]" />,
  "plotly": <SiPlotly className="text-[#3F4F75]" />,
  "tensorflow": <SiTensorflow className="text-[#FF6F00]" />,
  "pytorch": <SiPytorch className="text-[#EE4C2C]" />,
  "scikitlearn": <SiScikitlearn className="text-[#F7931E]" />,
  "huggingface": <SiHuggingface className="text-[#FFD21E]" />,
  "opencv": <SiOpencv className="text-[#5C3EE8]" />,
  "java": <FaJava className="text-[#ED8B00]" />,
  "sql": <TbSql className="text-[#003B57] dark:text-[#00758F]" />,
  "mysql": <SiMysql className="text-[#4479A1]" />,
  "postgresql": <SiPostgresql className="text-[#4169E1]" />,
  "sqlite": <SiSqlite className="text-[#003B57]" />,
  "database": <FaDatabase className="text-gray-600 dark:text-gray-400" />
};

const SkillCategory = ({ title, skillList, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div 
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12"
        >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <span className="h-2 w-8 bg-electricBlue rounded-full"></span>
                {title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillList.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="glass relative group overflow-hidden rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer border border-gray-200 dark:border-white/10 hover:border-electricBlue/50 dark:hover:border-electricBlue/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-electricBlue/20"
                    >
                        {/* Glow background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/0 to-deepPurple/0 group-hover:from-electricBlue/10 group-hover:to-deepPurple/10 transition-colors duration-300"></div>
                        
                        <div className="text-4xl mb-3 z-10 filter drop-shadow-sm group-hover:drop-shadow-md transition-all">
                            {iconMap[skill.icon] || <SiHtml5 />}
                        </div>
                        <span className="font-medium text-sm text-gray-700 dark:text-gray-300 z-10">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-darkNavy" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold heading-font text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-deepPurple inline-block">
                        Technical Skills
                    </h2>
                    <div className="h-1 w-20 bg-electricBlue mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                <div className="mt-12">
                    {skills.languages && <SkillCategory title="Programming Languages" skillList={skills.languages} index={1} />}
                    {skills.pythonLibraries && <SkillCategory title="Data Analysis & Libraries" skillList={skills.pythonLibraries} index={2} />}
                    {skills.frontend && <SkillCategory title="Frontend Development" skillList={skills.frontend} index={3} />}
                    {skills.backend && <SkillCategory title="Backend & Database" skillList={skills.backend} index={4} />}
                    {skills.machineLearning && <SkillCategory title="Machine Learning & AI" skillList={skills.machineLearning} index={5} />}
                    {skills.tools && <SkillCategory title="Tools & Platforms" skillList={skills.tools} index={6} />}
                </div>

                {/* Experience Section Nested Under Skills */}
                <Experience />

            </div>
        </section>
    );
};

export default Skills;
