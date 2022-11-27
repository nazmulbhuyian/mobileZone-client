import React from 'react';

const AdvertisedItem = ({ catagory }) => {

    const { img, location, name, original_price, resale_price, use } = catagory;
    console.log(catagory);

    return (
            <div className="card w-96 bg-base-100 shadow-xl p-12">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Product Name: {name}
                    </h2>
                    <div className="badge-outline">Original Price: {original_price}</div>
                    <div className="badge-outline">Resale Price: {resale_price}</div>
                    <div className="badge-outline">Uses: {use}</div>
                    <div className="badge-outline">Location: {location}</div>
                </div>
                <div className="card-actions justify-center">
                    <label className="btn btn-primary text-white">Book</label>
                </div>
            </div>
    );
};

export default AdvertisedItem;