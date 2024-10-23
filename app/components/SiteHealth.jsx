import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge'; // Ensure correct import

const SiteHealth = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold mb-4 text-black">Site Health</h3>

      {/* Implement Gauge chart */}
      <div className="flex justify-center">
        <Gauge
          value={75} // Example value for site health
          valueMax={100} // Maximum value for the gauge
          startAngle={-120} // Start of the arc
          endAngle={120} // End of the arc
          thickness={25} // Adjust thickness to your design
          color="primary"
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 20, // Adjust text size
              transform: 'translate(0px, 0px)',
              fill: '#111', // Change text color to black
            },
          }}
          text={({ value, valueMax }) => `${value} / ${valueMax}`} // Display custom text inside gauge
        />
      </div>

      {/* Additional description */}
      <p className="mt-4 text-gray-700">Check your site health score</p>
    </div>
  );
};

export default SiteHealth;
