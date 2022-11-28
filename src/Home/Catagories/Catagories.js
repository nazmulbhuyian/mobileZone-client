import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const Catagories = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('https://mobile-zone-server.vercel.app/catagories')
            .then(res => res.json())
            .then(data => {
                setCatagories(data);
            })
    }, [])


    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-primary'>Second Hand Phone Brand</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ml-10 my-10'>
                {
                    catagories.map(catagory => <Catagory key={catagory.catagory_id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;