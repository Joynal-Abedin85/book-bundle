// import React from 'react';

// const Blog = () => {
//     return (
//         <div>
//             <section className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
//           Latest Blog Posts
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
//           {/* Blog Post 1 */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdxfvJG4ayeYDM6vwUed7wAV8nNQ6DSFR8A&s"
//               alt="Blog Cover"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Top 5 Books for Frontend Developers
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Discover essential books to level up your frontend development skills.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>

//           {/* Blog Post 2 */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uNPjelJJGE3wz-bXil8bdQuEftRFfkcTxw&s"
//               alt="Blog Cover"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 How to Build a Book Management App
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 A step-by-step guide to developing a full-featured book management app.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>

//           {/* Blog Post 3 */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLRKowjTL6YkKXVQojfWmUscEkpw-UNXH8w&s"
//               alt="Blog Cover"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Understanding Book Metadata
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Learn why metadata is crucial in book management systems and how to handle it.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>

//           {/* Blog Post 1 */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdxfvJG4ayeYDM6vwUed7wAV8nNQ6DSFR8A&s"
//               alt="Blog Cover"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Top 5 Books for Frontend Developers
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Discover essential books to level up your frontend development skills.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>

//           {/* Blog Post 2 */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uNPjelJJGE3wz-bXil8bdQuEftRFfkcTxw&s"
//               alt="Blog Cover"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 How to Build a Book Management App
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 A step-by-step guide to developing a full-featured book management app.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>

//           {/* Blog Post 3 */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLRKowjTL6YkKXVQojfWmUscEkpw-UNXH8w&s"
//               alt="Blog Cover"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Understanding Book Metadata
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Learn why metadata is crucial in book management systems and how to handle it.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
//               >
//                 Read More →  
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//         </div>
//     );
// };

// export default Blog;
import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Books for Frontend Developers",
    description: "Discover essential books to level up your frontend development skills.",
    details: "These books provide deep insights into frontend technologies such as React, Angular, and UI/UX best practices. From beginner to expert, these resources are a must-read for developers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdxfvJG4ayeYDM6vwUed7wAV8nNQ6DSFR8A&s"
  },
  {
    id: 2,
    title: "How to Build a Book Management App",
    description: "A step-by-step guide to developing a full-featured book management app.",
    details: "This guide covers database design, frontend integration, and API development to create a complete book management system using modern technologies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uNPjelJJGE3wz-bXil8bdQuEftRFfkcTxw&s"
  },
  {
    id: 3,
    title: "Understanding Book Metadata",
    description: "Learn why metadata is crucial in book management systems and how to handle it.",
    details: "Book metadata helps categorize and search books efficiently. This article explores ISBN, categories, tags, and how metadata is managed in digital libraries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLRKowjTL6YkKXVQojfWmUscEkpw-UNXH8w&s"
  },
  {
    id: 4,
    title: "Top 5 Books for Frontend Developers",
    description: "Discover essential books to level up your frontend development skills.",
    details: "These books provide deep insights into frontend technologies such as React, Angular, and UI/UX best practices. From beginner to expert, these resources are a must-read for developers.",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 5,
    title: "How to Build a Book Management App",
    description: "A step-by-step guide to developing a full-featured book management app.",
    details: "This guide covers database design, frontend integration, and API development to create a complete book management system using modern technologies.",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 6,
    title: "Understanding Book Metadata",
    description: "Learn why metadata is crucial in book management systems and how to handle it.",
    details: "Book metadata helps categorize and search books efficiently. This article explores ISBN, categories, tags, and how metadata is managed in digital libraries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JQOBT5vKIgWYmothSx1cnJEGoJuT6IDzzA&s"
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
            Latest Blog Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mt-2">{post.description}</p>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-11/12 md:w-1/3 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">{selectedPost.title}</h2>
            <p className="text-gray-700">{selectedPost.details}</p>

            <div className="mt-4 text-right">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
