import React from 'react';

const Bookcard = ({book}) => {

    const {coverimg,name,authorName,category,rating} = book
    return (
        <div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={book.coverimg}
        alt={book.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{book.name}</h2>
        <p className="text-sm text-gray-600">by {book.authorName}</p>
        <p className="text-sm text-gray-500 mt-2">
          <strong>Category:</strong> {book.category}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <strong>Rating:</strong>{" "}
          <span className="text-yellow-500 font-bold">{book.rating}</span>/5
        </p>
        <button className='px-6 mt-4 py-2 text-white font-semibold rounded-md bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-md transition duration-200'>
            Update
        </button>
      </div>
    </div>
        </div>
    );
};

export default Bookcard;