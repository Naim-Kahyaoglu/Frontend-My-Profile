import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json') // '/data.json' dosyasından veriyi çekiyoruz
      .then((response) => {
        setHeaderData(response.data.header); // Header verisini state'e kaydediyoruz
        setLoading(false); // Veriler yüklendikten sonra loading durumunu false yapıyoruz
      })
      .catch((error) => {
        console.error('Error loading header data:', error); // Hata durumunda konsola log atıyoruz
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Veriler yüklenene kadar "Loading..." mesajını gösteriyoruz
  }

  if (!headerData) {
    return <div>Error loading header data.</div>; // Eğer header verisi alınamazsa hata mesajı gösteriyoruz
  }

  return (
    <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 text-black dark:text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={headerData.logo} // Logo dosyasını dinamik olarak alıyoruz
          alt="Logo"
          className="w-16 h-auto" // Logo boyutunu belirliyoruz
        />
      </div>

      {/* Sağdaki Metinler ve Buton */}
      <div className="flex items-center space-x-8 ml-auto"> {/* Flex düzeni ile metin ve butonları yatay sıralıyoruz */}
        <div>{headerData.skillsText}</div>
        <div>{headerData.projectsText}</div>
        <button className="py-2 px-4 text-lg cursor-pointer bg-green-500 text-white rounded-lg dark:bg-green-700">
          {headerData.buttonText}
        </button>
      </div>
    </header>
  );
}

export default Header;
