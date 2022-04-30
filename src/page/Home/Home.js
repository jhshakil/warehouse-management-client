import React from 'react';
import Banner from './Banner/Banner';
import Introduction from './Introduction/Introduction';
import Service from './Service/Service';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <InventoryItems></InventoryItems>
            <Service></Service>
        </div>
    );
};

export default Home;