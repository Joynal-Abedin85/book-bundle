import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Promotional = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Discover the Future of Book Management
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Manage your book collection effortlessly, track your reading progress, and explore curated recommendations.
            </p>
          </div>
  
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m11 10h-4m-4 8h4m-4 4h4"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Organize Your Library
                </h3>
                <p className="mt-2 text-gray-600">
                  Categorize, sort, and search your entire book collection quickly and easily.
                </p>
              </div>
            </div>
  
            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="bg-green-600 text-white p-3 rounded-full">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h12m-6-6h6m-6 12h6"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Track Reading Progress
                </h3>
                <p className="mt-2 text-gray-600">
                  Stay on top of your reading goals by tracking pages, time spent, and completion rates.
                </p>
              </div>
            </div>
  
            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="bg-indigo-600 text-white p-3 rounded-full">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 5m14 14"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Explore Recommendations
                </h3>
                <p className="mt-2 text-gray-600">
                  Get personalized book suggestions tailored to your interests and reading history.
                </p>
              </div>
            </div>
          </div>
  
          {/* Call to Action Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 py-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold">Ready to Revolutionize Your Reading Experience?</h3>
            <p className="mt-2 text-lg">
              Join thousands of book lovers using our Book Management system to enhance their collections and reading journeys.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to='/allbooks'
                className="bg-white text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                Get Started Today
              </Link>
              <a
        href="#"
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          setIsOpen(true);
        }}
        className="ml-4 bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300"
      >
        Learn More
      </a>
            </div>
          </div>
        </div>
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-11/12 md:w-1/3 p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Book Management & Reading Experience
            </h2>
            <p className="text-gray-700">
              Managing books efficiently enhances the reading experience. A well-organized collection helps in tracking progress, saving favorite passages, and setting reading goals.
            </p>
            <p className="mt-2 text-gray-700">
              Features like digital bookmarks, categorization, and note-taking improve accessibility and engagement for book lovers.
            </p>

            {/* Close Button */}
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </section>
    );
};

export default Promotional;