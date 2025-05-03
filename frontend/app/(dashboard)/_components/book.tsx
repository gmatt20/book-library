"use client";
import { useState, useEffect } from "react";

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
          onClick={() => handlePopup(book)}
          className="bg-surface-a10 max-w-[80%] min-w-[100%] h-96 p-5 flex flex-col items-center justify-center gap-2 rounded-xl cursor-pointer">
          <div className="h-60 w-40 bg-surface-a20"></div>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}
      {isPopup && (
        <div
          onClick={handlePopup}
          className="fixed bg-surface-a0 inset-0 flex items-center justify-center z-50">
          <div>
            <div className="bg-surface-a10 w-fit p-5 flex flex-col items-center justify-center gap-2 m-5 rounded-xl cursor-pointer">
              <div className="h-60 w-40 bg-surface-a20"></div>
              <p>{selectedBook.title}</p>
              <p>{selectedBook.author}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
