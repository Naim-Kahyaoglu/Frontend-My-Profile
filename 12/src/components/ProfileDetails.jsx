import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileDetails({ language }) {
  const [profile2Data, setProfile2Data] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setProfile2Data(response.data.profile2);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading profile2 data:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !profile2Data) return <div>Loading...</div>;

  const labels = {
    en: {
      title: "Profile",
      birthdate: "Birthdate",
      city: "City",
      education: "Education",
      role: "Preferred Role",
      aboutMe: "About Me"
    },
    tr: {
      title: "Profil",
      birthdate: "Doğum tarihi",
      city: "İkamet Şehri",
      education: "Eğitim Durumu",
      role: "Tercih Ettiği Rol",
      aboutMe: "Hakkımda"
    }
  };

  return (
    <section id="profile-details" className="my-24">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        {labels[language].title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-purple-600">
            {labels[language].title}
          </h3>
          
          <div className="space-y-5">
            <div className="flex items-center">
              <span className="font-medium w-40">{labels[language].birthdate}:</span>
              <span>{profile2Data.birthdate}</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium w-40">{labels[language].city}:</span>
              <span>{profile2Data.city}</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium w-40">{labels[language].education}:</span>
              <span>{profile2Data.education}</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium w-40">{labels[language].role}:</span>
              <span>{profile2Data.role}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-purple-600">
            {labels[language].aboutMe}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {profile2Data.aboutMe}
          </p>
        </div>
      </div>
    </section>
  );
}
export default ProfileDetails;