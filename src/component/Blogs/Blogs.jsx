import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';


const Blogs = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
           
            <Suspense fallback={<span></span>}>
            {
                data.map(d => <Blog key={d.id} d={d}></Blog>)
            }
            </Suspense>
        </div>
    );
};

export default Blogs;