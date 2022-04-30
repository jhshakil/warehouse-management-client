import React, { useEffect, useState } from 'react';
import Item from './Item';

const Inventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setItems(data))
    })
    return (
        <div className='ml-8 mr-8'>
            <h1 className='text-4xl font-bold text-center m-16'>My Inventory Items</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    items.map(item => <Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Inventory;