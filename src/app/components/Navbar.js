import React from 'react'
import Image from "next/image";
import logo from '../../../public/Movini.jpg'
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'

function Navbar() {
    return (
        <div className='nav bg-white  lg:px-8" '>
            <Image src={logo} alt="Logo" />
            <div className='nav--menu'>
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
                    <li><a href='https://github.com/movinigamage'><Image src={gitlogo} className='navbar-icon'/></a></li>
                    <li><a href=''><Image src={twitlogo} className='navbar-icon'/></a></li>
                    <li><a href='https://www.linkedin.com/in/movini/'><Image src={linkedinlogo} className='navbar-icon'/></a></li>
                </ul>
            </div>
            </div>
        </div>



    )
}

export default Navbar
