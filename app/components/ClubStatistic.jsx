import React from 'react';
import { LineChart } from '@mui/x-charts'; // Correct import

// Sample data for hourly data (e.g., user counts per hour)
const hourlyData = [1000, 2000, 1500, 3000, 2500, 4000, 3500, 6000, 5000, 3000, 2000, 1500];
const xHours = [
  '00:00', '01:00', '02:00', '03:00', '04:00',
  '05:00', '06:00', '07:00', '08:00', '09:00',
  '10:00', '11:00'
];

// Sample data for monthly data (e.g., user counts per month)
const monthlyData = [3000, 4500, 3200, 5000, 6000, 7000, 8000, 5000, 6000, 7500, 8000, 9000];
const xMonths = [
  'January', 'February', 'March', 'April', 'May', 
  'June', 'July', 'August', 'September', 'October', 
  'November', 'December'
];

// Function to aggregate hourly data into monthly
const aggregateHourlyToMonthly = (hourlyData) => {
  const monthlyAggregatedData = new Array(12).fill(0);
  hourlyData.forEach((value, index) => {
    const monthIndex = Math.floor(index / 24); // 24 hours in a day
    if (monthIndex < 12) {
      monthlyAggregatedData[monthIndex] += value;
    }
  });
  return monthlyAggregatedData;
};

const aggregatedHourlyData = aggregateHourlyToMonthly(hourlyData);

const ClubStatistic = () => {
  return (
    <div className="bg-white p-4 sm:mx-8 rounded-lg shadow col-span-3 w-full sm:w-10/12 sm:w-[90%] md:w-[95%] lg:w-[95%] mx-0 md:mx-auto">
  
      <h3 className="font-semibold mb-4 text-black">Club Statistic</h3>
      
      {/* Combined Data Line Chart */}
      <div className="flex justify-center items-center mt-2 px-2 mb-2 ml-2">
        <LineChart
          width={window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 500 : 800} // Responsive width
          height={400} // Fixed height for better aspect ratio
          series={[
            { data: aggregatedHourlyData, label: 'Hourly Users (Aggregated)', color: 'blue' },
            { data: monthlyData, label: 'Monthly Users', color: 'green' }
          ]}
          xAxis={[{ scaleType: 'point', data: xMonths }]} // Use months as the x-axis
          tooltip={{
            shared: true,
          }}
        />
      </div>
    </div>
  );
};

export default ClubStatistic;
