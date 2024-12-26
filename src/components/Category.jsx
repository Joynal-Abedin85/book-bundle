import React, { useEffect, useState } from 'react';
import { data, NavLink } from 'react-router-dom';

const Category = () => {

    const [cate, setcate] = useState([])



    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res =>res.json())
        .then(data => setcate(data))
    }
    ,[])
    return (
        <div className='mt-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cate.map((category) => (
        <NavLink to={`/books/${category.category}`}>
        <div  className="max-w-sm mx-auto bg-gradient-to-br from-purple-600 to-violet-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Image Section */}
      <div className="h-48">
        <img
          src={category.img}
          alt={category.category}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-3 text-purple-200">{category.category}</h3>
        <p className="text-sm text-gray-300">{category.description}</p>
      </div>

      {/* Footer Section */}
      <div className="p-4 bg-purple-700 text-center border-t border-purple-500">
        <button className="px-4 py-2 bg-purple-300 text-black font-semibold rounded-lg hover:bg-purple-100 shadow-md">
          Learn More
        </button>
      </div>
    </div>
        </NavLink>
      ))}
    </div>
        </div>
    );
};

export default Category;