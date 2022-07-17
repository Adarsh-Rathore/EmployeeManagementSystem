package com.employee.service;

import org.springframework.stereotype.Service;

import com.employee.model.Employee;

import java.util.List;

@Service
public interface EmployeeService {
    public List<Employee> getAll();

    public Employee addEmployee(Employee employee);

    Employee fetchById(int id);

    void udpateEmployee(int id, Employee employee);

    void deleteEmployee(int id);
}
