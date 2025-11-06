import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10L30 10L25 20L30 30L10 30L15 20L10 10Z" fill="#E63946"/>
              <path d="M20 15L25 20L20 25L15 20L20 15Z" fill="#FFFFFF"/>
            </svg>
          </div>
          <span className="logo-text">PORTFOLIO</span>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
         
          
        </ul>
        
        <Link to="/contact" className="cta-button">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;


