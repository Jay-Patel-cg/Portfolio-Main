import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const certificates = [
    { title: 'Full Stack Web Development', issuer: 'Coding Gita', date: '2024', id: 1 },
    { title: 'React JS Mastery', issuer: 'Udemy', date: '2023', id: 2 },
    { title: 'JavaScript Algorithms', issuer: 'FreeCodeCamp', date: '2023', id: 3 },
    { title: 'Advanced CSS and Sass', issuer: 'Udemy', date: '2023', id: 4 },
    { title: 'Backend with Node.js', issuer: 'Coursera', date: '2024', id: 5 },
    { title: 'UI/UX Design Fundamentals', issuer: 'Google', date: '2024', id: 6 },
];

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const chars = '01';
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00AEEF';
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none" />;
};

const Certificates = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section id="certificates" ref={containerRef} className="min-h-screen py-20 relative bg-black overflow-hidden perspective-1000">
            <MatrixRain />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    style={{ opacity }}
                    className="text-4xl font-bold mb-16 text-center text-white"
                >
                    My <span className="text-[#00AEEF]">Certificates</span>
                </motion.h2>

                {/* Horizontal Marquee */}
                <div className="w-full overflow-hidden mb-20 relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="flex w-max space-x-8"
                    >
                        {[...certificates, ...certificates, ...certificates].map((cert, index) => (
                            <div
                                key={`${cert.id}-${index}`}
                                className="w-80 p-0 bg-[#111]/80 border border-gray-800 rounded-xl backdrop-blur-sm hover:border-[#00AEEF] transition-colors cursor-default overflow-hidden flex flex-col"
                            >
                                <div className="h-32 w-full overflow-hidden">
                                    <img src="/certificate-jay.png" alt={cert.title} className="w-full h-full object-cover object-top opacity-60" />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-lg font-bold text-white mb-1 truncate">{cert.title}</h4>
                                    <p className="text-[#00AEEF] text-xs font-mono">{cert.issuer}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* 3D Grid View */}
                <motion.div
                    style={{ rotateX, transformStyle: "preserve-3d" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-origin-center"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, z: -100, y: 50 }}
                            whileInView={{ opacity: 1, z: 0, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, type: "spring", damping: 20 }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: -5,
                                borderColor: '#00AEEF',
                                boxShadow: '0 20px 40px -10px rgba(0, 174, 239, 0.3)'
                            }}
                            className="bg-[#111] rounded-2xl p-1 border border-gray-800 transition-all duration-300 transform-gpu overflow-hidden"
                        >
                            <div className="bg-black/80 rounded-xl h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden rounded-t-xl group-hover:opacity-100 opacity-80 transition-opacity">
                                    <img
                                        src="/certificate-jay.png"
                                        alt={cert.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-[#00AEEF] text-sm mb-4 font-mono">{cert.issuer}</p>

                                    <div className="flex justify-between items-end border-t border-gray-800 pt-4 mt-2">
                                        <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                                        <button className="text-[#00AEEF] text-sm font-medium hover:underline flex items-center gap-1">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
        </section>
    );
};

export default Certificates;
