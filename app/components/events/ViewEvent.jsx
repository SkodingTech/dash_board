"use client";
import React from 'react';

const upcomingEvents = [
  { id: 1, name: 'Tech Conference 2024', date: '2024-11-10', description: 'A conference on the latest in tech innovations.' },
  { id: 2, name: 'Design Workshop', date: '2024-12-01', description: 'A hands-on workshop about UI/UX design trends.' },
  { id: 3, name: 'Music Festival', date: '2024-12-15', description: 'An outdoor music festival with live performances.' },
];



const ViewEvent = ({ onCancel }) => {
  return (
    
  
  <div className="bg-white p-6 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
      <h2 className="font-bold text-xl mb-4 text-black">Upcoming Events</h2>
      <ul>
        {upcomingEvents.map((event) => (
          <li key={event.id} className="p-4 mb-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h3 className="text-lg md:text-xl lg:text-xl font-bold text-indigo-700 mb-2">{event.name}</h3>
          <p className="text-sm md:text-md lg:text-lg text-gray-700 mb-1">
              <strong>Date: </strong>{event.date}
          </p>
          <p className="text-xs md:text-sm lg:text-md text-gray-600">
              {event.description}
          </p>
      </li>
      
        ))}
      </ul>
      <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          Back
        </button>
    </div>
    
  );
};

export default ViewEvent;
