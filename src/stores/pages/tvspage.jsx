import React, { useState } from 'react';
import { tvs } from '../data/tv';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TvPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter(item => item !==mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? tvs
    : tvs.filter(( orange) => selectedProduct.includes(orange.name));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {tvs.map((item) => (
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
                <Link to={`/tv/${item.id}`}>
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

export default TvPage;
