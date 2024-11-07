/* "use client"; // Marking this component as a client component

import React, { useState, useEffect } from 'react';

const BookingsManagement = ({ onCancel }) => {
    const [bookings, setBookings] = useState([]);
    const [sortOption, setSortOption] = useState(''); // Stores sorting option like 'date', 'role', etc.
    const [isAscending, setIsAscending] = useState(true); // True for ascending, false for descending

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = () => {
        const mockData = [
            { id: 1, name: 'Alice', email: 'alice@gmail.com', date: '2023-04-23', role: 'admin' },
            { id: 2, name: 'Bob', email: 'bob@gmail.com', date: '2023-04-23', role: 'viewer' },
            { id: 3, name: 'Charlie', email: 'charlie@gmail.com', date: '2023-04-23', role: 'guest' },
            { id: 4, name: 'John Michael', email: 'john@gmail.com', date: '2023-04-23', role: 'viewer' },
            { id: 5, name: 'Alexa Liras', email: 'alexa@gmail.com', date: '2023-04-23', role: 'viewer' },
            { id: 6, name: 'Laurent Perrier', email: 'laurent@gmail.com', date: '2017-09-19', role: 'viewer' },
            { id: 7, name: 'Michael Levi', email: 'michael@gmail.com', date: '2008-12-24', role: 'viewer' },
            { id: 8, name: 'Richard Gran', email: 'richard@gmail.com', date: '2021-10-04', role: 'viewer' },
        ];
        setBookings(mockData);
    };

    const sortBookings = () => {
        let sortedBookings = [...bookings];

        if (sortOption === 'alphabetical') {
            sortedBookings.sort((a, b) => isAscending 
                ? a.name.localeCompare(b.name) 
                : b.name.localeCompare(a.name)
            );
        } else if (sortOption === 'date') {
            sortedBookings.sort((a, b) => isAscending 
                ? new Date(a.date) - new Date(b.date) 
                : new Date(b.date) - new Date(a.date)
            );
        } else if (sortOption === 'role') {
            sortedBookings.sort((a, b) => isAscending 
                ? a.role.localeCompare(b.role) 
                : b.role.localeCompare(a.role)
            );
        }

        return sortedBookings;
    };

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    };

    const toggleSortOrder = () => {
        setIsAscending(!isAscending);
    };

    return (
        <div className="bg-white p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-black">User Management</h1>
            
            {/* Sort Controls */

           /* <div className="flex space-x-4 mb-4">
                <select 
                    value={sortOption} 
                    onChange={handleSortOptionChange} 
                    className="p-2 border rounded text-black"
                >
                    <option value="">Select Sort Option</option>
                    <option value="alphabetical">Alphabetical (Name)</option>
                    <option value="date">Date</option>
                    <option value="role">Role</option>
                </select>
                <button 
                    onClick={toggleSortOrder} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isAscending ? 'Ascending' : 'Descending'}
                </button>
            </div>

            <table className="min-w-full bg-white border">
                <thead className="bg-gray-200">
                    <tr className="rounded-lg">
                        <th className="px-4 py-2 text-black">ID</th>
                        <th className="px-4 py-2 text-black">Name</th>
                        <th className="px-4 py-2 text-black">Email</th>
                        <th className="px-4 py-2 text-black">Date</th>
                        <th className="px-4 py-2 text-black">Role</th>
                        <th className="px-4 py-2 text-black">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortBookings().map(booking => (
                        <tr key={booking.id} className="border-b rounded-lg">
                            <td className="px-4 py-2 text-gray-400 flex justify-center">{booking.id}</td>
                            <td className="px-4 py-2 text-gray-400 pl-16">{booking.name}</td>
                            <td className="px-4 py-2 text-gray-400 pl-16">{booking.email}</td>
                            <td className="px-4 py-2 text-gray-400 pl-16">{booking.date}</td>
                            <td className="px-4 py-2 text-gray-400 pl-16">{booking.role}</td>
                            <td className="px-4 py-2 flex space-x-2 justify-center">
                                <button className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button 
                type="button" 
                onClick={onCancel} 
                className="mt-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500"
            >
                Back
            </button>
        </div>
    );
};

export default BookingsManagement; */



"use client"; // Marking this component as a client component

import React, { useState, useEffect } from 'react';

const BookingsManagement = ({ onCancel }) => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState(''); // Sort criteria (e.g., 'name', 'date', 'role')
    const [isAscending, setIsAscending] = useState(true); // True for ascending, false for descending

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/bookings'); // Adjust the endpoint as needed
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBookings(data);
        } catch (error) {
            setError('Failed to fetch bookings: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (id) => {
        console.log(`Edit booking with ID: ${id}`);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error('Failed to delete booking');
            }
            setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
        } catch (error) {
            console.error('Failed to delete booking:', error);
        }
    };

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    };

    const toggleSortOrder = () => {
        setIsAscending(!isAscending);
    };

    const sortedBookings = () => {
        let sorted = [...bookings];

        if (sortOption === 'name') {
            sorted.sort((a, b) => isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        } else if (sortOption === 'date') {
            sorted.sort((a, b) => isAscending ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date));
        } else if (sortOption === 'role') {
            sorted.sort((a, b) => isAscending ? a.role.localeCompare(b.role) : b.role.localeCompare(a.role));
        }

        return sorted;
    };

    return (
        <div className="bg-white p-6 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-auto mx-0 md:mx-8 my-10">
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-black md:text-left">User Management</h1>

            {/* Sort Controls */}
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 mb-4 items-center md:items-start">
                <select 
                    value={sortOption} 
                    onChange={handleSortOptionChange} 
                    className="p-2 border rounded text-black w-full md:w-auto"
                >
                    <option value="">Sort By</option>
                    <option value="name">Name (Alphabetical)</option>
                    <option value="date">Date</option>
                    <option value="role">Role</option>
                </select>
                <button 
                    onClick={toggleSortOrder} 
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
                >
                    {isAscending ? 'Ascending' : 'Descending'}
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border text-sm md:text-base">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-black">ID</th>
                                <th className="px-4 py-2 text-black">Name</th>
                                <th className="px-4 py-2 text-black">Email</th>
                                <th className="px-4 py-2 text-black">Date</th>
                                <th className="px-4 py-2 text-black">Role</th>
                                <th className="px-4 py-2 text-black">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedBookings().map(booking => (
                                <tr key={booking.id} className="border-b">
                                    <td className="px-4 py-2 text-gray-400 text-center">{booking.id}</td>
                                    <td className="px-4 py-2 text-gray-400">{booking.name}</td>
                                    <td className="px-4 py-2 text-gray-400">{booking.email}</td>
                                    <td className="px-4 py-2 text-gray-400">{booking.date}</td>
                                    <td className="px-4 py-2 text-gray-400">{booking.role}</td>
                                    <td className="px-4 py-2 flex justify-center space-x-2">
                                        <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={() => handleEdit(booking.id)}>Edit</button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(booking.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <button 
                type="button" 
                onClick={onCancel} 
                className="mt-5 bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500"
            >
                Back
            </button>
        </div>
    );
};

export default BookingsManagement;

