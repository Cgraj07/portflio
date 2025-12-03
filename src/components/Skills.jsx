import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
    {
        title: 'Cloud & GenAI',
        skills: ['Google Cloud Platform', 'Vertex AI', 'Langchain', 'Gemini Models', 'LLM SDKs']
    },
    {
        title: 'Machine Learning',
        skills: ['TensorFlow', 'Keras', 'PyTorch', 'XGBoost', 'LightGBM', 'Scikit-learn', 'Computer Vision']
    },
    {
        title: 'Databases',
        skills: ['BigQuery', 'Alloy DB', 'MySQL', 'PostgreSQL', 'MongoDB', 'Chroma DB', 'FAISS']
    },
    {
        title: 'DevOps & Tools',
        skills: ['Docker', 'Kubernetes (GKE)', 'Git', 'CI/CD Pipelines', 'MLOps']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="skill-category"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3>{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map(skill => (
                                    <div key={skill} className="skill-item">
                                        <div className="skill-fill" style={{ width: '100%' }}></div>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
