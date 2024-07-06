function NavBar() {

  return (
    <div style={{
      paddingLeft: '1rem',
      paddingRight: '1rem',
      height: '3.5rem',
      display: 'flex',
      alignItems: 'center',
    }}>
      <h1 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        MapLogiX
      </h1>
      <div style={{
        marginLeft: 'auto',
        display: 'flex',
        gap: '1rem',
        '@media (min-width: 640px)': {
          gap: '1.5rem',
        },
      }}>
       
        <a href="/Login" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Login
        </a>
        <a href="/Register" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Register
        </a>
        <a href="/Calculator" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Calculator
        </a>
      </div>
    </div>
  );
};




export default NavBar;