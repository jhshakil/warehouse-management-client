import React from 'react';
import Banner from './Banner/Banner';
import Introduction from './Introduction/Introduction';
import Service from './Service/Service';
import Inventorys from './Inventorys/Inventorys';
import Manage from './Manage/Manage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Inventorys></Inventorys>
            <Manage></Manage>
            <Service></Service>
        </div>
    );
};

export default Home;