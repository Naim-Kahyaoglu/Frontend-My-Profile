import React from 'react';
import logo from '../logos/logo.svg'; // logos klasörüne göre doğru yolu yazıyoruz

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'white',  // Arka planı beyaz yapıyoruz
        color: 'black'             // Yazı rengini siyah yapıyoruz
      }}
    >
      <img
        src={logo}  // Logo dosyasını buraya ekliyoruz
        alt="Logo"
        style={{ width: '50px', height: 'auto' }}  // Logo boyutunu ayarlıyoruz
      />
      <div>Skills</div>
      <div>Projects</div>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',  // Buton arka planı yeşil
          color: 'white',              // Buton yazısı beyaz
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Hire me
      </button>
    </header>
  );
}

export default Header;
