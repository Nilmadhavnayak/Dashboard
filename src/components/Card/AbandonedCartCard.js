import React from 'react';
import './AbandonedCartCard.css';

const AbandonedCartCard = ({ percentage, customers }) => {
  return (
    <div className="abandoned-cart-card">
      <h3>Abandoned Cart</h3>
      <div className="abandoned-cart-stats">
        <div>
          <span>{percentage}%</span>
          <span>+0.00%</span>
        </div>
        <div>
          <span>Customers</span>
          <span>{customers}</span>
        </div>
      </div>
    </div>
  );
};

export default AbandonedCartCard;