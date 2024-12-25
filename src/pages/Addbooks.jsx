import React from 'react';
import swal from 'sweetalert';

const Addbooks = () => {
    const handleaddbook = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.entries())
        const initialdata = Object.fromEntries(formData.entries())
        console.log(initialdata)
        const { ...newbook} = initialdata;
        console.log(newbook)
        // newJob.salaryRange = {min, max, currency}
        // console.log(newJob)
        // newJob.requirements = newJob.requirements.split('\n');
        // newJob.responsibilities = newJob.responsibilities.split('\n');
        // console.log(newJob)

        fetch('http://localhost:5000/books',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newbook)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                // Swal.fire({
                //     position: "top-end",
                //     icon: "success",
                //     title: "Your work has been saved",
                //     showConfirmButton: false,
                //     timer: 1500
                //   });
                swal("Success!", "Your book has been added!", "success");
            }
            console.log(data)
        })



        
    }
    return (
        <form
      onSubmit={handleaddbook}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Add a Book</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Book Cover</label>
        <input
          type="URL"
          name="coverimg"
        //   onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          name="name"
        //   value={formData.name}
        //   onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Quantity</label>
        <input
          type="number"
          name="quantity"
        //   value={formData.quantity}
        //   onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Author Name</label>
        <input
          type="text"
          name="authorName"
        //   value={formData.authorName}
        //   onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
        //   value={formData.category}
        //   onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          required
        >
          <option value="">Select Category</option>
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Short Description</label>
        <textarea
          name="shortDescription"
        //   value={formData.shortDescription}
        //   onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          rows="3"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
        <input
          type="number"
          name="rating"
        //   value={formData.rating}
        //   onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
          min="1"
          max="5"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Add Book
      </button>
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Note:</strong> Book content is stored in our secure database. Ensure the details are correct before submission.</p>
      </div>
    </form>
    );
};

export default Addbooks;