package com.booklibrary.book_library_api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.booklibrary.book_library_api.model.UserInfo;
import com.booklibrary.book_library_api.repository.UserInfoRepository;

@Service
public class UserInfoService implements UserDetailsService{
  @Autowired
  private UserInfoRepository userInfoRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
    Optional<UserInfo> userDetail = userInfoRepository.findByEmail(username);

    return userDetail.map(UserInfoDetails::new).orElseThrow(() -> new UsernameNotFoundException("User Not Found: " + username));
  }

  public String addUser(UserInfo userInfo) {
    userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
    userInfoRepository.save(userInfo);
    return "User added successfully";
  }
}
