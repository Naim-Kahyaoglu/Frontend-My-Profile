import React, { useState, useEffect } from "react";
import axios from "axios";

const ModeSwitch = ({ onClick, isDarkMode }) => {
  const [modeText, setModeText] = useState({
    darkModeText: "Dark Mode", // Varsayılan metin
    lightModeText: "Light Mode", // Varsayılan metin
  });

  // Dark Mode'ı açma/kapama fonksiyonu
  const toggleDarkMode = () => {
    onClick(); // Dark mode state'ini üst bileşene aktarma
  };

  useEffect(() => {
    // Veriyi data.json'dan alıyoruz
    axios
      .get("/data.json")
      .then((response) => {
        setModeText(response.data.modeSwitch || {
          darkModeText: "Dark Mode",  // Fallback default metin
          lightModeText: "Light Mode", // Fallback default metin
        });
      })
      .catch((error) => {
        console.error("Error loading mode switch data:", error);
      });
  }, []);

  return (
    <button
      className="p-2 bg-gray-700 text-white rounded-md my-4 mx-4"
      onClick={toggleDarkMode}
    >
      {/* Buton metni, dark mode durumuna göre değişiyor */}
      {isDarkMode ? modeText.lightModeText : modeText.darkModeText}
    </button>
  );
};

export default ModeSwitch;
