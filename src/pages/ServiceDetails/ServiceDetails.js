import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import ShowServiceDetails from '../ShowServiceDetails/ShowServiceDetails';

const ServiceDetails = () => {
    const oneService = useLoaderData();
    useTitle ('Service Details')

    return (
        <div>
            <ShowServiceDetails oneService={oneService}></ShowServiceDetails>
            <Reviews oneService={oneService}></Reviews>
        </div>
    );
};

export default ServiceDetails;