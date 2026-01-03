import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32 bg-black relative">
            <SectionTitle 
                text1="Keunggulan" 
                text2="Mengapa Kami?" 
                text3="Program belajar terstruktur, mentor ahli, dan fasilitas lengkap untuk kesuksesan akademik." 
            />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div key={index} className={`${index === 1 ? 'p-px rounded-[13px] bg-gradient-to-br from-pink-600 to-slate-800' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Ukuran padding dan lebar dikembalikan seperti aslinya */}
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full h-full">
                            <div className="text-pink-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-40 relative mx-auto max-w-5xl">
                {/* Ukuran glow disesuaikan standar */}
                <div className="absolute -z-10 top-0 left-10 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full pointer-events-none"></div>
                
                <motion.p className="text-slate-300 text-lg text-left max-w-3xl"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Bimbel Learning Prestasi membantu siswa mencapai target nilai dengan metode pembelajaran yang personal, interaktif, dan berfokus pada pemahaman konsep dasar yang kuat.
                </motion.p>
                
                {/* Grid layout dikembalikan ke 3 kolom seperti aslinya */}
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <motion.div className="md:col-span-2"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        <img className="h-full w-auto" src="/assets/bimbel.png" alt="Suasana Belajar" width={1000} height={500} />
                    </motion.div>
                    <motion.div className="md:col-span-1"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img src="/assets/bimbel.png" alt="Detail Belajar" width={1000} height={500} className="hover:-translate-y-0.5 transition duration-300" />
                        {/* Ukuran judul dikembalikan ke aslinya */}
                        <h3 className="text-[24px]/7.5 text-slate-300 font-medium mt-6">Fokus Pemahaman, Bukan Sekadar Hafalan</h3>
                        <p className="text-slate-300 mt-2">Kami membimbing siswa untuk memahami logika di balik setiap materi, memastikan prestasi yang bertahan lama.</p>
                        <a href="#!" className="group flex items-center gap-2 mt-4 text-pink-500 hover:text-pink-400 transition">
                            Pelajari program kami
                            <ArrowUpRight className="size-5 group-hover:translate-x-0.5 transition duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}