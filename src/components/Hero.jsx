export default function Hero({ className }) {
    return (
        <section id="home" className={`relative overflow-hidden w-full h-[100vh] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 text-black flex items-center md:items-end pb-20 justify-start animate-in slide-in-from-bottom duration-800 px-8 gap-10 pt-24 md:pt-32 ${className}`}  >
            <div className="flex flex-col w-full mt-4 space-y-2 relative animate-in slide-in-from-bottom duration-800">
                <h2 className="font-extrabold text-xl md:text-4xl mb-2">Hello,</h2>
                <h1 className="font-extrabold max-w-5xl text-3xl md:text-7xl lg:text-8xl">I'm <span className="bg-gradient-to-r from-orange-600/90 to-orange-400/80 text-transparent bg-clip-text typing ">Zaid Furkhan</span></h1>
                <h2 className="font-bold text-md md:text-xl lg:text-2xl mt-1">Full-stack developer exploring AI-powered and modern web solutions.</h2>
                <p className="text-gray-600/80 mb-2  animate-in slide-in-from-bottom duration-800 font-medium text-xs sm:text-sm md:text-lg lg:text-xl">Crafting scalable and user-focused digital experiences.</p>
                <div className="flex gap-4">
                    <button className="bg-gray-900 text-white w-fit px-4 mt-4 py-2 rounded-xl hover:bg-gray-800 transition-all duration-500 cursor-pointer font-bold text-sm md:text-base lg:text-lg "><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white font-bold py-2 px-4 rounded">Download CV</a></button>
                    
                </div>
            </div>

            {/* Decorative curved lines */}
            <div className="absolute bottom-0 right-0 pointer-events-none opacity-45">
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M600 100C400 100 200 300 200 600" stroke="#94a3b8" strokeWidth="0.75" />
                    <path d="M600 200C450 200 300 350 300 600" stroke="#94a3b8" strokeWidth="0.75" />
                    <path d="M600 300C500 300 400 400 400 600" stroke="#94a3b8" strokeWidth="0.75" />
                    <path d="M600 400C550 400 500 450 500 600" stroke="#94a3b8" strokeWidth="0.75" />
                    <path d="M600 0C300 0 0 300 0 600" stroke="#94a3b8" strokeWidth="0.75" />
                </svg>
            </div>
            
        </section>
    )
}