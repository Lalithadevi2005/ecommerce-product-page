import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => { // Changed 'child' to 'children'
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove items from the cart by id
  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children} {/* Correctly changed 'child' to 'children' */}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
