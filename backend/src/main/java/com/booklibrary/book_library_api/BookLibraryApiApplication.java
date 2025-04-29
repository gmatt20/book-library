package com.booklibrary.book_library_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class})
@RestController
public class BookLibraryApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookLibraryApiApplication.class, args);
	}

	@GetMapping("/")
	public String index(){
		return "Hello world from Spring boot!";
	}

}
