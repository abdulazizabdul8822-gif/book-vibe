import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCart = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
            <figure className=' p-6'>
                <img className=' rounded-xl h-[250px] w-[200px]'
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className=' flex items-center gap-3 '>
                    {book.tags.map((tag, index) => (
                        <div key={index} className="badge text-green-500 bg-green-50 ">{tag}</div>))}
                </div>


                <h2 className=' card-title font-bold text-2xl'>{book.bookName}</h2>
                <p className=' font-semibold text-lg'>{book.author}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300">
                    <div className=" font-semibold">{book.category}</div>
                    <div className=" flex gap-2 items-center font-bold text-xl">{book.rating}<FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCart;