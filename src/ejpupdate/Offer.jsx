import React from 'react';

const Offer = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Offer Heading */}
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Limited Time Offer: Unlock Premium Features!
        </h2>
        
        <p className="text-lg text-white mb-10">
          Get exclusive access to advanced book management tools, personalized insights, and more.
          For a limited time, enjoy 50% off our premium plan.
        </p>
        
        {/* Offer Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Advanced Book Organization
            </h3>
            <p className="text-gray-600">
              Manage multiple libraries, categorize books, and create custom tags.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Personalized Recommendations
            </h3>
            <p className="text-gray-600">
              Get book suggestions tailored to your reading habits and preferences.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Progress Tracking Tools
            </h3>
            <p className="text-gray-600">
              Track reading progress, set goals, and monitor completion rates.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="#"
          className="bg-white text-black-700 font-bold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Upgrade to Premium Now
        </a>
      </div>
    </section>
        </div>
    );
};

export default Offer;