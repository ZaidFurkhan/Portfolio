import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className="w-full py-1 fixed top-0 z-50 text-black flex items-center justify-between bg-white/70 backdrop-blur-md rounded-l-3xl sm:rounded-l-2xl m-2 px-4 animate-in slide-in-from-top duration-300 ">
            <div className="text-4xl md:text-5xl text-gray-950 font-extrabold">Portfolio<span className="text-gray-800/80">.</span></div>
            <div className="hidden md:flex px-6 py-4 items-end justify-center text-sm font-bold text-black  w-fit  gap-8">
                <a className="cursor-pointer hover:text-orange-600 transition-all duration-300" href="#home">Home</a>
                <a className="cursor-pointer hover:text-orange-600 transition-all duration-300" href="#projects">Projects</a>
                <a className="cursor-pointer hover:text-orange-600 transition-all duration-300" href="#certifications">Certifications</a>
                <a className="cursor-pointer hover:text-orange-600 transition-all duration-300" href="#contact">Contact</a>
            </div>
            <div className="md:hidden text-base font-extrabold cursor-pointer m-2" >
                <button onClick={toggleMenu}>{!openMenu ? <Menu /> : < X />}</button>
            </div>
            {openMenu && (<div className="md:hidden absolute top-9.5 rounded-b-2xl left-0 right-0 bg-white/80 backdrop-blur-md ml-3 mt-2 pt-6 p-3 min-w-full">
                <div className="space-y-4 w-full animate-in slide-in-from-top duration-500 px-4 py-4 ">
                    <a href="#home" className="text-gray-950 hover:text-orange-600 transition-all duration-300 block font-bold cursor-pointer text-sm lg:text-base" onClick={() => setOpenMenu(false)}>Home</a>
                    <a href="#projects" className="text-gray-950 hover:text-orange-600 transition-all duration-300 block font-bold cursor-pointer text-sm lg:text-base" onClick={() => setOpenMenu(false)}>Projects</a>
                    <a href="#certifications" className="text-gray-950 hover:text-orange-600 transition-all duration-300 block font-bold cursor-pointer text-sm lg:text-base" onClick={() => setOpenMenu(false)}>Certifications</a>
                    <a href="#contact" className="text-gray-950 hover:text-orange-600 transition-all duration-300 block font-bold cursor-pointer text-sm lg:text-base" onClick={() => setOpenMenu(false)}>Contact</a>
                </div>
            </div>)}
        </nav>
    )
} 