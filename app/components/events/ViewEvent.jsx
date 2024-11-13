"use client";
import React, { useState, useEffect } from 'react';
import AddEditEventForm from './AddEditEventForm';

const ViewEvent = ({ onCancel }) => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // Default to ascending order

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('eventData')) || [];
    setEvents(storedEvents);
  }, []);

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem('eventData', JSON.stringify(updatedEvents));
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleSaveEdit = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem('eventData', JSON.stringify(updatedEvents));
    setEditingEvent(null);
  };

  // Sorting function
  const sortEvents = (events) => {
    return events.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);

      if (sortOrder === 'asc') {
        return dateA - dateB; // Ascending order
      } else {
        return dateB - dateA; // Descending order
      }
    });
  };

  // Handle sorting order change
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="bg-white bg-opacity-50 p-8 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-[97%] mx-0 md:mx-auto my-10">
      <h2 className="text-xl font-bold mb-4 text-black">Upcoming Events</h2>

      {/* Sorting Buttons */}
      <div className="mb-4">
        <button
          onClick={toggleSortOrder}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
        >
          Sort by Date & Time ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      {editingEvent ? (
        <AddEditEventForm
          existingEvent={editingEvent}
          onCancel={() => setEditingEvent(null)}
          onSubmit={handleSaveEdit}
        />
      ) : (
        <ul>
          {sortEvents(events).map((event) => (
            <li key={event.id} className="border p-4 my-2 rounded-lg bg-gray-100">
              <h3 className="text-lg font-bold text-gray-700">{event.name}</h3>
              <p className="text-gray-500">ID: {event.id}</p>
              <p className="text-gray-500">Category: {event.category}</p>
              <p className="text-gray-500">Club: {event.club}</p>
              <p className="text-gray-500">Date: {event.date}</p>
              <p className="text-gray-500">Time: {event.time}</p>
              <p className="text-gray-500">Price: {event.price}</p>
              <p className="text-gray-500">Description: {event.meta_data?.content || "No description provided"}</p>
              <button 
                onClick={() => handleEdit(event)} 
                className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2 mt-4"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(event.id)} 
                className="bg-red-500 text-white px-2 py-1 rounded-lg mt-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={onCancel}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default ViewEvent;
