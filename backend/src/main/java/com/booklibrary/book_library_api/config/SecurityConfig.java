package com.booklibrary.book_library_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.booklibrary.book_library_api.filter.JwtAuthFilter;

// Configures Spring Security for the application
// It sets up authentication, authorization, and JWT token handling
// It also defines the security filter chain and authentication provider
// Why: To secure the application and protect sensitive endpoints

// @Configuration: Indicates that this class contains Spring configuration
@Configuration
// @EnableWebSecurity: Enables Spring Security's web security support
@EnableWebSecurity
public class SecurityConfig {

  // Dependencies

  // PasswordEncoder: Used to encode passwords
  // Used for hashing passwords before storing them
  private final PasswordEncoder passwordEncoder;
  // JwtAuthFilter: Custom filter for JWT authentication
  // Used for validating JWT tokens in requests
  private final JwtAuthFilter jwtAuthFilter;
  // UserDetailsService: Loads user-specific data
  // Used for authentication and authorization
  private final UserDetailsService userDetailsService;
  
  // Constructor
  public SecurityConfig(JwtAuthFilter jwtAuthFilter, UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
    this.jwtAuthFilter = jwtAuthFilter;
    this.userDetailsService = userDetailsService;
    this.passwordEncoder = passwordEncoder;
  }

  @Bean
  // Establishes security filter chain
  // Authorizes HTTP requests by authenticating and passing through filters
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
    http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth.requestMatchers("/auth/welcome", "/auth/addNewUser","/auth/generateToken").permitAll()
            .requestMatchers("/auth/**").authenticated()
            .anyRequest().authenticated())
            .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
    
    return http.build();
  }

  @Bean
  public AuthenticationProvider authenticationProvider(){
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService(userDetailsService);
    provider.setPasswordEncoder(passwordEncoder);

    return provider;
  }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
    return config.getAuthenticationManager();
  }
}
