import React, { useState, useEffect } from 'react';
import StatCard from '../components/Card/StatCard';
import MarketingPieChart from '../components/Charts/MarketingPieChart';
import ProductsCard from '../components/Card/ProductsCard';
import AbandonedCartCard from '../components/Card/AbandonedCartCard';
import RecentOrdersTable from '../components/RecentOrdersTable';
import SummaryBarChart from '../components/Charts/SummaryBarChart';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      try {
        // Replace this with your actual API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            sales: { value: 4000000, volume: 450, change: 200 },
            customers: { active: 1180, total: 1250, change: 15.8 },
            orders: { total: 450, pending: 5, completed: 445 },
            marketing: { acquisition: 60, purchase: 30, retention: 10 },
            products: { total: 45, active: 32 },
            abandonedCart: { percentage: 20, customers: 30 },
            recentOrders: [
              { id: 1, product: 'iPhone 13', price: 730000, status: 'Pending' },
              { id: 2, product: 'iPhone 13', price: 730000, status: 'Completed' },
            ],
            summary: {
              labels: ['Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14', 'Sep 15', 'Sep 16'],
              data: [80, 40, 65, 30, 85, 45, 80],
            },
          }), 1000)
        );
        setDashboardData(response);
      } catch (err) {
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!dashboardData) return <div>No data available</div>;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <StatCard 
          title="Sales" 
          value={dashboardData.sales.value} 
          subValue={dashboardData.sales.volume} 
          change={dashboardData.sales.change} 
        />
        <StatCard 
          title="Customers" 
          value={dashboardData.customers.active} 
          subValue={dashboardData.customers.total} 
          change={dashboardData.customers.change} 
        />
        <StatCard 
          title="All Orders" 
          value={dashboardData.orders.total} 
          pending={dashboardData.orders.pending} 
          completed={dashboardData.orders.completed} 
        />
      </div>
      <div className="dashboard-main">
        <div className="dashboard-left">
          <MarketingPieChart data={dashboardData.marketing} />
          <ProductsCard 
            totalProducts={dashboardData.products.total} 
            activeProducts={dashboardData.products.active} 
          />
          <AbandonedCartCard 
            percentage={dashboardData.abandonedCart.percentage} 
            customers={dashboardData.abandonedCart.customers} 
          />
        </div>
        <div className="dashboard-right">
          <RecentOrdersTable orders={dashboardData.recentOrders} />
        </div>
      </div>
      <div className="dashboard-footer">
        <SummaryBarChart data={dashboardData.summary} />
      </div>
    </div>
  );
};

export default Dashboard;