import React from 'react';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';
import Introduction from './Introduction/Introduction';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Inventory></Inventory>
            <Service></Service>
        </div>
    );
};

export default Home;