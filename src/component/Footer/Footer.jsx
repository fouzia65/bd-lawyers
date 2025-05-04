import React from 'react';
import { NavLink } from 'react-router';
import { FaInstagram } from "react-icons/fa"; import { FaFacebookSquare } from "react-icons/fa"; import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div>
            <div className='bg-amber-50 flex flex-col justify-center items-center text-black'>
                <div>
                    <div>
                        <a className="btn btn-ghost text-xl my-4">
                            <img src={logo} alt="" />
                            <h1 className='text-3xl font-bold'>Law.BD</h1>
                        </a>
                    </div>
                    <nav className='flex gap-5'>
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/myBooking' >My Bookings</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </nav>
                </div>
                <hr className='border-1 border-dashed w-[80%] border-gray-400 mt-5' />
                <ul className='flex gap-4'>
                    <a href="https://www.instagram.com/fouzia372025/"><FaInstagram size={50} /></a>
                    <a href="https://www.facebook.com/fouzia.rahman.akhi"><FaFacebookSquare size={50} /></a>
                    <a href="https://github.com/fouzia65"><FaGithub size={50} /></a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;