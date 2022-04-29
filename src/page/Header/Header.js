import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid grid-cols-3 p-5 bg-orange-200'>
            <div>
                <h1 className='text-5xl ml-16 font-bold'>Car Dealer</h1>
            </div>
            <div className='flex justify-between text-xl col-span-2 font-bold mr-16'>
                <Link className='mt-3' to='/'>Home</Link>
                <Link className='mt-3' to='/manage'>Manage Item</Link>
                <Link className='mt-3' to='add'>Add Item</Link>
                <Link className='mt-3' to='myitem'>My Item</Link>
                <Link className='mt-3' to='login'>Log In</Link>
                <Link className='mt-3' to='logout'>Log Out</Link>
            </div>
        </div>
    );
};

export default Header;