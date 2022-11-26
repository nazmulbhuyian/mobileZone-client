import { createBrowserRouter } from "react-router-dom";
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/catagory/:id',
                loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`),
                element: <PhoneCatagory></PhoneCatagory>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
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
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            }
        ]
    }
])
export default router;