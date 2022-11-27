import React from 'react';

const Product = ({product}) => {

    const {img, name, original_price, resale_price, use} = product;

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
            {/* <div className="card-actions justify-center">
                <label
                    htmlFor="booking-modal"
                    onClick={() => setItems(collection)}
                    className="btn btn-primary text-white">Book</label>

                <label onClick={handleWishlists} className="btn btn-primary text-white">Wishlist</label>
                <label onClick={handleAdvertised} className="btn btn-primary text-white">Advertised</label>
            </div> */}
        </div>
    );
};

export default Product;