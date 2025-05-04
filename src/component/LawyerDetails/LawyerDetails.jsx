import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { RiRegisteredLine } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { addToDB } from '../../utility/addToDBl';



const LawyerDetails = () => {
    const { id } = useParams()
    const singleId = parseInt(id)
    const data = useLoaderData()
    const singleLawyer = data.find(l => l.id === singleId)
    const { name, image, licence_number, isAvailable, expertise, experience, consultation_fee, availability } = singleLawyer
    console.log(singleLawyer)

    const handleAppointment = id =>{
        
       addToDB(id)
       
    }
    return (
        <div>
              
            <div className='flex flex-col justify-center items-center bg-gray-300 text-black m-10 p-10 rounded-3xl'>
                <h1 className='text-4xl font-bold'>Lawyer’s Profile Details</h1>

                <p> <span className='text-2xl font-bold'>{name}</span> is a licensed and experienced attorney specializing in [area of specialization, e.g.,{expertise} ]. He has been practicing law for over {experience} years and is committed to providing clients with professional, ethical, and effective legal representation. Based in Bangladesh, {name} is known for his strong advocacy, thorough legal knowledge, and dedication to achieving the best outcomes for his clients..</p>
            </div>
            <div className='flex justify-center items-center bg-white m-10 text-black rounded-3xl'>
                <div className='p-10' >
                    <img src={image} alt="" />
                </div>
                <div>
                    <p className='text-blue-600 bg-blue-300 w-[30%] px-3 rounded-2xl'>{experience} Experience</p>
                    <h1 className='my-4 text-4xl font-bold'>{name}</h1>
                    <div className='flex gap-3 '>
                        <p>{expertise} </p>
                        <p className='flex gap-1'><RiRegisteredLine />licence_number</p>
                    </div>
                    <div className='flex gap-3 my-5'>
                        <p>Availability :</p>
                        <p className='flex gap-3 '>
                            {
                                availability.map(week => <p className='text-orange-600 bg-orange-300 px-4 rounded-3xl'>{week}</p>)
                            }
                        </p>
                    </div>
                    <p>consultration fee : <span className='text-green-500'> {consultation_fee}</span> </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white text-black m-10  p-10 rounded-3xl'>
                <h1 className='text-3xl font-bold'>Book an Appointment</h1>
                <hr className='border-1 border-dashed text-gray-400 w-[100%] my-6' />
                <div className='flex gap-140 my-5' > 
                    <p>Availability</p>
                    <p className='text-green-400 bg-green-200 px-4 rounded-2xl'>Lawyer Available Today</p>
                </div>
                <p className='text-orange-500 bg-orange-100 px-8 rounded-2xl my-4 flex items-center'><BsExclamationCircle /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation</p>
                <Link to='/myBooking'>
                <button className='bg-green-500 text-white p-4 rounded-3xl cursor-pointer' onClick={() => handleAppointment(id)} > Book Appointment Now</button>
                </Link>
                
            </div>
        </div>
    );
};

export default LawyerDetails;