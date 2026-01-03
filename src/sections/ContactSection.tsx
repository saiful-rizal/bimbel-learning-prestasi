import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 bg-black py-24">
            <SectionTitle 
                text1="Kontak" 
                text2="Hubungi Kami" 
                text3="Punya pertanyaan seputar program atau pendaftaran? Tim kami siap membantu Anda." 
            />
            
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full'
            >
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Nama Lengkap</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-800 focus-within:border-pink-500 bg-slate-900/50 transition-colors'>
                        <UserIcon className='size-5 text-slate-500' />
                        <input 
                            name='name' 
                            type="text" 
                            placeholder='Masukkan nama lengkap' 
                            className='w-full p-3 outline-none bg-transparent text-white placeholder:text-slate-500' 
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Alamat Email</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-800 focus-within:border-pink-500 bg-slate-900/50 transition-colors'>
                        <MailIcon className='size-5 text-slate-500' />
                        <input 
                            name='email' 
                            type="email" 
                            placeholder='Masukkan alamat email' 
                            className='w-full p-3 outline-none bg-transparent text-white placeholder:text-slate-500' 
                        />
                    </div>
                </motion.div>

                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Pesan</p>
                    <textarea 
                        name='message' 
                        rows={8} 
                        placeholder='Tuliskan pesan atau pertanyaan Anda...' 
                        className='focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-800 bg-slate-900/50 text-white placeholder:text-slate-500' 
                    />
                </motion.div>

                <motion.button 
                    type='submit' 
                    className='w-max flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-10 py-3 rounded-full transition-colors'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Kirim Pesan
                    <ArrowRightIcon className="size-5" />
                </motion.button>
            </form>
        </div>
    );
}