package com.webapp.FitGuysWeb.service;


import com.webapp.FitGuysWeb.model.user;
import com.webapp.FitGuysWeb.repo.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userService {
    @Autowired
    private userRepository userRepo;

    public List<user> getUser() {
        return userRepo.findAll();
    }
}
