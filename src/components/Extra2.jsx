import React from 'react';
import { FaStar } from 'react-icons/fa';

const Extra2 = () => {
    return (
        <div className="w-full mx-auto bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">User Ratings</h2>
      <div className="space-y-6">
        {/* Rating 1 */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Thriller Masterpiece</h3>
            <p className="text-gray-500 text-sm">By John Doe</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
          </div>
        </div>
        {/* Rating 2 */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Adventure Tales</h3>
            <p className="text-gray-500 text-sm">By Jane Doe</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
        </div>
        {/* Rating 3 */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Science Wonders</h3>
            <p className="text-gray-500 text-sm">By Albert Smith</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Extra2;