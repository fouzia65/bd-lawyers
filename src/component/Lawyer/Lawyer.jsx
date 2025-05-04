import React from 'react';
import { FaRegRegistered } from "react-icons/fa";
import { Link } from 'react-router';

const Lawyer = ({lawyer}) => {
    const {name, licence_number,isAvailable, image,expertise,experience,consultation_fee,availability,id} = lawyer
    return (
        <div>
           
            <div className='flex gap-2 bg-white text-black m-4  p-4 shadow rounded-3xl'>
                <div className='w-[60%]'>
                    <img className=' p-3 rounded-3xl ' src={image} alt="" />
                </div>
                <div className=' flex-col justify-center items-center my-auto w-[40%] '>
                    <div className='flex gap-4 pb-4'>
                        <p className='text-green-700 bg-green-300 px-3 rounded-2xl'>Available</p>
                       <p className='text-blue-700 bg-blue-300 px-3 rounded-2xl'> {experience}+ experience</p>
                    </div>
                    <h1 className='text-3xl font-bold py-2'>{name}</h1>
                    <p className='text-gray-400'>{expertise} expert</p>
                    <p className='flex text-gray-400 py-2'><FaRegRegistered />License No: {licence_number}</p>
                    <Link to={`lawyerDetails/${id}`}>
                    <button className='text-blue-500 px-10 rounded-3xl bg-gray-100 cursor-pointer'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Lawyer;