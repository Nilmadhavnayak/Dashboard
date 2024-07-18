import React from 'react';

const RecentOrdersTable = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <div className="recent-orders-table">No recent orders</div>;
  }

  return (
    <div className="recent-orders-table">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.product}</td>
              <td>₦{order.price.toLocaleString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;