import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 text-white">
            <h1 className="text-9xl font-extrabold">404</h1>
            <h2 className="mt-5 text-3xl font-semibold">Page Not Found</h2>
            <p className="mt-3 text-lg opacity-80">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="mt-8">
                <NavLink to={'/'}>
                <button
                    className="flex items-center px-5 py-3 text-purple-700 bg-white rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
                >
                    <FaHome className="mr-2 text-xl" />
                    Back to Home
                </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Error;