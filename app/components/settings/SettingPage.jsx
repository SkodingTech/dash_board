// app/settings/page.jsx
import React from 'react';

const Settings = ({onCancel}) => {
  return (
    
    <div className="bg-white p-8 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
      <h1 className="text-2xl font-bold mb-6 text-start text-black">Settings</h1>
      
      {/* Profile Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Profile</h2>
        <div className="mb-4">
          <label className="block text-black">Username</label>
          <input type="text" className="border rounded-lg p-2 w-full text-gray-600" placeholder="Enter username" />
        </div>
        <div className="mb-4">
          <label className="block text-black">Email</label>
          <input type="email" className="border rounded-lg p-2 w-full text-gray-600" placeholder="Enter email" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">Save Profile</button>
      </section>

      {/* Password Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">Change Password</h2>
        <div className="mb-4">
          <label className="block text-black">Current Password</label>
          <input type="password" className="border rounded-lg p-2 w-full text-gray-600" placeholder="Enter current password" />
        </div>
        <div className="mb-4">
          <label className="block text-black">New Password</label>
          <input type="password" className="border rounded-lg p-2 w-full text-gray-600" placeholder="Enter new password" />
        </div>
        <div className="mb-4">
          <label className="block text-black">Confirm New Password</label>
          <input type="password" className="border rounded-lg p-2 w-full text-gray-600" placeholder="Confirm new password" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">Update Password</button>
      </section>

      {/* Notifications Settings */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-black">Notifications</h2>
        <div className="mb-4">
          <label className="flex items-center text-gray-500">
            <input type="checkbox" className="mr-2" />
            Email Notifications
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center text-gray-500">
            <input type="checkbox" className="mr-2" />
            SMS Notifications
          </label>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-black hover:bg-indigo-800">Save Notifications</button>
        {/* Cancel button */}
        <button 
          type="button" 
          onClick={onCancel} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg ml-0 lg:ml-5 mt-4 lg:mt-0 block lg:inline-block hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500"
        >
          Back
        </button>

      </section>
      
    </div>
    
  );
};

export default Settings;
