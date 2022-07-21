package com.employee.service;

import org.springframework.stereotype.Service;

import com.employee.model.Department;

import java.util.List;

@Service
public interface DepartmentService {
    public Department addDepartment(Department department);

    public List<Department> getAllDepartments();

    Department fetchById(int id);

    public void deleteDepartment(int id);

}
