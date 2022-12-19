import React, { useEffect, useState } from 'react';
import AdvertisedItem from './AdvertisedItem';

const Advertised = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('https://mobile-zone-server.vercel.app/advertised')
            .then(res => res.json())
            .then(data => {
                setCatagories(data);
            })
    }, [])

    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-primary mb-16'>Advertised Item is Here</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 mb-16 mx-10'>
                {
                    catagories.map(catagory => <AdvertisedItem catagory={catagory} key={catagory._id}></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default Advertised;