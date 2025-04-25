import React from 'react';
import { FaBook, FaStar, FaChartLine } from 'react-icons/fa';

const Offer = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Offer Heading */}
        <h2 className="text-4xl font-extrabold mb-6">
          Limited Time Offer: Unlock Premium Features!
        </h2>
        
        <p className="text-lg mb-10">
          Get exclusive access to advanced book management tools, personalized insights, and more.
          For a limited time, enjoy 50% off our premium plan.
        </p>
        
        {/* Offer Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-purple-700">
              <FaBook />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Advanced Book Organization
            </h3>
            <p className="text-gray-600">
              Manage multiple libraries, categorize books, and create custom tags.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-purple-700">
              <FaStar />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Personalized Recommendations
            </h3>
            <p className="text-gray-600">
              Get book suggestions tailored to your reading habits and preferences.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-purple-700">
              <FaChartLine />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Progress Tracking Tools
            </h3>
            <p className="text-gray-600">
              Track reading progress, set goals, and monitor completion rates.
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Get 50% Off Today</h3>
          <p className="text-xl font-bold text-white mb-4">
            Only $9.99 <span className="line-through text-gray-300">$19.99</span> per month
          </p>
          <p className="text-lg text-gray-300 mb-6">
            This offer won't last long! Upgrade now and take advantage of the best price of the year.
          </p>
        </div>

        {/* Call to Action Button */}
        <a
          href="#"
          className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Upgrade to Premium Now
        </a>
      </div>
    </section>
  );
};

export default Offer;
