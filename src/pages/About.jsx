import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const About = () => {
  return (
    <AnimatedPage>
      <div className="about-page-wrapper">
        <section className="internal-hero about-hero-v2" style={{ backgroundImage: 'url(/about-bg-v2.png)' }}>
          <div className="hero-overlay-dark"></div>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-content centered"
            >
              <div className="badge">The Visionary</div>
              <h1 className="display-lg">Jayanth <span className="gradient-text">Kosana</span></h1>
              <p className="body-md">Architecting at the edge of Business and Intelligence.</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="about-grid-v2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="about-image-v2 glass luminous-border"
              >
                 <img src="/jayanth.jpg" alt="Jayanth Kosana" className="profile-img" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="about-text-v2"
              >
                <div className="badge subtitle">Founder & Visionary</div>
                <h2 className="section-title">The Mastermind Behind <br /><span className="gradient-text">Apex Interactive</span></h2>
                <p className="body-md highlight">
                  Jayanth Kosana is a Business Administration student at Roots College with an insatiable curiosity for the future. 
                  His journey is defined by combining business acumen with deep technical skills.
                </p>
                
                <div className="bento-skills mt-40">
                   <div className="bento-item glass">
                      <span className="bento-icon">⚡</span>
                      <h3>Velocity</h3>
                      <p>Rapid deployment expert.</p>
                   </div>
                   <div className="bento-item glass">
                      <span className="bento-icon">🎨</span>
                      <h3>Design</h3>
                      <p>Visual storytelling master.</p>
                   </div>
                   <div className="bento-item glass large">
                      <span className="bento-icon">🧠</span>
                      <h3>AI Integration</h3>
                      <p>Custom LLM & Diffusion architectures for enterprise solutions.</p>
                   </div>
                </div>

                <div className="signature-box mt-40">
                   <p className="signature-text gradient-text">Jayanth Kosana</p>
                   <p className="text-muted">Digital Architect</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="about-stats-v2">
          <div className="container">
             <div className="stats-row-v2">
                <div className="stat-v2">
                   <span className="grad">BBA</span>
                   <p>Roots College</p>
                </div>
                <div className="stat-v2">
                   <span className="grad">24/7</span>
                   <p>Innovation</p>
                </div>
                <div className="stat-v2">
                   <span className="grad">JK</span>
                   <p>Original Brand</p>
                </div>
             </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
