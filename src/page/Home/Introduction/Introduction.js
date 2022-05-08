import React from 'react';

const Introduction = () => {
    return (
        <div className='ml-4 mr-4 mt-16'>
            <div className='grid md:grid-cols-3 grid-cols-1'>
                <div className='col-span-2 md:col-span-2 p-2 md:p-16'>
                    <h1 className='text-3xl font-bold text-center mb-8'>What we can do</h1>
                    <p className='text-center md:text-left mb-4 text-lg'>This is a warehouse and we manage huge quantity of products. We verify our both clint and dealer. We provied better service and support</p>
                </div>
                <div className=''>
                    <img className='w-full' src='introduction.jpg' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 md:m-8 mt-4 text-sm md:text-xl font-bold'>
                <h3>Car Stock: 1000</h3>
                <h3>Total Dealer: 50</h3>
                <h3>Total Customer: 500</h3>
            </div>
        </div>
    );
};

export default Introduction;