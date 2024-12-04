import React, { useState } from 'react';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile2 from './components/Profile2';
import ModeSwitch from './components/ModeSwitch';
import './styles.css'; // styles.css'i dahil ettik

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  return (
    <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Koyu/ Açık mod değişimi */}
      <ModeSwitch onClick={toggleMode} />

      {/* Header */}
      <Header />
      
      {/* Profile */}
      <Profile />

      {/* Skills */}
      <Skills />

      {/* Profile2 */}
      <Profile2 />

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
