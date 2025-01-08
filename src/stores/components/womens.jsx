import React from 'react';
import { Link } from 'react-router-dom';
import { womensClothing} from '../data/womens';

const Womens = () => {
  const firstFiveImages=womensClothing.slice(0,5);
  return (
     <>
      <div className="proTitle">
     <h2>Women's Clothing</h2>
     </div>
     <div className='proSection'>
      {firstFiveImages.map((item) => (
        <div className='imgBox' key={item.id}>
           <Link to={`/womens/${item.id}`}> <img className='proImage' src={item.image} alt={item.name} />
           </Link>
          
       <h2>{item.name}</h2>
           
        </div>
      ))}
    </div>
     
     </>
  );
};

export default Womens;
