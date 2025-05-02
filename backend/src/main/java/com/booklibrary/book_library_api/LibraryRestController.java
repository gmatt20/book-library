package com.booklibrary.book_library_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Must add validation to restful controller and Entity class

// Must also add URL as something to modify to database

@RestController
@RequestMapping(path="/library")
public class LibraryRestController {
    @Autowired

    private BookRepository bookRepository;

    // Adds a book to the library database
    @PostMapping("/book/add")
    public @ResponseBody String addNewBook(@RequestBody Book newBook){
        bookRepository.save(newBook);
        return "Saved!";
    }

    // Gets the entire library
    @GetMapping("/book/all")
    public @ResponseBody Iterable<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    // Gets a single book
    @GetMapping("/book/{id}")
    public Book getABook(@PathVariable Integer id){
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id " + id));
    }

    // Searches for a book based on title
    @GetMapping("/book/search")
    public List<Book> searchBooksByTitle(@RequestParam String keyword){
        return bookRepository.findByTitleContainingIgnoreCase(keyword);
    }

    // Deletes a book by ID
    @DeleteMapping("/book/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Integer id){
        if(bookRepository.existsById(id)){
            bookRepository.deleteById(id);
            return ResponseEntity.ok("Successfully deleted from database!");
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found.");
        }
    }

    // Deletes the entire library
    @DeleteMapping("/book/clear")
    public void clearLibrary(){
        bookRepository.deleteAll();
    }

    // Updates an existing book or creates a new boook
    @PutMapping("/book/{id}")
    public Book modifyBook(@RequestBody Book updateBook, @PathVariable Integer id){
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
