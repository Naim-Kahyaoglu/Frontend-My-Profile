import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data.json') // '/data.json' dosyasından veriyi çekiyoruz
      .then((response) => {
        setFooterData(response.data.footer); // Footer verisini state'e kaydediyoruz
        setLoading(false); // Veriler yüklendikten sonra loading durumunu false yapıyoruz
      })
      .catch((error) => {
        console.error('Error loading footer data:', error); // Hata durumunda konsola log atıyoruz
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Veriler yüklenene kadar "Loading..." mesajını gösteriyoruz
  }

  if (!footerData) {
    return <div>Error loading footer data.</div>; // Eğer footer verisi alınamazsa hata mesajı gösteriyoruz
  }

  return (
    <footer className="text-center bg-gray-800 text-white py-5 w-full dark:bg-gray-900 dark:text-gray-300">
      <p>{footerData.text}</p> {/* Footer'dan gelen metni burada kullanıyoruz */}
      <div className="mt-4">
        {/* Footer'dan gelen e-posta adresini burada kullanıyoruz */}
        <p className="text-white dark:text-gray-300">{footerData.email}</p>

        <div className="mt-2">
          {footerData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white underline dark:text-gray-300 mx-2"
            >
              {link.text} {/* Linkin metnini alıyoruz */}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-4">{footerData.copyright}</p> {/* Copyright metnini burada kullanıyoruz */}
    </footer>
  );
}

export default Footer;
