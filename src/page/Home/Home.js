import React from 'react';
import Banner from './Banner/Banner';
import Introduction from './Introduction/Introduction';
import Service from './Service/Service';
import Inventory from './Inventory/Inventory';

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