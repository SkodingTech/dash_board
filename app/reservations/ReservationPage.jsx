// app/events/page.jsx
import React from 'react';

const reservations = [
  {
    id: 1,
    event: 'Music Concert',
    date: '2024-11-05',
    status: 'Confirmed',
  },
  {
    id: 2,
    event: 'Art Exhibition',
    date: '2024-11-10',
    status: 'Pending',
  },
  {
    id: 3,
    event: 'Tech Conference',
    date: '2024-11-15',
    status: 'Cancelled',
  },
];

const Reservation = ({ onCancel }) => {
  return (
    
    <div className="bg-white p-6 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
        <h1 className="text-2xl font-bold mb-4 text-black">Reservations</h1>
        {reservations.length > 0 ? (
          <ul className="space-y-4">
            {reservations.map((reservation) => (
              <li key={reservation.id} className="p-4 border rounded-lg shadow">
                <h2 className="font-semibold text-lg text-black">{reservation.event}</h2>
                <p className="text-gray-600">Date: {reservation.date}</p>
                <span
                  className={`text-sm ${
                    reservation.status === 'Confirmed'
                      ? 'text-green-500'
                      : reservation.status === 'Pending'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  }`}
                >
                  Status: {reservation.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reservations available.</p>
        )}
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-500 text-white px-4 py-2 rounded mt-10 hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500"
        >
          Back
        </button>
      </div>
    
  );
};

export default Reservation;
