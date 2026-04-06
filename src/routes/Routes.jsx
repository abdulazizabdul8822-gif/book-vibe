import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage/BooksPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/books",
        element: <BooksPage/>
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: async () => {
        const res = await fetch("/booksData.json");
        return res.json(); 
    },
      }
    ],

    errorElement: <ErrorPage/>
  },
]);