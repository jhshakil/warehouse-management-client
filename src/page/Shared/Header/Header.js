import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div className='md:grid md:grid-cols-3 bg-orange-200 md:p-3'>
            <div className='flex justify-around md:p-0 p-2'>
                <div className='md:text-5xl text-3xl md:ml-16 font-bold'>
                    <h1><Link to='/'>Car Dealer</Link></h1>
                </div>
                <div onClick={() => setOpen(!open)} className='md:hidden w-6 h-6'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
            </div>
            <div className='md:col-span-2'>
                {/* <div className={`md:col-span-2 ${open ? 'block md:flex' : 'hidden md:flex'}`}> */}
                {/* <Link className='mt-3' to='/'>Home</Link> */}
                {/* <Link className='mt-3' to='/manage'>Manage Item</Link>
                <Link className='mt-3' to='/add'>Add Item</Link>
                <Link className='mt-3' to='/myitem'>My Item</Link> */}
                {/* <Link className='mt-3' to='login'>Log In</Link> */}
                {/* <Link className='mt-3' to='logout'>Log Out</Link> */}
                {
                    user
                        ? <div className={`flex justify-center md:justify-end md:text-xl  font-bold md:mr-16 ${open ? 'flex-col md:flex-row' : 'hidden md:flex'}`}>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/'>Home</Link>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/blog'>Blog</Link>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/manageitems'>Manage Items</Link>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/additem'>Add Item</Link>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/myitems'>My Item</Link>
                            <Link onClick={handleLogout} className='block m-auto md:mt-3 md:mr-8' to='/login'>Log Out</Link>
                        </div>
                        : <div className={`flex justify-center md:justify-end md:text-xl  font-bold md:mr-16 ${open ? 'flex-col md:flex-row' : 'hidden md:flex'}`}>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/'>Home</Link>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/blog'>Blog</Link>
                            <Link className='block m-auto md:mt-3 md:mr-8' to='/login'>Log In</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;