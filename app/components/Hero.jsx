"use client"; // Client component directive
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Menu from './Menu';
import ClubStatistic from './ClubStatistic';
import ClubEvents from './ClubEvents';
import SiteHealth from './SiteHealth';
import OnlineSales from './OnlineSales';
import SalesRevenue from './SalesRevenue';
import AddEditEventForm from './events/AddEditEventForm';
import ViewEvent from './events/ViewEvent';
import AddClub from './club/AddClub';
import ViewClub from './club/ViewClub';
import AddUser from './users/AddUser';
import ViewUser from './users/ViewUser';
import BookingsManagement from './booking/ViewBookings';
import Settings from './settings/SettingPage';
import Reservation from '../reservations/ReservationPage';
import Notification from '../notifications/NotificationPage';

const Hero = () => {
  const router = useRouter();

  const [visibility, setVisibility] = useState({
    addEventForm: false,
    viewEvents: false,
    addClub: false,
    viewClub: false,
    addUser: false,
    viewUser: false,
    viewBooking: false,
    reservationPage: false,
    notificationPage: false,
    settingPage: false,
  });

  const toggleComponent = (component) => {
    setVisibility((prevState) => ({
      ...prevState,
      [component]: !prevState[component],
      addEventForm: component === 'addEventForm' ? !prevState.addEventForm : false,
      viewEvents: component === 'viewEvents' ? !prevState.viewEvents : false,
      addClub: component === 'addClub' ? !prevState.addClub : false,
      viewClub: component === 'viewClub' ? !prevState.viewClub : false,
      addUser: component === 'addUser' ? !prevState.addUser : false,
      viewUser: component === 'viewUser' ? !prevState.viewUser : false,
      viewBooking: component === 'viewBookings' ? !prevState.viewBooking : false,
      reservationPage: component === 'reservationPage' ? !prevState.reservationPage : false,
      notificationPage: component === 'notificationPage' ? !prevState.notificationPage : false,
      settingPage: component === 'settingPage' ? !prevState.settingPage : false,
    }));
  };

  const handleIDClick = () => {
    router.push('/login');
  };

  const handleAddUserClick = () => {
    toggleComponent('addUser');
  };

  const handleViewUserClick = () => {
    toggleComponent('viewUser');
  };

  const handleSettingClick = () => {
    toggleComponent('settingPage'); // Toggle visibility for the settings page
  };

  return (
    <div className="min-h-screen flex bg-transparent flex-col md:flex-row">
      {/* Sidebar */}
      <Menu 
        onAddEventClick={() => toggleComponent('addEventForm')}
        onViewEventsClick={() => toggleComponent('viewEvents')}
        onAddClubClick={() => toggleComponent('addClub')}
        onViewClubClick={() => toggleComponent('viewClub')}
        onBookingsClick={() => toggleComponent('viewBookings')} // Corrected
        onReservationClick={() => toggleComponent('reservationPage')}
        onNotificationClick={() => toggleComponent('notificationPage')}
        onAddUserClick={handleAddUserClick}
        onViewUsersClick={handleViewUserClick}
        onSettingClick={handleSettingClick}
        menuCollapsed={true}
        setMenuCollapsed={() => {}}
      />

      <main className="flex-1 p-4 md:p-6 lg:p-8">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6"> 
          <p className="font-semibold text-black text-lg md:text-xl absolute top-7 right-4 sm:right-6 md:right-8 lg:static lg:top-auto lg:right-auto">
            Dashboard
          </p>

          {/* Search Bar */}
          <div className="relative flex-grow mx-0 md:mx-6 mb-4 md:mb-0 sm:w-full md:w-3/4 lg:w-full top-10 md:top-auto">
          
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 text-black p-2 rounded-full w-full h-10 pl-10 pr-4"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          {/* Hidden on small and medium screens, visible on large screens */}
          <div className="flex items-center space-x-4 hidden lg:flex">
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
              <div className="ml-2">
                <span className="block font-semibold text-black text-sm md:text-base">NAME</span>
                <a
                  href="mailto:abc@gmail.com"
                  className="text-gray-500 hover:text-blue-500 transition duration-200 text-xs md:text-sm"
                >
                  abc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white bg-opacity-50 p-4 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
    
    {/* Notification Box */}
            <div className="bg-yellow-100 p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg shadow flex items-center h-16 sm:h-30 md:h-24 lg:h-28 sm:w-30 md:w-34">
            <div className="bg-[#FFEB00] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full mr-2 sm:mr-3 md:mr-4 lg:mr-5">
              <i className="fa-solid fa-bell text-white text-xs sm:text-sm md:text-xl lg:text-3xl"></i>
            </div>

              <div>
                <h3 className="font-semibold text-black text-[10px] sm:text-xs md:text-base lg:text-lg">
                  Notification
                </h3>
                <p className="text-[#FFEB00] font-semibold text-[8px] sm:text-[9px] md:text-[10px] lg:text-base">
                  8 Unread Notifications
                </p>
              </div>
            </div>
    {/* Events Box */}
        <div className="bg-green-100 p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg shadow flex items-center h-16 sm:h-30 md:h-24 lg:h-28 sm:w-30 md:w-34">
        <div className="bg-[#06D001] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full mr-2 sm:mr-3 md:mr-4 lg:mr-5">
              <i className="fa-solid fa-bell text-white text-xs sm:text-sm md:text-xl lg:text-3xl"></i>
            </div>
          <div>
            <h3 className="font-semibold text-black text-[10px] sm:text-xs md:text-base lg:text-lg">Events</h3>
            <p className="text-[#06D001] font-semibold text-[8px] sm:text-[9px] md:text-[10px] lg:text-base">4 Project Last Update</p>
          </div>
        </div>

        {/* Clubs Box */}
        <div className="bg-purple-100 p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg shadow flex items-center h-16 sm:h-20 md:h-24 lg:h-28 sm:w-30 md:w-34">
        <div className="bg-[#793FDF] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full mr-2 sm:mr-3 md:mr-4 lg:mr-5">
              <i className="fa-solid fa-bell text-white text-xs sm:text-sm md:text-xl lg:text-3xl"></i>
            </div>
          <div>
            <h3 className="font-semibold text-black text-[10px] sm:text-xs md:text-base lg:text-lg">Clubs</h3>
            <p className="text-[#793FDF] font-semibold text-[8px] sm:text-[9px] md:text-[10px] lg:text-base">6 Client Waiting</p>
          </div>
        </div>

        {/* New Club Box */}
        <div className="bg-blue-600 p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg shadow flex items-center h-16 sm:h-20 md:h-24 lg:h-28 sm:w-30 md:w-34">
        <div className="bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full mr-2 sm:mr-3 md:mr-4 lg:mr-5">
              <i className="fa-solid fa-file text-indigo-600 text-xs sm:text-sm md:text-xl lg:text-3xl"></i>
            </div>
          <div>
            <h3 className="font-semibold text-white text-[10px] sm:text-xs md:text-base lg:text-lg">New Club</h3>
            <p className="text-white font-semibold text-[8px] sm:text-[9px] md:text-[10px] lg:text-base">Project</p>
          </div>
        </div>
    </div>
  </div>


        {/* Conditional Rendering of Forms */}
        {visibility.addEventForm && <AddEditEventForm onCancel={() => toggleComponent('addEventForm')} />}
        {visibility.viewEvents && <ViewEvent onCancel={() => toggleComponent('viewEvents')} />}
        {visibility.addClub && <AddClub onCancel={() => toggleComponent('addClub')} />}
        {visibility.viewClub && <ViewClub onCancel={() => toggleComponent('viewClub')} />}
        {visibility.addUser && <AddUser onCancel={() => toggleComponent('addUser')} />}
        {visibility.viewUser && <ViewUser onCancel={() => toggleComponent('viewUser')} />}
        {visibility.viewBooking && <BookingsManagement onCancel={() => toggleComponent('viewBookings')} />}
        {visibility.reservationPage && <Reservation onCancel={() => toggleComponent('reservationPage')} />}
        {visibility.notificationPage && <Notification onCancel={() => toggleComponent('notificationPage')} />}
        {visibility.settingPage && <Settings onCancel={() => toggleComponent('settingPage')} />}

        {/* Club Statistics and Sales Revenue */}
        {!visibility.addEventForm && !visibility.viewEvents && !visibility.addClub && !visibility.viewClub && !visibility.addUser && !visibility.viewUser && !visibility.viewBooking && !visibility.reservationPage && !visibility.notificationPage && !visibility.settingPage && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <ClubStatistic />
            <div className="col-span-2 flex flex-col gap-4">
              <SalesRevenue />
              <ClubEvents />
            </div>
          </div>
        )}

        {/* Site Health and Online Sales */}
        {!visibility.addEventForm && !visibility.viewEvents && !visibility.addClub && !visibility.viewClub && !visibility.addUser && !visibility.viewUser && !visibility.viewBooking && !visibility.reservationPage && !visibility.notificationPage && !visibility.settingPage && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SiteHealth />
            <OnlineSales />
          </div>
        )}

      </main>
    </div>
  );
};

export default Hero;
