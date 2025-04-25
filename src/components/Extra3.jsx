import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Extra3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const book = {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A proven framework for improving every day. Learn how small habits lead to big changes.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 4.8,
    category: "Self-Development",
    year: 2018,
    quote: "You do not rise to the level of your goals. You fall to the level of your systems."
  };

  return (
    <>
      <section className="w-full bg-gradient-to-r from-indigo-100 to-purple-200 p-6 md:p-10 rounded-2xl shadow-xl mt-10 transition duration-300 ease-in-out hover:scale-[1.01]">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 text-center">
          📖 Featured Book of the Week
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <img
            src={book.image}
            alt={book.title}
            className="w-40 h-56 object-cover rounded-xl shadow-md hover:shadow-xl transition"
          />
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="px-3 py-1 bg-yellow-400 text-white rounded-full text-sm font-semibold">
                {book.category}
              </span>
              <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                {book.year}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-purple-700">{book.title}</h3>
            <p className="text-lg text-gray-700 mt-2 italic">by {book.author}</p>
            <div className="flex items-center justify-center md:justify-start mt-2 text-yellow-500">
              <Star className="w-5 h-5 fill-yellow-500" />
              <span className="ml-1 font-medium">{book.rating} / 5</span>
            </div>

            <p className="text-gray-600 mt-4">{book.description}</p>

            <blockquote className="mt-4 italic text-sm text-gray-500 border-l-4 border-purple-400 pl-4">
              “{book.quote}”
            </blockquote>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-xl p-6 rounded-xl shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">{book.title}</h3>
            <img src={book.image} alt={book.title} className="w-32 h-44 object-cover rounded-md mb-4 mx-auto" />
            <p className="text-gray-700">{book.description}</p>
            <blockquote className="mt-4 italic text-sm text-gray-500 border-l-4 border-purple-400 pl-4">
              “{book.quote}”
            </blockquote>
          </div>
        </div>
      )}
    </>
  );
};

export default Extra3;
