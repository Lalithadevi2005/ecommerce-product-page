import React, { useState } from 'react';
import { headphones } from '../data/headphones';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HeadphonesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter(item => item !== company));
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? headphones
    : headphones.filter((item) => selectedProduct.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {headphones.map((earphones) => (
            <div key={earphones.id} className='pro-input'>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(earphones.company)}
                  onChange={() => companyHandler(earphones.company)}
                />
                {earphones.company}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            console.log(item.image);
            return (
              <div key={item.id}>
                <Link to={`/headphones/${item.id}`}>
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

export default HeadphonesPage;
