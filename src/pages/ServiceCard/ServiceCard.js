import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div>
            {/* things to be displayed in service card:
            Service Name{title}, image, price, a short description, a view details button
            */}
            <h3>{service.title}, Service details card</h3>
            <PhotoProvider>
                <PhotoView src={service.img}>
                    <img src={service.img} alt=""></img>
                </PhotoView>
            </PhotoProvider>
            <Link to={`/services/${service._id}`}><button>view Details</button></Link>
        </div>
    );
};

export default ServiceCard;