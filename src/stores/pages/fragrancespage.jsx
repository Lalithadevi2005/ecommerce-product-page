import React, { useState } from 'react';
import { fragrances } from '../data/fragrancesdata';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FragrancesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (name) => {
    if (selectedProduct.includes(name)) {
      setSelectedProduct(selectedProduct.filter(item => item !== name));
    } else {
      setSelectedProduct([...selectedProduct, name]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? fragrances
    : fragrances.filter((item) => selectedProduct.includes(item.name));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {fragrances.map((item) => (
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
                <Link to={`/fragrances/${item.id}`}>
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

export default FragrancesPage;
