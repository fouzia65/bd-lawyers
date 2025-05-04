
import { useLoaderData } from 'react-router';
import { getItemFormLocal, removeToDB } from '../../utility/addToDBl';
import MyBookingData from './MyBookingData';
import ReChart from '../ReChart/ReChart';
import { Suspense, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const MyBooking = () => {
     const data = useLoaderData()
     const [booking, setBooking] = useState([])
       useEffect(()=>{

           const getLocalData = getItemFormLocal()
           const convertStoredData = getLocalData.map(c => parseInt(c))
           const  myBooking = data.filter(f => convertStoredData.includes(f.id)) 
           setBooking(myBooking)
       }, [data])
     
       const handleRemove = (id) =>{
        removeToDB(id)
        setBooking(getItemFormLocal())
        toast("you cancled the appointment");
       }
    return (
        
        <div>
             {
                booking.length !== 0 ? <ReChart d={booking}></ReChart> : ''
             }
               <ToastContainer />
           
             <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-3xl font-bold my-3'>My Today Appointments</h1>
                <p> Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience</p>
            </div>
          <Suspense fallback={<span>loading....</span>}>
          {
            booking.map(b=><MyBookingData handleRemove={handleRemove} key={b.id} b={b}></MyBookingData>)
           }
          </Suspense>
        </div>
    );
};

export default MyBooking;

