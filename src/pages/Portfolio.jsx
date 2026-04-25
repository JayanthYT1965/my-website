import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const projects = [
  {
    title: "Zenith Retail",
    category: "AI E-Commerce",
    image: "/project-1.png",
    description: "A high-end retail experience featuring intelligent intent-mapping and real-time inventory magic."
  },
  {
    title: "Aura Estates",
    category: "Luxury Real Estate",
    image: "/project-2.png",
    description: "Immersive VR-enabled digital estates for the world's most exclusive architecture labels."
  },
  {
    title: "Nexus Dashboard",
    category: "FinTech / SaaS",
    image: "/project-3.png",
    description: "A high-speed minimalist financial control center for modern technology startups."
  }
];

const Portfolio = () => {
  return (
    <AnimatedPage>
      <div className="portfolio-page-wrapper">
        <section className="internal-hero">
          <div className="hero-overlay-dark"></div>
          <div className="container">
            <div className="hero-content centered">
              <div className="badge">Selected Work</div>
              <h1 className="display-lg">The Digital <span className="gradient-text">Portfolio</span></h1>
              <p className="body-md">A curated gallery of futuristic web experiences designed by Jayanth Kosana.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <div key={index} className="portfolio-card glass">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span className="project-category">{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <div className="project-info">
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta section-padding">
          <div className="container">
            <div className="cta-box glass">
              <h2>Have a project in mind?</h2>
              <p>Let's turn your vision into the next masterpiece.</p>
              <button className="btn-primary btn-pop">Contact Jayanth</button>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
