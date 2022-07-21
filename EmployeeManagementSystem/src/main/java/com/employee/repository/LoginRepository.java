package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.model.User;

public interface LoginRepository extends JpaRepository<User,Integer>{

}
