"use client";
import { useState, useEffect } from "react";
import DropdownMenuComponent from "./dropdownmenucomponent";
import { deleteBook } from "@/lib/deleteBook";
import EditModal from "./editmodal";
import LoadingBook from "./loadingBook";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState<{
    id: number;
    title: string;
    author: string;
  } | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
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
    if (editBook) {
      setEditBook(null);
    } else {
      setEditBook({ id: bookId, title: bookTitle, author: bookAuthor });
    }
  };

  return (
    <>
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-surface-a10 w-72 min-h-[100%] max-w-[80%] min-w-[50%] rounded overflow-hidden p-3 h-fit 
          border-2 border-transparent hover:border-2 hover:border-primary-a0 transition duration-400 ease-in-out">
          <span className="flex justify-end mb-2">
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
      {editBook && (
        <EditModal
          bookId={editBook.id}
          bookTitle={editBook.title}
          bookAuthor={editBook.author}
          onClose={() => setEditBook(null)}
        />
      )}
      {isLoading && (
        <>
          <LoadingBook />
          <LoadingBook />
        </>
      )}
    </>
  );
};

export default Book;
