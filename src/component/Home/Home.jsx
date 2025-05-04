import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import Layers from '../Layers/Layers';
import CountUp1 from '../countUp/CountUp';

const Home = () => {
    const data = useLoaderData()
    return (
        <div >
            <Banner></Banner>
            <Layers data ={data}></Layers>
           <CountUp1></CountUp1>
        </div>
    );
};

export default Home;