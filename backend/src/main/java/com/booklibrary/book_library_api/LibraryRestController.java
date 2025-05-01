package com.booklibrary.book_library_api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibraryRestController {
    @GetMapping("/add")
    public String index(){
        return "You have reached the add route!";
    }
}
