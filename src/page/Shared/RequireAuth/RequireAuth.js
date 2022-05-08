import { RefreshIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <RefreshIcon className="animate-spin w-40 duration-75"></RefreshIcon>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAuth;