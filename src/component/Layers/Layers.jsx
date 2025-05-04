import React, { Suspense, useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Layers = ({data}) => {
    const [displayLawyer, setDisplayLawyer] = useState([])
    const [showAll , setShowAll] = useState(false)
    useEffect(() => {
            if(showAll){
                setDisplayLawyer(data)
            }
            else{
                setDisplayLawyer(data.slice(0,6))
            }
    },[data,showAll])
    return (
      <div>
         <div className='flex flex-col justify-center items-center text-center my-4'>
                <h1 className='text-3xl font-bold'> Our Best Lawyers</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, <br /> book appointments in minutes and receive quality care you can trust</p>
            </div>
          <div className='grid md:grid-cols-2'>
            <Suspense fallback={<span>loaading....</span>}>
                    {
                        displayLawyer.map(lawyer =><Lawyer lawyer={lawyer}></Lawyer>)
                    }
            </Suspense>
            
        </div>
        <div className='flex justify-center items-center'>
        <button className='text-2xl bg-green-600 p-6 m-6 rounded-3xl cursor-pointer' onClick={()=>setShowAll(!showAll)}>{showAll ? 'show less': 'show all'}</button>
        </div>
        
      </div>
    );
};

export default Layers;