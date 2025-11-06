import './Home.css';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import fauziya_img from '../assets/images/fauziya-img.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
        
            <h1 className="main-heading">
              I'm Web Devloper<br />
              Fauziya Shaikh
            </h1>
            <p className="hero-description">
            I’m a passionate Web Developer skilled in HTML, CSS, JavaScript, and React. I focus on building responsive, user-friendly websites that deliver great digital experiences.
            </p>
            <div className="hero-buttons">
            <Link to="/About" className="btn-primary">About Me</Link>

              
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
                <img src={fauziya_img} alt="Fauziya Shaikh Image" />
              <svg width="100%" height="100%" viewBox="0 0 400 500" fill="none">
                <rect width="400" height="500" fill="#f0f0f0"/>
                <circle cx="200" cy="150" r="60" fill="#e0e0e0"/>
                <rect x="140" y="220" width="120" height="150" rx="10" fill="#e0e0e0"/>
                <rect x="160" y="380" width="80" height="80" rx="5" fill="#d0d0d0"/>
                <text x="200" y="480" textAnchor="middle" fill="#999" fontSize="14" fontFamily="Arial">
                  
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="background-elements">
          <div className="wavy-pattern left-wave"></div>
          <div className="wavy-pattern right-wave"></div>
          <div className="red-circle"></div>
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;



