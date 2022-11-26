import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;