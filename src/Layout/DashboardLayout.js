import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {

    // const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My Order</Link></li>
                        <li><Link to='/dashboard/wishlist'>My Wishlist</Link></li>
                        <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                        {/* {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li>
                            </>
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;