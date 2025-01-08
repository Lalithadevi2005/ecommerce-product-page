import React from 'react';
import { Link } from 'react-router-dom';
import { mensClothing } from '../data/mens';

const MensClothing = () => {
  const firstFiveImages = mensClothing.slice(0, 5); // Extract the first 5 items

  return (
    <>
      <div className="proTitle">
        <h2>Men's Clothing</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => (
          <div className="imgBox" key={item.id}>
            <Link to={`/mens/${item.id}`}>
              <img className="proImage" src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default MensClothing;
