import './About.css';
import fauziya_img from '../assets/images/fauziya-img.jpg';


const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="page-title">About Me</h1>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder-about">
            <img src={fauziya_img} alt="Fauziya Shaikh Image" />
              <svg width="100%" height="100%" viewBox="0 0 400 500" fill="none">
                <rect width="400" height="500" fill="#f0f0f0"/>
                <circle cx="200" cy="150" r="60" fill="#e0e0e0"/>
                <rect x="140" y="220" width="120" height="150" rx="10" fill="#e0e0e0"/>
                <rect x="160" y="380" width="80" height="80" rx="5" fill="#d0d0d0"/>
              </svg>
            </div>
          </div>
          
          <div className="about-text">
            <h2>Fauziya Shaikh</h2>
            <h3>Web Developer</h3>
            <p>
            Hi, I’m Fauziya Shaikh, a dedicated Web Developer specializing in HTML, CSS, JavaScript, and React. I enjoy turning creative ideas into functional, visually appealing web applications. My goal is to write clean, efficient code and develop user-focused designs. I’m always eager to learn new technologies and grow as a professional in the web development field.
            </p>

            <a href="/fauziya.pdf" target="_blank" rel="noopener noreferrer" className="download-cv-btn">
              View CV
            </a>

            <a href="/fauziya.pdf" download className="download-cv-btn">
              Download CV
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



