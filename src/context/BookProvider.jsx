import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBook, setStoredBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExistBook = storedBook.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error("The book is already in read list");
            return; 
        }
        setStoredBook([...storedBook, currentBook]);
        toast.success(`${currentBook.bookName} is added to list`);
    };

    const handleWishList = (currentBook) => {
  
        const isExistInReadList = storedBook.find((book) => book.bookId === currentBook.bookId);
        if (isExistInReadList) {
            toast.error("This book is already in read list");
            return;
        }

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error("The book is already in wishlist");
            return;
        }
        setWishList([...wishList, currentBook]);
        toast.success(`${currentBook.bookName} is added to wishlist`);
    };

    const data = {
        storedBook,
        setStoredBook,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;