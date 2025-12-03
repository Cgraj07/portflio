import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-subtitle">
                        Interested in collaborating or have a project in mind? Let's connect!
                    </p>

                    <div className="contact-grid">
                        <a href="mailto:govind.mlcs@gmail.com" className="contact-item">
                            <div className="icon-box">
                                <Mail size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>Email</h3>
                                <p>govind.mlcs@gmail.com</p>
                            </div>
                        </a>

                        <a href="tel:+917448337440" className="contact-item">
                            <div className="icon-box">
                                <Phone size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>Phone</h3>
                                <p>+91 7448337440</p>
                            </div>
                        </a>

                        <div className="contact-item">
                            <div className="icon-box">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>Location</h3>
                                <p>Coimbatore, India</p>
                            </div>
                        </div>

                        <a href="https://www.linkedin.com/in/govindaraj-c-a44499221" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <div className="icon-box">
                                <Linkedin size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>LinkedIn</h3>
                                <p>Connect on LinkedIn</p>
                            </div>
                        </a>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Govindaraj C. All rights reserved.</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;
