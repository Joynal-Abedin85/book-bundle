import React from 'react';

const Newslatter = () => {
    return (
        <div>
            <section className="bg-purple-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Stay Updated with the Latest Books and Insights
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Subscribe to our newsletter to receive updates on new book releases, special offers, and expert reading tips directly in your inbox.
        </p>
        
        {/* Newsletter Form */}
        <div className="mt-8 flex justify-center">
          <form className="flex flex-col sm:flex-row items-center w-full max-w-3xl">
            
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-auto flex-grow px-4 py-3 rounded-l-md focus:outline-none"
              required
            />
            
            {/* Subscribe Button */}
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-r-md hover:bg-blue-100 transition-colors duration-300"
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