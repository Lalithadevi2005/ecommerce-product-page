import React, { useState } from 'react';
import { hairCare } from '../data/haircaredata';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HaircarePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (name) => {
    if (selectedProduct.includes(name)) {
      setSelectedProduct(selectedProduct.filter(item => item !==name));
    } else {
      setSelectedProduct([...selectedProduct, name]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? hairCare
    : hairCare.filter((item) => selectedProduct.includes(item.name));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {hairCare.map((item) => (
            <div key={item.id} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(item.name)}
                  onChange={() => companyHandler(item.name)}
                />
                {item.name}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/haircare/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={item.name} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HaircarePage;
