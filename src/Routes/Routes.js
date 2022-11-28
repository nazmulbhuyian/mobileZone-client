import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import AllUser from "../Dashboard/AllUser/AllUser";
import MyOrder from "../Dashboard/MyOrder/MyOrder";
import MyProduct from "../Dashboard/MyProduct/MyProduct";
import MyWishlist from "../Dashboard/MyWishlist/MyWishlist";
import Home from "../Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import PhoneCatagory from "../PhoneCatagory/PhoneCatagory";
import SignUp from "../SignUp/SignUp";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SallerRoute from "./SallerRoute/SallerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/catagory/:id',
                loader: ({ params }) => fetch(`https://mobile-zone-server.vercel.app/catagories/${params.id}`),
                element: <PrivateRoute><PhoneCatagory></PhoneCatagory></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/wishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <SallerRoute><AddProduct></AddProduct></SallerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SallerRoute><MyProduct></MyProduct></SallerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <h3>No data found</h3>
    }
])
export default router;