import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [projectsData, setProjectsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setProjectsData(response.data.projects);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectsData) {
    return <div>Error loading projects data.</div>;
  }

  return (
    <section id="projects" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>Projects</h2>

      {projectsData.map((project, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }}
          />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div style={{ marginBottom: '10px' }}>
            {project.technologies.map((tech, idx) => (
              <button key={idx} style={{ margin: '5px' }}>
                {tech}
              </button>
            ))}
          </div>
          <div>
            <a href={project.github} style={{ marginRight: '20px', textDecoration: 'underline' }}>
              Github
            </a>
            <a href={project.liveSite} style={{ textDecoration: 'underline' }}>
              View Site
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
