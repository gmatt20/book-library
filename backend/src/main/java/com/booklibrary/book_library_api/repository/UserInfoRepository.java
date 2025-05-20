package com.booklibrary.book_library_api.repository;

import com.booklibrary.book_library_api.model.UserInfo;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long>{
  Optional<UserInfo> findByUsername(String username);
}
