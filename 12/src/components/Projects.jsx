import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [projectsData, setProjectsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setProjectsData(response.data.projects); // Projects verisini state'e kaydediyoruz
        setLoading(false); // Veriler yüklendikten sonra loading durumunu false yapıyoruz
      })
      .catch((error) => {
        console.error('Error loading projects data:', error); // Hata durumunda konsola log atıyoruz
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Veriler yüklenene kadar "Loading..." mesajını gösteriyoruz
  }

  if (!projectsData) {
    return <div>Error loading projects data.</div>; // Eğer projects verisi alınamazsa hata mesajı gösteriyoruz
  }

  return (
    <section
      id="projects"
      className="p-5 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>

      {projectsData.map((project, index) => (
        <div key={index} className="mb-10">
          {/* Project image */}
          <img
            src={project.image}
            alt={project.name}
            className="w-full max-w-xl mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
          <p className="mb-4">{project.description}</p>
          
          {/* Teknolojiler */}
          <div className="mb-4">
            {project.technologies.map((tech, idx) => (
              <button
                key={idx}
                className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded-lg mr-2 mb-2"
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Github ve canlı site bağlantıları */}
          <div>
            <a
              href={project.github}
              className="text-blue-500 dark:text-blue-300 hover:underline mr-4"
            >
              Github
            </a>
            <a
              href={project.liveSite}
              className="text-blue-500 dark:text-blue-300 hover:underline"
            >
              View Site
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
