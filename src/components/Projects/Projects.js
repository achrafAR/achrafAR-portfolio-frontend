import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []); // Run only once when the component mounts

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/projects');
      setProjects(response.data.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div className="projects-container" id="portfolio">
      <div className="projects-title">
        <h1>My Latest Projects</h1>
        <p>Explore our latest projects and witness the artistry in motion.</p>
      </div>
      <div className="projects-card-container">
        {projects.map(project => (
          <div key={project._id} className="projects-card-details" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="projects-card-details-text">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="show-details-button">VIEW DETAILS</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
