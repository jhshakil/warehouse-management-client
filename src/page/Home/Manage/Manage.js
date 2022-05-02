import React from 'react';
import { Link } from 'react-router-dom';

const Manage = () => {
    return (
        <div className='ml-8 mr-8 mt-16'>
            <div className='grid grid-cols-3 h-96'>
                <div className=''>
                    <img className='h-96 w-full' src='manage.jpg' alt="" />
                </div>
                <div className='col-span-2 p-16'>
                    <h1 className='text-3xl text-red-600 font-bold text-center mb-8'>Manage Your Items</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corrupti doloribus fuga, debitis eius saepe atque mollitia possimus eveniet fugiat nemo natus quam alias porro tempora. Blanditiis pariatur minus maiores excepturi reprehenderit!</p>
                    <Link to='/manageitems' className='bg-orange-400 block m-auto p-2 w-1/4 rounded-lg text-center font-bold mt-4'>Click Here</Link>
                </div>

            </div>
        </div>
    );
};

export default Manage;