import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookcard from '../components/Bookcard';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Allbooks = () => {
    const bookss = useLoaderData();
    const [books, setBooks] = useState([]);
    const [showAvailable, setShowAvailable] = useState(false);
    const [sortOrder, setSortOrder] = useState("default"); // "asc" | "desc" | "default"

    useEffect(() => {
        const url = showAvailable
            ? "https://book-server-seven-iota.vercel.app/books?available=true"
            : "https://book-server-seven-iota.vercel.app/books";

        const fetchBooks = async () => {
            try {
                const response = await axios.get(url);
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, [showAvailable]);

    // Sorting function
    const sortedBooks = [...books].sort((a, b) => {
        if (sortOrder === "asc") return a.rating - b.rating;
        if (sortOrder === "desc") return b.rating - a.rating;
        return 0; // Default order (no sorting)
    });

    return (
        <>
            

            {/* Sorting Buttons */}
            <div className="flex gap-4 mr-5 top-5 relative lg:ml-20 ml-10 mb-4">
                <button
                    onClick={() => setSortOrder("asc")}
                    className={`px-5 py-2 text-white font-medium rounded-lg shadow-md transition-all ${
                        sortOrder === "asc" ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                >
                    Sort by Rating (Low to High)
                </button>
                <button
                    onClick={() => setSortOrder("desc")}
                    className={`px-5 py-2 text-white font-medium rounded-lg shadow-md transition-all ${
                        sortOrder === "desc" ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                >
                    Sort by Rating (High to Low)
                </button>
                <button
                    onClick={() => setSortOrder("default")}
                    className={`px-5 py-2 text-white font-medium rounded-lg shadow-md transition-all ${
                        sortOrder === "default" ? 'bg-red-700 hover:bg-red-800' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                >
                    Default Order
                </button>
            </div>

            {/* Book Grid */}
            <div className="grid relative mb-20 top-2 w-11/12 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                <Helmet>
                    <title>All Books</title>
                </Helmet>
                {sortedBooks.map(book => (
                    <Bookcard key={book.id} book={book} />
                ))}
            </div>
        </>
    );
};

export default Allbooks;
