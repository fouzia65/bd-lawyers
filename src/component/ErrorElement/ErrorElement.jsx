import React from 'react';
import Navbar from '../Header/Navbar';
import { NavLink } from 'react-router';

const ErrorElement = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' flex flex-col justify-center items-center  mt-10' >
                <img className='w-[30%] h-[50%]' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?t=st=1746078673~exp=1746082273~hmac=31f4afd61fdef97e98ab80e1ad4ee4fca02ae9fee2bf0f6ef5a4fc8c31052573&w=740" alt="" />
                <h1 className='text-4xl font-bold  text-red-600'>404-pages not found</h1>
                <p>oops! the pages you are looking for doesn't exist</p>
               

                <NavLink className='bg-red-600 p-5 rounded-2xl' to='/'> Back to Home</NavLink>
                
               
            
                
            </div>
        </div>
    );
};

export default ErrorElement;