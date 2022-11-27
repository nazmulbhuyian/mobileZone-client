import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import WishlistProducts from './WishlistProducts';

const MyWishlist = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/wishlists?email=${user?.email}`

    const { data: wishlists = [] } = useQuery({
        queryKey: ['/wishlists', user?.email],
        queryFn: async () => {
            // const res = await fetch(url)
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='my-16'>
            <h2 className='text-3xl text-center text-primary font-bold mb-8'>Your Wishlist is here: </h2>
            <div className='grid grid-cols-2 gap-8'>
                {
                    wishlists?.map(wishlist => <WishlistProducts key={wishlist} wishlist={wishlist}></WishlistProducts>)
                }
            </div>
        </div>
    );
};

export default MyWishlist;