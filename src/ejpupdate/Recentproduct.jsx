import React from 'react';

const Recentproduct = () => {
    return (
        <div>
            <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Book Card 1 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://img.freepik.com/free-vector/flat-world-book-day-vertical-poster-template_23-2149312149.jpg"
              alt="Book Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">The Pragmatic Programmer</h3>
              <p className="text-sm text-gray-500 mt-1">Andy Hunt & Dave Thomas</p>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIhLyLjw-G6y7wJfsFX8BccSut_cQgiu5RtY0JrEzSHQP-3SLxAdCu7zSn1GnFJlgTJs&usqp=CAU"
              alt="Book Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">Clean Code</h3>
              <p className="text-sm text-gray-500 mt-1">Robert C. Martin</p>
            </div>
          </div>

          {/* Book Card 3 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwhswISOdziRcsBNVdjDWNSZNin9hon1U3A&s"
              alt="Book Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">You Don’t Know JS</h3>
              <p className="text-sm text-gray-500 mt-1">Kyle Simpson</p>
            </div>
          </div>

          {/* Book Card 4 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOg96wX4NXb48NEaEn6ef37d-dpE-BHFGyA&s"
              alt="Book Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">Eloquent JavaScript</h3>
              <p className="text-sm text-gray-500 mt-1">Marijn Haverbeke</p>
            </div>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Recentproduct;