import React from 'react';

const MyItem = ({ item, handleDelete }) => {
    const { _id, name, description, supplier_name, picture, balance, quantity, sold } = item;
    return (
        <tr>
            <th className='border-2 border-black border-solid p-4'>{_id}</th>
            <th className='border-2 border-black border-solid p-4'><img className='w-44' src={picture} alt="" /></th>
            <th className='border-2 border-black border-solid p-4'>{name}</th>
            <th className='border-2 border-black border-solid p-4'>{description}</th>
            <th className='border-2 border-black border-solid p-4'>{supplier_name}</th>
            <th className='border-2 border-black border-solid p-4'>{quantity}</th>
            <th className='border-2 border-black border-solid p-4'>{balance}</th>
            <th className='border-2 border-black border-solid p-4'><button onClick={() => handleDelete(_id)} className='bg-red-500 p-2 rounded-lg text-white font-bold'>Delete</button></th>
        </tr>
    );
};

export default MyItem;