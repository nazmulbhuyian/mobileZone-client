import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertisedItem from '../Home/Advertised/AdvertisedItem';
import Phone from './Phone';
import PhoneModal from './PhoneModal';

const PhoneCatagory = () => {

    const [ totalData ] = useLoaderData();
    console.log(totalData);
    const {collections} = totalData;

    const [items, setItems] = useState([]);


    return (
        <div>
            <div className='grid grid-cols-3 gap-5'>
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