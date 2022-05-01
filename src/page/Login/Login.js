import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')

    // set location 
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (user) {
        navigate(from, { replace: true });
    }
    let errorMassage;
    if (error) {
        errorMassage = <p className='text-red-600 font-bold text-center mt-2'>Please Enter Correct Email and Password</p>
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    const forgotPassword = async () => {
        let collectEmail = prompt('Please Enter Your Email');
        await sendPasswordResetEmail(collectEmail)
        alert('Send Email')
    }
    return (
        <div className='w-3/4 m-auto'>
            <h1 className='text-3xl font-bold text-center mt-8'>Log In</h1>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleLogin} className='p-8'>
                <input ref={emailRef} className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="email" placeholder='Enter Your Email' />
                <input ref={passwordRef} className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="password" placeholder='Enter Your Password' />
                <input className='block m-auto bg-orange-300 w-1/4 mt-4 p-2' type="submit" value="Log in" />

            </form>
            {errorMassage}
            <div className='text-center'>
                <p><Link to='/login' onClick={forgotPassword}>Forgot Password</Link></p>
                <p>Do not account Please register <Link className='text-red-600 font-bold' to='/registration'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;