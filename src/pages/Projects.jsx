import './Projects.css';
import technolytics_1 from '../assets/images/technolytics-hero.jpg';
// replace with your actual image

const Project = () => {
  return (
    
    <section className="project-page">
      
      <div className="project-container">
      <h1 className='page-title'>Projects</h1>
        <div className="project-hero">
          
        
          <img src={technolytics_1} alt="Project preview" className="project-image" />
        </div>

        <div className="project-content">

          
        <h1 className="project-title">Online Learning Platform</h1>
          <p className="project-description">
            This Online Learning Platform is a modern web application similar to Coursera,
            where users can explore, enroll, and learn online courses. Built using React
            for frontend and php, MySQL for backend, it offers a responsive design, user
            authentication, and an intuitive dashboard for learners.
          </p>

          <ul className="project-tech-list">
            <li>React</li>
            <li>php</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MySQL</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://github.com/Fauziya2005/TechnoLytics"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              View on GitHub
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
