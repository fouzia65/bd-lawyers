import React from 'react';
import bannerImg from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto bg-white'>
                <div className='static'> 
                    <img src={bannerImg} alt="" />
                </div>
                <div className='absolute w-[80%] mx-auto -mt-90 pl-30'>
                    <h1 className='text-5xl font-bold text-center'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
                    <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;