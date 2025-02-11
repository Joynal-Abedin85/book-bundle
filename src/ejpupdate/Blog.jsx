import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Latest Blog Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Blog Post 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdxfvJG4ayeYDM6vwUed7wAV8nNQ6DSFR8A&s"
              alt="Blog Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Top 5 Books for Frontend Developers
              </h3>
              <p className="text-gray-600 mt-2">
                Discover essential books to level up your frontend development skills.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uNPjelJJGE3wz-bXil8bdQuEftRFfkcTxw&s"
              alt="Blog Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                How to Build a Book Management App
              </h3>
              <p className="text-gray-600 mt-2">
                A step-by-step guide to developing a full-featured book management app.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLRKowjTL6YkKXVQojfWmUscEkpw-UNXH8w&s"
              alt="Blog Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Understanding Book Metadata
              </h3>
              <p className="text-gray-600 mt-2">
                Learn why metadata is crucial in book management systems and how to handle it.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdxfvJG4ayeYDM6vwUed7wAV8nNQ6DSFR8A&s"
              alt="Blog Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Top 5 Books for Frontend Developers
              </h3>
              <p className="text-gray-600 mt-2">
                Discover essential books to level up your frontend development skills.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uNPjelJJGE3wz-bXil8bdQuEftRFfkcTxw&s"
              alt="Blog Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                How to Build a Book Management App
              </h3>
              <p className="text-gray-600 mt-2">
                A step-by-step guide to developing a full-featured book management app.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLRKowjTL6YkKXVQojfWmUscEkpw-UNXH8w&s"
              alt="Blog Cover"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Understanding Book Metadata
              </h3>
              <p className="text-gray-600 mt-2">
                Learn why metadata is crucial in book management systems and how to handle it.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Read More →  
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Blog;