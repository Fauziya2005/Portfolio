import './Services.css';
import html from '../assets/images/html.jpg';
import css from '../assets/images/css.jpeg';
import js from '../assets/images/js.jpeg';
import react from '../assets/images/react.jpeg';
import github from '../assets/images/github.jpg';
import mysql from '../assets/images/mysql.jpg';

const Services = () => {
  const services = [
    { 
      id: 1,
      image: html,
      title: "HTML",
      description: "The foundation of web development used to structure and organize content on web pages."
    },
    {
      id: 2,
      image: css,
      title: "CSS",
      description: "Styles and designs web pages, making them visually appealing and responsive across all devices."
    },
    {
      id: 3,
      image: js,
      title: "JavaScript",
      description: "Adds interactivity and dynamic functionality to websites, enhancing user engagement and experience."
    },
    {
      id: 4,
      image: react,
      title: "ReactJs",
      description: "A powerful JavaScript library for building fast, reusable, and interactive user interfaces for modern web applications."
    },
    {
      id: 5,
      image: github,
      title: "GitHub",
      description: "A platform for version control and collaboration, used to host and manage code repositories efficiently."
    },
    {
      id: 6,
      image: mysql,
      title: "MySQL",
      description: "A popular relational database management system used to store, organize, and manage data using SQL queries efficiently."
    }
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        <div className="services-header">
          <h1 className="page-title">My Skills</h1>
          <div className="title-underline"></div>
          <p className="services-subtitle">I am a Web Devloper</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
  {service.image ? (
    <img src={service.image} alt={service.title} />
  ) : (
    <span>{service.icon}</span>
  )}
</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;



