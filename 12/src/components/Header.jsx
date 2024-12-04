import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setHeaderData(response.data.header);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading header data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!headerData) {
    return <div>Error loading header data.</div>;
  }

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <img
        src={headerData.logo}  // Logo dosyasını dinamik olarak alıyoruz
        alt="Logo"
        style={{ width: '50px', height: 'auto' }}
      />
      <div>{headerData.skillsText}</div>
      <div>{headerData.projectsText}</div>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {headerData.buttonText}
      </button>
    </header>
  );
}

export default Header;
