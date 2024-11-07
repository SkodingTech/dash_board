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

const Menu = ({ 
  onAddEventClick, 
  onViewEventsClick, 
  onAddClubClick, 
  onViewClubClick, 
  onAddUserClick, 
  onViewUsersClick, 
  onBookingsClick, 
  onNotificationClick, 
  onReservationClick, 
  onSettingClick 
}) => {
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the aside menu visibility

  const toggleDropdown = (dropdown) => {
    setIsClubsOpen(dropdown === 'clubs' ? !isClubsOpen : false);
    setIsEventsOpen(dropdown === 'events' ? !isEventsOpen : false);
    setIsUsersOpen(dropdown === 'users' ? !isUsersOpen : false);
    setIsDashboardOpen(dropdown === 'dashboard' ? !isDashboardOpen : false);
    setIsBookingsOpen(dropdown === 'bookings' ? !isBookingsOpen : false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle aside menu visibility
  };

  return (
    <>
      {/* Hamburger Button (visible on small screens only) */}
      <button
        className={`p-4 text-black bg-transparent cursor-pointer fixed top-4 left-4 z-50 md:hidden ${isMenuOpen ? 'hidden' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <i className="fa-solid fa-bars" />
      </button>



      {/* Sidebar Menu */}
      <aside className={`fixed top-0 left-0 w-64 bg-white shadow-md rounded-xl flex flex-col transition-transform duration-300 
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:block md:w-64 z-40`}>
          
        {/* Cross Button inside Sidebar (visible on small screens only) */}
        <button
          className="p-4 text-black bg-transparent cursor-pointer absolute top-4 right-4 md:hidden"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <div className="p-6 flex flex-col h-full">
          <div className="text-2xl font-bold text-[#D76C82]">Booking App</div>
          <p className="text-gray-500">Admin Panel</p>

          <nav className="mt-8 flex-grow">
            <ul>
              {/* Dashboard Section */}
              <li aria-expanded={isDashboardOpen} className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown('dashboard')}>
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
                <Link href="/clubowner" className="menu-item"></Link>
              </ul>

              {/* Clubs Section */}
              <li aria-expanded={isClubsOpen} className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown('clubs')}>
                <div>
                  <i className="fa-brands fa-facebook-messenger mr-2"></i>
                  <span>Clubs</span>
                </div>
                <ArrowIcon isOpen={isClubsOpen} />
              </li>
              <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isClubsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => { onAddClubClick(); toggleDropdown('clubs'); }}>Add Club</li>
                <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => { onViewClubClick(); toggleDropdown('clubs'); }}>View Clubs</li>
              </ul>

              {/* Events Section */}
              <li aria-expanded={isEventsOpen} className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown('events')}>
                <div>
                  <i className="fa-solid fa-envelope mr-2"></i>
                  <span>Events</span>
                </div>
                <ArrowIcon isOpen={isEventsOpen} />
              </li>
              <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isEventsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => { onAddEventClick(); toggleDropdown('events'); }}>Add Event</li>
                <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => { onViewEventsClick(); toggleDropdown('events'); }}>View Events</li>
              </ul>

              {/* Bookings Section */}
              <li aria-expanded={isBookingsOpen} className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown('bookings')}>
                <div>
                  <i className="fa-solid fa-calendar mr-2"></i>
                  <span>Bookings</span>
                </div>
                <ArrowIcon isOpen={isBookingsOpen} />
              </li>
              <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isBookingsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => { onBookingsClick(); toggleDropdown('booking') }}>View Bookings</li>
              </ul>

              {/* Reservations Section */}
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer" onClick={() => onReservationClick()}>
                <i className="fa-solid fa-gear mr-2"></i>
                Reservations
              </li>

              {/* Notifications Section */}
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer" onClick={() => onNotificationClick()}>
                <i className="fa-solid fa-bell mr-2"></i>
                Notifications
              </li>

              {/* Users Section */}
              <li aria-expanded={isUsersOpen} className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown('users')}>
                <div>
                  <i className="fa-solid fa-users mr-2"></i>
                  <span>Users</span>
                </div>
                <ArrowIcon isOpen={isUsersOpen} />
              </li>
              <ul className={`pl-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isUsersOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => { onAddUserClick(); toggleDropdown('users'); }}>Add User</li>
                <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-2 rounded cursor-pointer" onClick={() => { onViewUsersClick(); toggleDropdown('users'); }}>View Users</li>
              </ul>

              {/* Settings Section */}
              <li className="text-gray-500 hover:bg-blue-100 hover:text-indigo-600 p-4 rounded-lg cursor-pointer" onClick={() => onSettingClick()}>
                <i className="fa-solid fa-cogs mr-2"></i>
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
    </>
  );
};

export default Menu;
