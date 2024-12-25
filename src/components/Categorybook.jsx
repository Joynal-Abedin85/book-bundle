import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Categorybook = () => {

    const onedata = useLoaderData()

    const {coverimg,name,authorName,category,rating,_id} = onedata
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3 '>
            {onedata.map(data => <div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={data.coverimg}
        alt={data.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
        <p className="text-sm text-gray-600">by {data.authorName}</p>
        <p className="text-sm text-gray-500 mt-2">
          <strong>Category:</strong> {data.category}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <strong>Rating:</strong>{" "}
          <span className="text-yellow-500 font-bold">{data.rating}</span>/5
        </p>
        <NavLink to={`/updatebook/${_id}`}>
        <button className='px-6 mt-4 py-2 text-white font-semibold rounded-md bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-md transition duration-200'>
            Update
        </button>
        </NavLink>
      </div>
    </div>
        </div>)}
        </div>
    );
};

export default Categorybook;