import React, { Suspense } from 'react';

const Blog = ({d}) => {
    console.log(d)
    return (
        <div>
           <Suspense fallback={<span>loading......</span>}>
           <div className=' bg-white p-4 m-5 rounded-2xl text-black'>
                <h1><span className='font-bold text-2xl'>Question:</span>{d.question}</h1>
                <hr  className='my-4'/>
                <p><span className='font-bold'>Answer:</span>{d.answer}</p>
                <hr className='my-4' />
                <p className='text-gray-400'>Added at :{d.date}</p>
            </div>
           </Suspense>
        </div>
    );
};

export default Blog;