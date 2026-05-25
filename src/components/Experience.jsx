import { motion } from "framer-motion";

export default function Experience(){
    return (
        
            <section id="experience" className="w-full min-h-[70vh] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 text-black flex flex-col items-center justify-start py-20 px-8 border-b border-gray-600/20 relative z-20 shadow-[inset_0_30px_40px_rgba(0,0,0,0.05)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col  w-full">
                <h2 className="text-4xl md:text-6xl text-center font-extrabold mb-16">Development Experience</h2>
                <h4 className="text-2xl md:text-4xl text-start font-bold mb-1 cursor-pointer">Full Stack & AI Developer</h4>
                <p className="text-gray-600/90 mb-8  animate-in slide-in-from-bottom duration-800 font-medium text-xs sm:text-sm md:text-lg lg:text-xl">Personal & Academic Projects | 2024 - Present</p>
                <p className="text-gray-700 text-base font-semibold text-start animate-in slide-in-from-bottom duration-800 max-w-5xl leading-6">Built and deployed full-stack web applications and AI-powered systems using modern web technologies. Worked on backend APIs, authentication systems, database integration, responsive frontend interfaces, and machine learning-based solutions. Experienced with React, Node.js, Flask, MongoDB, PostgreSQL, Tailwind CSS, deployment workflows, and Git/GitHub collaboration. </p>
                </motion.div>
        </section>
        
    )
}