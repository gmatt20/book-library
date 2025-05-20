package com.booklibrary.book_library_api.controllers;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.booklibrary.book_library_api.model.AuthRequest;
import com.booklibrary.book_library_api.model.UserInfo;
import com.booklibrary.book_library_api.service.JwtService;
import com.booklibrary.book_library_api.service.UserInfoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserController {

  private final UserInfoService service;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  @GetMapping("/welcome")
  public String welcome() {
    return "Welcome to the Book Library API!";
  }

  @PostMapping("/addNewUser")
  public String addNewUser(@RequestBody UserInfo userInfo) {
    return service.addUser(userInfo);
  }

  @PostMapping("/generateToken")
  public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
    );

    if (authentication.isAuthenticated()) {
      return jwtService.generateToken(authRequest.getUsername());
    } else {
      throw new RuntimeException("Invalid Credentials");
    }
  }

  @GetMapping("/user")
  public String getUserInfo(){
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String username = authentication.getName();
    return "Welcome " + username + "! You are authenticated.";
  }
}