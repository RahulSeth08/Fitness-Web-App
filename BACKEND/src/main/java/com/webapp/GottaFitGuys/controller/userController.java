package com.webapp.GottaFitGuys.controller;

import com.webapp.GottaFitGuys.model.user;
import com.webapp.GottaFitGuys.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Controller
@RequestMapping("/")
public class userController {
    @Autowired
    private userService Service;
    @GetMapping("/home")
    public String getHomePage() {
        return "Hello";
    }
    @GetMapping("/user")
    public List<user> getUser() {
        return Service.getUser();
    }



}
