import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Footer({ language }) {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setFooterData(response.data.footer);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading footer data:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !footerData) return <div>Loading...</div>;

  const content = {
    en: {
      workTogether: "Let's work together on your next product.",
      personalBlog: "Personal Blog"
    },
    tr: {
      workTogether: "Bir sonraki ürününüzde birlikte çalışalım.",
      personalBlog: "Kişisel Blog"
    }
  };

  return (
    <footer className="my-24">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {content[language].workTogether}
      </h2>
      
      <div className="flex items-center mb-8">
        <span className="text-yellow-500 mr-2">👉</span>
        <a 
          href={`mailto:${footerData.email.replace('👉 ', '')}`}
          className="text-purple-600 hover:underline"
        >
          {footerData.email.replace('👉 ', '')}
        </a>
      </div>
      
      <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
        <a href="#" className="hover:text-purple-600 transition-colors">
          {content[language].personalBlog}
        </a>
        <a href="#" className="hover:text-purple-600 transition-colors">
          Github
        </a>
        <a href="#" className="hover:text-purple-600 transition-colors">
          LinkedIn
        </a>
      </div>
      
      <div className="mt-8 text-gray-500 dark:text-gray-400 text-sm">
        {footerData.copyright}
      </div>
    </footer>
  );
}

export default Footer;