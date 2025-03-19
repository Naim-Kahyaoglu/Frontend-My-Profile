import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Skills({ language }) {
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

  if (loading || !skillsData) return <div>Loading...</div>;

  return (
    <section id="skills" className="my-24">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        {language === 'en' ? 'Skills' : 'Yetenekler'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-purple-600">{skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;