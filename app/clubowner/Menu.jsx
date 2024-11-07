import React, { useState } from 'react';
import Link from 'next/link';

const ArrowIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const Menu = ({ onAddEventClick, onViewEventsClick, onAddUserClick, onViewUsersClick, onNotificationClick, onReservationClick, onSettingClick }) => {
  
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    
    setIsEventsOpen(dropdown === 'events' ? !isEventsOpen : false);
    setIsUsersOpen(dropdown === 'users' ? !isUsersOpen : false);
    setIsDashboardOpen(dropdown === 'dashboard' ? !isDashboardOpen : false);
  };

  return (
    <aside className="w-64 bg-white shadow-md rounded-xl flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="text-2xl font-bold text-[#D76C82]">Booking App</div>
        <p className="text-gray-500">Club Owner</p>
        
        <nav className="mt-8 flex-grow">
          <ul>
            {/* Dashboard Section */}
            <li 
              aria-expanded={isDashboardOpen} 
              className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" 
              onClick={() => toggleDropdown('dashboard')}
            >
              <div>
                <i className="fa-solid fa-house mr-2"></i>
                <span>Dashboard</span>
              </div>
              <ArrowIcon isOpen={isDashboardOpen} />
            </li>
            <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isDashboardOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded">
                <Link href="/admin-panel">Admin Panel</Link>
              </li>
              

            </ul>


           
              

            {/* Events Section */}
            <li 
              aria-expanded={isEventsOpen} 
              className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" 
              onClick={() => toggleDropdown('events')}
            >
              <div>
                <i className="fa-solid fa-envelope mr-2"></i>
                <span>Events</span>
              </div>
              <ArrowIcon isOpen={isEventsOpen} />
            </li>
            <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isEventsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li 
                className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" 
                onClick={() => {
                  onAddEventClick();  // Ensure this function is passed as a prop
                  toggleDropdown('events');
                }}
              >
                Add Event
              </li>
              <li 
                className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" 
                onClick={() => {
                  onViewEventsClick(); // Ensure this function is passed as a prop
                  toggleDropdown('events'); 
                }}
              >
                View Events
              </li>
            </ul>

            {/* Reservations Section */}
            <li
              className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer"
              onClick={() => onReservationClick()} // Ensure this function is passed as a prop
            >
              <i className="fa-solid fa-gear mr-2"></i>
              Reservations
            </li>

            {/* Notifications Section */}
            <li
              className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer"
              onClick={() => onNotificationClick()} // Ensure this function is passed as a prop
            >
              <i className="fa-solid fa-gear mr-2"></i>
              Notifications
            </li>

            {/* Users Section */}
            <li 
              aria-expanded={isUsersOpen} 
              className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" 
              onClick={() => toggleDropdown('users')}
            >
              <div>
                <i className="fa-solid fa-user-large mr-2"></i>
                <span>Users</span>
              </div>
              <ArrowIcon isOpen={isUsersOpen} />
            </li>
            <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isUsersOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li 
                className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer"
                onClick={() => {
                  onAddUserClick();  // Ensure this function is passed as a prop
                  toggleDropdown('users');
                }}
              >
                Add User
              </li>
              <li 
                className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer"
                onClick={() => {
                  onViewUsersClick(); // Ensure this function is passed as a prop
                  toggleDropdown('users');
                }}
              >
                View Users
              </li>
            </ul>

            {/* Settings Section */}
            <li
              className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer"
              onClick={() => onSettingClick()} // Ensure this function is passed as a prop
            >
              <i className="fa-solid fa-gear mr-2"></i>
              Settings
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto mb-10">
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded-lg flex items-center justify-start hover:bg-blue-100 hover:text-indigo-600 mt-5">
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
