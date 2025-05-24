package com.booklibrary.book_library_api.controllers;

import com.booklibrary.book_library_api.repository.BookRepository;
import com.booklibrary.book_library_api.repository.UserInfoRepository;
import com.booklibrary.book_library_api.model.Book;
import com.booklibrary.book_library_api.model.UserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.nio.file.AccessDeniedException;
import java.util.List;

// Must add validation to restful controller and Entity class

// Must also add URL as something to modify to database

@RestController
@RequestMapping(path = "/library")
public class LibraryRestController {
    @Autowired

    private BookRepository bookRepository;

    @Autowired
    private UserInfoRepository userInfoRepository;

    // Adds a book to the library database
    @PostMapping("/book/add")
    public String addNewBook(@RequestBody Book newBook) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserInfo user = userInfoRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found with username " + username));
        
        newBook.setUser(user);

        bookRepository.save(newBook);
        return "Saved!";
    }

    // Gets the entire library
    @GetMapping("/book/all")
    public @ResponseBody Iterable<Book> getAllBooks() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserInfo user = userInfoRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found with username " + username));

        return user.getBooks();
    }

    // Gets a single book
    @GetMapping("/book/{id}")
    public Book getABook(@PathVariable Integer id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));

        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        UserInfo currUser = userInfoRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));

        if(!book.getUser().getId().equals(currUser.getId())){
            throw new RuntimeException("NOT ALLOWED");
        }

        return book;
    }

    // Searches for a book based on title
    @GetMapping("/book/search/by-title")
    public List<Book> searchBooksByTitle(@RequestParam String keyword) {
        return bookRepository.findByTitleContainingIgnoreCase(keyword);
    }

    // Searches for a book based on author
    @GetMapping("/book/search/by-author")
    public List<Book> searchBooksByAuthor(@RequestParam String keyword) {
        return bookRepository.findByAuthorContainingIgnoreCase(keyword);
    }

    // Deletes a book by ID
    @DeleteMapping("/book/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Integer id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return ResponseEntity.ok("Successfully deleted from database!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found.");
        }
    }

    // Deletes the entire library
    @DeleteMapping("/book/clear")
    public void clearLibrary() {
        bookRepository.deleteAll();
    }

    // Updates an existing book or creates a new book
    @PutMapping("/book/{id}")
    public Book modifyBook(@RequestBody Book updateBook, @PathVariable Integer id) {
        return bookRepository.findById(id)
                .map(book -> {
                    book.setAuthor(updateBook.getAuthor());
                    book.setTitle(updateBook.getTitle());
                    return bookRepository.save(book);
                })
                .orElseGet(() -> {
                    return bookRepository.save(updateBook);
                });
    }
}
