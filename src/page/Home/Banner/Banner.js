import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-black text-white pt-24 pl-16'>
                <h1 className='text-6xl font-bold text-red-700 mb-8'>This is Car Dealer Site</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia laborum autem vitae et iusto totam aliquam impedit, eligendi sapiente, maxime esse. Molestias quisquam facilis voluptate ab provident corporis. Dolor vero error et!</p>
            </div>
            <div>
                <img src="banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;