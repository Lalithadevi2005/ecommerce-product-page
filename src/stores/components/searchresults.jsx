import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const filteredProducts = location.state?.filteredProducts || []; // Retrieve filtered products

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found matching your search criteria.</p>
      )}
    </div>
  );
};

export default SearchResults;
