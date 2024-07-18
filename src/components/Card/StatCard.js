import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, subValue, change, pending, completed }) => {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      {value !== undefined && <div className="stat-value">₦{value.toLocaleString()}</div>}
      {subValue !== undefined && <div className="stat-sub-value">{subValue}</div>}
      {change !== undefined && <div className="stat-change">+{change}%</div>}
      {pending !== undefined && completed !== undefined && (
        <div className="stat-details">
          <span>Pending: {pending}</span>
          <span>Completed: {completed}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;