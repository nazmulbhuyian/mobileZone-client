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
        <div className='grid grid-cols-3 gap-6 mb-32'>
            {
                catagories.map(catagory => <AdvertisedItem catagory={catagory} key={catagory._id}></AdvertisedItem>)
            }
        </div>
    );
};

export default Advertised;