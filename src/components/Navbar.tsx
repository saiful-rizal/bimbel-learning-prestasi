import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks"; // Pastikan path ini sesuai
import type { INavLink } from "../types"; // Pastikan path ini sesuai

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav 
                className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 border-b border-white/5 bg-slate-950/70 backdrop-blur-md"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                {/* Logo Area */}
                <a href="#" className="flex items-center gap-2 group">
                    <span className="text-lg font-bold text-slate-100 tracking-tight group-hover:text-pink-400 transition-colors">
                        Bina Learning Prestasi
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navlinks.map((link: INavLink) => (
                        <a 
                            key={link.name}
                            href={link.href} 
                            className="text-sm font-medium text-slate-400 hover:text-pink-500 transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="px-6 py-2.5 bg-pink-600 hover:bg-pink-500 active:scale-95 transition-all rounded-full text-white text-sm font-semibold shadow-lg shadow-pink-900/20">
                        Daftar Sekarang
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={() => setIsOpen(true)} 
                    className="md:hidden p-2 text-slate-100 hover:text-pink-500 transition-colors"
                >
                    <MenuIcon size={28} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
                {/* Close Button (Pojok Kanan Atas) */}
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-full transition-colors"
                >
                    <XIcon size={32} />
                </button>

                {/* Mobile Links */}
                {navlinks.map((link: INavLink) => (
                    <motion.a 
                        key={link.name}
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-medium text-slate-300 hover:text-pink-500 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                        transition={{ delay: isOpen ? 0.1 : 0 }}
                    >
                        {link.name}
                    </motion.a>
                ))}

                {/* Mobile CTA Button */}
                <motion.button 
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-semibold mt-4 shadow-lg shadow-pink-900/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
                >
                    Daftar Sekarang
                </motion.button>
            </div>
        </>
    );
}