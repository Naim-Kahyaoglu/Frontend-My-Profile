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
    <section
      id="skills"
      className="p-5 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>

      {skillsData.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-2xl font-semibold">{skill.name}</h3>
          <p className="text-lg">{skill.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;
