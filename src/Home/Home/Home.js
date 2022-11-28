import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Catagories></Catagories>
            <Contact></Contact>
        </div>
    );
};

export default Home;