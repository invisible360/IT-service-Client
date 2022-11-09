import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceInHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-5xl font-bold text-center my-10'>Services At a Glance</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex items-center justify-center my-10'>
                <Link to='/services'><Button>See all</Button></Link>
            </div>
        </div>
    );
};

export default ServiceInHome;