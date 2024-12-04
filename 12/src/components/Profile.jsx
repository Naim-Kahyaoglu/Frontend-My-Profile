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
    <section id="profile" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2>{profileData.name}</h2>
      <p>{profileData.role}</p>
      <p>{profileData.description}</p>

      {/* Profile image */}
      {profileData.image && (
        <img
          src={profileData.image}  // Resim yolunu data.json'dan alıyoruz
          alt="Profile"
          style={{ width: '200px', height: 'auto', borderRadius: '50%', marginTop: '20px' }}
        />
      )}

      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Hire me
        </button>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Github
        </button>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#0077B5',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Linkedin
        </button>
      </div>
    </section>
  );
}

export default Profile;
