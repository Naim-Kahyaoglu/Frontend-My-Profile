import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
      <p>Let’s work together on your next product.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="mailto:almilasucode@gmail.com" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          👉 almilasucode@gmail.com
        </a>
        <a href="https://yourpersonalblog.com" style={{ color: 'white', textDecoration: 'underline', marginRight: '20px' }}>
          Personal Blog
        </a>
        <a href="https://github.com/yourusername" style={{ color: 'white', textDecoration: 'underline', marginRight: '20px' }}>
          Github
        </a>
        <a href="https://linkedin.com/in/yourusername" style={{ color: 'white', textDecoration: 'underline' }}>
          Linkedin
        </a>
      </div>
      <p style={{ marginTop: '20px' }}>© 2024 My Profile Website</p>
    </footer>
  );
}

export default Footer;
