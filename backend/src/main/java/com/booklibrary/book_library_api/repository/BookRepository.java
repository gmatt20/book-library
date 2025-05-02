package com.booklibrary.book_library_api.repository;

import com.booklibrary.book_library_api.model.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface BookRepository extends CrudRepository<Book, Integer>{
    List<Book> findByTitleContainingIgnoreCase(String keyword);
    List<Book> findByAuthorContainingIgnoreCase(String keyword);
}
