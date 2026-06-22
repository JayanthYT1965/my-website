import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const PRELOADED_KNOWLEDGE = {
  physics: {
    subject: "Physics - Laws of Motion",
    content: "Newton's First Law (Law of Inertia): An object will remain at rest or keep moving at a constant speed in a straight line unless acted upon by an external force.\nNewton's Second Law: Force equals mass times acceleration (F = ma). A larger force is needed to accelerate heavier objects.\nNewton's Third Law: For every action, there is an equal and opposite reaction. Forces always occur in matched pairs.\nGravity: Earth attracts objects with an acceleration of 9.8 m/s².",
    suggestions: [
      "What is Newton's First Law?",
      "How is Force calculated?",
      "Explain the Third Law.",
      "What is the rate of gravity?"
    ]
  },
  chemistry: {
    subject: "Chemistry - Atomic Structure",
    content: "Atoms: The basic building blocks of matter. Consists of a central nucleus surrounded by electrons.\nNucleus: Contains positive Protons and neutral Neutrons.\nElectrons: Negatively charged particles (-1) orbiting outside the nucleus in electron shells.\nAtomic Number: Equal to the number of protons in an atom, defining its element identity.\nMass Number: Sum of protons and neutrons in the nucleus.",
    suggestions: [
      "What are the parts of an atom?",
      "What is the charge of an electron?",
      "What does the Nucleus contain?",
      "What is the Atomic Number?"
    ]
  },
  agency: {
    subject: "Apex Interactive Guide",
    content: "Apex Interactive is an elite AI website agency founded by Jayanth Kosana.\nSpecialties: We build smart web systems, LLM integrations, and custom chatbots.\nContact Email: jayanth.kosan@gmail.com\nContact Phone: +91 7993461422\nFounder Profile: Jayanth Kosana is a visionary technology developer focused on human-centric AI designs.",
    suggestions: [
      "Who founded Apex Interactive?",
      "What is the contact email?",
      "What does Apex specialize in?",
      "What is the phone number?"
    ]
  }
};

const getBotResponse = (question, knowledgeText) => {
  const q = question.toLowerCase().trim();
  
  if (q.includes("hello") || q.includes("hi ") || q === "hi") {
    return "Hello! I am your study assistant. Ask me anything about the teacher's uploaded data above.";
  }
  
  const lines = knowledgeText.split(/[.\n]/).map(line => line.trim()).filter(Boolean);
  let bestMatch = null;
  let maxScore = 0;
  
  const stopWords = new Set(["what", "is", "how", "the", "a", "an", "of", "and", "in", "to", "for", "on", "with", "at", "by", "about", "explain", "describe", "tell", "me"]);
  const questionWords = q.split(/[^a-zA-Z0-9]+/).filter(w => w && !stopWords.has(w));
  
  for (const line of lines) {
    const lineLower = line.toLowerCase();
    let score = 0;
    
    for (const word of questionWords) {
      if (lineLower.includes(word)) {
        score += 2;
        if (new RegExp(`\\b${word}\\b`).test(lineLower)) {
          score += 1;
        }
      }
    }
    
    if (score > maxScore) {
      maxScore = score;
      bestMatch = line;
    }
  }
  
  if (maxScore >= 3) {
    return bestMatch + ".";
  }
  
  return "I am programmed to only answer from the teacher's knowledge base. I couldn't find a reference to that in the current lesson data.";
};

