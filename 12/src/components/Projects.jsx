import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects({ language }) {
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

  if (loading || !projectsData) return <div>Loading...</div>;

  const labels = {
    en: {
      title: "Projects",
      viewSite: "View Site"
    },
    tr: {
      title: "Projeler",
      viewSite: "Siteyi Görüntüle"
    }
  };

  return (
    <section id="projects" className="my-24">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        {labels[language].title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.github}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
                >
                  Github
                </a>
                <a 
                  href={project.website}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
                >
                  {labels[language].viewSite}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;