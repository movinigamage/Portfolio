import React from 'react'
import Image from "next/image";
import profile from '../../../public/profile.png'

function Hello() {
    return (
        <div className='hello'>
            <div className='greeting'>
                <h1 className="font-poppins font-bold text-5xl text-customColor">Hi 👋,<br />My name is<br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"> Movini Gamage</span><br />I build things for web </h1>
            </div>
            <div className='profile--photo'>
                <Image src={profile} />
            </div>
        </div>
    )
}

export default Hello
