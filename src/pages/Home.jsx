import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import WorkflowVisualizer from '../components/WorkflowVisualizer';

const servicesData = [
  {
    id: 1,
    icon: "💻",
    title: "Custom Web Development",
    shortDesc: "We build lightning-fast, responsive websites tailored to your exact business needs.",
    headline: "Building Your Digital Foundation",
    fullContent: "A website is more than just a digital brochure; it’s your 24/7 salesperson. We specialize in building fast, scalable, and responsive websites that look incredible on both mobile devices and large desktop monitors. Whether you need a dynamic custom web application, a secure peer-to-peer marketplace, or a sleek corporate landing page, we handle the entire technical stack. We ensure your site is optimized for speed, built with clean code, and ready to handle high traffic seamlessly."
  },
  {
    id: 2,
    icon: "🎥",
    title: "Creative Production & Editing",
    shortDesc: "Professional video and photo editing services to ensure your brand's visuals are as premium as your digital infrastructure.",
    headline: "Visual Storytelling That Converts",
    fullContent: "High-ticket clients expect premium visuals. Our creative production services ensure your brand looks its absolute best. We provide professional-grade video and photo editing, turning raw footage into captivating social media reels, event highlights, and brand commercials. From color grading and audio syncing to dynamic transitions and motion graphics, we refine your content so it grabs attention and drives engagement."
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI-Driven Branding & Assets",
    shortDesc: "Leverage cutting-edge AI tools to generate unique, high-quality brand assets and marketing materials.",
    headline: "The Future of Brand Identity",
    fullContent: "Stop waiting weeks for traditional photoshoots or graphic design iterations. We utilize state-of-the-art AI generation tools to rapidly prototype and produce stunning brand assets. Need customized imagery, futuristic marketing materials, or unique visual concepts for a campaign? We engineer the perfect prompts to generate high-fidelity, royalty-free assets that give your business a cutting-edge, modern identity in a fraction of the time."
  }
];

const Home = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <AnimatedPage>
      <section className="hero" id="home">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-glow-top"></div>
        <div className="container">
          <div className="hero-content">
            <div className="badge">Smart AI Agency</div>
            <h1 className="hero-title">We Build Magic <br /> Websites That <span className="gradient-text">Think For You</span></h1>
            <p className="hero-subtitle">
              Apex Interactive makes smart websites that work like magic. 
              Founder <strong>Jayanth Kosana</strong> and his team help your business grow using cool AI tools.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary btn-pop">Contact Me</Link>
            </div>
          </div>
        </div>
        <div className="hero-glow-bottom"></div>
      </section>

      {/* Services Section */}
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Ecosystem</div>
            <h2 className="section-title">Beyond Development. <br /><span className="gradient-text">A Complete Digital Ecosystem.</span></h2>
            <p className="section-desc">At Apex Interactive, we don’t just build websites. We craft digital experiences, from the underlying code to the visual assets that capture your audience.</p>
          </div>
          
          <div className="services-grid">
            {servicesData.map((service) => (
              <motion.div 
                key={service.id}
                className="service-card glass clickable-card"
                onClick={() => setActiveService(service)}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="service-icon-box">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <div className="card-footer mt-20">
                   <span className="learn-more">Learn More <span className="arrow">→</span></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Popup */}
      <AnimatePresence>
        {activeService && (
          <div className="modal-overlay" onClick={() => setActiveService(null)}>
            <motion.div 
              className="modal-content glass"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setActiveService(null)}>&times;</button>
              
              <div className="modal-body">
                <div className="service-icon-box modal-icon">
                  <span className="service-icon">{activeService.icon}</span>
                </div>
                <div className="badge subtitle">{activeService.title}</div>
                <h2 className="modal-headline section-title">{activeService.headline}</h2>
                <div className="modal-text-content mt-40">
                   <p className="body-md text-muted">{activeService.fullContent}</p>
                </div>
                <div className="modal-actions mt-40">
                   <Link to="/contact" className="btn-primary" onClick={() => setActiveService(null)}>Inquire About This</Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Pillars Section */}
      <section className="pillars section-padding bg-darker">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar">
              <span className="pillar-num">01</span>
              <h3>Precision</h3>
              <p>Every line of code is written with absolute intent. We don't believe in \"good enough.\" We believe in perfection.</p>
            </div>
            <div className="pillar">
              <span className="pillar-num">02</span>
              <h3>Empathy</h3>
              <p>We build for humans. Our AI integrations are designed to feel natural, intuitive, and genuinely helpful.</p>
            </div>
            <div className="pillar">
              <span className="pillar-num">03</span>
              <h3>Innovation</h3>
              <p>We use the latest frameworks and models before they even hit the mainstream. You stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Snippet */}
      <section className="featured section-padding">
        <div className="container">
           <div className="featured-flex">
              <div className="featured-content">
                 <div className="badge">Portfolio</div>
                 <h2 className="section-title">Featured <br /> <span className="gradient-text">Masterpieces</span></h2>
                 <p className="body-md text-muted">A glimpse into the digital estates we've architected for our high-end clients.</p>
                 <Link to="/portfolio" className="btn-secondary mt-20">View All Projects</Link>
              </div>
              <div className="featured-image-stack">
                 <div className="stack-item glass"><img src="/project-1.png" alt="Project" /></div>
                 <div className="stack-item glass"><img src="/project-2.png" alt="Project" /></div>
              </div>
           </div>
        </div>
      </section>

      {/* Industry Demos Section */}
      <section className="industry-demos section-padding">
        <div className="demos-mesh"></div>
        <div className="demo-glow demo-glow-1"></div>
        <div className="demo-glow demo-glow-2"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header">
            <div className="badge">Tailored Solutions</div>
            <h2 className="section-title">Live Technical <span className="gradient-text">Demos</span></h2>
            <p className="section-desc">Interact with our live builds and test our AI bots in real-time.</p>
          </div>
          
          <div className="demos-grid">
            <motion.div 
              className="demo-card glass glow-card" 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="demo-content">
                <h3>High-Converting Landing Page</h3>
                <p className="body-md text-muted">A lightning-fast, modern corporate template optimized for speed and lead generation.</p>
                <div className="mt-40">
                   <a href="https://calendly.com/jayanthroblox/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-small">Book a Live Demo</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="demo-card glass glow-card" 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="demo-content">
                <h3>Automated AI Chatbot</h3>
                <p className="body-md text-muted">Test our live AI agent. See how it handles complex customer queries and captures lead information automatically.</p>
                <div className="mt-40">
                   <a href="https://calendly.com/jayanthroblox/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-small">Book a Live Demo</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="demo-card glass glow-card" 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="demo-content">
                <h3>Custom P2P Marketplace</h3>
                <p className="body-md text-muted">A fully functional peer-to-peer web application demonstrating dynamic routing, user dashboards, and complex database management.</p>
                <div className="mt-40">
                   <a href="https://calendly.com/jayanthroblox/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-small">Book a Live Demo</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Workflow Visualizer Section */}
      <WorkflowVisualizer />

      {/* Philosophy Section */}
      <section className="philosophy section-padding bg-darker">
        <div className="container">
           <div className="quote-box centered">
              <span className="quote-mark">\"</span>
              <h2 className="quote-text">The best way to <span className="gradient-text">predict the future</span> is to invent it.</h2>
              <p className="quote-author">— Alan Kay (Applied by Jayanth Kosana)</p>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section-padding">
        <div className="container">
          <div className="cta-banner glass">
             <h2 className="display-md">Ready to start <br /> your <span className="gradient-text">Magic?</span></h2>
             <Link to="/contact" className="btn-primary btn-pop">Launch Project</Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
