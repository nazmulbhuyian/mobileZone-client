import React from 'react';

const WishlistProducts = ({wishlist}) => {

    const {img, name, original_price, resale_price, use} = wishlist;
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{original_price}</div>
                        <div className="badge badge-outline">{resale_price}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{use}</div>
                    </div>
                </div>
            </div>
    );
};

export default WishlistProducts;