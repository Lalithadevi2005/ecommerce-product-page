import React, { useState } from 'react';
import { mensClothing } from '../data/mens';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MensPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = ( orange) => {
    if (selectedProduct.includes(orange)) {
      setSelectedProduct(selectedProduct.filter(item => item !== orange));
    } else {
      setSelectedProduct([...selectedProduct, orange]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? mensClothing
    : mensClothing.filter((item) => selectedProduct.includes(item.name));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {mensClothing.map((item) => (
            <div key={item.id} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(item.name)}
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
                <Link to={`/mens/${item.id}`}>
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

export default MensPage;
