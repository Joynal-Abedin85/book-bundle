import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Icon for the input

const Newslatter = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          
          {/* Heading */}
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Stay Updated with the Latest Books and Insights
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Subscribe to our newsletter to receive updates on new book releases, special offers, and expert reading tips directly in your inbox.
          </p>
          
          {/* Newsletter Form */}
          <div className="mt-8 flex justify-center">
            <form className="flex flex-col sm:flex-row items-center w-full max-w-3xl">
              
              {/* Email Input with Icon */}
              <div className="relative w-full sm:w-auto flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 pl-10 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              {/* Subscribe Button */}
              <button
                type="submit"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-r-md hover:bg-blue-200 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Privacy Note */}
          <p className="mt-4 text-blue-200 text-sm">
            We care about your privacy. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Newslatter;
