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
        <div
          key={category._id}
          className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{category.category}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </div>
        </NavLink>
      ))}
    </div>
        </div>
    );
};

export default Category;