'use client'
import { footerData } from "../data/footer";
import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-10 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-slate-400 bg-black border-t border-slate-900">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-12"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                {/* Logo diganti dengan Teks */}
                <a href="#" className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-white tracking-tight">Bina Learning Prestasi</span>
                    <span className="text-[10px] text-pink-500 uppercase tracking-widest">Bimbel Terpercaya</span>
                </a>

                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold mb-2">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    <Link to={link.href} className="hover:text-pink-500 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-3 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60 text-slate-300">
                    Membantu siswa meraih potensi terbaik dengan metode belajar yang terstruktur dan efektif.
                </p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="#!" rel="noreferrer">
                        <DribbbleIcon className="size-5 hover:text-pink-500 transition" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <LinkedinIcon className="size-5 hover:text-pink-500 transition" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <TwitterIcon className="size-5 hover:text-pink-500 transition" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <YoutubeIcon className="size-6 hover:text-pink-500 transition" />
                    </a>
                </div>
                <p className="mt-3 text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} Learning Prestasi. All rights reserved.
                </p>
            </motion.div>
        </footer>
    );
}