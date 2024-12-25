import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detailsbook = () => {
    const book = useLoaderData()
    const {coverimg,name,authorName,category,rating,_id,shortDescription,quantity} = book

    return (
        <div className="w-11/12 md:w-9/12 lg:w-3/4 mx-auto my-5 border rounded-lg shadow-lg overflow-hidden">
        <div className="flex p-5">
            <div className="flex-shrink-0 w-36 h-48">
                <img src={coverimg} alt={name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="ml-5 flex-1">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-600">by {authorName}</p>
                <p className="text-sm text-gray-500">Category: {category}</p>
                <p className="text-sm text-yellow-500">Rating: {rating} / 5</p>
                <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                <p className="mt-3 text-gray-700">{shortDescription}</p>
            </div>
        </div>
    </div>
    );
};

export default Detailsbook;