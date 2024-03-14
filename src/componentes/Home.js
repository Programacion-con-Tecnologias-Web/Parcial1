// Home.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Home.css';

function Home () {
  const [userData, setUserData] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Programacion-con-Tecnologias-Web/Parcial1/master/src/componentes/Datos.json');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://picsum.photos/350');
        const photoUrls = [];
        for (let i = 0; i < 12; i++) {
          photoUrls.push(response.url);
        }
        setPhotos(photoUrls);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="container">
      <Header userData={userData} />
      <div className="row justify-content-center">
        {photos.map((photoUrl, index) => (
          <div key={index} className="home-col-md-3 home-col-sm-4 home-col-6 mb-4">
            <img src={photoUrl} className="img-fluid" alt={`Photo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
