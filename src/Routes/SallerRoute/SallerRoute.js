import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import UseSeller from '../../Hooks/UseSeller';

const SallerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isSeller, isSellerLoading] = UseSeller(user?.email)
    const location = useLocation()

    if(loading || isSellerLoading){
        return <h2>Loading...</h2>
        // return <Loading></Loading>
    }

    if(user && isSeller){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default SallerRoute;