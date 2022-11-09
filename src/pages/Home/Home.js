import React from 'react';
import ServiceInHome from '../ServiceInHome/ServiceInHome';
import AboutUs from './AboutUs/AboutUs';
import AssociatePartner from './AssociatePartner/AssociatePartner';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceInHome></ServiceInHome>
            <AssociatePartner></AssociatePartner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;