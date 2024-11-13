"use client";
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const FinancialOverview = () => {
  // Sample data for the charts
  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June',
       'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [12000, 15000, 10000, 20000, 18000, 22000, 12000, 15000, 10000, 20000, 18000, 22000],
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const expenseData = {
    labels: ['Salaries', 'Maintenance', 'Utilities', 'Other'],
    datasets: [
      {
        label: 'Expense Breakdown',
        data: [5000, 3000, 2000, 1000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const profitData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Quarterly Profit',
        data: [15000, 25000, 20000, 30000],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-8">
    <h2 className="text-3xl font-bold mb-8 text-start text-black">Financial Overview</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Monthly Revenue and Quarterly Profit */}
      <div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-black">Monthly Revenue</h3>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <Line data={revenueData} options={{ responsive: true }} />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-black">Quarterly Profit</h3>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <Bar data={profitData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      {/* Right Column - Expense Breakdown */}
      <div className="lg:col-span-1">
        <h3 className="text-xl text-start font-semibold mb-4 text-black">Expense Breakdown</h3>
        <div className="bg-white p-6 shadow-md rounded-lg ">
          <Pie data={expenseData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default FinancialOverview; 





/* "use client";
import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const FinancialOverview = () => {
  // State for chart data
  const [revenueData, setRevenueData] = useState(null);
  const [expenseData, setExpenseData] = useState(null);
  const [profitData, setProfitData] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching the data
        const revenueResponse = await fetch('/api/revenue');
        const expenseResponse = await fetch('/api/expenses');
        const profitResponse = await fetch('/api/profit');
  
        // Check if the response is ok (status code 200-299)
        if (!revenueResponse.ok) throw new Error('Failed to fetch revenue data');
        if (!expenseResponse.ok) throw new Error('Failed to fetch expense data');
        if (!profitResponse.ok) throw new Error('Failed to fetch profit data');
  
        // Parse the JSON data
        const revenue = await revenueResponse.json();
        const expense = await expenseResponse.json();
        const profit = await profitResponse.json();
  
        // Set the data to state
        setRevenueData({
          labels: revenue.labels,
          datasets: [
            {
              label: 'Monthly Revenue',
              data: revenue.data,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
            },
          ],
        });
  
        setExpenseData({
          labels: expense.labels,
          datasets: [
            {
              label: 'Expense Breakdown',
              data: expense.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
  
        setProfitData({
          labels: profit.labels,
          datasets: [
            {
              label: 'Quarterly Profit',
              data: profit.data,
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching financial data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  // Ensure data is available before rendering charts
  if (!revenueData || !expenseData || !profitData) {
    return <div>Loading...</div>;
  }

  // Return statement should be inside the functional component body
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-start text-black">Financial Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Monthly Revenue and Quarterly Profit */
       /* <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Monthly Revenue</h3>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <Line data={revenueData} options={{ responsive: true }} />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Quarterly Profit</h3>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <Bar data={profitData} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        {/* Right Column - Expense Breakdown */
      /*  <div className="lg:col-span-1">
          <h3 className="text-xl text-start font-semibold mb-4 text-black">Expense Breakdown</h3>
          <div className="bg-white p-6 shadow-md rounded-lg ">
            <Pie data={expenseData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview; */

