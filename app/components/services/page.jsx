"use client";
import React, { useState } from 'react';
import ServiceForm from './ServiceForm';

const ServiceManagement = () => {
    const [formVisible, setFormVisible] = useState(true); // Start with the form visible

    // Function to handle save action
    const handleSave = (serviceData) => {
        console.log('Service data saved:', serviceData);  // Logging to check if it's called
        alert('Service has been saved successfully!');
    };

    // Function to handle cancel action
    const handleCancel = () => {
        setFormVisible(false); // Close the form when cancel is clicked
    };

    return (
        <div className="p-6">
            {formVisible && (
                <ServiceForm onSave={handleSave} onCancel={handleCancel} />
            )}
        </div>
    );
};

export default ServiceManagement;
