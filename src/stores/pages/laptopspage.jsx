import React, { useState } from 'react';
import { laptopsdata } from '../data/laptops';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LaptopPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? laptopsdata
    : laptopsdata.filter((laptop) => selectedProduct.includes(laptop.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">

        <div className="pro-selected">
          {laptopsdata.map((laptop) => (
            <div key={laptop.id} className='pro-input'>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(laptop.company)}
                  onChange={() => companyHandler(laptop.company)}
                />
                {laptop.company}
              </label>
            </div>
          ))}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            console.log(item.image);
            return (
              <div key={item.id}> {/* Add a unique key here */}
                <Link to={`/laptops/${item.id}`}>
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

export default LaptopPage;
