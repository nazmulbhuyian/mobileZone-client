import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertisedItem from '../Home/Advertised/AdvertisedItem';
import Phone from './Phone';
import PhoneModal from './PhoneModal';

const PhoneCatagory = () => {

    const [ totalData ] = useLoaderData();
    const {collections} = totalData;

    const [items, setItems] = useState(null);


    return (
        <div className='my-8'>
            <h2 className='text-center text-primary font-bold text-2xl mb-12'>There is all this catarogy phone</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    collections?.map(collection => <Phone
                        key={collection.phone_id}
                        collection={collection}
                        setItems={setItems}
                    ></Phone>)
                }
            </div>
            {
                items && 
                <PhoneModal
                items={items}
                ></PhoneModal>
            }
        </div>
    );
};

export default PhoneCatagory;