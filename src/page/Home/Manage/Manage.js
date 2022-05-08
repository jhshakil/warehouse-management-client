import React from 'react';
import { Link } from 'react-router-dom';

const Manage = () => {
    return (
        <div className='ml-8 mr-8 mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='md:order-first order-last'>
                    <img className='w-full mt-2' src='manage.jpg' alt="" />
                </div>
                <div className='col-span-2 p-2 md:p-16 order-first md:order-last'>
                    <h1 className='text-3xl text-red-600 font-bold text-center mb-8'>Manage Your Items</h1>
                    <p className='text-lg text-center md:text-left'>If You want to manage Your item like delete, update, and see all items please click here</p>
                    <Link to='/manageitems' className='bg-orange-400 block m-auto p-2  w-1/2 md:w-1/4 rounded-lg text-center font-bold mt-4'>Click Here</Link>
                </div>

            </div>
        </div>
    );
};

export default Manage;