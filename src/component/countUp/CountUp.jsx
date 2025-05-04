// src/components/CountUp1.jsx

import React from 'react';
import img1 from '../../assets/success-doctor.png';
import img2 from '../../assets/success-patients.png';
import img3 from '../../assets/success-review.png';
import img4 from '../../assets/success-staffs.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const StatBox = ({ img, end, label }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,  
    });

    return (
        <div ref={ref} className='bg-gray-300 hover:bg-white py-10 px-8 m-4 rounded-3xl text-center shadow-md transition duration-300'>
            <img src={img} alt={label} className="mx-auto mb-4 w-24 h-24 object-contain" />
            {inView && (
                <CountUp start={0} end={end} duration={2.75}>
                    {({ countUpRef }) => (
                        <div>
                            <span className='text-5xl font-extrabold text-indigo-700' ref={countUpRef} />+
                        </div>
                    )}
                </CountUp>
            )}
            <p className='mt-2 text-lg font-semibold'>{label}</p>
        </div>
    );
};


const CountUp1 = () => {
    return (
        <div className='flex flex-wrap justify-center items-center text-black py-10 bg-gray-100'>
            <StatBox img={img1} end={199} label="Total Lawyers" />
            <StatBox img={img3} end={199} label="Total Reviews" />
            <StatBox img={img2} end={1900} label="Cases Initiated" />
            <StatBox img={img4} end={300} label="Total Staffs" />
        </div>
    );
};

export default CountUp1;
