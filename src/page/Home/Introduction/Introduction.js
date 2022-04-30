import React from 'react';

const Introduction = () => {
    return (
        <div className='ml-8 mr-8 mt-16'>
            <div className='grid grid-cols-3 h-96'>
                <div className='col-span-2 p-16'>
                    <h1 className='text-3xl font-bold text-center mb-8'>Welcome to the car dealer</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corrupti doloribus fuga, debitis eius saepe atque mollitia possimus eveniet fugiat nemo natus quam alias porro tempora. Blanditiis pariatur minus maiores excepturi reprehenderit!</p>
                </div>
                <div className=''>
                    <img className='h-96 w-full' src='introduction.jpg' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3 m-8 text-2xl font-bold'>
                <h3>Car Stock: 2053</h3>
                <h3>Total Dealer: 50</h3>
                <h3>Total Customer: 500</h3>
            </div>
        </div>
    );
};

export default Introduction;