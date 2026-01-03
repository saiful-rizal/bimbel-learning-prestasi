import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

// --- Komponen Internal untuk Logika Tilt ---
function TiltCard({ imageSrc, index }: { imageSrc: string; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -3; 
        const rotationY = (offsetX / (rect.width / 2)) * 3;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <motion.figure 
            ref={ref} 
            className="relative w-full h-full perspective-midrange flex flex-col items-center justify-center group"
            onMouseMove={handleMouse} 
            onMouseLeave={handleMouseLeave}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
                type: "spring", 
                stiffness: 320, 
                damping: 70, 
                mass: 1,
                delay: index * 0.1 
            }}
        >
            <motion.div 
                className="relative transform-3d w-full h-full" 
                style={{ rotateX, rotateY }} 
            >
                <motion.img 
                    src={imageSrc}
                    className="w-full h-full rounded-[15px] will-change-transform transform-[translateZ(0)] object-cover shadow-xl border border-slate-700/50"
                    alt={`Gallery ${index + 1}`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px]" />
            </motion.div>
        </motion.figure>
    );
}

// --- Komponen Utama ---
export default function GalleryThreeImages() {
    const images = [
        "/assets/bimbel.png",
        "/assets/bimbel.png",
        "/assets/bimbel.png"
    ];

    return (
        <div className="w-full mt-24 px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        // Tinggi diperbesar menjadi 240px
                        <div key={index} className="h-[240px] w-full">
                            <TiltCard imageSrc={src} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}