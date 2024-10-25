import React, { useState } from 'react';
import Link from 'next/link';

// ArrowIcon component with the arrow SVG
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

const Menu = ({ onAddEventClick, onViewEventClick }) => {
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Toggle dropdowns
  const toggleClubsDropdown = () => {
    setIsClubsOpen(!isClubsOpen);
    setIsEventsOpen(false); // Close events dropdown when clubs dropdown is opened
    setIsUsersOpen(false); // Close users dropdown when clubs dropdown is opened
    setIsDashboardOpen(false); // Close dashboard dropdown when clubs dropdown is opened
  };

  const toggleEventsDropdown = () => {
    setIsEventsOpen(!isEventsOpen);
    setIsClubsOpen(false); // Close clubs dropdown when events dropdown is opened
    setIsUsersOpen(false); // Close users dropdown when events dropdown is opened
    setIsDashboardOpen(false); // Close dashboard dropdown when events dropdown is opened
  };

  const toggleUsersDropdown = () => {
    setIsUsersOpen(!isUsersOpen);
    setIsClubsOpen(false); // Close clubs dropdown when users dropdown is opened
    setIsEventsOpen(false); // Close events dropdown when users dropdown is opened
    setIsDashboardOpen(false); // Close dashboard dropdown when users dropdown is opened
  };

  const toggleDashboardDropdown = () => {
    setIsDashboardOpen(!isDashboardOpen);
    setIsClubsOpen(false); // Close clubs dropdown when dashboard dropdown is opened
    setIsEventsOpen(false); // Close events dropdown when dashboard dropdown is opened
    setIsUsersOpen(false); // Close users dropdown when dashboard dropdown is opened
  };

  return (
    <aside className="w-64 bg-white shadow-md rounded-xl flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="text-2xl font-bold text-indigo-600">Booking App</div>
        <p className="text-gray-500">Admin Panel</p>
        
        <nav className="mt-8 flex-grow">
          <ul>
            {/* Dashboard Dropdown */}
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={toggleDashboardDropdown}>
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
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded">
                <Link href="/club-owner">Club Owner</Link>
              </li>
            </ul>

            {/* Clubs Dropdown */}
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={toggleClubsDropdown}>
              <div>
                <i className="fa-brands fa-facebook-messenger mr-2"></i>
                <span>Clubs</span>
              </div>
              <ArrowIcon isOpen={isClubsOpen} />
            </li>
            <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isClubsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded">
                <Link href="/clubs/add">Add Club</Link>
              </li>
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded">
                <Link href="/clubs/view">View Clubs</Link>
              </li>
            </ul>

            {/* Events Dropdown */}
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={toggleEventsDropdown}>
              <div>
                <i className="fa-solid fa-envelope mr-2"></i>
                <span>Events</span>
              </div>
              <ArrowIcon isOpen={isEventsOpen} />
            </li>
            <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isEventsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              {/* Trigger Add Event Form */}
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => {
                onAddEventClick();
                toggleEventsDropdown(); // Close dropdown when clicked
              }}>
                Add Event
              </li>
              {/* Trigger View Events */}
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => {
                onViewEventClick(); // Call function to show UpcomingEvents
                toggleEventsDropdown(); // Close dropdown when clicked
              }}>
                View Events
              </li>
            </ul>

            {/* Reservations */}
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg">
              <i className="fa-solid fa-chart-simple mr-2"></i>
              <Link href="/reservations">Reservations</Link>
            </li>

            {/* Notifications */}
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg">
              <i className="fa-solid fa-bell mr-2"></i>
              <Link href="/notifications">Notifications</Link>
            </li>

            {/* Users Dropdown */}
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={toggleUsersDropdown}>
              <div>
                <i className="fa-solid fa-user-large mr-2"></i>
                <span>Users</span>
              </div>
              <ArrowIcon isOpen={isUsersOpen} />
            </li>
            <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isUsersOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded-lg">
                <Link href="/users/add">Add User</Link>
              </li>
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded-lg">
                <Link href="/users/view">View Users</Link>
              </li>
            </ul>

            {/* Settings */}
            <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg">
              <i className="fa-solid fa-gear mr-2"></i>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* Log Out Button */}
        <div className="mt-auto mb-10">
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded-lg flex items-center justify-start hover:bg-blue-100 hover:text-indigo-600">
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
