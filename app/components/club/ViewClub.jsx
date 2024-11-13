import React from 'react';

const ViewClub = ({ onCancel }) => (
    
        
    <div className="bg-white p-4 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-[97%] mx-0 md:mx-auto my-10">
            <h1 className="text-xl md:text-2xl font-bold text-black  md:text-left">View Clubs Page</h1>
            <p className="mt-3 md:mt-5 text-gray-600 font-semibold md:text-left">Welcome to the Clubs page.</p>
            <p className="mt-3 text-gray-600 text-justify">
                <span className="block md:hidden mt-3"></span>
                <strong>Data Fetching:</strong> Server Components allow you to move data fetching to the server,
                closer to your data source. This can improve performance by reducing the time it takes to fetch data
                needed for rendering and the number of requests the client needs to make.<br />
                <br />
                <strong>Security:</strong> Server Components allow you to keep sensitive data and logic on the server,
                such as tokens and API keys, without the risk of exposing them to the client.<br />
                <br />
                <strong>Caching:</strong> By rendering on the server, the result can be cached and reused on subsequent
                requests and across users. This can improve performance and reduce cost by reducing the amount of
                rendering and data fetching done on each request.
            </p>
            <div className="flex justify-center md:justify-start">
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-red-500 text-white px-4 py-2 rounded mt-6 w-full md:w-auto hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500"
                >
                    Back
                </button>
            </div>
        </div>
    
);

export default ViewClub;
