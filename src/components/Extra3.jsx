import React from 'react';

const Extra3 = () => {
  const book = {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A proven framework for improving every day. Learn how small habits lead to big changes.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  };

  return (
    <section className="max-w-11/12 md:max-w-5xl mx-auto bg-gradient-to-r from-indigo-100 to-purple-200 p-6 md:p-10 rounded-2xl shadow-xl mt-10 transition duration-300 ease-in-out hover:scale-[1.01]">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 text-center">
        📖 Featured Book of the Week
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={book.image}
          alt={book.title}
          className="w-40 h-56 object-cover rounded-xl shadow-md hover:shadow-xl transition"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-purple-700">{book.title}</h3>
          <p className="text-lg text-gray-700 mt-2 italic">by {book.author}</p>
          <p className="text-gray-600 mt-4">{book.description}</p>
          <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Extra3;
