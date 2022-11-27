import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const Phone = ({ collection, setItems }) => {

    const {user} = useContext(AuthContext)

    const { img, location, name, original_price, resale_price, seller_name, use } = collection;

    const handleAdvertised = () =>{
        const advertised = {
            img,
            name,
            original_price,
            resale_price,
            use,
            location
        }
        fetch('http://localhost:5000/advertised', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertised)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setTreatment(null)
                // if(data.acknowledged){
                //     toast.success('Booking Confirmed')
                // }
                    
                //     refetch()
                // if (data.acknowledge) {
                //     setTreatment(null)
                //     toast.success('Booking Confirmed')
                //     refetch()
                // }
                // else {
                //     toast.error(data.message)
                // }
            })
    }

    const handleWishlists = () =>{
        const wishList = {
            img,
            email: user?.email,
            name,
            original_price,
            resale_price,
            use
        }
        fetch('http://localhost:5000/wishLists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setTreatment(null)
                if(data.acknowledged){
                    toast.success('Booking Confirmed')
                }
                    
                //     refetch()
                // if (data.acknowledge) {
                //     setTreatment(null)
                //     toast.success('Booking Confirmed')
                //     refetch()
                // }
                // else {
                //     toast.error(data.message)
                // }
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl p-8">
            <figure><img src={img} alt="Shoes" /></figure>
            <h2 className="card-title my-2 text-xl font-bold">Phone Name: {name}</h2>
            <div>
                <p className=' text-xl font-bold'>Seller Name: {seller_name}</p>
                <div className="badge-outline my-2 text-xl font-bold">Original Price: {original_price}</div>
                <div className="badge-outline text-xl font-bold">Resel Price: {resale_price}</div>
                <div className="badge-outline my-2 text-xl font-bold">Uses: {use}</div>
                <div className="badge-outline mb-2 text-xl font-bold">Location: {location}</div>
            </div>
            <div className="card-actions">
                <label
                    htmlFor="booking-modal"
                    onClick={() => setItems(collection)}
                    className="btn btn-sm btn-warning text-white">Book</label>

                <label onClick={handleWishlists} className="btn btn-sm btn-warning text-white">Wishlist</label>
                <label onClick={handleAdvertised} className="btn btn-sm btn-warning text-white">Advertised</label>
            </div>
        </div>
    );
};

export default Phone;