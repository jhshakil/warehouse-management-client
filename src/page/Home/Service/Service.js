import React from 'react';
import { OfficeBuildingIcon, SupportIcon, EmojiHappyIcon, CurrencyDollarIcon } from '@heroicons/react/outline'

const Service = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-3xl font-bold text-center'>Why Choose Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 text-center mt-8 p-4 gap-8'>
                <div>
                    <OfficeBuildingIcon className='w-1/4 text-red-600 block m-auto'></OfficeBuildingIcon>
                    <h3 className='text-lg font-bold mb-2'>All Brand</h3>
                    <p>In our store maximum brand are available.</p>
                </div>
                <div>
                    <SupportIcon className='w-1/4 text-red-600 block m-auto'></SupportIcon>
                    <h3 className='text-lg font-bold mb-2'>Free Support</h3>
                    <p>We provide our customer limited time free support</p>
                </div>
                <div>
                    <EmojiHappyIcon className='w-1/4 text-red-600 block m-auto'></EmojiHappyIcon>
                    <h3 className='text-lg font-bold mb-2'>Dealership</h3>
                    <p>If anyone want to take dealership, our reaction is positive but we verified</p>
                </div>
                <div>
                    <CurrencyDollarIcon className='w-1/4 text-red-600 block m-auto'></CurrencyDollarIcon>
                    <h3 className='text-lg font-bold mb-2'>Affordable</h3>
                    <p>We provide a affordable price for our customer</p>
                </div>
            </div>
        </div>
    );
};

export default Service;