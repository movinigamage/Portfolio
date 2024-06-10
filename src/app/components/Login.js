import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            toast.success(`Success login: ${user.email} `, {
                position: "bottom-center",
            });
            onLoginSuccess(); // Notify the parent component of successful login
        } catch (error) {
            console.error(error);
            toast.error(`Error: ${error.message}`, {
                position: "bottom-center" // Set position to bottom-center
            });
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">Login Page</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 pb-10">
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="bg-gradient-to-r from-purple-400 to-pink-500  text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                    Login
                </button>
            </form>
            <ToastContainer position="bottom-center" /> {/* Set default position to bottom-center */}
        </div>
    );
};

export default Login;