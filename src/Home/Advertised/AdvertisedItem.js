import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const AdvertisedItem = ({ catagory }) => {

    const { img, location, name, original_price, resale_price, use } = catagory;

    const { user } = useContext(AuthContext)

    const handleBooking = (catagory) => {
        const catagori = {
            // name,
            // email: user.email,
            price: resale_price,
        }
        fetch('https://mobile-zone-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(catagori)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setTreatment(null)
                toast.success('Booking Confirmed')
                //     refetch()
                // if (data.acknowledge) {
                //     setTreatment(null)
                //     alert('Booking Confirmed')
                //     refetch()
                // }
                // else {
                //     alert.error(data.message)
                // }
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" width='250px' /></figure>
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
                <label onClick={() => handleBooking(catagory)} className="mb-4 btn btn-primary text-white">Book</label>
            </div>
        </div>
    );
};

export default AdvertisedItem;