import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'NSFW Content Detection Pipeline',
        description: 'Designed and trained a custom model to identify NSFW videos and images. Built an end-to-end ML pipeline on GCP Vertex AI covering data collection, transformation, training, and deployment.',
        tags: ['GCP Vertex AI', 'Computer Vision', 'MLOps', 'Python'],
        links: { demo: '#', github: '#' }
    },
    {
        id: 2,
        title: 'Legal Document Risk Analysis',
        description: 'Developed a GenAI-powered solution to extract key features from legal documents using Gemini. Designed a Live API to compute liability scores and classify risk levels.',
        tags: ['GenAI', 'Gemini', 'BigQuery', 'Looker', 'API'],
        links: { demo: '#', github: '#' }
    },
    {
        id: 3,
        title: 'Dialogflow GenAI Agent',
        description: 'Built a GenAI Agent using Dialogflow to handle greeting, registration, and verification. Integrated a Vertex AI vector search index for data retrieval and answering.',
        tags: ['Dialogflow', 'Vertex AI', 'Vector Search', 'Chatbot'],
        links: { demo: '#', github: '#' }
    },
    {
        id: 4,
        title: 'Dynamic Price Prediction',
        description: 'Designed a custom price prediction model for multiple SKUs. Built an end-to-end pipeline on GCP Vertex AI with real-time and batch processing APIs.',
        tags: ['Regression', 'Vertex AI', 'Time Series', 'Orchestration'],
        links: { demo: '#', github: '#' }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card-content">
                                <div className="card-header">
                                    <Code size={40} className="project-icon" />
                                    <div className="card-links">
                                        {/* <a href={project.links.github} aria-label="GitHub"><Github size={20} /></a>
                    <a href={project.links.demo} aria-label="Demo"><ExternalLink size={20} /></a> */}
                                    </div>
                                </div>

                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
