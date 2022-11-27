import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const PhoneModal = ({ items, setItems }) => {

    const { user } = useContext(AuthContext);
    const { name, resale_price, } = items;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;

        const booking = {
            name,
            email,
            phone,
            price,
            product
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setTreatment(null)
                alert('Booking Confirmed')
                setItems(null)
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
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>

                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your E-mail" className="input w-full input-bordered" />
                            <input name='product' type="text" defaultValue={name} disabled className="input w-full input-bordered" />
                            <input name='price' type="text" defaultValue={resale_price} disabled className="input w-full input-bordered" />
                            <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input className='btn btn-accent w-full mt-5' type="submit" value="Book" />

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhoneModal;