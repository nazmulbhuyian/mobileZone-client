import React from 'react';

const Contact = () => {
    return (
        <div className='text-center w-full my-32 p-16'>
            <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
            <h2 className='text-4xl text-white'>Stay connect eith us</h2>
            <div className='mx-auto w-1/2 flex justify-center items-center flex-col mt-16 mb-8'>
                <input type="text" placeholder="Type here" className="mb-5 block input input-bordered input-sm w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="mb-5 block input input-bordered input-sm w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="mb-5 block input input-bordered input-lg w-full max-w-xs" />
            </div>
            <button className='btn btn-primary'>Sunmit</button>
        </div>
    );
};

export default Contact;