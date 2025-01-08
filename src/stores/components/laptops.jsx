import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { laptopsdata } from '../data/laptops';  // Assuming your laptops data is imported here

const Laptops = () => {
  const firstFiveImages = laptopsdata.slice(0, 5);  // Extract the first 5 items from laptopsdata

  return (
    <>
      <div className="proTitle">
        <h2>Laptops</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => (
          <div className="imgBox" key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/laptops/${item.id}`}>
              <img className="proImage" src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Laptops;
