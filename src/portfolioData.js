// portfolioData.js
// This file contains all the personal data for the portfolio.
// Update this file to change the content of the website without touching the components.

export const personalInfo = {
  name: "Krushnal Patil",
  roles: [
    "Competitive Programmer",
    "Data Analyst",
    "Full Stack Developer",
    "Open Source Contributor",
    "Problem Solver"
  ],
  bio: "Aspiring AI Engineer passionate about building intelligent, real-world systems. I specialize in ML, Deep Learning, Computer Vision and NLP — using PyTorch, TensorFlow, Hugging Face and OpenCV — from model training to production deployment with FastAPI and Flask.",
  resumeUrl: "/resume.pdf", // Place resume.pdf in the public folder
  email: "krushnalpatil@gmail.com", // Replace with actual email
  mobile: "8698659681",
  location: "Maharashtra, India", // Update as needed
  // Add your Google Maps embed URL here (src attribute from embed code)
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826130.6865324397!2d73.816462725515!3d19.751475713437295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce2f4e0409a8eb%3A0xe54ebde3bdab23!2sMaharashtra!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin",
};

export const socialLinks = {
  github: "https://github.com/krushna98p",
  linkedin: "https://www.linkedin.com/in/krushnal-patil-6ba23a330",
  codechef: "https://www.codechef.com/users/krushna_98",
};

export const skills = {

  languages: [
    { name: "Python", icon: "python" },
    { name: "HTML/CSS", icon: "html" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Java", icon: "java" },
    { name: "SQL", icon: "sql" },
  ],
  frontend: [
    { name: "HTML/CSS", icon: "html" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Firebase", icon: "firebase" },
  ],

  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
  ],
  pythonLibraries: [
    { name: "Pandas", icon: "pandas" },
    { name: "NumPy", icon: "numpy" },
    { name: "Matplotlib/Plotly", icon: "plotly" },
  ],
  machineLearning: [
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "Scikit-Learn", icon: "scikitlearn" },
    { name: "Hugging Face", icon: "huggingface" },
    { name: "OpenCV", icon: "opencv" },
  ],
};

// Data for animated progress bars in About section
export const skillProgress = [
  { name: "Python", percentage: 95 },
  { name: "HTML", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "CSS", percentage: 80 },
  { name: "Data Analysis", percentage: 60 },
  { name: "Machine learning", percentage: 40 },
];

export const funFacts = [
  { label: "Projects Completed", value: 5 },
  { label: "Certificates Earned", value: 10 },
  { label: "Problems Solved on CodeChef", value: 1800 }, // Placeholder, can be dynamically fetched if needed
  { label: "GitHub Repos", value: 5 },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "A full-stack Self Resume platform .",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/krushna98p",
    liveUrl: "#",
    image: "/certificates/project1.png", // Place images in public/projects/
  },
  {
    id: 2,
    title: "Algorithmic Visualizer",
    description: "Web app that visualizes sorting and pathfinding algorithms in real-time.",
    techStack: ["React", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/krushna98p",
    liveUrl: "#",
    image: "/projects/project2.png",
  },
  {
    id: 3,
    title: "Python Data Analysis",
    description: "Scripts for data cleaning and visualization using basic Python libraries.",
    techStack: ["Python"],
    githubUrl: "https://github.com/krushna98p",
    liveUrl: "#",
    image: "/projects/project3.png",
  }
];

export const certificates = [
  {
    id: 1,
    name: "Python with Numpy & Pandas",
    issuer: "R3 Systems India Pvt Ltd",
    date: "August 2025",
    image: "/certificates/cert1.jpg", // From uploaded media
  },
  {
    id: 2,
    name: "Web development - HTML/CSS/JS",
    issuer: "CodeChef",
    date: "Jan 2026",
    image: "/certificates/cert2.jpg", // Placeholder
  },
  {
    id: 3,
    name: "Learn NumPy - Practice Problems and Challenges",
    issuer: "CodeChef",
    date: "Jan 2026",
    image: "/certificates/cert3.jpg", // Placeholder
  },
  {
    id: 4,
    name: "Learn Pandas - Practice Problems and Challenges",
    issuer: "CodeChef",
    date: "Jan 2026",
    image: "/certificates/cert4.jpg", // Placeholder
  }

];

export const codingStats = [
  {
    platform: "codechef", // Supported platforms: "codechef", "github", "leetcode"
    username: "krushna_98",
    link: "https://www.codechef.com/users/krushna_98"
  },
  // To add GitHub or LeetCode stats, simply uncomment below and update details
  {
    platform: "github",
    username: "krushna98p",
    link: "https://github.com/krushna98p"
  },
  // { 
  //   platform: "leetcode", 
  //   username: "krushna98p", 
  //   link: "https://leetcode.com/krushna98p" 
  // }
];

export const experiences = [
  // Example experience format (uncomment to see it live):
  /*
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Tech Corp",
    companyUrl: "https://example.com",
    duration: "June 2026 - Present",
    description: "Developed cool features using React and Node.js. Improved performance by 20%."
  }
  */
];
