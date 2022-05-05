import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div className='grid grid-cols-3 p-5 bg-orange-200'>
            <div>
                <h1 className='text-5xl ml-16 font-bold'><Link to='/'>Car Dealer</Link></h1>
            </div>
            <div className='col-span-2'>
                {/* <Link className='mt-3' to='/'>Home</Link> */}
                {/* <Link className='mt-3' to='/manage'>Manage Item</Link>
                <Link className='mt-3' to='/add'>Add Item</Link>
                <Link className='mt-3' to='/myitem'>My Item</Link> */}
                {/* <Link className='mt-3' to='login'>Log In</Link> */}
                {/* <Link className='mt-3' to='logout'>Log Out</Link> */}
                {
                    user
                        ? <div className='flex justify-end text-xl  font-bold mr-16'>
                            <Link className='mt-3 mr-8' to='/'>Home</Link>
                            <Link className='mt-3 mr-8' to='/blog'>Blog</Link>
                            <Link className='mt-3 mr-8' to='/manageitems'>Manage Items</Link>
                            <Link className='mt-3 mr-8' to='/additem'>Add Item</Link>
                            <Link className='mt-3 mr-8' to='/myitems'>My Item</Link>
                            <Link onClick={handleLogout} className='mt-3 mr-8' to='/login'>Log Out</Link>
                        </div>
                        : <div className='flex justify-end text-xl font-bold mr-16'>
                            <Link className='mt-3 mr-8' to='/'>Home</Link>
                            <Link className='mt-3 mr-8' to='/blog'>Blog</Link>
                            <Link className='mt-3 mr-8' to='/login'>Log In</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;