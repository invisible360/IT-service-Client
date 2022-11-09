import { Button, Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (


        <div>
            <Card className='h-[34rem]' imgSrc=''>

                {/* photo view implemented */}
                <PhotoProvider>
                    <PhotoView src={service.img}>
                        <img className='max-w-full h-auto' src={service.img} alt=""></img>
                    </PhotoView>
                </PhotoProvider>

                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {service.description.slice(0, 100)}
                </p>
                <p className='text-xl text-orange-600'>$ {service.price}</p>

                <Link to={`/services/${service._id}`}><Button>View Details</Button></Link>
            </Card>
        </div>

    );
};

export default ServiceCard;