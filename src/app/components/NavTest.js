"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image"
import gitlogo from '../../../public/Vector.jpg'
import twitlogo from '../../../public/twitter.jpg'
import linkedinlogo from '../../../public/linked.jpg'
import logo from '../../../public/Movini.jpg'
import { auth, db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import Login from "./Login";
import Messages from "./Messages";



function NavTest() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Auth
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  //messagedialog
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false); // State to manage dialog visibility
  const handleMessagesClick = () => {
    // Open dialog box when Messages link is clicked
    setIsMessageDialogOpen(true);
  };

  //messagedialog

  // messagecount
  const [documentCount, setDocumentCount] = useState(0);

  useEffect(() => {
    const fetchDocumentCount = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'formSubmissions'));
        const count = querySnapshot.size;
        setDocumentCount(count);
      } catch (error) {
        console.error('Error fetching document count:', error);
      }
    };

    fetchDocumentCount();

    return () => {
      // Cleanup function
    };
  }, []);
  // messagecount

  // Auth
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Image src={logo} alt="Logo" className='h-7 w-auto' />
          </div>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item"><a href='' className="nav-links">Home</a></li>
            <li className="nav-item"><a href='#about' className="nav-links">About</a></li>
            <li className="nav-item"><a href='#tech' className="nav-links">Tech Stack</a></li>
            <li className="nav-item"><a href='#project' className="nav-links">Projects</a></li>
            <li className="nav-item"><a href='#education' className="nav-links">Education</a></li>
            <li className="nav-item"><a href='#qualification' className="nav-links">Qualification</a></li>
            <li className="nav-item"><a href='#expirence' className="nav-links">Experience</a></li>
            <li className="nav-item"><a href='#contact' className="nav-links">Contact</a></li>
            {!loggedIn && <li className="nav-item"><a className="nav-links" onClick={openDialog}>Login</a></li>}


            {loggedIn && (
              <>
                <li className="nav-item"><a href='#contact' onClick={handleMessagesClick} className="nav-links">Messages
                  <span class="relative inline-flex text-xs bg-red-500 text-white rounded-full py-1 px-2">
                    {documentCount.toString()}
                  </span>
                </a></li>
                <li className="nav-item"><a href='#contact' onClick={handleLogout} className="nav-links">Logout</a></li>
              </>)}
            <div className='contact--icon nav--menu'>
              <ul>
                <li><a href='https://github.com/movinigamage'><Image src={gitlogo} className='navbar-icon w-6 h-6' /></a></li>
                <li><a href=''><Image src={twitlogo} className='navbar-icon w-6 h-6' /></a></li>
                <li><a href='https://www.linkedin.com/in/movini/'><Image src={linkedinlogo} className='navbar-icon w-6 h-6' /></a></li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>

      {showDialog && (
        <div className="fixed z-10 py-6 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xs sm:w-9/12">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Login onLoginSuccess={() => {
                      setLoggedIn(true);
                      setTimeout(closeDialog, 4000);
                    }} />                                        </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              </div>
            </div>
          </div>
        </div>


      )}

      {/* Dialog box */}
      {isMessageDialogOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Messages/>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavTest
