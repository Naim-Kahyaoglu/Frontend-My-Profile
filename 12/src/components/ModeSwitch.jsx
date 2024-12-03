import React, { useState } from "react";

const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode'ı açma/kapama fonksiyonu
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark', newMode); // Dark mode'u aktif etmek
      return newMode;
    });
  };

  return (
    <button className="mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ModeSwitch;
