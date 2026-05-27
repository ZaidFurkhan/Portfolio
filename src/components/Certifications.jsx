import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Career Essentials in Generative AI",
        issuer: "Microsoft & LinkedIn Learning",
        year: "2026",
        description: "Focused on the fundamentals of Generative AI, AI-powered workflows, responsible AI concepts, and practical applications of modern AI technologies in real-world systems.",
        tags: ["Generative AI", "AI Fundamentals", "Prompting"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        link: "https://www.linkedin.com/learning/certificates/7fc5feff9f1b85acad34312947f0a95ddc9a626003d00bee0c96a28f2327fbb6?trk=share_certificate"
    },
    {
        title: "Atlassian Agile Project Management",
        issuer: "LinkedIn Learning",
        year: "2026",
        description: "Learned project planning, Agile methodologies, team collaboration, Jira workflow management, sprint organization, and modern software project management practices.",
        tags: ["Jira", "Agile", "Scrum", "Collaboration", "Management"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
        link: "https://www.linkedin.com/learning/certificates/45926c460d8c0959d0f13bd03897e2ee99fa0b665c5adf999462434001b79e21?trk=share_certificate"
    },
    {
    title: "Node.js Essential Training",
    issuer: "LinkedIn Learning",
    year: "2026",
    description: "Learned Node.js fundamentals, backend development concepts, asynchronous programming, and server-side application building.",
    tags: ["Node.js", "Backend Development", "JavaScript"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    link: "https://www.linkedin.com/learning/certificates/8df3e660a6101dca389803b1692cd0036c64f9e9a7a06e468fff692228753275?trk=share_certificate"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="w-full min-h-screen bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 text-black flex flex-col items-center justify-start py-20 px-8 border-b border-gray-600/20 relative z-20">

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col items-center w-full"
            >
                {/* HEADING */}
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Certifications
                </h2>

                {/* SUBTEXT */}
                <p className="text-gray-600/80 mb-20 font-medium text-center text-xs sm:text-sm md:text-lg max-w-3xl leading-relaxed">
                    Industry-recognized certifications focused on Generative AI, Agile project management, collaboration workflows, and modern software development practices.
                </p>
            </motion.div>

            {/* Certifications Zigzag List (No cards, alternating image & text) */}
            <div className="flex flex-col gap-24 md:gap-32 w-full max-w-5xl items-center">    
                {certifications.map((cert, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 w-full ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 h-60 sm:h-72 md:h-80 rounded-[32px] overflow-hidden shadow-lg border border-white/60 relative group">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-500" />
                            <div className="absolute top-4 left-4 bg-white/90 p-2.5 rounded-xl shadow-sm text-orange-600">
                                <Award className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Description Side */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 leading-tight hover:text-orange-600 transition-colors duration-300">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-500 font-bold text-xs md:text-sm mt-2">
                                    {cert.issuer} • {cert.year}
                                </p>
                                <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="mt-6">
                                <div className="flex flex-wrap gap-1.5">
                                    {cert.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex} 
                                            className="px-2.5 py-1 bg-gray-200/50 font-bold text-xs text-gray-700 rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a 
                                    href={cert.link}
                                    className="mt-8 flex items-center justify-center gap-2 w-fit px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md shadow-orange-500/20"
                                >
                                    View Certificate <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}