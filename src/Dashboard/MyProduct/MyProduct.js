import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Product from './Product';

const MyProduct = () => {


    const { user } = useContext(AuthContext);

    const url = `https://mobile-zone-server.vercel.app/myproducts`
    // const url = `https://mobile-zone-server.vercel.app/myproducts?email=${user?.email}`

    const { data: products = [], refetch } = useQuery({
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
        <div>
            <h2 className='text-3xl text-center text-primary font-bold mb-8'>Your product is here: </h2>
            <div className='grid grid-cols-2 gap-8'>
                {
                    products?.map(product => <Product key={product._id} product={product} refetch={refetch}></Product>)
                }
            </div>
        </div>
    );
};

export default MyProduct;