import React from 'react';
import Phone from './phone';
import Laptops from './laptops';
import Headphones from './headphones';
import Fridges from './fridges';
import Tvs from './tvs';
import Furniture from './furniture';
import Haircare from './haircare';
import Fragrances from './fragrances';
import Cookware from './cookware';
import Makeup from './makeup';
import MensClothing from './mens';
import WomensClothing from './womens'; // Add this import if you have the WomensClothing component

const products = () => {
  return (
    <div>
      <Phone />
      <Laptops />
      <Headphones />
      <Fridges />
      <Tvs />
      <Makeup />
      <MensClothing />
      <WomensClothing /> {/* Replace this if necessary */}
      <Furniture />
      <Haircare />
      <Fragrances />
      <Cookware />
    </div>
  );
};

export default products;
