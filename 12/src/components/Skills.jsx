import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Skills() {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setSkillsData(response.data.skills);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading skills data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!skillsData) {
    return <div>Error loading skills data.</div>;
  }

  return (
    <section id="skills" className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
