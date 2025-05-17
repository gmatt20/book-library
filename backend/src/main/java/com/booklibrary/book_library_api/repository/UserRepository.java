package com.booklibrary.book_library_api.repository;

import com.booklibrary.book_library_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserName(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
