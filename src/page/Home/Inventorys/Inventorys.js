import React, { useEffect, useState } from 'react';
import Inventory from './inventory';

const Inventorys = () => {
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, [])
    return (
        <div className='ml-8 mr-8'>
            <h1 className='text-3xl font-bold text-center m-16'>My Inventory Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    inventorys.slice(0, 6).map(item => <Inventory key={item._id} item={item}></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventorys;