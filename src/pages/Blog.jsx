import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const Blog = () => {
  return (
    <AnimatedPage>
      <section className="internal-hero" style={{ backgroundImage: 'url(/blog-bg.png)' }}>
        <div className="hero-overlay-dark"></div>
        <div className="container">
          <div className="hero-content centered">
            <div className="badge">Insights</div>
            <h1 className="display-lg">The <span className="gradient-text">AI Ledger</span></h1>
            <p className="body-md">Thoughts on magic, code, and the future of interaction by Jayanth Kosana.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="blog-grid">
            <div className="blog-item glass">
              <span className="blog-date">March 24, 2026</span>
              <h3>Why AI agents are the new UI</h3>
              <p>Exploring how conversation is replacing buttons in the modern web stack...</p>
            </div>
            <div className="blog-item glass">
              <span className="blog-date">April 10, 2026</span>
              <h3>The Golden Ratio in Code</h3>
              <p>How precision engineering leads to higher conversion and better magic...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Contact Section for Blog */}
      <section className="contact-cta section-padding">
        <div className="container">
          <div className="cta-box glass">
            <h2>Ready to start your magic?</h2>
            <p>Connect with Jayanth Kosana today and build something amazing.</p>
            <Link to="/contact" className="btn-primary btn-pop">Contact Me</Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Blog;
