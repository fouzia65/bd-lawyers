import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Roots from '../Roots/Roots';
import Home from '../Home/Home';
import MyBooking from '../MyBooking/MyBooking';
import Blogs from '../Blogs/Blogs';
import ErrorElement from '../ErrorElement/ErrorElement';
import './router.css'
import LawyerDetails from '../LawyerDetails/LawyerDetails';
import MyBookingData from '../MyBooking/MyBookingData';

export  const router = createBrowserRouter(
  
  [
    {
      path: "/",
      Component:Roots,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          index:true,
          path:'/',
          loader:()=>fetch('../../../public/lawyer.json'),
          Component: Home
        },
        {
          path: '/myBooking',
          loader:()=>fetch('../../../public/lawyer.json'),
          Component: MyBooking
        },
        {
          path:'/blogs',
          loader:() => fetch('../../../public/blog.json'),
          Component: Blogs
        },
        {
          path:'lawyerDetails/:id',
          loader:()=>fetch('../../../public/lawyer.json'),
          Component:LawyerDetails
        }
      ]
    },
  ]);