import React from 'react';
import { FaStar } from 'react-icons/fa';

const Extra2 = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">User Ratings & Reviews</h2>
      <div className="space-y-8">
        {/* Rating 1 */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Thriller Masterpiece</h3>
              <p className="text-gray-500 text-sm">By John Doe</p>
              <p className="text-gray-600 mt-2 text-sm">
                "An absolute page-turner! Couldn't put the book down. The plot twists kept me on the edge of my seat."
              </p>
              <p className="text-gray-400 text-xs mt-1">Reviewed on: March 12, 2023</p>
            </div>
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
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Adventure Tales</h3>
              <p className="text-gray-500 text-sm">By Jane Doe</p>
              <p className="text-gray-600 mt-2 text-sm">
                "A captivating adventure that had me hooked from start to finish. Perfect for fans of the genre."
              </p>
              <p className="text-gray-400 text-xs mt-1">Reviewed on: April 5, 2023</p>
            </div>
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
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Science Wonders</h3>
              <p className="text-gray-500 text-sm">By Albert Smith</p>
              <p className="text-gray-600 mt-2 text-sm">
                "A bit dry at times, but full of fascinating facts. Great for anyone with an interest in science."
              </p>
              <p className="text-gray-400 text-xs mt-1">Reviewed on: February 20, 2023</p>
            </div>
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
