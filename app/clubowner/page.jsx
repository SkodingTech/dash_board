"use client"; // Client component directive
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Menu from './Menu';// Adjust the import path if necessary
import ClubStatistic from '../components/ClubStatistic';
import ClubEvents from '../components/ClubEvents';
import SiteHealth from '../components/SiteHealth';
import OnlineSales from '../components/OnlineSales';
import SalesRevenue from '../components/SalesRevenue';
import AddEditEventForm from '../components/events/AddEditEventForm';
import ViewEvent from '../components/events/ViewEvent';
import AddClub from '../components/club/AddClub';
import ViewClub from '../components/club/ViewClub';
import AddUser from '../components/users/AddUser';
import ViewUser from '../components/users/ViewUser';
import Settings from '../components/settings/SettingPage';
import Reservation from '../reservations/ReservationPage';
import Notification from '../notifications/NotificationPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ClubOwnerPage = () => {
  const router = useRouter();

  const [visibility, setVisibility] = useState({
    addEventForm: false,
    viewEvents: false,
    addClub: false,
    viewClub: false,
    addUser: false,
    viewUser: false,
    reservationPage: false,
    notificationPage: false,
    settingPage: false,
  });

  const toggleComponent = (component) => {
    setVisibility((prevState) => ({
      ...prevState,
      [component]: !prevState[component],
      
      // Close others when opening a new one
      addEventForm: component === 'addEventForm' ? !prevState.addEventForm : false,
      viewEvents: component === 'viewEvents' ? !prevState.viewEvents : false,
      addClub: component === 'addClub' ? !prevState.addClub : false,
      viewClub: component === 'viewClub' ? !prevState.viewClub : false,
      addUser: component === 'addUser' ? !prevState.addUser : false,
      viewUser: component === 'viewUser' ? !prevState.viewUser : false,
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
    <div className="min-h-screen flex bg-gray-100 p-6">
      {/* Sidebar */}
      <Menu 
        onAddEventClick={() => toggleComponent('addEventForm')} 
        onViewEventsClick={() => toggleComponent('viewEvents')} 
        onAddClubClick={() => toggleComponent('addClub')}
        onViewClubClick={() => toggleComponent('viewClub')}
        onReservationClick={() => toggleComponent('reservationPage')}
        onNotificationClick={() => toggleComponent('notificationPage')}
        onAddUserClick={handleAddUserClick}
        onViewUsersClick={handleViewUserClick}
        onSettingClick={handleSettingClick}
        menuCollapsed={true}
        setMenuCollapsed={() => {}}
      />

      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <p className="font-semibold text-black">Dashboard</p>

          {/* Search Bar */}
          <div className="relative flex-grow mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 text-black p-2 rounded-full w-full h-10 pl-10 pr-4"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i>
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

        <div className="bg-white bg-opacity-50 p-4 rounded-lg mx-8 my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Notification Box */}
            <div className="bg-yellow-100 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#FFEB00] w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-bell text-white text-3xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-black">Notification</h3>
                <p className="text-[#FFEB00] font-semibold text-sm">8 Unread Notifications</p>
              </div>
            </div>

             {/* Events Box */}
             <div className="bg-green-100 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#06D001] w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-bell text-white text-3xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-black">Events</h3>
                <p className="text-[#06D001] font-semibold text-sm">4 Project Last Update</p>
              </div>
            </div>

            {/* Clubs Box */}
            <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#793FDF] w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-bell text-white text-3xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-black">Clubs</h3>
                <p className="text-[#793FDF] font-semibold text-sm">6 Client Waiting</p>
              </div>
            </div>

            {/* New Club Box */}
            <div className="bg-blue-600 p-4 rounded-lg shadow flex items-center">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <i className="fa-solid fa-file text-blue-400 text-3xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-white">New Club</h3>
                <p className="text-white font-semibold text-sm">Project</p>
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
        {visibility.reservationPage && <Reservation onCancel={() => toggleComponent('reservationPage')}/>}
        {visibility.notificationPage && <Notification onCancel={() => toggleComponent('notificationPage')}/>}
        {visibility.settingPage && <Settings onCancel={() => toggleComponent('settingPage')}/>}

        {/* Club Statistics and Sales Revenue */}
        {!visibility.addEventForm && !visibility.viewEvents && !visibility.addClub && !visibility.viewClub && !visibility.addUser && !visibility.viewUser && !visibility.reservationPage && !visibility.notificationPage && !visibility.settingPage && ( 
          <div className="grid grid-cols-5 gap-4 mb-6">
            <ClubStatistic />
            <div className="col-span-2 flex flex-col gap-4">
              <SalesRevenue />
              <ClubEvents />
            </div>
          </div>
        )}

        {/* Site Health and Online Sales */}
        {!visibility.addEventForm && !visibility.viewEvents && !visibility.addClub && !visibility.viewClub && !visibility.addUser && !visibility.viewUser && !visibility.reservationPage && !visibility.notificationPage && !visibility.settingPage && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SiteHealth />
            <OnlineSales />
          </div>
        )}
      </main>
    </div>
  );
};

export default ClubOwnerPage;
