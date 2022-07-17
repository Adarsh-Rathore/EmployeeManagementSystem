package com.employee.service;

import com.employee.model.Employee;
import com.employee.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAll() {
        System.out.println("employeeRepository Child Class Created By Spring Boot: " + employeeRepository.getClass().getName());
        return employeeRepository.findAll();
    }

    @Override
    public Employee addEmployee(Employee employee) {
        employeeRepository.save(employee);
        //two way relationship
        //many to one - (dept - emp)
        //
        return employee;
    }

    @Override
    public Employee fetchById(int id) {
        Employee employee = null;
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent())
            employee = optionalEmployee.get();

        return employee;
    }

    @Override
    public void udpateEmployee(int id, Employee employee) {
        Employee cust = null;
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent())
            cust = optionalEmployee.get();

        cust.setFirstName(employee.getFirstName());
        cust.setLastName(employee.getLastName());
        cust.setEmail(employee.getEmail());
        cust.setDob(employee.getDob());

        employeeRepository.save(cust);
    }

    @Override
    public void deleteEmployee(int id) {
        employeeRepository.deleteById(id);
    }


}

