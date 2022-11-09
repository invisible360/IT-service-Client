import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import ShowServiceDetails from '../ShowServiceDetails/ShowServiceDetails';

const ServiceDetails = () => {
    const oneService = useLoaderData();

    return (
        <div>
            <ShowServiceDetails oneService={oneService}></ShowServiceDetails>
            <Reviews></Reviews>
        </div>
    );
};

export default ServiceDetails;