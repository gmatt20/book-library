"use client";
import {useEffect, useState} from "react";
import DropdownMenuComponent from "./dropdownmenucomponent";
import {deleteBook} from "@/lib/deleteBook";
import EditModal from "./editmodal";
import LoadingBook from "./loadingBook";
import {getAllBooks} from "@/lib/getAllBooks";

const Book = () => {
    const [books, setBooks] = useState([]);
    const [editBook, setEditBook] = useState<{
        id: number;
        title: string;
        author: string;
    } | null>(null);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            const library = await getAllBooks();
            setBooks(library || []);
            setLoading(false);
        };
        fetchBooks();
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
            setEditBook({id: bookId, title: bookTitle, author: bookAuthor});
        }
    };

    return (
        <>
            {books.map((book) => (
                <div
                    key={book.id}
                    className=" rounded overflow-hidden p-1
          border-2 border-transparent hover:border-2 hover:border-primary-a0 transition duration-400 ease-in-out">
          <span className="flex justify-end ">
            <DropdownMenuComponent
                bookId={book.id}
                bookTitle={book.title}
                bookAuthor={book.author}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
          </span>
                    <div className="flex flex-col items-center text-center">
                        <div className="h-60 w-40 bg-surface-a20 col-span-1 mb-2 rounded-md"></div>
                        <p className="mb-2 font-bold text-sm md:text-xl">{book.title}</p>
                        <p className="text-xs">{book.author}</p>
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
                    <LoadingBook/>
                    <LoadingBook/>
                </>
            )}
        </>
    );
};

export default Book;
