import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div>
            {/* things to be displayed in service card:
            Service Name{title}, image, price, a short description, a view details button
            */}
            <h3>{service.title}, Service details card</h3>
            <img src={service.img} alt=""></img>
            <button>view Details</button>
        </div>
    );
};

export default ServiceCard;