import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { hairCare } from '../data/haircaredata';  // Assuming hairCare data is imported here

const Haircare = () => {
  const firstFiveImages = hairCare.slice(0, 5);  // Extract the first 5 items from hairCare data

  return (
    <>
      <div className="proTitle">
        <h2>HairCare</h2>
      </div>

      <div className='proSection'>
        {firstFiveImages.map((item) => (
          <div className='imgBox' key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/haircare/${item.id}`}>
              <img className='proImage' src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Haircare;
