import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../components/Authprovider';

const Borowedbooks = () => {
    const {user} = useContext(Authcontext)
    const [books,setbooks] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/borrowed?email=${user.email}`)
        .then(res => res.json())
        .then(data => setbooks(data))
    },[user.email])
    return (
        <div>
            {
                books.map(book => <div className="w-11/12 my-4 max-w-md mx-auto bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 text-white rounded-xl shadow-lg shadow-purple-700 p-5">
                    <div className="flex items-center">
                      <img
                        src={book.coverimg}
                        alt={book.name}
                        className="w-24 h-32 object-cover rounded-md shadow-md"
                      />
                      <div className="ml-4 flex-1">
                        <h2 className="text-xl font-bold">{book.name}</h2>
                        <p className="text-sm italic opacity-80">Category: {book.category}</p>
                        <p className="mt-2 text-sm">Borrowed by: <span className="font-medium">{book.clientname}</span></p>
                        <p className="text-sm">Return Date: <span className="font-medium">{book.returndate}</span></p>
                      </div>
                    </div>
                    <div className="mt-5 flex justify-end">
                      <button
                       
                        className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-all shadow-md"
                      >
                        Return
                      </button>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default Borowedbooks;