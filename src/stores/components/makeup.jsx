import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { makeup } from '../data/makeupdata';  // Assuming makeup data is imported here

const Makeup = () => {
  const firstFiveImages = makeup.slice(0, 5);  // Extract the first 5 items from makeup data

  return (
    <>
      <div className="proTitle">
        <h2>Makeup Products</h2>
      </div>

      <div className='proSection'>
        {firstFiveImages.map((item) => (
          <div className='imgBox' key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/makeup/${item.id}`}>
              <img className='proImage' src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Makeup;
