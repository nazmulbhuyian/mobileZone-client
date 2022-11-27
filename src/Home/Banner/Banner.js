import React from 'react';


import img1 from '../../assets/banner/first.jpg'
import img2 from '../../assets/banner/second.png'
import img3 from '../../assets/banner/third.jpg'
import BannerImg from './BannerImg';


const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-7/12 mt-16 mx-auto">

            {
                bannerData.map(slide => <BannerImg
                key={slide.id}
                slide={slide}
                ></BannerImg>)
            }
            
        </div>
    );
};

export default Banner;