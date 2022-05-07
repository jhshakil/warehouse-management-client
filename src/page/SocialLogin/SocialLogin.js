import { RefreshIcon } from '@heroicons/react/outline';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const axios = require('axios');

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // set location 
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    if (loading) {
        return <RefreshIcon className="animate-spin w-40"></RefreshIcon>
    }
    let errorMassage;
    if (error) {
        errorMassage = <p className='text-red-600 font-bold text-center mt-2'>Please Log In</p>
    }
    async function userCollect() {
        if (user) {
            // navigate(from, { replace: true });
            const email = user.user.email;
            const { data } = await axios.post('http://localhost:5000/login', { email });
            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
        }
    }
    userCollect();
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='block m-auto p-3 bg-orange-300 rounded-lg mt-8 '>Log in with Google</button>
            {errorMassage}
        </div>
    );
};

export default SocialLogin;