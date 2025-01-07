import React, { useState } from 'react';
import { makeup } from '../data/makeupdata';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MakeupPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter(item => item !== company));
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? makeup
    : makeup.filter((item) => selectedProduct.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {makeup.map((item) => (
            <div key={item.id} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(item.company)}
                  onChange={() => companyHandler(item.company)}
                />
                {item.company}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/makeup/${item.id}`}>
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

export default MakeupPage;
