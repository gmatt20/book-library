package com.booklibrary.book_library_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Must add validation to restful controller and Entity class

// Must also add URL as something to modify to database

@RestController
@RequestMapping(path="/library")
public class LibraryRestController {
    @Autowired

    private BookRepository bookRepository;

    @PostMapping("/book/add")
    public @ResponseBody String addNewBook(@RequestBody Book newBook){
        bookRepository.save(newBook);
        return "Saved!";
    }

    @GetMapping("/book/all")
    public @ResponseBody Iterable<Book> getAllBooks(){
        return bookRepository.findAll();
    }

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

    // Put Mapping
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

    // Patch Mapping
}
