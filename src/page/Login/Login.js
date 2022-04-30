import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    // const auth = getAuth

    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/')
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-3/4 m-auto'>
            <h1 className='text-3xl font-bold text-center mt-8'>Log In</h1>
            <button className='block m-auto p-3 bg-orange-300 rounded-lg mt-8 '>Log in with Google</button>
            <form onSubmit={handleLogin} className='p-8'>
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