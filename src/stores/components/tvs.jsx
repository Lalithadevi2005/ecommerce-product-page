import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { tvs } from '../data/tv';  // Assuming tvs data is imported here

const Tvs = () => {
  const firstFiveImages = tvs.slice(0, 5);  // Extract the first 5 items from tvs data

  return (
    <>
      <div className="proTitle">
        <h2>Tv's</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => (
          <div className="imgBox" key={item.id}>
            {/* Wrap the image with Link to navigate to the individual product page */}
            <Link to={`/tvs/${item.id}`}>
              <img className="proImage" src={item.image} alt={item.name} />
            </Link>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tvs;
