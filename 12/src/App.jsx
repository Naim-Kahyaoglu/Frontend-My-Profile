import React, { useState, useEffect } from "react";
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import ProfileDetails from './components/ProfileDetails';
import ModeSwitch from './components/ModeSwitch';
import './styles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'tr' for Turkish

  useEffect(() => {
    // Check for saved preferences in localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    setIsDarkMode(savedDarkMode);
    setLanguage(savedLanguage);
    
    // Apply dark mode if saved
    document.body.classList.toggle('dark', savedDarkMode);
  }, []);

  // Dark mode toggle function
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  // Language toggle function
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <div className="flex justify-end space-x-4 mb-6">
        <ModeSwitch isDarkMode={isDarkMode} onClick={toggleDarkMode} />
        <button 
          onClick={toggleLanguage}
          className="text-purple-600 hover:underline"
        >
          {language === 'en' ? 'TÜRKÇE\'YE GEÇ' : 'SWITCH TO ENGLISH'}
        </button>
      </div>
      
      <Header language={language} />
      <Profile language={language} />
      <Skills language={language} />
      <ProfileDetails language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;