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
    <section id="skills" style={{ padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2>Skills</h2>

      {skillsData.map((skill, index) => (
        <div key={index}>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;
