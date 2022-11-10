import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthProvider';

const RoutePrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className="text-center min-h-screen">
                <Spinner className='w-60 h-60' aria-label="Center-aligned spinner example" />
            </div>
        </>
    }

    if (user && user?.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default RoutePrivate;