import React from 'react';
import {  headphones } from '../data/headphones';

const Headphones = () => {
  const firstFiveImages=headphones.slice(0,5);
  return (
     <>
     <div className="proTitle">
     <h2>Headphones</h2>
     </div>
     <div className='proSection'>
      {firstFiveImages.map((item) => (
        <div className='imgBox' key={item.id}>
          <img className='proImage' src={item.image} alt={item.name} />
         
       <div className='head'><h2>{item.name}</h2>
          
          <p>Price: ₹{item.price}</p></div>
           
        </div>
      ))}
    </div>
     
     </>
  );
};

export default Headphones;
