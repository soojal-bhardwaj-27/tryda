import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// ===== ANIMATION VARIANTS =====
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

// ===== DATA =====
const services = [
  { icon: '⚡', title: 'Web Development', desc: 'High-performance websites built with React, Next.js, and modern technologies.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, user-centered designs that convert visitors into customers.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Native and cross-platform apps for iOS and Android.' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable infrastructure on AWS, GCP, and Azure.' },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

const partners = [
  { name: 'White Label', desc: 'We build under your brand. Perfect for agencies.', highlight: false },
  { name: 'Dedicated Team', desc: 'A full team of experts, fully managed by us.', highlight: true },
  { name: 'Project Based', desc: 'Fixed scope, clear deliverables, fast execution.', highlight: false },
];

// ===== PARALLAX SECTION WRAPPER =====
const ParallaxSection = ({ children, className, style, id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </motion.section>
  );
};

// ===== HERO SECTION =====
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 100,
      }}
    >
      {/* Animated Background Gradients */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [180, 360, 540],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <motion.div 
        className="container"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={stagger} 
          style={{ maxWidth: 800 }}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: 24 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(124, 58, 237, 0.1)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 500,
                color: '#a78bfa',
              }}
            >
              🚀 Design & Development Agency
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            style={{
              fontSize: 'clamp(40px, 8vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            We build <span className="gradient-text">digital products</span> that people love
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            style={{ fontSize: 20, color: '#888', maxWidth: 560, marginBottom: 40, lineHeight: 1.7 }}
          >
            Transform your vision into reality. We create exceptional websites, apps, and brand experiences that drive results.
          </motion.p>

          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">Start a Project</a>
            <a href="#work" className="btn btn-outline">View Our Work</a>
          </motion.div>
        </motion.div>

        {/* Stats with stagger */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            marginTop: 100,
            paddingTop: 60,
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
          className="grid-4"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.label}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <p className="gradient-text" style={{ fontSize: 40, fontWeight: 800, marginBottom: 4 }}>
                {stat.value}
              </p>
              <p style={{ color: '#666', fontSize: 14 }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: '#555',
          fontSize: 12,
        }}
      >
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
};

// ===== SERVICES SECTION =====
const Services = () => (
  <section id="services" className="section" style={{ background: '#0d0d0d' }}>
    <div className="container">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Services we offer</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            End-to-end solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid-4">
          {services.map((s, i) => (
            <motion.div 
              key={s.title} 
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card"
            >
              <motion.div 
                style={{ fontSize: 40, marginBottom: 20 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {s.icon}
              </motion.div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: '#777', fontSize: 15, lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ===== WORK SECTION =====
const Work = () => (
  <section id="work" className="section">
    <div className="container">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Work</h2>
        </motion.div>

        <motion.div
          variants={scaleIn}
          whileHover={{ scale: 1.02 }}
          style={{
            padding: 80,
            border: '1px dashed rgba(255,255,255,0.1)',
            borderRadius: 16,
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#555', fontSize: 16 }}>🖼️ Portfolio coming soon...</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ===== PARTNERS SECTION =====
const Partners = () => (
  <section id="about" className="section" style={{ background: '#0d0d0d' }}>
    <div className="container">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">Work With Us</span>
          <h2 className="section-title">Partnership Models</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Flexible engagement options for every need
          </p>
        </motion.div>

        <div className="grid-3">
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeInUp}
              whileHover={{ 
                y: -15, 
                boxShadow: p.highlight 
                  ? '0 30px 60px rgba(124,58,237,0.3)' 
                  : '0 30px 60px rgba(0,0,0,0.3)',
                transition: { duration: 0.3 }
              }}
              className="card"
              style={{
                textAlign: 'center',
                border: p.highlight ? '1px solid rgba(124,58,237,0.4)' : undefined,
                boxShadow: p.highlight ? '0 0 60px rgba(124,58,237,0.15)' : undefined,
              }}
            >
              {p.highlight && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    padding: '4px 12px',
                    borderRadius: 50,
                    fontSize: 11,
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  POPULAR
                </motion.span>
              )}
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{p.name}</h3>
              <p style={{ color: '#777', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>{p.desc}</p>
              <motion.a 
                href="#contact" 
                className={p.highlight ? 'btn btn-primary' : 'btn btn-outline'} 
                style={{ width: '100%' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ===== CONTACT SECTION =====
const Contact = () => (
  <section id="contact" className="section">
    <div className="container" style={{ textAlign: 'center' }}>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.5 }}
        variants={stagger}
      >
        <motion.h2 
          variants={scaleIn} 
          className="section-title" 
          style={{ marginBottom: 16 }}
        >
          Ready to start your project?
        </motion.h2>
        <motion.p 
          variants={fadeInUp} 
          style={{ color: '#777', fontSize: 18, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}
        >
          Let's discuss how we can help bring your ideas to life.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <motion.a 
            href="mailto:hello@tryda.com" 
            className="btn btn-primary" 
            style={{ fontSize: 16, padding: '16px 40px' }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ===== PAGE =====
const Home = () => (
  <main>
    <Hero />
    <Services />
    <Work />
    <Partners />
    <Contact />
  </main>
);

export default Home;
