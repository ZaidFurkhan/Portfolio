import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";

// Inline SVG Github Icon since Lucide does not ship brand icons
const GithubIcon = ({ className = "w-5 h-5" }) => (
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

// Inline SVG Linkedin Icon
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className}
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

// Inline SVG Instagram Icon
const InstagramIcon = ({ className = "w-5 h-5" }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className}
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

export default function Contact() {
    const emailAddress = "zaidfurkhan@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="w-full min-h-[75vh] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 text-black flex flex-col items-center justify-center py-24 px-8 relative z-20 shadow-[0_-30px_40px_rgba(0,0,0,0.08)] border-b border-gray-600/10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center w-full max-w-4xl text-center"
            >
                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                    Contact
                </h2>

                {/* Subtext */}
                <p className="text-gray-600/90 text-sm md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
                    Open to collaborations, internships, freelance opportunities, and innovative development projects. Let’s connect and create impactful digital experiences.
                </p>

                {/* Connection Links & Copy Email */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                    {/* Interactive Split Email Pill (Direct Link & Copy Action) */}
                    <div className="flex items-center bg-white/60 hover:bg-white/80 border border-white/60 hover:border-orange-500/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 font-bold text-sm md:text-base overflow-hidden">
                        {/* Direct Mailto Link (Left Side) */}
                        <a
                            href={`mailto:${emailAddress}`}
                            className="flex items-center gap-3 p-4 pl-6 text-gray-800 hover:text-orange-600 transition-colors cursor-pointer group"
                            title="Open in mail client"
                        >
                            <Mail className="w-5 h-5 text-gray-700 group-hover:text-orange-600 transition-colors" />
                            <span>{emailAddress}</span>
                        </a>

                        {/* Divider Line */}
                        <div className="border-l border-gray-300 h-6" />

                        {/* Interactive Copy Button (Right Side) */}
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 p-4 pr-6 text-gray-500 hover:text-orange-600 transition-colors cursor-pointer group"
                            title="Copy email to clipboard"
                        >
                            {copied ? (
                                <span className="flex items-center gap-1 text-green-600 animate-in fade-in duration-200">
                                    <Check className="w-4 h-4" /> Copied!
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 text-gray-400 group-hover:text-gray-600 transition-colors">
                                    <Copy className="w-4 h-4" /> Copy
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Socials Row */}
                    <div className="flex items-center gap-4">
                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/60 hover:bg-white/95 hover:text-orange-600 hover:border-orange-500/40 border border-white/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-700"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/60 hover:bg-white/95 hover:text-orange-600 hover:border-orange-500/40 border border-white/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-700"
                            aria-label="GitHub"
                        >
                            <GithubIcon className="w-5 h-5" />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/60 hover:bg-white/95 hover:text-orange-600 hover:border-orange-500/40 border border-white/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-700"
                            aria-label="Instagram"
                        >
                            <InstagramIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
