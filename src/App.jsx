import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Gem } from 'lucide-react';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

function AppContent() {
  const location = useLocation();
  const [isPremium, setIsPremium] = useState(() => {
    return localStorage.getItem('theme-mode') === 'premium';
  });

  useEffect(() => {
    if (isPremium) {
      document.documentElement.classList.add('premium-mode');
      localStorage.setItem('theme-mode', 'premium');
    } else {
      document.documentElement.classList.remove('premium-mode');
      localStorage.setItem('theme-mode', 'default');
    }
  }, [isPremium]);

  return (
    <div className="app">
      <Preloader />
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo heading">
            Apex <span className="gradient-text">Interactive</span>
          </Link>
          
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>


          <div className="nav-actions">
            <button 
              className={`theme-toggle ${isPremium ? 'active' : ''}`}
              onClick={() => setIsPremium(!isPremium)}
              title={isPremium ? "Switch to Default Mode" : "Switch to Luxury Mode"}
            >
              <Gem className="w-5 h-5" />
            </button>
            <Link to="/contact" className="btn-nav">Contact Me</Link>
          </div>
        </div>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo heading">
              Apex <span className="gradient-text">Interactive</span>
            </Link>
            <p className="footer-tagline">Building the future of web, one pixel at a time.</p>
          </div>

          
          <div className="footer-contact">
            <h3>Connect</h3>
            <div className="contact-item">
              <span>Instagram:</span> <a href="https://instagram.com/Jayanth.261" target="_blank">@Jayanth.261</a>
            </div>
            <div className="contact-item">
              <span>Email:</span> <a href="mailto:Jayanthroblox@gmail.com">Jayanthroblox@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>Phone:</span> <a href="tel:7993461422">+91 7993461422</a>
            </div>
          </div>

          <div className="footer-credits">
            <p>Founded by <span className="gradient-text">Jayanth Kosana</span></p>
            <p className="copyright">&copy; 2026 Apex Interactive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

