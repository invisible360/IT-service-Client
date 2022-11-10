import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const allservices = useLoaderData();
    useTitle ('Services')

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>All Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] mx-auto'>
                {
                    allservices.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;