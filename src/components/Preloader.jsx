import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Duration of the preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          <div className="preloader-content">
            <motion.div 
              className="preloader-logo-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 1, ease: "easeOut" }
              }}
            >
              <img src="/apex-logo-final.png" alt="Apex Logo" className="preloader-logo" />
              <motion.div 



                className="logo-scan-line"
                animate={{ 
                  top: ["-10%", "110%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </motion.div>
            
            <div className="loading-bar-container">
              <motion.div 
                className="loading-bar-fill"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            
            <motion.p 
              className="loading-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Initializing Digital Experience
            </motion.p>
          </div>
          
          <div className="preloader-bg-glow"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
