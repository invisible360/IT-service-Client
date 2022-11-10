import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ShowServiceDetails = ({ oneService }) => {

    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-4xl font-bold text-center my-10'><Link to='/services'>Service Details</Link></h1>
            <p></p>

            <Card className='w-3/4 mx-auto' imgSrc={oneService.img}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {oneService.title}
                </h5>
                <p className='text-xl font-bold text-orange-600'>Price $ {oneService.price}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {oneService.description}
                </p>

            </Card>
        </div>
    );
};

export default ShowServiceDetails;