package com.employee.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {
	@Id
	int userId;
	String password;
	String username;

	public User() {
		super();
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", password=" + password + "]";
	}
}
