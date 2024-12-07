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
    <section id="skills" className="p-5 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md">
      {/* Skills başlığı */}
      <h2 className="skills-header">Skills</h2>

      {/* Skill kutuları */}
      <div className="skill-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-box">
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
