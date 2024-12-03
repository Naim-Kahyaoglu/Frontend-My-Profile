import React from 'react';
import pw1 from '../logos/pw1.png';  // Workintech için resim
import pr1 from '../logos/pr1.png';  // Random Jokes için resim
import pj1 from '../logos/pj1.png';  // Journey için resim

function Projects() {
  return (
    <section id="projects" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>Projects</h2>

      <div style={{ marginBottom: '40px' }}>
        <img src={pw1} alt="Workintech" style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }} />
        <h3>Workintech</h3>
        <p>
          A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
          This was created with vanilla JS, SCSS, and Parcel Bundler and is available as a NPM package. The git repository makes any type of customization to code and themes possible.
        </p>
        <div style={{ marginBottom: '10px' }}>
          <button style={{ margin: '5px' }}>React</button>
          <button style={{ margin: '5px' }}>Redux</button>
          <button style={{ margin: '5px' }}>Axios</button>
        </div>
        <div>
          <a href="https://github.com/yourusername" style={{ marginRight: '20px', textDecoration: 'underline' }}>
            Github
          </a>
          <a href="https://yoursite.com" style={{ textDecoration: 'underline' }}>
            View Site
          </a>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <img src={pr1} alt="Random Jokes" style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }} />
        <h3>Random Jokes</h3>
        <p>
          A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
          This was created with vanilla JS, SCSS, and Parcel Bundler and is available as a NPM package. The git repository makes any type of customization to code and themes possible.
        </p>
        <div style={{ marginBottom: '10px' }}>
          <button style={{ margin: '5px' }}>React</button>
          <button style={{ margin: '5px' }}>Redux</button>
          <button style={{ margin: '5px' }}>Axios</button>
        </div>
        <div>
          <a href="https://github.com/yourusername" style={{ marginRight: '20px', textDecoration: 'underline' }}>
            Github
          </a>
          <a href="https://yoursite.com" style={{ textDecoration: 'underline' }}>
            View Site
          </a>
        </div>
      </div>

      <div>
        <img src={pj1} alt="Journey" style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }} />
        <h3>Journey</h3>
        <p>
          A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
          This was created with vanilla JS, SCSS, and Parcel Bundler and is available as a NPM package. The git repository makes any type of customization to code and themes possible.
        </p>
        <div style={{ marginBottom: '10px' }}>
          <button style={{ margin: '5px' }}>React</button>
          <button style={{ margin: '5px' }}>Redux</button>
          <button style={{ margin: '5px' }}>Axios</button>
        </div>
        <div>
          <a href="https://github.com/yourusername" style={{ marginRight: '20px', textDecoration: 'underline' }}>
            Github
          </a>
          <a href="https://yoursite.com" style={{ textDecoration: 'underline' }}>
            View Site
          </a>
        </div>
      </div>

    </section>
  );
}

export default Projects;
