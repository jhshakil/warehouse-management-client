import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-3/4 m-auto'>
            <h1 className='text-3xl font-bold text-center mt-8'>Log In</h1>
            <form className='p-8'>
                <input className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="email" placeholder='Enter Your Email' />
                <input className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="password" placeholder='Enter Your Password' />
                <button className='block m-auto bg-orange-300 w-1/4 mt-4 p-2' type="submit">Log In</button>
            </form>
            <div className='text-center'>
                <h1>Forgate Password</h1>
                <p>Do not account Please register <Link to='/register'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;