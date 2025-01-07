import React from 'react';
import { useCart } from './context/cartcontext';

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart(); // Assuming `removeFromCart` is provided in the cart context.

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Browse our products and add items to your cart.</p>
        </div>
      ) : (
        cartItems.map((item) => (
          <div className="cart-section" key={item.id}>
            {/* Cart Image */}
            <div className="cart-img">
              <img src={item.image} alt={item.product} />
            </div>

            {/* Cart Details */}
            <div className="cart-details">
              <h3>{item.product}</h3>
              <h2>{item.price}</h2>
              <h3>{item.model}</h3>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserCart;
