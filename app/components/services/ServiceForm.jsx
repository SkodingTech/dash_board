"use client";
import React, { useState } from 'react';

const ServiceForm = ({ onSave, onCancel }) => {
    const [serviceName, setServiceName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('Active');
    const [priceError, setPriceError] = useState(''); // New state for price error message

    const handleSave = () => {
        const serviceData = { serviceName, description, category, price, status };

        // Retrieve existing services from local storage
        const savedServices = JSON.parse(localStorage.getItem('services')) || [];

        // Add the new service data
        savedServices.push(serviceData);

        // Save the updated services array back to local storage
        localStorage.setItem('services', JSON.stringify(savedServices));

        // Debugging: Log the saved services to check what's being stored
        console.log('Saved Services:', savedServices);

        // Call the onSave prop if needed
        onSave(serviceData);

        // Show an alert when the Save button is clicked
        alert('Service has been saved successfully!');

        // Clear the form fields
        setServiceName('');
        setDescription('');
        setCategory('');
        setPrice('');
        setStatus('Active'); // Reset status to default
        setPriceError(''); // Clear the error message
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setPrice(value);
            setPriceError(""); // Clear error if input is valid
        } else {
            setPriceError("Invalid input. Only numbers are allowed.");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto ipad:w-[90%] ipad:max-w-none ipad:p-8 ipad:mt-8 ipad-landscape:w-[80%] ipad-landscape:max-w-none ipad-landscape:p-6 ipad-landscape:mt-10">

            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 text-gray-800">
                Add New Service
            </h2>

            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Service Name</label>
                    <input
                        type="text"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                        placeholder="Enter service name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                        rows="3"
                        placeholder="Enter service description"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                        placeholder="Enter category"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={handlePriceChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                        placeholder="Enter price"
                    />
                    {priceError && (
                        <p className="text-red-500 text-sm mt-1">{priceError}</p>
                    )}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="flex space-x-4 mt-6">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceForm;
