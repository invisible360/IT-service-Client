import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const oneService = useLoaderData();

    return (
        <div>
            <h1>Service Details Page</h1>
            <p>{oneService.title}</p>
        </div>
    );
};

export default ServiceDetails;