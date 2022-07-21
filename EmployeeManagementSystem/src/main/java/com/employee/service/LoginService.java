package com.employee.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.model.*;
import com.employee.repository.*;

@Service
public class LoginService {
@Autowired
LoginRepository loginRepository;
	public User validateUser(User user) {
		// TODO Auto-generated method stub
		Optional<User> userContainer=loginRepository.findById(user.getUserId());
		if(userContainer.isPresent()) {
			User temp=userContainer.get();
			if(temp.getPassword().equals(user.getPassword())) {
				return temp;
			}
			else {
				return null;
			}
		}
		else {
			return null;
		}
	}

}
