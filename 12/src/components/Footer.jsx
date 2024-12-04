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
    <footer style={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
      <p>{footerData.text}</p> {/* Footer'dan gelen metni burada kullanıyoruz */}
      <div style={{ marginTop: '10px' }}>
        {/* Footer'dan gelen e-posta adresini burada kullanıyoruz */}
        <p style={{ color: 'white', marginRight: '20px' }}>
          {footerData.email}
        </p>

        {footerData.links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.href} // Diğer linklerin href özelliklerini alıyoruz
              style={{ color: 'white', textDecoration: 'underline', marginRight: '20px' }}
            >
              {link.text} {/* Linkin metnini alıyoruz */}
            </a>
          );
        })}
      </div>
      <p style={{ marginTop: '20px' }}>{footerData.copyright}</p> {/* Copyright metnini burada kullanıyoruz */}
    </footer>
  );
}

export default Footer;
