import React from 'react';

const upcomingEvents = [
  { id: 1, name: 'Tech Conference 2024', date: '2024-11-10', description: 'A conference on the latest in tech innovations.' },
  { id: 2, name: 'Design Workshop', date: '2024-12-01', description: 'A hands-on workshop about UI/UX design trends.' },
  { id: 3, name: 'Music Festival', date: '2024-12-15', description: 'An outdoor music festival with live performances.' },
];



const UpcomingEvents = () => {
  return (
    <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 p-6 rounded-lg shadow-md mb-6">
      <h2 className="font-bold text-xl mb-4 text-black">Upcoming Events</h2>
      <ul>
        {upcomingEvents.map((event) => (
          <li key={event.id} className="p-4 mb-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-700 mb-2">{event.name}</h3>
            <p className="text-gray-700 text-md mb-1"><strong>Date: </strong>{event.date}</p>
            <p className="text-gray-600 text-md">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
