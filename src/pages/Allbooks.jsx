import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookcard from '../components/Bookcard';

const Allbooks = () => {

    const books = useLoaderData()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {books.map(book => <Bookcard book={book}></Bookcard>)}
        </div>
    );
};

export default Allbooks;