import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MarketingPieChart = ({ data }) => {
  if (!data) {
    return <div>No marketing data available</div>;
  }

  const chartData = {
    labels: ['Acquisition', 'Purchase', 'Retention'],
    datasets: [
      {
        data: [
          data.acquisition || 0,
          data.purchase || 0,
          data.retention || 0
        ],
        backgroundColor: ['#4A90E2', '#5C6BC0', '#7E57C2'],
      },
    ],
  };

  return (
    <div className="marketing-pie-chart">
      <h3>Marketing</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default MarketingPieChart;