import React from 'react';
import img1 from '../../assets/success-doctor.png'
import img2 from '../../assets/success-patients.png'
import img3 from '../../assets/success-review.png'
import img4 from '../../assets/success-staffs.png'
import CountUp from 'react-countup';

const CountUp1 = () => {
    return (
        <div className='flex text-black '>
            <div className='bg-gray-300 hover:bg-white py-15 px-25 m-4 rounded-3xl'>
                <img src={img1} alt="" />
                <CountUp start={0} end={199} duration={2.75} className='text-2xl'>
                    {({ countUpRef}) => (
                        <div>
                            <span className='text-5xl font-extrabold' ref={countUpRef} />+
                            
                        </div>
                    )}
                </CountUp>
                <p>total lawyer</p>
            </div>
            <div className='bg-gray-300 hover:bg-white py-15 px-25 m-4 rounded-3xl'>
                <img src={img3} alt="" />
                <CountUp start={0} end={199} duration={2.75} className='text-2xl'>
                    {({ countUpRef}) => (
                        <div>
                            <span className='text-5xl font-extrabold' ref={countUpRef} />+
                            
                        </div>
                    )}
                </CountUp>
                <p>Total review</p>
            </div>
            <div className='bg-gray-300 hover:bg-white py-15 px-25 m-4 rounded-3xl'>
                <img src={img2} alt="" />
                <CountUp start={0} end={1900} duration={2.75} className='text-2xl'>
                    {({ countUpRef}) => (
                        <div>
                            <span className='text-5xl font-extrabold' ref={countUpRef} />+
                            
                        </div>
                    )}
                </CountUp>
                <p>cases initiated</p>
            </div>
            <div className='bg-gray-300 hover:bg-white py-15 px-25 m-4 rounded-3xl'>
                <img src={img4} alt="" />
                <CountUp start={0} end={300} duration={2.75} className='text-2xl'>
                    {({ countUpRef}) => (
                        <div>
                            <span className='text-5xl font-extrabold' ref={countUpRef} />+
                            
                        </div>
                    )}
                </CountUp>
                <p>total staffs</p>
            </div>
        </div>
    );
};

export default CountUp1;