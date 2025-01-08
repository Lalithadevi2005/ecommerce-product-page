import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { cookware } from '../data/cookwaredata';  // Assuming your cookware data is imported here

const Cookware = () => {
  const firstFiveImages = cookware.slice(0, 5);  // Extract the first 5 items from cookware data

  return (
    <>
      <h2>Cookware Products</h2>
      <div className='proSection'>
        {firstFiveImages.map((item) => (
          <div className='imgBox' key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/cookware/${item.id}`}>
              <img className='proImage' src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cookware;
