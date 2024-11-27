// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dogs.css'; // Import your CSS file

const Dogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.thedogapi.com/v1/breeds')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="dogs-container">
      <h1 className="dogs-title">Dog Breeds</h1>
      <div className="dogs-grid">
        {data.map((item) => (
          <div key={item.id} className="dog-card">
            <div className="dog-image">
              {/* Use reference_image_id to construct the image URL */}
              {item.reference_image_id ? (
                <img
                  src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                  alt={item.name}
                  className="dog-image"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="dog-info">
              <h2>{item.name}</h2>
              <p>Lifespan: {item.life_span}</p>
              <p>Bred for: {item.bred_for}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
