import React, { useState, useEffect } from 'react';
import Header from './Header';
import PostDetail from './PostDetail';
import { Link } from 'react-router-dom';
import userData from './Datos.json';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photoUrls = [];
        for (let i = 0; i < 12; i++) {
          const response = await fetch(`https://picsum.photos/350?random=${i}`);
          photoUrls.push(response.url);
        }
        setPhotos(photoUrls);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowPostDetail(true);
  };

  return (
    <div className="container">
      <Header userData={userData[0]} />
      <div className="row justify-content-center">
        {photos.map((photoUrl, index) => (
          <div key={index} className="col-md-4 mb-4">
            <img
              src={photoUrl}
              className="img-fluid"
              alt={`Photo ${index}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleImageClick(photoUrl)}
            />
          </div>
        ))}
      </div>
      <PostDetail show={showPostDetail} handleClose={() => setShowPostDetail(false)} imageUrl={selectedImage} />
    </div>
  );
};

export default Home;
