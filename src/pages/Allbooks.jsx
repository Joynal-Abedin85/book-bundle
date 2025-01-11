import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookcard from '../components/Bookcard';
import { Helmet } from 'react-helmet';
import axios from 'axios';


const Allbooks = () => {

    const bookss = useLoaderData()
    const [books, setBooks] = useState([]);

    const [showAvailable, setShowAvailable] = useState(false);

  

    useEffect(() => {
        // Construct URL based on filter state
        const url = showAvailable
          ? "https://book-server-seven-iota.vercel.app/books?available=true" // Fetch only available books
          : "https://book-server-seven-iota.vercel.app/books"; // Fetch all books
      
        const fetchBooks = async () => {
          try {
            const response = await axios.get(url);
            setBooks(response.data);
            console.log(response.data)
          } catch (error) {
            console.error("Error fetching books:", error);
          }
        };
      
        fetchBooks();
      }, [showAvailable]);
    return (
        <>
        <button
                    onClick={() => setShowAvailable(!showAvailable)} // Toggle filter
                    className={`px-5 ml-5 py-2 top-5 relative text-white font-medium rounded-lg shadow-md transition-all ${
                        showAvailable
                            ? 'bg-purple-700 hover:bg-purple-800'
                            : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                >
                    {showAvailable ? 'Show All Books' : 'Show Available Books'}
                </button>
        <div className="grid relative mb-20 top-2 w-11/12 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            
            <Helmet>
            <title>All book</title>
          </Helmet>
            {books.map(book => <Bookcard book={book}></Bookcard>)}
        </div>
        </>
    );
};

export default Allbooks;