const Services = () => {
  const [activeSubject, setActiveSubject] = useState("physics");
  const [knowledgeText, setKnowledgeText] = useState(PRELOADED_KNOWLEDGE.physics.content);
  const [suggestions, setSuggestions] = useState(PRELOADED_KNOWLEDGE.physics.suggestions);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I am your AI classroom assistant. I will answer questions strictly from the teacher's knowledge base on the left." }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    setKnowledgeText(PRELOADED_KNOWLEDGE[activeSubject].content);
    setSuggestions(PRELOADED_KNOWLEDGE[activeSubject].suggestions);
    setMessages([
      { sender: 'bot', text: `Loaded data for ${PRELOADED_KNOWLEDGE[activeSubject].subject}. Ask me any questions about this lesson!` }
    ]);
  }, [activeSubject]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;
    
    const userMessage = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(textToSend, knowledgeText);
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleUpdateKnowledge = () => {
    setShowToast(true);
    setMessages(prev => [
      ...prev,
      { sender: 'bot', text: "⚠️ Teacher updated the knowledge base! I will now answer based on the new information." }
    ]);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <AnimatedPage>
      <div className="services-page-wrapper">
        <div className="demos-mesh"></div>
        <div className="services-glow-1"></div>
        <div className="services-glow-2"></div>

        {/* Hero Header */}
        <section className="internal-hero" style={{ backgroundImage: 'url(/services-bg.png)' }}>
          <div className="hero-overlay-dark"></div>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-content centered"
            >
              <div className="badge">Our Capabilities</div>
              <h1 className="display-lg">Advanced <span className="gradient-text">AI Solutions</span></h1>
              <p className="body-md">Jayanth Kosana builds smart web products and conversational AIs that read, learn, and act autonomously.</p>
            </motion.div>
          </div>
        </section>

        {/* 1. Interactive Chatbot Playground */}
        <section className="section-padding bg-darker sandbox-section">
          <div className="sandbox-neon-glow-top"></div>
          <div className="sandbox-neon-glow-bottom"></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="section-header centered">
              <div className="badge subtitle-badge">Interactive Feature</div>
              <h2 className="section-title"><span className="gradient-text">Teacher-Controlled Chatbot Sandbox</span></h2>
              <p className="section-desc">Test your custom lesson database in real time. Inject new curriculum details on the left; converse as a student using the simulator on the right.</p>
            </div>

            <div className="chatbot-sandbox-grid mt-60">
              {/* Teacher Panel */}
              <div className="teacher-control-panel glass">
                <div className="panel-header">
                  <span className="panel-icon">🎓</span>
                  <div>
                    <h3>Teacher's Console</h3>
                    <p className="body-xs text-muted">Manage the AI's direct training data</p>
                  </div>
                </div>

                {/* Telemetry Diagnostics Grid */}
                <div className="terminal-diagnostics mt-20">
                  <div className="diag-stat">
                    <span className="lbl">ACTIVE MODEL:</span>
                    <span className="val cyan-glow">CLAUDE-3.5-SONNET</span>
                  </div>
                  <div className="diag-stat">
                    <span className="lbl">TEMPERATURE:</span>
                    <span className="val purple-glow">0.15 (STRICT)</span>
                  </div>
                  <div className="diag-stat">
                    <span className="lbl">EMBEDDINGS:</span>
                    <span className="val green-glow">READY</span>
                  </div>
                </div>

                {/* Database Info Ribbon */}
                <div className="db-info-ribbon mt-20">
                  <div className="db-status">
                    <span className="pulse-ring green"></span>
                    <span className="status-lbl">LIVE SYNC ACTIVE</span>
                  </div>
                  <div className="db-char-count">
                    <span>CONTEXT CAPACITY:</span> <strong>{knowledgeText.length} / 2048 Chars</strong>
                  </div>
                </div>

                <div className="subject-preset-row mt-20">
                  {Object.keys(PRELOADED_KNOWLEDGE).map(key => (
                    <button
                      key={key}
                      className={`preset-tab-btn ${activeSubject === key ? 'active' : ''}`}
                      onClick={() => setActiveSubject(key)}
                    >
                      {PRELOADED_KNOWLEDGE[key].subject.split(' - ')[0]}
                    </button>
                  ))}
                </div>

                <div className="knowledge-input-widget mt-20">
                  <label className="body-xs text-muted">Lessons/Curriculum Content (Editable IDE style):</label>
                  <textarea
                    value={knowledgeText}
                    onChange={(e) => setKnowledgeText(e.target.value)}
                    rows="8"
                    placeholder="Enter facts, rules, or text for the AI to learn..."
                  />
                </div>

                <button 
                  className="btn-primary w-full mt-20 update-knowledge-btn"
                  onClick={handleUpdateKnowledge}
                >
                  Publish Knowledge Update ⚡
                </button>
              </div>

              {/* Student Mock Mobile Device */}
              <div className="student-mobile-device-wrapper">
                <div className="mobile-frame glass">
                  <div className="camera-notch"></div>
                  <div className="glass-reflection-glare"></div>
                  
                  {/* Status Bar */}
                  <div className="phone-status-bar">
                    <span className="time">9:41 AM</span>
                    <div className="indicators">
                      <span className="signal">📶</span>
                      <span className="wifi">📶</span>
                      <span className="battery">🔋</span>
                    </div>
                  </div>

                  {/* Chat Interface */}
                  <div className="student-chat-viewport">
                    <div className="chat-header">
                      <div className="avatar">🤖</div>
                      <div>
                        <h4>AI Classroom Companion</h4>
                        <span className="status-indicator">
                          <span className="pulse-dot"></span> Locked to Lesson Data
                        </span>
                      </div>
                    </div>

                    <div ref={messagesContainerRef} className="chat-messages-container">
                      <AnimatePresence initial={false}>
                        {messages.map((msg, index) => (
                          <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className={`message-bubble-wrapper ${msg.sender}`}
                          >
                            <div className="msg-avatar">{msg.sender === 'bot' ? '🤖' : '🎓'}</div>
                            <div className="message-bubble">{msg.text}</div>
                          </motion.div>
                        ))}
                        
                        {isTyping && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="message-bubble-wrapper bot"
                          >
                            <div className="msg-avatar">🤖</div>
                            <div className="message-bubble typing-box">
                              <span className="typing-dot"></span>
                              <span className="typing-dot"></span>
                              <span className="typing-dot"></span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Suggested Prompts Grid */}
                    <div className="suggested-prompts-container">
                      <span className="label text-muted">Suggested Student Inquiries:</span>
                      <div className="prompts-grid mt-10">
                        {suggestions.map((q, idx) => (
                          <button
                            key={idx}
                            className="prompt-pill"
                            onClick={() => handleSendMessage(q)}
                            disabled={isTyping}
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Input Area */}
                    <form 
                      className="chat-input-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage(userInput);
                      }}
                    >
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ask the bot about the lesson..."
                        disabled={isTyping}
                      />
                      <button type="submit" className="send-btn" disabled={!userInput.trim() || isTyping}>
                        ↗
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Services Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="section-header centered">
              <div className="badge">Ecosystem Offerings</div>
              <h2 className="section-title">AI Agency <span className="gradient-text">Capabilities</span></h2>
              <p className="section-desc">We build enterprise-grade intelligence frameworks and futuristic visual layouts.</p>
            </div>

            <div className="services-grid large mt-60">
              <motion.div 
                className="service-card glass highlighted-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="service-icon-box">
                  <span className="service-icon">🤖</span>
                </div>
                <div className="highlight-tag">Flagship offering</div>
                <h3>Neural Conversational Agents</h3>
                <p>We build secure, custom chatbots locked to your specific dataset or knowledge base. Perfect for education, training, and client support, answering accurately while respecting boundaries.</p>
              </motion.div>

              <motion.div 
                className="service-card glass"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="service-icon-box">
                  <span className="service-icon">🌐</span>
                </div>
                <h3>Digital Estates</h3>
                <p>Scaling premium, high-performance web products. Hand-crafted using React and Vite, optimizing conversion, speed, and clean semantic layouts.</p>
              </motion.div>

              <motion.div 
                className="service-card glass"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="service-icon-box">
                  <span className="service-icon">⚙️</span>
                </div>
                <h3>Intelligent Automation</h3>
                <p>Connecting background tasks, schedules, and custom self-healing agent pipelines to streamline workflows and reduce overhead costs.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Features & Benefits Bento Grid */}
        <section className="section-padding bg-darker benefits-section">
          <div className="container">
            <div className="section-header centered">
              <div className="badge">Technical Standard</div>
              <h2 className="section-title">Production-Grade <span className="gradient-text">Architectures</span></h2>
              <p className="section-desc">Every application is engineered to meet elite standards of performance, speed, and security.</p>
            </div>

            <div className="benefits-bento-grid mt-60">
              <motion.div 
                className="benefit-card bento-wide glass"
                whileHover={{ scale: 1.01 }}
              >
                <div className="benefit-icon">🗄️</div>
                <div className="benefit-content">
                  <h3>Semantic Vector Indexing</h3>
                  <p>Enabling custom models to recall facts from massive text databases with sub-100ms query lookups, providing context-accurate references without hallucinations.</p>
                </div>
              </motion.div>

              <motion.div 
                className="benefit-card bento-small glass"
                whileHover={{ scale: 1.01 }}
              >
                <div className="benefit-icon">🔌</div>
                <div className="benefit-content">
                  <h3>Omnichannel API Deployment</h3>
                  <p>Integrate your conversational agents directly into WhatsApp, Slack, Telegram, Discord, or native custom website widgets.</p>
                </div>
              </motion.div>

              <motion.div 
                className="benefit-card bento-small glass"
                whileHover={{ scale: 1.01 }}
              >
                <div className="benefit-icon">📈</div>
                <div className="benefit-content">
                  <h3>99.9% Uptime Guarantee</h3>
                  <p>Deployed on Edge architectures with global CDN routing and self-healing system triggers to ensure zero downtime.</p>
                </div>
              </motion.div>

              <motion.div 
                className="benefit-card bento-wide glass"
                whileHover={{ scale: 1.01 }}
              >
                <div className="benefit-icon">💎</div>
                <div className="benefit-content">
                  <h3>Founder-Led Engineering</h3>
                  <p>Jayanth Kosana oversees every architectural decision, guaranteeing clean semantic code, premium aesthetics, and responsive performance.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Toast for Success */}
        <AnimatePresence>
          {showToast && (
            <motion.div 
              className="success-toast-alert"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
            >
              <span>✅ Knowledge base successfully synced to student bot!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
};

export default Services;
