import React from 'react';
import { Link } from 'react-router-dom';
import { phones } from '../data/phone';

const Phone = () => {
  const firstFiveImages = phones.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h2>Mobiles</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => (
          <div className="imgBox" key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/mobiles/${item.id}`}>
              <img className="proImage" src={item.image} alt={item.name} />
            </Link>
            {/* Uncomment and add additional product information if needed */}
            {/* <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ₹{item.price}</p>
            <p>{item.availability}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Phone;
