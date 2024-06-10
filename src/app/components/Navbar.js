"use client";
import { React, useState } from 'react'
import Image from "next/image";
import Head from 'next/head';
import logo from '../../../public/Movini.jpg'
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'
import menuIcn from '../../../public/menu.png'




function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className='nav bg-white  lg:px-8" absolute inset-x-0 top-0 z-50' >
                <Image src={logo} alt="Logo" className='h-5 w-auto' />

                <div className='nav--menu' id='NavId'>
                    <ul className='font-poppins text-customColor text-xl'>
                        <li><a href=''>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#tech'>Tech Stack</a></li>
                        <li><a href='#project'>Projects</a></li>
                        <li><a href='#education'>Education</a></li>
                        <li><a href='#qualification'>Qualification</a></li>
                        <li><a href='#expirence'>Experience</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                    <div className='contact--icon'>
                        <ul>
                            <li><a href='https://github.com/movinigamage'><Image src={gitlogo} className='navbar-icon' /></a></li>
                            <li><a href=''><Image src={twitlogo} className='navbar-icon' /></a></li>
                            <li><a href='https://www.linkedin.com/in/movini/'><Image src={linkedinlogo} className='navbar-icon' /></a></li>
                        </ul>
                    </div>
                </div>


              


            </div>

        </>


    )
}

export default Navbar
