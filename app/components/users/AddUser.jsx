import React from 'react';

const AddUser = ({ onCancel }) => {
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    alert('User created successfully!'); // Alert user creation success message
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
      <h2 className="text-xl font-semibold text-black">Add User</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black">Username</label>
          <input type="text" className="border rounded p-2 w-full text-gray-600" placeholder="Enter username" required />
        </div>
        
        <div className="mb-4">
          <label className="block text-black">Email</label>
          <input type="email" className="border rounded p-2 w-full text-gray-600" placeholder="Enter email" required />
        </div>
        
        {/* Submit button */}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          Submit
        </button>
        
        {/* Cancel button */}
        <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddUser;
