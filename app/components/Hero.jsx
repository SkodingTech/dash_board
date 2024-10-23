"use client"; // Client component directive

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Menu from './Menu';
import ClubStatistic from './ClubStatistic';
import ClubEvents from './ClubEvents';
import SiteHealth from './SiteHealth';
import OnlineSales from './OnlineSales';
import SalesRevenue from './SalesRevenue';

const Hero = () => {
  const router = useRouter();

  const handleIDClick = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex bg-transparent">
      {/* Sidebar */}
      <Menu />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Nav */}
        <header className="flex justify-between items-center mb-6">
          <p className="font-semibold text-black">Dashboard</p>

          {/* Search Bar */}
          <div className="flex-grow mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 p-2 rounded-full w-full h-10 px-6"
            />
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
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-black">Notification</h3>
              <p className="text-[#FFEB00] font-semibold">8 Unread Notifications</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-black">Events</h3>
              <p className="text-[#06D001] font-semibold">4 Project Last Update</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-black">Clubs</h3>
              <p className="text-[#793FDF] font-semibold">6 Client Waiting</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-white">New Club</h3>
              <p className="text-white font-semibold">Project</p>
            </div>
          </div>
        </div>

        {/* Club Statistics and Sales Revenue */}
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

        {/* Site Health and Online Sales in a new row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Site Health */}
          <SiteHealth />

          {/* Online Sales */}
          <OnlineSales />
        </div>
      </main>
    </div>
  );
};

export default Hero;
