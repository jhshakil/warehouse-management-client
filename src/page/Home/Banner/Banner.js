import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2'>
            <div className='bg-black text-white text-center md:text-left p-6 md:pt-24 md:pl-16 md:order-first order-last'>
                <h1 className='md:text-6xl text-3xl font-bold text-red-700 mb-4 md:mb-8'>This is Car Dealer Site</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia laborum autem vitae et iusto totam aliquam impedit, eligendi sapiente, maxime esse. Molestias quisquam facilis voluptate ab provident corporis. Dolor vero error et!</p>
            </div>
            <div className='order-first md:order-last'>
                <img src="banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;