import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyProduct = () => {


    // const { user } = useContext(AuthContext);

    // const url = `http://localhost:5000/myproducts?email=${user?.email}`

    // const { data: products = [] } = useQuery({
    //     queryKey: ['/myproducts', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url)
    //         // const res = await fetch(url, {
    //         //     headers: {
    //         //         authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         //     }
    //         // })
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    return (
        <div>
            
        </div>
    );
};

export default MyProduct;