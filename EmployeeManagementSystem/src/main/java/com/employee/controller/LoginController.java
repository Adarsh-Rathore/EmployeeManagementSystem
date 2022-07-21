package com.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.model.*;
import com.employee.service.*;


@ResponseBody
@RequestMapping("employees")
@RestController
public class LoginController {
@Autowired
LoginService loginService;
@PostMapping("/login")
public User validateUser(@RequestBody User user) {
	return loginService.validateUser(user);
}
}
