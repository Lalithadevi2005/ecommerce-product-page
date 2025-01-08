import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { fragrances } from '../data/fragrancesdata';  // Assuming your fragrances data is imported here

const Fragrances = () => {
  const firstFiveImages = fragrances.slice(0, 5);  // Extract the first 5 items from fragrances data

  return (
    <>
      <h2>Fragrances</h2>
      <div className='proSection'>
        {firstFiveImages.map((item) => (
          <div className='imgBox' key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/fragrances/${item.id}`}>
              <img className='proImage' src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fragrances;
