import React from 'react';

const BannerImg = ({slide}) => {

    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt='' className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-start left-5 right-5 lg:bottom-40 bottom-10">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerImg;