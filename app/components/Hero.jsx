"use client"; // Client component directive
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Menu from './Menu';
import ClubStatistic from './ClubStatistic';
import ClubEvents from './ClubEvents';
import SiteHealth from './SiteHealth';
import OnlineSales from './OnlineSales';
import SalesRevenue from './SalesRevenue';
import AddEditEventForm from './AddEditEventForm'; // Ensure the path is correct
import UpcomingEvents from './UpcomingEvents';

const Hero = () => {
  const router = useRouter();

  // State to control visibility of forms
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(true); // State to control the menu

  // Function to toggle the Add Event Form
  const toggleAddEventForm = () => {
    setShowAddEventForm(!showAddEventForm);
    setShowUpcomingEvents(false); // Hide Upcoming Events when toggling the form
    setMenuCollapsed(!menuCollapsed); // Collapse menu when form is toggled
  };

  // Function to show Upcoming Events
  const toggleUpcomingEvents = () => {
    setShowUpcomingEvents(!showUpcomingEvents);
    setShowAddEventForm(false); // Hide Add Event Form when showing upcoming events
    setMenuCollapsed(!menuCollapsed); // Collapse menu when toggling the events
  };

  const handleIDClick = () => {
    router.push('/login');
  };

  useEffect(() => {
    const handleBackspace = (event) => {
      if (event.key === 'Backspace' && (showAddEventForm || showUpcomingEvents)) {
        setShowAddEventForm(false);
        setShowUpcomingEvents(false);
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleBackspace);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleBackspace);
    };
  }, [showAddEventForm, showUpcomingEvents]);

  return (
    <div className="min-h-screen flex bg-transparent">
      {/* Sidebar with toggle function passed to Menu */}
      <Menu 
        onAddEventClick={toggleAddEventForm} 
        onViewEventsClick={toggleUpcomingEvents} 
        menuCollapsed={menuCollapsed} 
        setMenuCollapsed={setMenuCollapsed} 
      />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Nav */}
        <header className="flex justify-between items-center mb-6">
          <p className="font-semibold text-black">Dashboard</p>

          {/* Search Bar with Icon */}
          <div className="relative flex-grow mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 text-black p-2 rounded-full w-full h-10 pl-10 pr-4" // Adjusted padding for the icon
            />
            {/* Search Icon */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i> {/* Search Icon */}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div
              className="flex items-center bg-purple-100 p-2 rounded-full px-4 cursor-pointer"
              onClick={handleIDClick}
            >
              <span className="text-purple-600 font-semibold">ID</span>
              <button className="bg-transparent text-purple-600 ml-2">▼</button>
            </div>

            <div className="flex items-center">
              <Image
                src="/profile.jpg"
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
                width={40}
                height={40}
              />
              <div className="ml-4">
                <span className="block font-semibold text-black">NAME</span>
                <a
                  href="mailto:abc@gmail.com"
                  className="text-gray-500 hover:text-blue-500 transition duration-200"
                >
                  abc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Cards Container */}
        <div className="bg-white bg-opacity-50 p-4 rounded-lg mx-8 my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Notification Box */}
            <div className="bg-yellow-100 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#FFEB00] w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-bell text-white text-3xl"></i> {/* Bigger Icon */}
              </div>
              <div>
                <h3 className="font-semibold text-black">Notification</h3>
                <p className="text-[#FFEB00] font-semibold text-sm">8 Unread Notifications</p>
              </div>
            </div>

            {/* Events Box */}
            <div className="bg-green-100 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#06D001] w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-bell text-white text-3xl"></i> {/* Bigger Icon */}
              </div>
              <div>
                <h3 className="font-semibold text-black">Events</h3>
                <p className="text-[#06D001] font-semibold text-sm">4 Project Last Update</p>
              </div>
            </div>

            {/* Clubs Box */}
            <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#793FDF] w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-bell text-white text-3xl"></i> {/* Bigger Icon */}
              </div>
              <div>
                <h3 className="font-semibold text-black">Clubs</h3>
                <p className="text-[#793FDF] font-semibold text-sm">6 Client Waiting</p>
              </div>
            </div>

            {/* New Club Box */}
            <div className="bg-blue-600 p-4 rounded-lg shadow flex items-center">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-file text-blue-400 text-3xl"></i> {/* Bigger Icon */}
              </div>
              <div>
                <h3 className="font-semibold text-white">New Club</h3>
                <p className="text-white font-semibold text-sm">Project</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conditional rendering of forms */}
        {showAddEventForm && <AddEditEventForm onCancel={toggleAddEventForm} />}
        {showUpcomingEvents && <UpcomingEvents />}

        {/* Club Statistics and Sales Revenue */}
        {!showAddEventForm && !showUpcomingEvents && (
          <div className="grid grid-cols-5 gap-4 mb-6">
            {/* Club Statistic Section */}
            <ClubStatistic />

            {/* Sales Revenue Section */}
            <div className="col-span-2 flex flex-col gap-4">
              <SalesRevenue />

              {/* Club Events */}
              <ClubEvents />
            </div>
          </div>
        )}

        {/* Site Health and Online Sales in a new row */}
        {!showAddEventForm && !showUpcomingEvents && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Site Health */}
            <SiteHealth />

            {/* Online Sales */}
            <OnlineSales />
          </div>
        )}
      </main>
    </div>
  );
};

export default Hero;
