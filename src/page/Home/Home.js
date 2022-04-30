import React from 'react';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';
import Introduction from './Introduction/Introduction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;