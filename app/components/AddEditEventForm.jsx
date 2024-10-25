"use client"; // Client component directive
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddEditEventForm = ({ onCancel, existingEvent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: existingEvent || {
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

  const onSubmit = (data) => {
    // Handle form submission (e.g., save to database)
    console.log(data);
    alert('Event successfully created!'); // Alert on successful event creation
  };

  // Close the form when the backspace key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace') {
        event.preventDefault(); // Prevent default backspace behavior
        onCancel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCancel]);

  return (
    <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 p-6 rounded-lg shadow-md mb-6">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-black">Add/Edit Event</h2>

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

        {/* Images */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Images</label>
          <input
            type="file"
            {...register('images')}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2">
          Create Event
        </button>
        <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEditEventForm;
