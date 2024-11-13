// ClubEvents.jsx

import React from 'react';

const ClubEvents = () => {
  return (
    <div className="bg-white p-6 sm:p-6 md:p-8 rounded-lg h-auto w-full sm:w-[90%] sm:top-4 md:top-6 md:w-[99%] lg:max-w-full md:mx-[2%] lg:top-auto lg:mx-auto">
  
      <h3 className="font-semibold mb-4 text-black">Club Events</h3>
      <div className="mb-2">
        <div className="bg-blue-500 text-white p-2 rounded-lg">
          Club 001, Club 002, Club 003
        </div>
      </div>
      <div className="mb-2">
        <div className="bg-yellow-500 text-white p-2 rounded-lg">
          Club 001 (1:00 - 3:00)
        </div>
      </div>
      <div className="mb-2">
        <div className="bg-red-500 text-white p-2 rounded-lg">
          Club 002 (1:00 - 3:00)
        </div>
      </div>
      <div className="mb-2">
        <div className="bg-green-500 text-white p-2 rounded-lg">
          Club 004 (4:00 - 5:00)
        </div>
      </div>
      <div>
        <div className="bg-gray-300 text-gray-600 p-2 rounded-lg">
          Club 005 (6:00 - 8:00)
        </div>
      </div>
    </div>
  );
};

export default ClubEvents;
