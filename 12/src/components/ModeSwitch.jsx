import React, { useState, useEffect } from "react";
import axios from "axios";

const ModeSwitch = ({ onClick, isDarkMode }) => {
  const [modeText, setModeText] = useState({
    darkModeText: "DARK MODE",
    lightModeText: "LIGHT MODE",
  });

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setModeText(response.data.modeSwitch || {
          darkModeText: "DARK MODE",
          lightModeText: "LIGHT MODE",
        });
      })
      .catch((error) => {
        console.error("Error loading mode switch data:", error);
      });
  }, []);

  return (
    <div className="flex items-center">
      <button 
        onClick={onClick}
        className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200 dark:bg-purple-600 transition-colors"
      >
        <span className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
      </button>
      <span className="ml-2 text-sm">
        {isDarkMode ? modeText.darkModeText : modeText.lightModeText}
      </span>
    </div>
  );
};

export default ModeSwitch;