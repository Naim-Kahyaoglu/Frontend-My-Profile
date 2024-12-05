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
      className="p-5 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-semibold mb-4">{profileData.name}</h2>
      <p className="text-xl mb-2">{profileData.role}</p>
      <p className="mb-4">{profileData.description}</p>

      {/* Profile image */}
      {profileData.image && (
        <img
          src={profileData.image}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-4"
        />
      )}

      <div className="flex justify-center space-x-4 mt-5">
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
    </section>
  );
}

export default Profile;
