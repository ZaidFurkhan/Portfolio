import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Inline SVG Github Icon since Lucide does not ship brand icons
const GithubIcon = ({ className = "w-4 h-4" }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className}
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const projects = [
    {
        title: "MediAssist AI",
        subtitle: "AI Healthcare Assistant",
        description: "MedAssist.AI is an intelligent healthcare web application that merges predictive analytics, conversational AI, and geo-location services to simplify healthcare accessibility. It features symptom-based disease prediction, nearby specialty hospital search, appointment scheduling, and AI-generated medical insights.",
        tags: ["React", "Python", "ML", "FastAPI"],
        image: "src/Images/project1.png",
        github: "https://github.com/ZaidFurkhan/MedAssist_Ai",
        demo: "https://medassistai-flax.vercel.app/"
    },
    {
        title: "PathForge",
        subtitle: "AI Career Roadmap Generator",
        description: "An AI-powered professional development tool that generates personalized learning tracks and visual career paths based on industry skills.",
        tags: ["React", "Node.js", "Groq API", "TailwindCSS"],
        image: "src/Images/project2.png",
        github: "https://github.com/ZaidFurkhan/PathForge.ai/tree/main",
        demo: "https://path-forge-ai-one.vercel.app/"
    },
    {
        title: "CodeSkill Landing Page",
        subtitle: "Sleek Responsive Design",
        description: "Developed a sleek and fully responsive landing page for CodeSkill.AI using React and Tailwind CSS. The project features a modern dark-themed interface, optimized performance with Vite, and reusable component-based architecture..",
        tags: [ "Tailwind CSS","Vite", "React", "Framer Motion"],
        image: "src/Images/project3.png",
        github: "https://github.com/ZaidFurkhan/landing-page",
        demo: "https://landing-page-kx0q.onrender.com/"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full min-h-screen bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 text-black flex flex-col gap-1 items-center justify-start py-20 px-8 relative z-20 shadow-[0_30px_40px_rgba(0,0,0,0.1)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col items-center w-full"
            >
                {/* HEADING */}
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Projects</h2>
                
                {/* SUBTEXT */}
                <p className="text-gray-600/80 mb-12 animate-in slide-in-from-bottom duration-800 font-medium text-xs sm:text-sm md:text-lg lg:text-xl text-center">
                    Projects that showcase my development journey and problem-solving skills.
                </p>

                {/* Projects Grid (Stacked on mobile, side-by-side on md/lg) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mt-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="flex flex-col w-full max-w-sm bg-white/70 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl rounded-[32px] overflow-hidden p-6 gap-6 transition-all duration-300 group cursor-default"
                        >
                            {/* Image */}
                            <div className="h-48 w-full rounded-2xl overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="bg-white/90 p-2 rounded-xl shadow-sm text-gray-700 hover:text-black transition-colors"
                                    >
                                        <GithubIcon className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="flex flex-col gap-4 flex-1 justify-between">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-950 leading-snug group-hover:text-orange-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 font-bold text-xs mt-1">
                                        {project.subtitle}
                                    </p>
                                    <p className="mt-3 text-gray-600 text-sm leading-relaxed font-medium">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="px-2.5 py-1 bg-gray-200/50 font-bold text-2xs text-gray-700 rounded-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a 
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md shadow-orange-500/10"
                                    >
                                        Explore Project <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <a href="https://github.com/ZaidFurkhan">
                <div className="m-4 p-2 gap-1 flex items-end justify-center min-w-5 text-gray-400 font-medium text:sm md:text-md hover:text-orange-700/40 cursor-pointer">
                    <p>Explore More</p>
                    <ArrowUpRight className="h-5 w-auto"/>
                </div>
                </a>
            </motion.div>
        </section>
    );
}