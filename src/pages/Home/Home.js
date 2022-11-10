import React from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceInHome from '../ServiceInHome/ServiceInHome';
import AboutUs from './AboutUs/AboutUs';
import AssociatePartner from './AssociatePartner/AssociatePartner';
import Banner from './Banner/Banner';

const Home = () => {
    useTitle('Home')

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