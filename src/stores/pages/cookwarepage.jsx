import React, { useState } from 'react';
import { cookware } from '../data/cookwaredata';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CookwarePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (name) => {
    if (selectedProduct.includes(name)) {
      setSelectedProduct(selectedProduct.filter(item => item !== name));
    } else {
      setSelectedProduct([...selectedProduct, name]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? cookware
    : cookware.filter((item) => selectedProduct.includes(item.name));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {cookware.map((item) => (
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
              <div key={item.id} className="Box">
                <Link to={`/cookware/${item.id}`}>
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

export default CookwarePage;
