import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const allservices = useLoaderData();

    return (
        <div>
            <h1>All Services</h1>
            {
                allservices.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }

        </div>
    );
};

export default Services;