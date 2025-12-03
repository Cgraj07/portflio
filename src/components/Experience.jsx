import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: 'Senior Machine Learning Engineer',
        company: 'Cloudside Technologies',
        location: 'Coimbatore',
        period: '2024/05 - Present',
        description: [
            'Developed AI assistant to resolve customer cyber-related issues efficiently.',
            'Integrated chatbot into CCAI platform for effective virtual agent management.',
            'Built AI applications on AgentSpace tool using native and third-party data connectors.',
            'Established daily data ingestion processes to enhance system reliability.',
            'Deployed machine learning models on microservice applications within GKE clusters.',
            'Implemented dynamic pricing prediction through advanced model deployment strategies.'
        ]
    },
    {
        id: 2,
        role: 'ML Engineer',
        company: 'Cloudside Technologies',
        location: 'Coimbatore',
        period: '2023/06 - 2024/04',
        description: [
            'Developed a computer vision model to classify NSFW videos and images.',
            'Created a model to retrieve kill counts from PUBG gameplay.',
            'Constructed a dynamic price prediction model for future product pricing.',
            'Established a pipeline for legal document classification using the Gemini model.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-content">
                                <div className="role-header">
                                    <h3>{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>

                                <div className="meta-info">
                                    <span className="meta-item">
                                        <Calendar size={14} /> {exp.period}
                                    </span>
                                    <span className="meta-item">
                                        <MapPin size={14} /> {exp.location}
                                    </span>
                                </div>

                                <ul className="description-list">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="timeline-dot">
                                <Briefcase size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
