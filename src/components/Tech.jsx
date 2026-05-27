import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const tech = [
    {
        name: 'tailwindcss',
        title: 'Tailwind',
    },
    {
        name: 'vitejs',
        title: 'Vite',
    },
    {
        name: 'react',
        title: 'React',
    },
    {
        name: 'nodejs',
        title: 'Node.js',
    },
    {
        name: 'expressjs',
        title: "Express",
    },
    {
        name: 'js',
        title: "Javascript",
    },
    {
        name: 'mongodb',
        title: 'MongoDB',
    },
    {
        name: 'java',
        title: 'Java',
    },
    {
        name: 'html5',
        title: "HTML",
    },
    {
        name: 'css3',
        title: "CSS",
    },
    {
        name: 'python',
        title: 'Python',
    },
    {
        name: 'scikitlearn',
        title: 'Scikit-learn',
    },
    {
        name: 'flask',
        title: 'Flask',
    },
    {
        name: 'git',
        title: 'GIT',
    },
    {
        name: 'github',
        title: 'GitHub',
    },
    {
        name: 'postman',
        title: 'Postman',
    },
    {
        name: 'vercel',
        title: 'Vercel',
    },
    {
        name: 'render',
        title: 'Render'
    }
]

export default function Tech() {
    return (
        <section id="tech" className="w-full min-h-screen bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 text-black flex flex-col items-center justify-start py-20 px-8 border-b border-gray-600/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col items-center w-full">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Technologies</h2>
                <p className="text-gray-600/80 mb-12  animate-in slide-in-from-bottom duration-800 font-medium text-xs sm:text-sm md:text-lg lg:text-xl">Technologies I use to turn ideas into real-world applications.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
                    {tech.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white/50 backdrop-blur-sm p-2.5 md:p-3 lg:p-4 md:gap-3 lg:gap-4 rounded-2xl border border-gray-200 flex items-center gap-2 font-bold hover:scale-110 hover:border-orange-500/90 hover:z-50 transition-all duration-300 shadow-sm cursor-default"
>
                            <StackIcon name={item.name} className="w-8 h-8 flex-shrink-0" />
                            <span>{item.title}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}