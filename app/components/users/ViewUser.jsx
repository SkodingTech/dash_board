import React from 'react';

const ViewUser = ({ onCancel }) => {
  return (
    
    <div className="bg-white p-4 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
    
      <h2 className="text-xl font-semibold text-black">View User</h2>
      
      <p className="mt-5 text-gray-600">Welcome to the Clubs page.</p>
    <p className="text-gray-600">Data Fetching: Server Components allow you to move data fetching to the server, 
        closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, 
        and the number of requests the client needs to make.
        Security: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, 
        without the risk of exposing them to the client.
        Caching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. T
        his can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
    </p>
        <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded mt-10 hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          Back
        </button>
      
    </div>
    
  );
};

export default ViewUser;
