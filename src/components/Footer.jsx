import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-500 to-violet-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-2xl text-gray-700 font-bold mb-3">Library Management</h2>
            <p className="text-sm text-gray-200">
              Manage books and streamline borrowing with ease. A one-stop solution for library enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  
                  className="hover:text-gray-300 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  
                  className="hover:text-gray-300 transition duration-300"
                >
                  Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg text-gray-800 font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-200">123 Library Lane, Book City</p>
            <p className="text-sm text-gray-200">Email: info@library.com</p>
            <p className="text-sm text-gray-200">Phone: +123-456-7890</p>
          </div>

          {/* Social Media Icons */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg text-gray-800 font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                
                className="bg-purple-700 hover:bg-purple-800 p-2 rounded-full transition duration-300"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                
                className="bg-purple-700 hover:bg-purple-800 p-2 rounded-full transition duration-300"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
              <a
                
                className="bg-purple-700 hover:bg-purple-800 p-2 rounded-full transition duration-300"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                
                className="bg-purple-700 hover:bg-purple-800 p-2 rounded-full transition duration-300"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-purple-300 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()}  All rights
            reserved.by MD Tareq
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;