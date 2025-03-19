import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header({ language }) {
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

  if (loading || !headerData) return <div>Loading...</div>;

  return (
    <header className="flex items-center justify-between mb-8">
      {/* Logo */}
      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
        <img src={headerData.logo} alt="Logo" className="w-8 h-8" />
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center space-x-8">
        <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
          {language === 'en' ? 'Skills' : 'Yetenekler'}
        </a>
        <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
          {language === 'en' ? 'Projects' : 'Projeler'}
        </a>
        <button className="border border-purple-600 text-purple-600 px-5 py-2 rounded-md hover:bg-purple-600 hover:text-white transition-colors">
          {language === 'en' ? 'Hire me' : 'İşe Al'}
        </button>
      </nav>
    </header>
  );
}

export default Header;