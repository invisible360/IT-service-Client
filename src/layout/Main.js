import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterF from '../shared/Footer/FooterF';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterF></FooterF>
        </div>
    );
};

export default Main;