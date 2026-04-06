// ListedReadList.jsx
import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCart from '../Ui/BookCart';

const ListedReadList = () => {
    const { storedBook } = useContext(BookContext);

    if (storedBook.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
                <img 
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4da.svg" 
                    alt="empty" 
                    className="w-24 h-24 opacity-40" 
                />
                <h2 className="text-xl font-semibold text-gray-400">Read list is empty!</h2>
                <p className="text-gray-400 text-sm">You haven't marked any books as read yet.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {storedBook.map((book, index) => (
                    <BookCart key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedReadList;