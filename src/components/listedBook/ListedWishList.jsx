import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCart from '../Ui/BookCart';

const ListedWishList = () => {
    const { wishList } = useContext(BookContext);

    if (wishList.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
                <img 
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4da.svg" 
                    alt="empty" 
                    className="w-24 h-24 opacity-40" 
                />
                <h2 className="text-xl font-semibold text-gray-400">Wishlist is empty!</h2>
            <p className="text-gray-400 text-sm">You haven't added any books to your wishlist yet.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wishList.map((book, index) => (
                    <BookCart key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedWishList;