import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NotFound() {
  const [notFoundData, setNotFoundData] = useState({});

  useEffect(() => {
    // Veriyi data.json'dan alıyoruz
    axios
      .get("/data.json")
      .then((response) => {
        setNotFoundData(response.data.notFound);
      })
      .catch((error) => {
        console.error("Error loading not found data:", error);
      });
  }, []);

  return (
    <section>
      <h2>{notFoundData.title || "404 Page Not Found"}</h2>
      <p>{notFoundData.message || "Oops! The page you are looking for does not exist."}</p>
    </section>
  );
}

export default NotFound;
