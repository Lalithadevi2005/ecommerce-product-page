import React,{ useState } from 'react';
import { phones } from '../data/phone';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Mobilepage = () => {
  const [selectedProduct,setSelectedProduct] =useState([])
  const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
      setSelectedProduct(selectedProduct.filter(item => item !== mango))
    }else{
      setSelectedProduct([...selectedProduct,mango])
    }
  }

  const filteredProduct =selectedProduct.length===0?
  phones : phones.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    <Navbar />
     <div className="fullpage">
    
      <div className="pro-selected">
      {phones.map((mobile) => (
  <div key={mobile.id} className='pro-input'>
    <label>
      <input
        type="checkbox"
        checked={selectedProduct.includes(mobile.company)}
        onChange={() => companyHandler(mobile.company)}
      />
      {mobile.company}
    </label>
  </div>
))}

      </div>
      <div className="pageSection">
        {filteredProduct.map((item) => {
          console.log(item.image);
          return (
            <div key={item.id}  > {/* Add a unique key here */}
              <Link to={`/mobiles/${item.id}`}>
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

export default Mobilepage;
