import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile({ language }) {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setProfileData(response.data.profile);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading profile data:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !profileData) return <div>Loading...</div>;

  const content = {
    en: {
      title: "Creative thinker Minimalism lover",
      description: "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me."
    },
    tr: {
      title: "Yaratıcı düşünür Minimalizm sever",
      description: "Merhaba, ben Almila. Full-stack geliştiriciyim. Eğer harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir frontend ürünleri oluşturacak bir Geliştirici arıyorsanız. Benimle el sıkışalım."
    }
  };

  return (
    <section className="my-16">
      <div className="ml-24 relative text-purple-600 before:content-[''] before:absolute before:w-20 before:h-px before:bg-purple-600 before:left-[-24px] before:top-1/2">
        {profileData.name}
      </div>
      
      <div className="flex flex-col md:flex-row mt-8 gap-16">
        <div className="md:w-7/12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            {profileData[language].title}
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            {profileData[language].description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded">
              {language === 'en' ? 'Hire me' : 'İşe Al'}
            </button>
            <a href="#" className="border border-gray-800 dark:border-white text-gray-800 dark:text-white flex items-center px-6 py-3 rounded">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Github
            </a>
            <a href="#" className="border border-gray-800 dark:border-white text-gray-800 dark:text-white flex items-center px-6 py-3 rounded">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="md:w-5/12">
          <img 
            src={profileData.image} 
            alt="Profile" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;