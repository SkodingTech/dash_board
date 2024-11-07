// app/events/page.jsx
import React from 'react';

const notifications = [
  {
    id: 1,
    title: 'Event Reminder',
    message: 'Don’t forget about the upcoming event on Friday!',
    timestamp: '2024-10-29 10:00 AM',
  },
  {
    id: 2,
    title: 'New Club Created',
    message: 'A new club has been successfully created.',
    timestamp: '2024-10-28 03:30 PM',
  },
  {
    id: 3,
    title: 'User Registration',
    message: 'A new user has registered for the event.',
    timestamp: '2024-10-27 01:15 PM',
  },
];

const Notification = ({ onCancel }) => {
  return (
  
    <div className="bg-white p-6 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
        <h1 className="text-2xl font-bold mb-4 text-black">Notifications</h1>
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="p-4 border rounded-lg shadow">
                <h2 className="font-semibold text-lg text-black">{notification.title}</h2>
                <p className="text-gray-600">{notification.message}</p>
                <span className="text-gray-400 text-sm">{notification.timestamp}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No notifications available.</p>
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

export default Notification;
