import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { headphones } from '../data/headphones';  // Assuming your headphones data is imported here

const Headphones = () => {
  const firstFiveImages = headphones.slice(0, 5);  // Extract the first 5 items from headphones data

  return (
    <>
      <div className="proTitle">
        <h2>Headphones</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => (
          <div className="imgBox" key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/headphones/${item.id}`}>
              <img className="proImage" src={item.image} alt={item.name} />
            </Link>
            <div className="head">
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Headphones;
