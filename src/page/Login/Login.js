import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')

    return (
        <div className='w-3/4 m-auto'>
            <h1 className='text-3xl font-bold text-center mt-8'>Log In</h1>
            <button className='block m-auto p-3 bg-orange-300 rounded-lg mt-8 '>Log in with Google</button>
            <form className='p-8'>
                <input ref={emailRef} className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="email" placeholder='Enter Your Email' />
                <input ref={passwordRef} className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="password" placeholder='Enter Your Password' />
                <input className='block m-auto bg-orange-300 w-1/4 mt-4 p-2' type="submit" value="Log in" />
            </form>
            <div className='text-center'>
                <h1>Forgate Password</h1>
                <p>Do not account Please register <Link className='text-red-600 font-bold' to='/registration'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;