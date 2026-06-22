import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const categories = ["All", "AI Solutions", "SaaS & FinTech", "Creative Design"];

const projects = [
  {
    title: "Zenith Retail",
    category: "AI Solutions",
    image: "/project-1.png",
    description: "A high-end retail experience featuring intelligent intent-mapping and real-time inventory magic.",
    longDescription: "Zenith Retail is a next-generation commerce platform built for elite brands. By integrating natural language search engines and real-time predictive analytics, the platform shifts the traditional search-and-filter retail design into a direct intent-mapping interface.",
    challenge: "Traditional e-commerce platforms struggle with high search drop-off rates due to strict keyword-matching search engines. Users want to describe their desires naturally.",
    solution: "We implemented an LLM-based semantic routing layer that translates user queries into complex catalog tags, paired with real-time inventory updates.",
    metrics: [
      { label: "Conversion Rate", value: "+42%" },
      { label: "Search Drop-off", value: "-65%" },
      { label: "Inventory Latency", value: "<80ms" }
    ],
    techStack: ["React 19", "OpenAI API", "Redis Cache", "Node.js Serverless"],
    gridClass: "card-wide",
    liveUrl: "https://zenith.apex.ai"
  },
  {
    title: "Aura Estates",
    category: "Creative Design",
    image: "/project-2.png",
    description: "Immersive VR-enabled digital estates for the world's most exclusive architecture labels.",
    longDescription: "Aura Estates leverages high-fidelity web visuals and lightweight spatial assets to preview ultra-luxury real estate properties. Using WebGL and premium React structures, prospective buyers can interactively tour architectural properties.",
    challenge: "Showcasing luxury architectural blueprints to remote clients without losing the sensory scale and premium feel of a physical presentation.",
    solution: "Developed an interactive WebGL canvas wrapper with premium glassmorphism overlays and ambient soundscapes to build a fully sensory virtual environment.",
    metrics: [
      { label: "Engagement Time", value: "+300%" },
      { label: "Client Inquiries", value: "2.4x" },
      { label: "First Contentful Paint", value: "0.9s" }
    ],
    techStack: ["Three.js", "React 19", "Tailwind CSS", "Framer Motion"],
    gridClass: "card-tall",
    liveUrl: "https://auraestates.apex.ai"
  },
  {
    title: "Nexus Dashboard",
    category: "SaaS & FinTech",
    image: "/project-3.png",
    description: "A high-speed minimalist financial control center for modern technology startups.",
    longDescription: "Nexus Dashboard aggregates multiple financial feeds, venture debt pipelines, and real-time burn-rate forecasts into a single hyper-performant interface, built for venture-backed startup founders.",
    challenge: "Startup founders need an instant overview of their cash runway, but existing financial aggregators are slow, cluttered, and update synchronously.",
    solution: "Designed a clean, minimalist, web-socket-driven dashboard utilizing lightweight SVG visualization trees and optimized memoization structures.",
    metrics: [
      { label: "Data Load Time", value: "<150ms" },
      { label: "Tracking Accuracy", value: "99.9%" },
      { label: "User Daily Retention", value: "84%" }
    ],
    techStack: ["Vite", "React 19", "WebSockets", "D3.js Charts"],
    gridClass: "",
    liveUrl: "https://nexus.apex.ai"
  },
  {
    title: "Synapse AI Core",
    category: "AI Solutions",
    image: "/project-synapse.png",
    description: "An enterprise AI automation workflow engine handling complex multi-agent schedules.",
    longDescription: "Synapse AI Core manages complex automated operations, using autonomous agents to handle client support escalation, data processing, and document synthesis under human-in-the-loop oversight.",
    challenge: "Legacy automation systems are rigid, failing whenever input formats deviate from strict APIs.",
    solution: "Created an adaptive routing model that evaluates inputs using low-latency LLMs, dynamically spinning up task-specific agents and self-healing error flows.",
    metrics: [
      { label: "Workflows Run", value: "1.2M+" },
      { label: "Execution Errors", value: "-92%" },
      { label: "Operation Costs", value: "-45%" }
    ],
    techStack: ["Python FastStream", "React 19", "FastAPI", "Anthropic Claude API"],
    gridClass: "",
    liveUrl: "https://synapse.apex.ai"
  },
  {
    title: "Aether Pay",
    category: "SaaS & FinTech",
    image: "/project-aether.png",
    description: "A decentralized payment protocol interface providing instant cross-border settlement widgets.",
    longDescription: "Aether Pay is a high-speed interface for decentralized smart contract deposits, simplifying international settlements for creative and technical freelancers globally.",
    challenge: "Web3 transaction flows are confusing and intimidating for non-technical users, leading to high abandonment rates.",
    solution: "Designed a sleek, streamlined checkout modal mimicking standard modern banking interfaces while abstraction-layers manage transaction propagation.",
    metrics: [
      { label: "Checkout Success", value: "98.7%" },
      { label: "Average Settlement", value: "<5 sec" },
      { label: "Onboarding Time", value: "1.5m" }
    ],
    techStack: ["Ethers.js", "React 19", "Solidity Core", "TailwindCSS"],
    gridClass: "card-wide",
    liveUrl: "https://aetherpay.apex.ai"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <AnimatedPage>
      <div className="portfolio-page-wrapper">
        {/* Background Grids & Light Effects */}
        <div className="demos-mesh"></div>
        <div className="portfolio-glow-1"></div>
        <div className="portfolio-glow-2"></div>

        <section className="internal-hero">
          <div className="hero-overlay-dark"></div>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-content centered"
            >
              <div className="badge">Selected Masterpieces</div>
              <h1 className="display-lg">The Digital <span className="gradient-text">Portfolio</span></h1>
              <p className="body-md">A curated gallery of futuristic web experiences, smart AI tools, and sleek interfaces architected by Jayanth Kosana.</p>
            </motion.div>
          </div>
        </section>

        <section className="portfolio-section-content pb-120">
          <div className="container">
            {/* Filter Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="filter-nav-container"
            >
              <div className="filter-nav">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {selectedCategory === cat && (
                      <motion.div 
                        layoutId="activeFilterIndicator"
                        className="active-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="btn-label-text">{cat}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Bento Grid */}
            <motion.div 
              layout
              className="portfolio-bento-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`portfolio-bento-card glass ${project.gridClass}`}
                    onClick={() => setActiveProject(project)}
                    whileHover={{ y: -8, scale: 1.01 }}
                  >
                    <div className="project-image-box">
                      <img src={project.image} alt={project.title} />
                      <div className="project-gradient-overlay"></div>
                      <span className="bento-category-badge">{project.category}</span>
                    </div>
                    <div className="project-bento-info">
                      <h3 className="heading">{project.title}</h3>
                      <p className="body-sm">{project.description}</p>
                      
                      {/* Interactive Footer */}
                      <div className="project-card-footer">
                        <div className="tech-pills-row">
                          {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="tech-pill-badge">{tech}</span>
                          ))}
                          {project.techStack.length > 3 && <span className="tech-pill-badge plus">+{project.techStack.length - 3}</span>}
                        </div>
                        <span className="case-study-trigger">View Details ↗</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Project Case Study Modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="modal-overlay" onClick={() => setActiveProject(null)}>
              <motion.div 
                className="modal-content case-study-modal glass"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={() => setActiveProject(null)}>&times;</button>
                
                <div className="modal-body">
                  <div className="badge subtitle">{activeProject.category}</div>
                  <h2 className="modal-headline section-title">{activeProject.title}</h2>
                  
                  {/* Banner Image */}
                  <div className="modal-banner-box mt-20">
                    <img src={activeProject.image} alt={activeProject.title} />
                    <div className="banner-glow-overlay"></div>
                  </div>

                  {/* Core Content Grid */}
                  <div className="modal-case-study-grid mt-40">
                    <div className="case-study-narrative">
                      <h3>The Objective</h3>
                      <p className="body-md text-muted">{activeProject.longDescription}</p>

                      <div className="challenge-solution-row mt-30">
                        <div className="part">
                          <h4 className="label-title">The Challenge</h4>
                          <p className="body-sm text-muted">{activeProject.challenge}</p>
                        </div>
                        <div className="part mt-20">
                          <h4 className="label-title gradient-text">Our Solution</h4>
                          <p className="body-sm text-muted">{activeProject.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="case-study-sidebar">
                      {/* Tech Stack */}
                      <div className="sidebar-widget glass">
                        <h4>Technologies Used</h4>
                        <div className="tech-badges-grid mt-20">
                          {activeProject.techStack.map(tech => (
                            <span key={tech} className="tech-badge-item">{tech}</span>
                          ))}
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="sidebar-widget glass mt-20">
                        <h4>Key Impact Metrics</h4>
                        <div className="metrics-column mt-20">
                          {activeProject.metrics.map((metric, idx) => (
                            <div key={idx} className="metric-box">
                              <span className="metric-val gradient-text">{metric.value}</span>
                              <span className="metric-label">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className="modal-actions-bar mt-40">
                    <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Launch Live Site ↗</a>
                    <button className="btn-secondary" onClick={() => { setActiveProject(null); window.location.href='/contact'; }}>Request Similar Build</button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Global CTA */}
        <section className="contact-cta section-padding">
          <div className="container">
            <div className="cta-box glass">
              <h2>Ready to build a digital masterpiece?</h2>
              <p>Let's collaborate and architect a high-converting online presence that works like magic.</p>
              <button className="btn-primary btn-pop" onClick={() => window.location.href='/contact'}>Inquire with Jayanth</button>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
