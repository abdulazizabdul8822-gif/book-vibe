import React from 'react';

import bookImage from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 p-10 container rounded-2xl my-4 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img
                    src={bookImage}
                    className=" bg-none rounded-lg shadow-2xl"
                />
                <div className=' space-y-5'>
                    <h1 className="text-5xl font-bold bg-linear-to-r from-[#08f204] to-[#0180c0] bg-clip-text text-transparent">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;