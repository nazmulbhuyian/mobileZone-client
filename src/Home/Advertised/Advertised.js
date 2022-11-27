import React, { useEffect, useState } from 'react';
import AdvertisedItem from './AdvertisedItem';

const Advertised = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/advertised')
            .then(res => res.json())
            .then(data => {
                setCatagories(data);
            })
    }, [])

    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-primary'>Advertised Item is Here</h2>
            <div className='grid grid-cols-3 gap-6 mb-16'>
                {
                    catagories.map(catagory => <AdvertisedItem catagory={catagory} key={catagory._id}></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default Advertised;