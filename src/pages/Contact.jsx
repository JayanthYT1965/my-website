import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("");
  return (
    <AnimatedPage>
      <div className="contact-page-wrapper">
        {/* Background Atmosphere */}
        <div className="demos-mesh"></div>
        <div className="demo-glow demo-glow-1"></div>
        <div className="demo-glow demo-glow-2"></div>

        <section className="contact-hero-v2 section-padding">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-header centered"
            >
              <div className="badge">Connect With Us</div>
              <h1 className="display-lg section-title">Architecting Your <br /><span className="gradient-text">Digital Future</span></h1>
              <p className="section-desc">Have a vision? We have the technical mastery to build it. Reach out and let's start the conversation.</p>
            </motion.div>
          </div>
        </section>

        <section className="contact-content-v2 pb-120">
          <div className="container">
            <div className="contact-main-grid">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="contact-info-panel"
              >
                <div className="badge subtitle">Direct Channels</div>
                <h2 className="section-title small">Prefer a <span className="gradient-text">Direct Line?</span></h2>
                
                <div className="contact-cards-v3 mt-40">
                  <div className="contact-card-glass">
                    <div className="card-icon">✉️</div>
                    <div className="card-content">
                      <p className="label">Inquiries</p>
                      <a href="mailto:Jayanthroblox@gmail.com" className="value">Jayanthroblox@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="contact-card-glass">
                    <div className="card-icon">📱</div>
                    <div className="card-content">
                      <p className="label">WhatsApp / Call</p>
                      <a href="tel:7993461422" className="value">+91 7993461422</a>
                    </div>
                  </div>
                  
                  <div className="contact-card-glass">
                    <div className="card-icon">📸</div>
                    <div className="card-content">
                      <p className="label">Instagram</p>
                      <a href="https://instagram.com/Jayanth.261" target="_blank" rel="noopener noreferrer" className="value">@Jayanth.261</a>
                    </div>
                  </div>
                </div>

                <div className="availability-tag mt-60">
                  <div className="pulse-dot"></div>
                  <span>Available for new projects in 2026</span>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="contact-form-panel"
              >
                <div className="form-container-glass">
                  <div className="form-header">
                     <h3 className="gradient-text">Launch Project</h3>
                     <p>Tell us what you're building.</p>
                  </div>
                  
                  <form className="apex-form" action="https://formspree.io/f/mdaygplj" method="POST">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" name="name" placeholder="Jayanth Kosana" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="example@apex.ai" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Inquiry Type</label>
                      <button 
                        type="button" 
                        className="custom-select-trigger"
                        onClick={() => setIsModalOpen(true)}
                      >
                        {selectedInquiry || "Select a service..."}
                        <span className="trigger-icon">⚡</span>
                      </button>
                      <input type="hidden" name="inquiry_type" value={selectedInquiry} required />
                    </div>

                    {/* Inquiry Type Modal */}
                    <AnimatePresence>
                      {isModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="modal-content inquiry-modal"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button className="close-modal" type="button" onClick={() => setIsModalOpen(false)}>×</button>
                            
                            <div className="modal-header">
                              <h2 className="gradient-text">Choose Your Service</h2>
                              <p>Select the department that best fits your vision.</p>
                            </div>

                            <div className="inquiry-grid">
                              {[
                                { id: "Website Development", icon: "🌐", desc: "Custom, high-performance web applications." },
                                { id: "AI Tools Usage", icon: "🤖", desc: "Harnessing the power of LLMs and Generative AI." },
                                { id: "Automation", icon: "⚙️", desc: "Streamline workflows with intelligent automation." },
                                { id: "AI Integration", icon: "🔌", desc: "Inject AI capabilities into your existing systems." },
                                { id: "Full Digital Ecosystem", icon: "🏗️", desc: "End-to-end digital transformation for scale." },
                                { id: "Other", icon: "✨", desc: "Something else? Let's discuss your custom needs." }
                              ].map((item) => (
                                <div 
                                  key={item.id} 
                                  className={`inquiry-option ${selectedInquiry === item.id ? 'active' : ''}`}
                                  onClick={() => {
                                    setSelectedInquiry(item.id);
                                    setIsModalOpen(false);
                                  }}
                                >
                                  <div className="option-icon">{item.icon}</div>
                                  <div className="option-text">
                                    <h4>{item.id}</h4>
                                    <p>{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>

                    <div className="form-group">
                      <label>Brief Message</label>
                      <textarea name="message" rows="4" placeholder="Describe your vision or the problem you're solving..." required></textarea>
                    </div>

                    <div className="form-footer mt-40">
                       <button type="submit" className="btn-primary w-full btn-glow">
                          Send Transmission <span>→</span>
                       </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
