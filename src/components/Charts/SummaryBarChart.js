import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SummaryBarChart = ({ data }) => {
  if (!data || !data.labels || !data.data) {
    return <div className="summary-bar-chart">No summary data available</div>;
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Sales',
        data: data.data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Summary',
      },
    },
  };

  return (
    <div className="summary-bar-chart">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SummaryBarChart;