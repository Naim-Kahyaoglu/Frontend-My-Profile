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
    <div>
      <ModeSwitch onClick={toggleMode} />
      <Header />
      <Profile />
      <Skills />
      <Profile2 />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
