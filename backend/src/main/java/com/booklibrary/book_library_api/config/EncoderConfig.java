package com.booklibrary.book_library_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class EncoderConfig {
  @Bean
  // Encodes passwords using bcrypt
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
