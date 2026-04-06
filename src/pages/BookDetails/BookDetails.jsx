
import React, { useContext, } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';

const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    const books = useLoaderData();

   
    const expectedBook = books.find((book) => String(book.bookId) === String(bookParamsId));

  
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    const {handleMarkAsRead, handleWishList} = useContext(BookContext);
    


    return (
        <div style={{ padding: "2rem" }}>
            <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto">

            
                <div className="bg-base-200 rounded-2xl flex items-center justify-center min-h-96">
                    <img src={image} alt={bookName} className="h-100 w-100 object-contain rounded" />
                </div>

         
                <div className="flex flex-col gap-0">
                    <h2 className="text-3xl font-bold mb-1">{bookName}</h2>
                    <p className="text-gray-500 text-sm mb-4">By : {author}</p>
                    <p className="text-gray-400 text-xs mb-4">Book ID: {bookId}</p>

                    <div className="border-y py-3 mb-4">
                        <span className="text-gray-500">{category}</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                        <span className="font-bold text-black">Review : </span>{review}
                    </p>

                    <div className="flex gap-2 mb-4">
                        {tags.map((tag, index) => (
                            <span key={index} className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="border-t pt-4 flex flex-col gap-3 mb-6">
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">Number of Pages:</span>
                            <span className="font-semibold text-sm">{totalPages}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">Publisher:</span>
                            <span className="font-semibold text-sm">{publisher}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">Year of Publishing:</span>
                            <span className="font-semibold text-sm">{yearOfPublishing}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">Rating:</span>
                            <span className="font-semibold text-sm">{rating}</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={()=> handleMarkAsRead(expectedBook)} className="btn btn-outline">Mark as Read</button>
                        <button onClick={() => handleWishList(expectedBook)} className="btn bg-cyan-400 text-white border-none hover:bg-cyan-500">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
