import React from 'react';

const ManageItemMobile = ({ item, handleDelete }) => {
    const { _id, name, description, supplier_name, picture, balance, quantity, sold } = item;
    return (
        <div className='block md:hidden w-full p-4 mt-8'>
            <div>
                <img className='w-full' src={picture} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold text-center mt-4 mb-4'>{name}</h2>
                <p>{description}</p>
                <h3 className='text-lg font-bold'>Supplier: {supplier_name}</h3>
                <div className='grid grid-cols-2 gap-6'>
                    <p>Balance: {balance}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button onClick={() => handleDelete(_id)} className='bg-orange-300 p-2 w-1/4 block m-auto mt-8 rounded-lg font-bold'>Delete</button>
            </div>
        </div>
    );
};

export default ManageItemMobile;