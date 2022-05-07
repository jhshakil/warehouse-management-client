import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ item }) => {
    const { _id, name, description, supplier_name, picture, balance, quantity, sold } = item;
    const navigate = useNavigate()
    const inventoryDetails = id => {
        navigate(`inventory/${id}`)
    }
    return (
        <div>
            <div>
                <img className='h-64 w-96' src={picture} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold text-center mt-4 mb-4'>{name}</h2>
                <p>{description}</p>
                <h3 className='text-lg font-bold'>Supplier: {supplier_name}</h3>
                <div className='grid grid-cols-2 gap-6'>
                    <p>Balance: {balance}$</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button onClick={() => inventoryDetails(_id)} className='bg-orange-300 p-2 w-1/4 block m-auto mt-8 rounded-lg font-bold'>Update</button>
            </div>
        </div>
    );
};

export default Inventory;