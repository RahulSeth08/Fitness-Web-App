package com.webapp.GottaFitGuys.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity

public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    private String username;
    private String password;
    private Integer bodyweight;
    private Integer height;
    private String fitnessGoal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getBodyweight() {
        return bodyweight;
    }

    public void setBodyweight(Integer bodyweight) {
        this.bodyweight = bodyweight;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getFitnessGoal() {
        return fitnessGoal;
    }

    public void setFitnessGoal(String fitnessGoal) {
        this.fitnessGoal = fitnessGoal;
    }



}
