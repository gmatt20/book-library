"use client";
import { useState, useEffect } from "react";
import DropdownMenuComponent from "./dropdownmenucomponent";
import { deleteBook } from "@/lib/deleteBook";

const Book = () => {
  const [books, setBooks] = useState([]);

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

  const handleDelete = async (bookId: number) => {
    await deleteBook(bookId);
    setBooks((prev) => prev.filter((book) => book.id !== bookId));
  };

  const handleEdit = (
    bookId: number,
    bookTitle: string,
    bookAuthor: string
  ) => {
    return (
      <>
        <div className="fixed inset-0 bg-surface-a10 w-72 min-h-[100%] max-w-[80%] min-w-[50%] rounded overflow-hidden p-3 h-fit">
          <div className="flex flex-col items-center text-center">
            <div className="h-60 w-40 bg-surface-a20 col-span-1 mb-2"></div>
            <p className="mb-2 font-bold">{bookTitle}</p>
            <p className="text-sm">{bookAuthor}</p>
            <p className="text-sm">{bookId}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-surface-a10 w-72 min-h-[100%] max-w-[80%] min-w-[50%] rounded overflow-hidden p-3 h-fit">
          <span className="flex justify-end mb-2 cursor-pointer">
            <DropdownMenuComponent
              bookId={book.id}
              bookTitle={book.title}
              bookAuthor={book.author}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </span>
          <div className="flex flex-col items-center text-center">
            <div className="h-60 w-40 bg-surface-a20 col-span-1 mb-2"></div>
            <p className="mb-2 font-bold">{book.title}</p>
            <p className="text-sm">{book.author}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Book;
