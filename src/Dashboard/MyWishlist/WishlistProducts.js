import React from 'react';

const WishlistProducts = ({wishlist}) => {

    const {img, name, original_price, resale_price, use} = wishlist;
    return (
            <div className="card w-96 bg-base-100 shadow-xl p-5">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Product Name: {name} </h2>
                        <div className="badge-outline text-xl font-bold">Original Price: {original_price}</div>
                        <div className="badge-outline text-xl font-bold">Resale Price: {resale_price}</div>
                        <div className="badge-outline text-xl font-bold">Use: {use}</div>
                </div>
            </div>
    );
};

export default WishlistProducts;