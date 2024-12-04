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
    <section id="profile2">
      <h2>Profile</h2>

      <div>
        <strong>Doğum Tarihi:</strong> {profileData.birthdate}
      </div>
      <div>
        <strong>İkamet Şehri:</strong> {profileData.city}
      </div>
      <div>
        <strong>Eğitim Durumu:</strong> {profileData.education}
      </div>
      <div>
        <strong>Tercih Ettiği Rol:</strong> {profileData.role}
      </div>

      <h3>About Me</h3>
      <p>{profileData.aboutMe}</p>
    </section>
  );
}

export default Profile2;
