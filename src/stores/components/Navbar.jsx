import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search functionality
  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      // You can replace this alert with actual search functionality.
    } else {
      alert('Please enter a search term!');
    }
  };

  return (
    <>
      <div className="navSection">
        {/* Title */}
        <div className="title">
          <h2>E-Mart</h2>
        </div>

        {/* Search Bar */}
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* User Details */}
        <div className="user-detail">
          <FontAwesomeIcon icon={faEnvelope} /> SignIn/SignUp
        </div>

        {/* Cart Section */}
        <Link to="/cart">
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      {/* Submenu */}
      <div className="subMenu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Mobiles">Mobiles</Link></li>
          <li><Link to="/laptops">Laptops</Link></li>
          <li><Link to="/headphones">Headphones</Link></li>
          <li><Link to="/fridges">Fridges</Link></li>
          <li><Link to="/tvs">TV's</Link></li>
          <li><Link to="/makeup">Makeup Products</Link></li>
          <li><Link to="/mens">Men's Clothing</Link></li>
          <li><Link to="/womens">Women's Clothing</Link></li>
          <li><Link to="/furniture">Furniture</Link></li>
          <li><Link to="/haircare">HairCare</Link></li>
          <li><Link to="/fragrances">Fragrances</Link></li>
          <li><Link to="/cookware">CookWare Products</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
