'use client'
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";

export default function HeroSection() {
    const specialFeatures = [
        "Mentor Berpengalaman",
        "Kurikulum Terstandar",
        "Modul Belajar Lengkap",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-gradient-to-b from-pink-950/40 via-black to-black overflow-hidden">
            
            {/* Background Glow - Intensitas ditingkatkan sedikit agar menyatu dengan gradasi */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            
            {/* Badge */}
            <motion.a href="#!" 
                className="group flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-1 pr-4 py-1.5 mt-12 mb-8 text-pink-200 hover:bg-pink-500/20 transition-all"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            >
                <span className="bg-pink-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    BARU
                </span>
                <p className="flex items-center gap-1 text-xs font-medium tracking-wide">
                    <span>Program intensif tersedia</span>
                    <ChevronRightIcon size={14} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>

            {/* Judul */}
            <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl text-center leading-tight tracking-tight text-slate-100"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
            >
                Capai potensi akademik terbaik bersama{" "}
                <span className="relative inline-block">
                    <span className="absolute inset-0 bg-pink-600/20 -skew-y-1 rounded-md"></span>
                    <span className="relative text-pink-400">Bina Learning Prestasi.</span>
                </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
                className="text-base text-center text-slate-400 max-w-xl mt-5 leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20, mass: 1 }}
            >
                Metode belajar yang efektif, fleksibel, dan terstruktur untuk membantu siswa memahami materi dengan mudah.
            </motion.p>
            
            {/* Tombol */}
            <motion.div 
                className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
            >
                <button className="bg-pink-600 hover:bg-pink-500 text-white rounded-full px-8 py-3 text-sm font-semibold transition-all shadow-lg shadow-pink-900/20">
                    Daftar Sekarang
                </button>
                <button className="flex items-center gap-2 border border-slate-700 hover:border-pink-500/50 hover:bg-slate-900 text-slate-300 hover:text-white transition-all rounded-full px-6 py-3 text-sm font-medium">
                    <VideoIcon strokeWidth={1.5} className="text-pink-400" />
                    <span>Lihat Video</span>
                </button>
            </motion.div>

            {/* Fitur */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-10">
                {specialFeatures.map((feature, index) => (
                    <motion.p 
                        className="flex items-center gap-2.5" 
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                    >
                        <CheckIcon className="size-4 text-pink-500" strokeWidth={2.5} />
                        <span className="text-sm text-slate-400 font-medium">{feature}</span>
                    </motion.p>
                ))}
            </div>

            <div className="mt-16 w-full max-w-4xl">
                <TiltedImage />
            </div>
        </div>
    );
}
