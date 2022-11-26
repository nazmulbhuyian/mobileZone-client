import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const Catagories = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => {
                setCatagories(data);
            })
    }, [])


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ml-10 my-10'>
            {
                catagories.map(catagory => <Catagory key={catagory.catagory_id} catagory={catagory}></Catagory>)
            }
        </div>
    );
};

export default Catagories;