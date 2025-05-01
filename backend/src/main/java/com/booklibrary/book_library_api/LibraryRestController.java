package com.booklibrary.book_library_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/library")
public class LibraryRestController {
    @Autowired

    private BookRepository bookRepository;

    @PostMapping("/add")
    public @ResponseBody String addNewBook(@RequestBody Book newBook){
        bookRepository.save(newBook);
        return "Saved!";
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @DeleteMapping("/book/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Integer id){
        if(bookRepository.existsById(id)){
            bookRepository.deleteById(id);
            return ResponseEntity.ok("Successfull deleted from database!");
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found.");
        }
    }
}
