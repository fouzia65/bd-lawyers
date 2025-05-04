import React from 'react';

const MyBookingData = ({b, handleRemove }) => {
    console.log(b.id)
   
    
    return (
        <div>
           
           
            <div className='bg-white text-black m-4 flex flex-col p-5 rounded-3xl'>
                <h1 className='text-2xl font-bold'>{b.name}</h1>
                <div className='flex justify-between'>
                    <p> {b.expertise} </p>
                    <p>Appointment Fee:{b.consultation_fee}</p>
                </div>
                <button onClick={() =>handleRemove(b.id)} className=' border-2 border-green-500 my-3 text-center w-[50%] mx-auto rounded-2xl cursor-pointer'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default MyBookingData;
