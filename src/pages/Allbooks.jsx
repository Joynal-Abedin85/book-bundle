import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookcard from '../components/Bookcard';
import { Helmet } from 'react-helmet';

const Allbooks = () => {

    const books = useLoaderData()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <Helmet>
            <title>All book</title>
          </Helmet>
            {books.map(book => <Bookcard book={book}></Bookcard>)}
        </div>
    );
};

export default Allbooks;