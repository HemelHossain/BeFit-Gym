import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex gap-1 items-center'>Loading...<span className='animate-loader w-4 h-4 bg-red-600 rounded-full'></span><span className='animate-loader w-4 h-4 bg-red-600 rounded-full'></span><span className='animate-loader w-4 h-4 bg-red-600 rounded-full'></span></div>
    }
    if(users){
        return children;  
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;