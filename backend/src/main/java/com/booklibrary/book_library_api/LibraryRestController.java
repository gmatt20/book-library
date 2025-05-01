package com.booklibrary.book_library_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LibraryRestController {
    @Autowired

    private BookRepository bookRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewBook(@RequestParam String title, @RequestParam String author){
        Book newBook = new Book();
        newBook.setTitle(title);
        newBook.setAuthor(author);
        bookRepository.save(newBook);
        return "Saved!";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Book> getAllBooks(){
        return bookRepository.findAll();
    }
}
