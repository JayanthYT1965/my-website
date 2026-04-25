import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Database, CalendarCheck } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Step 1: The Trigger",
    text: "A customer sends a WhatsApp message or clicks the website chat."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Step 2: Instant AI Response",
    text: "Apex AI instantly reads, understands, and replies using your business data."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Step 3: Data Capture",
    text: "The AI qualifies the lead and automatically logs their details into your CRM or Google Sheets."
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Step 4: The Close",
    text: "The AI sends a calendar link and locks in the meeting while you sleep."
  }
];

const WorkflowVisualizer = () => {
  return (
    <section className="workflow-visualizer section-padding">
      <div className="container">
        <div className="section-header centered">
          <div className="badge">Process</div>
          <h2 className="section-title">How Our <span className="gradient-text">AI Automations</span> Work</h2>
          <p className="section-desc">A seamless, hands-free pipeline from the first message to a booked meeting.</p>
        </div>

        <div className="workflow-grid-container">
          {/* Connecting Line (Horizontal for Desktop) */}
          <div className="workflow-line-bg">
            <motion.div 
              className="workflow-line-pulse"
              animate={{ 
                left: ["-100%", "100%"] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </div>

          <div className="workflow-steps">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="workflow-step-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-icon-box">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualizer;
