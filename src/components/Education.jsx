import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import './Education.css';

const education = [
    {
        degree: 'Master of Science: Data Analytics',
        institution: 'Bharathiar University Coimbatore',
        year: '2023'
    },
    {
        degree: 'Bachelor of Science: Statistics',
        institution: 'Government Arts and Science College(Autonomous) - Coimbatore',
        year: '2021'
    }
];

const certifications = [
    {
        name: 'Professional Machine Learning Engineer',
        issuer: 'Google Cloud Certified',
        year: '2025'
    },
    {
        name: 'Associate Cloud Engineer',
        issuer: 'Google Cloud Certified',
        year: '2024'
    }
];

const Education = () => {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="education-grid">
                    {/* Education Column */}
                    <motion.div
                        className="edu-column"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="column-title">
                            <GraduationCap className="icon" /> Education
                        </h2>
                        <div className="edu-list">
                            {education.map((edu, index) => (
                                <div key={index} className="edu-card">
                                    <div className="year-badge">{edu.year}</div>
                                    <h3>{edu.degree}</h3>
                                    <p>{edu.institution}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        className="edu-column"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="column-title">
                            <Award className="icon" /> Certifications
                        </h2>
                        <div className="cert-list">
                            {certifications.map((cert, index) => (
                                <div key={index} className="cert-card">
                                    <div className="cert-header">
                                        <h3>{cert.name}</h3>
                                        <CheckCircle size={18} className="verified-icon" />
                                    </div>
                                    <p>{cert.issuer}</p>
                                    <span className="cert-year">{cert.year}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
