"use client";
import { useState, useEffect } from "react";
import { Ellipsis } from "lucide-react";

const Book = () => {
  const [isPopup, setPopup] = useState(false);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    async function getAllBooks() {
      try {
        const response = await fetch("http://localhost:8080/library/book/all", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch all books.");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllBooks();
  }, []);

  const handlePopup = (book: any) => {
    if (isPopup) {
      setSelectedBook(null);
      setPopup(false);
    } else {
      setSelectedBook(book);
      setPopup(true);
    }
  };

  return (
    <>
      {books.map((book, index) => (
        <div
          key={index}
          className="bg-surface-a10 w-[80%] min-h-[100%] max-w-[80%] min-w-[50%] rounded overflow-hidden p-3 h-fit">
          <span
            onClick={() => handlePopup(book)}
            className="flex justify-end mb-2 cursor-pointer">
            <Ellipsis />
          </span>
          <div className="flex flex-col items-center text-center">
            <div className="h-60 w-40 bg-surface-a20 col-span-1 mb-2"></div>
            <p className="mb-2 font-bold">{book.title}</p>
            <p className="text-sm">{book.author}</p>
          </div>
        </div>
      ))}
      {isPopup && (

        <div className="fixed inset-0 bg-surface-a0 rounded overflow-hidden p-3 z-50">
          <span
            onClick={handlePopup}
            className="flex justify-end mb-2 cursor-pointer">
            <Ellipsis />
          </span>
          <div className="flex flex-col items-center text-center">
            <div className="h-60 w-40 bg-surface-a20 col-span-1 mb-2"></div>
            <p className="mb-2 font-bold">{selectedBook.title}</p>
            <p className="text-sm">{selectedBook.author}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
