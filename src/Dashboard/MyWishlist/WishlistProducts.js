import React from 'react';
import toast from 'react-hot-toast';

const WishlistProducts = ({ wishlist, refetch }) => {

    const { img, name, original_price, resale_price, use } = wishlist;

    const handleDelete = (wishlist) => {
        fetch(`https://mobile-zone-server.vercel.app/wishlist/${wishlist._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${wishlist.name} deleted successfully`)
                    refetch()
                }
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Product Name: {name} </h2>
                <div className="badge-outline text-xl font-bold">Original Price: {original_price}</div>
                <div className="badge-outline text-xl font-bold">Resale Price: {resale_price}</div>
                <div className="badge-outline text-xl font-bold">Use: {use}</div>
            </div>
            <label onClick={() => handleDelete(wishlist)} className='btn btn-warning text-white'>Delete</label>
        </div>
    );
};

export default WishlistProducts;