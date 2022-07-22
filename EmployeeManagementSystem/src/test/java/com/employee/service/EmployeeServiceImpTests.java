package com.employee.service;

import static org.mockito.Mockito.verify;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.employee.model.Department;
import com.employee.model.Employee;
import com.employee.repository.EmployeeRepository;


@ExtendWith(MockitoExtension.class)
public class EmployeeServiceImpTests {

	@Mock
	private EmployeeRepository employeeRepo;

	@InjectMocks
	private EmployeeService employeeService = new EmployeeServiceImpl();

	@BeforeEach
	void setMockOutput() {
		this.employeeService = new EmployeeServiceImpl(this.employeeRepo);
	}

	@Test
	void testRegisterEmployee() {
		Department department = new Department();
		department.setDepartId(0);
		department.setDepartName("CSE");
		
		Employee employee = new Employee();
		employee.setId(0);
		employee.setFirstName("Adarsh");
		employee.setLastName("Rathore");
		employee.setEmail("abc@gmail.com");
		employee.setDepartment(department);
		
		employeeService.addEmployee(employee);
		verify(employeeRepo).save(employee);
	}

}
