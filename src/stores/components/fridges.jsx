import React from 'react';
import { fridges } from '../data/fridges';

const Fridges = () => {
  const firstFiveImages=fridges.slice(0,5);
  return (
     <>
     <h2>Fridges</h2>
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

export default Fridges;
