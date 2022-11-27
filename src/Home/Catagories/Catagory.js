import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ catagory }) => {

    const { title, image, catagory_id } = catagory;

    return (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand Name: {title}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/catagory/${catagory_id}`}><button className="btn btn-primary">View More</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Catagory;