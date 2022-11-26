import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email)
    const location = useLocation()

    if(loading || isAdminLoading){
        return <h2>Loading...</h2>
        // return <Loading></Loading>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoutes;