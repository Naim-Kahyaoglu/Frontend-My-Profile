import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>Error loading profile data.</div>;
  }

  return (
    <section
      id="profile"
      className="p-5 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-x-4"
    >
      {/* Profilin metin kısmı (başlık, rol ve açıklama) */}
      <div className="flex-1 text-left mb-4 md:mb-0 md:mr-10">
        <div className="flex items-center mb-4">
          {/* Sol taraf için çizgi */}
          <div className="border-t-2 border-gray-500 flex-grow"></div>

          {/* Başlık */}
          <h2 className="text-3xl font-semibold mx-4">{profileData.name}</h2>

          {/* Sağ taraf için çizgi */}
          <div className="border-t-2 border-gray-500 flex-grow"></div>
        </div>

        <p className="text-xl mb-2">{profileData.role}</p>
        <p className="mb-4">{profileData.description}</p>

        <div className="flex justify-start space-x-4 mt-5">
          <button className="bg-green-500 text-white py-2 px-6 rounded-md">
            Hire me
          </button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-md">
            Github
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md">
            Linkedin
          </button>
        </div>
      </div>

      {/* Profil resmi sağda */}
      {profileData.image && (
        <img
          src={profileData.image}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto md:ml-auto md:mb-0 mb-4"
        />
      )}
    </section>
  );
}

export default Profile;
