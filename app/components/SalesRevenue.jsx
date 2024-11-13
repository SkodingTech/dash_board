// SalesRevenue.jsx
import React from 'react';

const SalesRevenue = () => {
  return (
      <div className="relative bg-blue-500 p-6 sm:p-6 md:p-8 rounded-lg shadow-lg h-40 w-full sm:w-[90%] sm:top-4 md:top-4 md:mb-7 md:w-[99%] lg:max-w-full md:mx-[2%] lg:top-auto lg:mx-auto lg:mb-auto">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-indigo-700 opacity-30 rectangle-full absolute top-1 right-1"></div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-teal-400 opacity-30 rectangle-full absolute bottom-4 left-4 sm:left-6"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <h3 className="font-semibold text-md sm:text-lg md:text-xl text-white mb-2">Sales Revenue</h3>
          <p className="text-white text-xs sm:text-sm mb-4">Some sales revenue data here</p>
        </div>

        {/* Try Free Button */}
        <button className="absolute bottom-4 right-4 bg-white text-blue-500 font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200 text-xs sm:text-sm">
          Try Free
        </button>
      </div>

  );
};

export default SalesRevenue;
