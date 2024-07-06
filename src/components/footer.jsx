function Footer() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
      width: '100%',
      flexShrink: '0',
      alignItems: 'center',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      borderTop: '1px solid #e5e7eb',
      '@media (min-width: 640px)': {
        flexDirection: 'row',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      },
    }}>
      <p style={{
        fontSize: '0.75rem',
        color: '#6b7280',
      }}>© 2024 MapLogiX. All rights reserved.</p>
      <div style={{
        display: 'flex',
        gap: '1rem',
        '@media (min-width: 640px)': {
          marginLeft: 'auto',
          gap: '1.5rem',
        },
      }}>
        <a href="/" style={{
          fontSize: '0.75rem',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Terms of Service
        </a>
        <a href="/" style={{
          fontSize: '0.75rem',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
