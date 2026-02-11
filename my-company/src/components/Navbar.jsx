import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '15px 20px',
      justifyContent: 'center',
      backgroundColor: '#2c3e50',
      display: 'flex',
      gap: '30px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#fff',
        fontWeight: '500',
        fontSize: '16px',
        transition: 'color 0.3s'
      }} onMouseEnter={(e) => e.target.style.color = '#3498db'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
        Home
      </Link>
      <Link to="/about" style={{
        textDecoration: 'none',
        color: '#fff',
        fontWeight: '500',
        fontSize: '16px',
        transition: 'color 0.3s'
      }} onMouseEnter={(e) => e.target.style.color = '#3498db'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
        About
      </Link>
      <Link to="/services" style={{
        textDecoration: 'none',
        color: '#fff',
        fontWeight: '500',
        fontSize: '16px',
        transition: 'color 0.3s'
      }} onMouseEnter={(e) => e.target.style.color = '#3498db'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
        Services
      </Link>
      <Link to="/contact" style={{
        textDecoration: 'none',
        color: '#fff',
        fontWeight: '500',
        fontSize: '16px',
        transition: 'color 0.3s'
      }} onMouseEnter={(e) => e.target.style.color = '#3498db'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
