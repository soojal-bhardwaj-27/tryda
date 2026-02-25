const Footer = () => {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Services',
      links: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Case Studies', 'FAQs', 'Support'],
    },
  ];

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                T
              </div>
              <span style={{ fontSize: 22, fontWeight: 700 }}>Tryda</span>
            </div>
            <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              We design and develop exceptional digital experiences for forward-thinking companies.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 20, color: '#fff' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 12 }}>
                    <a
                      href="#"
                      style={{ color: '#666', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.target.style.color = '#fff')}
                      onMouseLeave={(e) => (e.target.style.color = '#666')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ color: '#444', fontSize: 13 }}>© {year} Tryda. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((s) => (
              <a
                key={s}
                href="#"
                style={{ color: '#555', fontSize: 13, textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#555')}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
