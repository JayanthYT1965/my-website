import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Services = () => {
  return (
    <AnimatedPage>
      <section className="internal-hero" style={{ backgroundImage: 'url(/services-bg.png)' }}>
        <div className="hero-overlay-dark"></div>
        <div className="container">
          <div className="hero-content centered">
            <div className="badge">Our Expertise</div>
            <h1 className="display-lg">Advanced <span className="gradient-text">AI Solutions</span></h1>
            <p className="body-md">Jayanth Kosana's team specializes in bridging the gap between human creativity and machine intelligence.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid large">
            <div className="service-card glass">
              <div className="service-icon">🤖</div>
              <h3>Neural Interfaces</h3>
              <p>We build seamless AI integrations that allow your users to communicate naturally with your platform.</p>
            </div>
            <div className="service-card glass">
              <div className="service-icon">🌐</div>
              <h3>Digital Estates</h3>
              <p>Scaling your presence with intelligent architectures that grow as you grow.</p>
            </div>
            <div className="service-card glass">
              <div className="service-icon">👁️</div>
              <h3>Computer Vision</h3>
              <p>Websites that can see and understand high-level visual data to personalize the experience.</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Services;
