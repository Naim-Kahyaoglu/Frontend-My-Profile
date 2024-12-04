import React, { useState, useEffect } from "react";
import axios from "axios";

const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modeText, setModeText] = useState("");

  // Dark Mode'ı açma/kapama fonksiyonu
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark", newMode); // Dark mode'u aktif etmek
      return newMode;
    });
  };

  useEffect(() => {
    // Veriyi data.json'dan alıyoruz
    axios
      .get("/data.json")
      .then((response) => {
        setModeText(response.data.modeSwitch);
      })
      .catch((error) => {
        console.error("Error loading mode switch data:", error);
      });
  }, []);

  return (
    <button className="mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? modeText.lightModeText : modeText.darkModeText}
    </button>
  );
};

export default ModeSwitch;
