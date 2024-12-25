import React, { useContext, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { Authcontext } from '../components/Authprovider';

const Detailsbook = () => {
    const {id} = useParams()
    const book = useLoaderData()
    const {user} = useContext(Authcontext)
    const {coverimg,name,authorName,category,rating,_id,shortDescription,quantity} = book


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [returnDate, setReturnDate] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const form = e.target; // Get the form element
        const returndate = form.returndate.value; // Access the return date field
        console.log(returndate); // Log return date for debugging

        const borrowbook = {
            book_id: id,
            clientemail: user.email,
            clientname: user.displayName,
            returndate

        }

        fetch('http://localhost:5000/borowbook',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(borrowbook)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                
                    swal("Success!", "Your book has been added!", "success");
                    // navigate('/allbooks')
                }
            })

       
    };

    const handleBorrowClick = () => {
        if (quantity > 0) setIsModalOpen(true);
    };

    return (
        <div className="w-11/12 md:w-9/12 lg:w-3/4 mx-auto my-5 border rounded-lg shadow-lg overflow-hidden">
        <div className="flex p-5">
            <div className="flex-shrink-0 w-36 h-48">
                <img src={coverimg} alt={name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="ml-5 flex-1">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-300">by {authorName}</p>
                <p className="text-sm text-gray-300">Category: {category}</p>
                <p className="text-sm text-yellow-500">Rating: {rating} / 5</p>
                <p className="text-sm text-gray-200">Quantity: {quantity}</p>
                <p className="mt-3 text-gray-300">{shortDescription}</p>
                <NavLink >
        <button  
            className={`px-6 mt-4 py-2 text-white font-semibold rounded-md   focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-md transition duration-200 ${
                quantity === 0 ? 'bg-gray-400 cursor-not-allowed'
                 : 'bg-purple-500 hover:bg-purple-700'
            }`}
            disabled={quantity === 0}
            onClick={handleBorrowClick}
        >
        Borrow
        </button>
        </NavLink>
            </div>
        </div>
        {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/3">
                    <h2 className="text-xl font-semibold mb-3">Borrow {name}</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="mb-3">
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
                                className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={user?.email}
                                readOnly
                                className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-medium">Return Date</label>
                            <input
                                type="date"
                                name="returndate"
                                // value={returnDate}
                                // onChange={(e) => setReturnDate(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="flex justify-end">
                            <h2
                                type="button"
                                className="px-4 py-2 rounded-lg bg-gray-500  cursor-pointer text-white mr-2"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </h2>
                            <button 
                                type="submit" 
                                className="px-4 py-2 rounded-lg bg-blue-500 text-white"
                                
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            )}
    </div>
    );
};

export default Detailsbook;