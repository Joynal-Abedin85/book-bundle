import React from 'react';

const Extra = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-[1800px] mx-auto'>
            <div className=" mx-auto w-full bg-gray-50   p-6 shadow-md">
      <div className="relative">
        <span className="absolute -top-4 -left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
          10 Best
        </span>
      </div>
      <h2 className="mt-6 text-lg font-bold text-gray-800">
        Library Management Software 
      </h2>
      <ul className="mt-4 space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2 text-gray-500">•</span>
          Why Librarians Should Use Free Open Source Digital Library Software
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-gray-500">•</span>
          What is The Best Free Open Source Library Management Software
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-gray-500">•</span>
          How to Choose the Best Free Library Management Software
        </li>
      </ul>
    </div>
    <div className="max-w-[800px]">
        <img src="/assets/about-2.png" alt="" />
    </div>
        </div>
    );
};

export default Extra;