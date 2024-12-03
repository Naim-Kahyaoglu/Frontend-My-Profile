import React from 'react';
import a1Image from '../logos/a1.jpg'; // logos klasöründeki a1.jpg dosyasını import ediyoruz

function Profile() {
  return (
    <section id="profile" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2>Almila Su</h2>
      <p>Creative thinker</p>
      <p>Minimalism lover</p>
      <p>
        Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences, let’s shake hands!
      </p>

      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Hire me
        </button>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Github
        </button>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#0077B5', // LinkedIn rengi
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Linkedin
        </button>
      </div>

      {/* Logo Resmi */}
      <div style={{ marginTop: '40px' }}>
        <img
          src={a1Image} // a1.jpg dosyasını burada kullanıyoruz
          alt="Profile Image"
          style={{ width: '300px', height: 'auto', borderRadius: '10px' }} // Resim boyutları ve köşe yuvarlama
        />
      </div>
    </section>
  );
}

export default Profile;
