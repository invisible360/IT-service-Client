import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">About Us</h1>
            <section className='grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto items-center'>
                <div>
                    <img className='w-2/3' src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?w=2000" alt="" />
                </div>
                <div>
                    <p className='text-xl font-semibold leading-loose'>IT Solutions is the premier Solutions and Service provider and known as the fastest growing company. IT Solutions maintains the highest value and reliability rankings among its customers. We serve enterprises through latest technologies and services made possible....</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;