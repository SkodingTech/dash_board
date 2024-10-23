import React from 'react';

const Menu = () => {
  return (
    <aside className="w-64 bg-white shadow-md rounded-xl">
      <div className="p-6">
        <div className="text-2xl font-bold text-indigo-600">Booking App</div>
        <p className="text-gray-500">Admin Panel</p>
        <nav className="mt-8">
          <ul>
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded">
              Dashboard
            </li>
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded">
              Clubs
            </li>
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded">
              Events
            </li>
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded">
              Reservations
            </li>
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded">
              Notification
            </li>
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded">
              Users
            </li>
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded">
              Settings
            </li>
          </ul>
          <div className="p-6 mt-auto">
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded-lg">Log Out</button>
        </div>
        </nav>
      </div>
    </aside>
  );
};

export default Menu;
