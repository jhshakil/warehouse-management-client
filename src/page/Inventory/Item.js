import React from 'react';

const Item = (props) => {
    const { name, description, supplier_name, picture, balance, quantity, sold } = props.item;
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
                    <p>Balance: {balance}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button className='bg-orange-300 p-2 w-full m-auto mt-8 rounded-lg font-bold'>Update</button>
            </div>
        </div>
    );
};

export default Item;