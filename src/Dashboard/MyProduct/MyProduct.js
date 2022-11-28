import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Product from './Product';

const MyProduct = () => {


    const { user } = useContext(AuthContext);

    const url = `https://mobile-zone-server.vercel.app/myproducts?email=${user?.email}`

    const { data: products = [] } = useQuery({
        queryKey: ['/myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    console.log(products);

    return (
        <div className='grid grid-cols-2 gap-8'>
            {
                products?.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default MyProduct;