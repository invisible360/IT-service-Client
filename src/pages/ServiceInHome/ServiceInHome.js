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
        <div>
            <h1>Services At a Glance</h1>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
            <Link to='/services'><button>See all</button></Link>
        </div>
    );
};

export default ServiceInHome;