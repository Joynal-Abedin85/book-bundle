import React from 'react';

const Extra = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1800px] mx-auto gap-8 p-6">
      {/* Text Content */}
      <div className="w-full bg-gray-50 p-8 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
        <div className="relative">
          <span className="absolute -top-4 -left-4 bg-red-500 text-white text-sm px-4 py-2 rounded-full shadow-lg">
            10 Best
          </span>
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Library Management Software
        </h2>
        <ul className="mt-6 space-y-3 text-gray-600">
          <li className="flex items-start transition-colors duration-300 hover:text-red-500">
            <span className="mr-2 text-gray-500">•</span>
            Why Librarians Should Use Free Open Source Digital Library Software
          </li>
          <li className="flex items-start transition-colors duration-300 hover:text-red-500">
            <span className="mr-2 text-gray-500">•</span>
            What is The Best Free Open Source Library Management Software
          </li>
          <li className="flex items-start transition-colors duration-300 hover:text-red-500">
            <span className="mr-2 text-gray-500">•</span>
            How to Choose the Best Free Library Management Software
          </li>
        </ul>
      </div>

      {/* Image */}
      <div className="w-full max-w-[800px] flex justify-center">
        <img
          src="/assets/about-2.png"
          alt="Library Management Software"
          className="rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Extra;
