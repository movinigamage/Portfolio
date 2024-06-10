import React from 'react'
import Image from "next/image";

import movinilogo from '../../../public/Movini.jpg'
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'

function Footer() {
    return (

        <div className='footer--main'>
            <div className='footer'>
                <div><Image className='footer--logo' src={movinilogo} /></div>

                <div className='footer--menu'>
                    <div className='footer--contact'>
                        <ul className='font-poppins text-customColor'>
                            <li><a href=''>mwmgamage@gmail.com</a></li>
                            <li>+94 768886618</li>
                        </ul>
                    </div>

                    <div className='footer--icon'>
                        <ul>
                            <li><a href='https://github.com/movinigamage'><Image src={gitlogo} className='navbar-icon' /></a></li>
                            <li><Image src={twitlogo} className='navbar-icon' /></li>
                            <li><a href='https://www.linkedin.com/in/movini/'><Image src={linkedinlogo} className='navbar-icon' /></a></li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className='sub--footer'>
                <ul className='font-poppins text-customColor'>
                    <li><a href=''>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#tech'>Tech Stack</a></li>
                    <li><a href='#project'>Projects</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#qualification'>Qualification</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div>
                    Designed and built by Movini .
                </div >

            </div>



            <div className='mobile--footer'>
                <Image className='footer--logo' src={movinilogo} />
                <div>
                    Designed and built by Movini .
                </div >
            </div>


        </div>
    )
}

export default Footer
