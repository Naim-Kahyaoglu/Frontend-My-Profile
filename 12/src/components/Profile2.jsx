import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile2() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setProfileData(response.data.profile2);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading profile2 data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>Error loading profile2 data.</div>;
  }

  return (
    <section
      id="profile2"
      className="p-5 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-semibold mb-4">Profile</h2>

      <div className="mb-2">
        <strong>Doğum Tarihi:</strong> {profileData.birthdate}
      </div>
      <div className="mb-2">
        <strong>İkamet Şehri:</strong> {profileData.city}
      </div>
      <div className="mb-2">
        <strong>Eğitim Durumu:</strong> {profileData.education}
      </div>
      <div className="mb-2">
        <strong>Tercih Ettiği Rol:</strong> {profileData.role}
      </div>

      <h3 className="text-2xl font-semibold mt-4 mb-2">About Me</h3>
      <p>{profileData.aboutMe}</p>
    </section>
  );
}

export default Profile2;
