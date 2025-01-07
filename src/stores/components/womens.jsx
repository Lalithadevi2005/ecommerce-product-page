import React from 'react';
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
          <img className='proImage' src={item.image} alt={item.name} />
         {/* 
        This is a multi-line comment
        You can write comments over multiple lines
       <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ₹{item.price}</p>
          <p>{item.availability}</p>*/}
        </div>
      ))}
    </div>
     
     </>
  );
};

export default Womens;
