import React from 'react';
import './ProductsCard.css';

const ProductsCard = ({ totalProducts, activeProducts }) => {
  return (
    <div className="products-card">
      <h3>Products</h3>
      <div>Total Products: {totalProducts || 'N/A'}</div>
      <div>Active Products: {activeProducts || 'N/A'}</div>
    </div>
  );
};

export default ProductsCard;