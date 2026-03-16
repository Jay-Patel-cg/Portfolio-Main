import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
    { title: 'E-Commerce Platform', desc: 'Secure online store with Stripe payment integration.', tech: ['React', 'Node'], image: '/project-thumb.png' },
    { title: 'Social Media Dashboard', desc: 'Real-time analytics dashboard for social accounts.', tech: ['Next.js', 'Chart.js'], image: '/project-thumb.png' },
    { title: 'AI Implementation', desc: 'Machine learning model integration for predictions.', tech: ['Python', 'TensorFlow'], image: '/project-thumb.png' },
    { title: 'Chat Application', desc: 'End-to-end encrypted messaging solution.', tech: ['Socket.io', 'React'], image: '/project-thumb.png' },
    { title: 'Weather Forecast', desc: 'Location-based weather data visualization.', tech: ['Vue', 'API'], image: '/project-thumb.png' },
    { title: 'Task Manager', desc: 'Productivity tool for team collaboration.', tech: ['React', 'Firebase'], image: '/project-thumb.png' },
    { title: 'Portfolio v1', desc: 'Previous version of my personal portfolio.', tech: ['HTML', 'CSS'], image: '/project-thumb.png' },
    { title: 'Blog CMS', desc: 'Custom content management system.', tech: ['Node', 'SQL'], image: '/project-thumb.png' },
    { title: 'Crypto Tracker', desc: 'Live cryptocurrency price tracking.', tech: ['React', 'API'], image: '/project-thumb.png' },
    { title: 'Game Project', desc: '2D browser-based platformer game.', tech: ['Phaser', 'JS'], image: '/project-thumb.png' },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 relative bg-black overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center text-white"
                >
                    Selected <span className="text-[#00AEEF]">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00AEEF] transition-colors duration-300"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Hover Overlay Buttons */}
                                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm">
                                    <button className="p-3 bg-white rounded-full text-black hover:bg-[#00AEEF] hover:text-white transition-colors transform hover:scale-110">
                                        <Github size={20} />
                                    </button>
                                    <button className="p-3 bg-white rounded-full text-black hover:bg-[#00AEEF] hover:text-white transition-colors transform hover:scale-110">
                                        <ExternalLink size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors flex items-center gap-2">
                                    <Code size={18} className="text-[#00AEEF]" />
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Glow Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#00AEEF] transition-all duration-300 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all hover:shadow-[0_0_20px_rgba(0,174,239,0.2)]">
                        View More on GitHub
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
