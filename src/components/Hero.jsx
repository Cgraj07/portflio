import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.span>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Govindaraj C
                    </motion.h1>

                    <motion.h2
                        className="hero-role"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Senior Machine Learning Engineer
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Specializing in building end-to-end data pipelines and AI solutions on Google Cloud Platform (GCP).
                        Expertise in Generative AI, LLMs, and deploying scalable machine learning models.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="glow-circle"></div>
                    {/* Placeholder for a 3D element or profile image if available. 
              For now, a stylized abstract element. */}
                    <div className="abstract-shape">
                        <div className="shape-inner"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
