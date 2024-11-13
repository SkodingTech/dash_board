/* import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const AddEditEventForm = ({ onCancel, existingEvent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: existingEvent || {
      id: uuidv4(),  // Generate a new ID if it's a new event 
      club: '',
      category: '',
      name: '',
      date: '',
      time: '',
      price: '',
      meta_data: {
        content: '',
      },
      images: '',
    },
  });

  const handleFormSubmit = (data) => {
    // If we're editing an existing event, don't check for ID duplication
    let existingEvents = JSON.parse(localStorage.getItem('eventData')) || [];
    
    if (!existingEvent) {
      // Check if an event with the same ID exists (only for new events)
      const idExists = existingEvents.some((event) => event.id === data.id);
      if (idExists) {
        alert('This ID already exists, please choose another ID.');
        return;
      }
      
      // Add the new event to the events list
      existingEvents.push(data);
    } else {
      // Update the existing event in the list
      existingEvents = existingEvents.map((event) =>
        event.id === existingEvent.id ? data : event
      );
    }

    // Store the updated events array back in local storage
    localStorage.setItem('eventData', JSON.stringify(existingEvents));

    console.log(data);
    alert('Event successfully created and stored in local storage!');

    // Clear the form after submission
    reset();
  };

  return (
    <div className="bg-white p-4 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-[97%] mx-0 md:mx-auto my-10">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="text-xl font-bold mb-4 text-black">Add/Edit Event</h2>

        {/* Event ID */
      /* <div className="mb-4">
          <label className="block mb-2 text-gray-700">Event ID</label>
          <input
            {...register('id')}
            readOnly={!!existingEvent}  // Make the ID read-only if editing
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
          />
        </div>

        {/* Club */
     /*   <div className="mb-4">
          <label className="block mb-2 text-gray-700">Club</label>
          <input
            {...register('club', { required: 'Club is required' })}
            className={`w-full p-2 border ${errors.club ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.club && <p className="text-red-500">{errors.club.message}</p>}
        </div>

        {/* Category */
      /*  <div className="mb-4">
          <label className="block mb-2 text-gray-700">Category</label>
          <input
            {...register('category', { required: 'Category is required' })}
            className={`w-full p-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Name */
      /*  <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            {...register('name', { required: 'Event name is required' })}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Date */
      /*  <div className="mb-4">
          <label className="block mb-2 text-gray-700">Date</label>
          <input
            type="date"
            {...register('date', { required: 'Date is required' })}
            className={`w-full p-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        {/* Time */
      /*  <div className="mb-4">
          <label className="block mb-2 text-gray-700">Time</label>
          <input
            type="time"
            {...register('time', { required: 'Time is required' })}
            className={`w-full p-2 border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>

        {/* Price */
      /*  <div className="mb-4">
          <label className="block mb-2 text-gray-700">Price</label>
          <input
            type="number"
            {...register('price', { required: 'Price is required' })}
            className={`w-full p-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Meta Data */
       /* <div className="mb-4">
          <label className="block mb-2 text-gray-700">Description</label>
          <textarea
            {...register('meta_data.content', { required: 'Description is required' })}
            className={`w-full p-2 border ${errors.meta_data?.content ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
            rows="4" // Sets the height of the textarea
          />
          {errors.meta_data?.content && <p className="text-red-500">{errors.meta_data.content.message}</p>}
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          {existingEvent ? 'Update Event' : 'Create Event'}
        </button>
        <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEditEventForm; */




import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const AddEditEventForm = ({ onCancel, existingEvent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: existingEvent || {
      id: uuidv4(),
      club: '',
      category: '',
      name: '',
      date: '',
      time: '',
      price: '',
      meta_data: {
        content: '',
      },
      images: '',
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      // If it's an existing event, update it; otherwise, create a new one
      if (existingEvent) {
        // Update existing event
        await axios.put(`http://your-backend-url.com/events/${existingEvent.id}`, data);
        alert('Event successfully updated in the database!');
      } else {
        // Create a new event
        await axios.post('http://your-backend-url.com/events', data);
        alert('Event successfully created and stored in the database!');
      }

      // Reset the form after submission
      reset();
    } catch (error) {
      console.error("Error saving event:", error);
      alert('An error occurred while saving the event.');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg w-full sm:w-[90%] md:w-[95%] lg:w-[97%] mx-0 md:mx-auto my-10">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="text-xl font-bold mb-4 text-black">Add/Edit Event</h2>
        
        {/* Form fields go here (club, category, name, etc.) */}
        {/* Event ID */}
       <div className="mb-4">
          <label className="block mb-2 text-gray-700">Event ID</label>
          <input
            {...register('id')}
            readOnly={!!existingEvent}  // Make the ID read-only if editing
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
          />
        </div>

        {/* Club */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Club</label>
          <input
            {...register('club', { required: 'Club is required' })}
            className={`w-full p-2 border ${errors.club ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.club && <p className="text-red-500">{errors.club.message}</p>}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Category</label>
          <input
            {...register('category', { required: 'Category is required' })}
            className={`w-full p-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            {...register('name', { required: 'Event name is required' })}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Date</label>
          <input
            type="date"
            {...register('date', { required: 'Date is required' })}
            className={`w-full p-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Time</label>
          <input
            type="time"
            {...register('time', { required: 'Time is required' })}
            className={`w-full p-2 border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Price</label>
          <input
            type="number"
            {...register('price', { required: 'Price is required' })}
            className={`w-full p-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Meta Data */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Description</label>
          <textarea
            {...register('meta_data.content', { required: 'Description is required' })}
            className={`w-full p-2 border ${errors.meta_data?.content ? 'border-red-500' : 'border-gray-300'} rounded bg-white bg-opacity-90 text-black`}
            rows="4" // Sets the height of the textarea
          />
          {errors.meta_data?.content && <p className="text-red-500">{errors.meta_data.content.message}</p>}
        </div>
        
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          {existingEvent ? 'Update Event' : 'Create Event'}
        </button>
        <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br from-[#00FF9C] via-[#6A9C89] to-pink-500">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEditEventForm; 

