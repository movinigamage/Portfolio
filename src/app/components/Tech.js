import React from 'react'
import Image from "next/image";
import htmllogo from '../../../public/vscode-icons_file-type-html.jpg'
import jslogo from '../../../public/vscode-icons_file-type-js-official.jpg'
import reactlogo from '../../../public/logos_react.jpg'
import boostraplogo from '../../../public/logos_bootstrap.jpg'
import html5logo from '../../../public/vscode-icons_file-type-css.jpg'
import githublogo from '../../../public/github.jpg'
import vscodelogo from '../../../public/vscode-icons_file-type-vscode.jpg'
import gitlogo from '../../../public/logos_git-icon.jpg'



function Tech() {
    return (
        <div className='tech pt-28' id='tech'>
            <div className='tech--text font-poppins  text-customColor'>
                <h1 className='text-4xl font-bold'>My Tech Stack</h1>
                <p className='text-2xl '>Technologies I’ve been working with recently</p>
            </div>
           
            <div className='tech--icon'>
                <ul className='icon--first--line'>
                    <li><Image src={htmllogo} alt='max'/></li>
                    <li><Image src={jslogo}/></li>
                    <li><Image src={reactlogo}/></li>
                    <li><Image src={boostraplogo}/></li>
                </ul>
                <ul className='icon--second--line'>
                    <li><Image src={vscodelogo}/></li>
                    <li><Image src={githublogo}/></li>
                    <li><Image src={html5logo}/></li>
                    <li><Image src={gitlogo}/></li>
                </ul>

            </div>
        </div>
    )
}

export default Tech
