import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { fridges } from '../data/fridges';  // Assuming your fridges data is imported here

const Fridges = () => {
  const firstFiveImages = fridges.slice(0, 5);  // Extract the first 5 items from fridges data

  return (
    <>
      <h2>Fridges</h2>
      <div className='proSection'>
        {firstFiveImages.map((item) => (
          <div className='imgBox' key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/fridges/${item.id}`}>
              <img className='proImage' src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fridges;
