import React from "react";
import { fragrances } from "../stores/data/fragrancesdata";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../stores/context/cartcontext";

const FragranceSingle = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();

  console.log("cartContext:", { addToCart, cartItems }); // Add this line to debug

  const product = fragrances.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ind-page">
        <div className="ind-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="ind-data space">
          <div className="ind-model pad">
            <h3>{product.name}</h3>
          </div>
          <div className="ind-price pad">
            <h1>{product.price}</h1>
          </div>
          <div className="ind-exist pad">
            {product.availability}
          </div>
          <div className="ind-spec">
            <h2>Specs</h2>
            <p>{product.specs}</p>
          </div>
          <div className="aboutitem">
            <h2>About This Item</h2>
            <p>{product["about this item"]}</p>
          </div>
          <div className="ind-desc pad">
            <p>{product.description}</p>
            <button className="pad" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FragranceSingle;
